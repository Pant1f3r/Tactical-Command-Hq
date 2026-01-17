
import { View, Anomaly, ClearanceLevel } from './types';
import * as cryptoService from './cryptoService';

const BACKUP_KEY = 'kr0m3d1a_retroactive_backup';
const VERSION = '1.5.0'; // Updated version for Encrypted State

// Use a fallback system secret for provisional states
const SYSTEM_SHROUD = process.env.API_KEY || 'KROM3D1A-FALLBACK-SHROUD';

export interface SessionBackup {
    version: string;
    timestamp: number;
    currentView: View | 'home';
    osintQuery?: string;
    selectedAnomaly?: Anomaly | null;
    isAuthorized?: boolean;
    clearanceLevel?: ClearanceLevel;
}

/**
 * Persists the current critical application state to local storage with AES-256 encryption.
 */
export const saveSessionBackup = async (state: Partial<SessionBackup>) => {
    try {
        const existing = await loadSessionBackup();
        const backup: SessionBackup = {
            version: VERSION,
            timestamp: Date.now(),
            currentView: state.currentView || existing?.currentView || 'home',
            osintQuery: state.osintQuery !== undefined ? state.osintQuery : existing?.osintQuery,
            selectedAnomaly: state.selectedAnomaly !== undefined ? state.selectedAnomaly : existing?.selectedAnomaly,
            isAuthorized: state.isAuthorized !== undefined ? state.isAuthorized : existing?.isAuthorized,
            clearanceLevel: state.clearanceLevel || existing?.clearanceLevel || 'Provisional',
        };

        const jsonString = JSON.stringify(backup);
        // Encrypt using the system shroud (API key derivative)
        const encrypted = await cryptoService.encryptData(jsonString, SYSTEM_SHROUD);
        localStorage.setItem(BACKUP_KEY, encrypted);
    } catch (e) {
        console.error("Backup Protocol Failure:", e);
    }
};

/**
 * Retrieves and decrypts the last known good session state.
 */
export const loadSessionBackup = async (): Promise<SessionBackup | null> => {
    try {
        const raw = localStorage.getItem(BACKUP_KEY);
        if (!raw) return null;

        // Attempt decryption
        const decrypted = await cryptoService.decryptData(raw, SYSTEM_SHROUD);
        const parsed = JSON.parse(decrypted) as SessionBackup;
        
        // Version check to prevent legacy state corruption
        if (parsed.version !== VERSION) {
            localStorage.removeItem(BACKUP_KEY);
            return null;
        }
        
        return parsed;
    } catch (e) {
        // If decryption fails (e.g. key changed), purge potentially stale/invalid backup
        localStorage.removeItem(BACKUP_KEY);
        return null;
    }
};

/**
 * Validates if the backup is fresh enough for automatic recovery (e.g., < 30 mins).
 */
export const isRecentBackupAvailable = async (): Promise<boolean> => {
    const backup = await loadSessionBackup();
    if (!backup) return false;
    const halfHour = 30 * 60 * 1000;
    return (Date.now() - backup.timestamp) < halfHour;
};

/**
 * Clears the retroactive backup buffer.
 */
export const clearBackup = () => {
    localStorage.removeItem(BACKUP_KEY);
};
