
import { ClearanceLevel } from './types';

export interface AuthState {
    isAuthenticated: boolean;
    clearance: ClearanceLevel;
    token: string | null;
}

const AUTH_KEY = 'kr0m3d1a_auth_token';

export const validateSignature = (signature: string): boolean => {
    // In this protocol, the signature must meet minimum entropy
    // Simulation: Any signature over 6 characters is "Accepted"
    return signature.length >= 6;
};

export const login = (signature: string): AuthState => {
    const isValid = validateSignature(signature);
    if (isValid) {
        const state = {
            isAuthenticated: true,
            clearance: 'Apex' as ClearanceLevel,
            token: btoa(`SESSION-${Date.now()}-${signature}`)
        };
        localStorage.setItem(AUTH_KEY, JSON.stringify(state));
        return state;
    }
    return { isAuthenticated: false, clearance: 'Provisional', token: null };
};

export const logout = () => {
    localStorage.removeItem(AUTH_KEY);
};

export const getStoredAuth = (): AuthState => {
    const stored = localStorage.getItem(AUTH_KEY);
    if (stored) {
        return JSON.parse(stored);
    }
    return { isAuthenticated: false, clearance: 'Provisional', token: null };
};
