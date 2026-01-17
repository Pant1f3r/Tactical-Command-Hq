
/**
 * KR0M3D1A Cryptographic Service
 * Implements AES-256-GCM for military-grade data at rest and in-flight security.
 * Directive: DEJA' VU 7.4-ENC
 */

const ALGO = 'AES-GCM';
const KEY_LEN = 256;
const PBKDF2_ITERATIONS = 100000;

/**
 * Derives a cryptographic key from a provided secret string (Verbum Signature).
 */
async function deriveKey(secret: string, salt: Uint8Array): Promise<CryptoKey> {
    const encoder = new TextEncoder();
    const keyMaterial = await crypto.subtle.importKey(
        'raw',
        encoder.encode(secret),
        'PBKDF2',
        false,
        ['deriveKey']
    );

    return crypto.subtle.deriveKey(
        {
            name: 'PBKDF2',
            salt: salt,
            iterations: PBKDF2_ITERATIONS,
            hash: 'SHA-256'
        },
        keyMaterial,
        { name: ALGO, length: KEY_LEN },
        false,
        ['encrypt', 'decrypt']
    );
}

/**
 * Encrypts a plaintext string using AES-256-GCM.
 * Returns a base64 encoded string containing [salt][iv][ciphertext].
 */
export async function encryptData(plaintext: string, secret: string): Promise<string> {
    const encoder = new TextEncoder();
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const key = await deriveKey(secret, salt);

    const encryptedBuffer = await crypto.subtle.encrypt(
        { name: ALGO, iv: iv },
        key,
        encoder.encode(plaintext)
    );

    const encryptedArray = new Uint8Array(encryptedBuffer);
    const result = new Uint8Array(salt.length + iv.length + encryptedArray.length);
    
    result.set(salt, 0);
    result.set(iv, salt.length);
    result.set(encryptedArray, salt.length + iv.length);

    // Convert to base64 for storage/transmission
    return btoa(String.fromCharCode(...result));
}

/**
 * Decrypts a base64 encoded AES-256-GCM payload.
 */
export async function decryptData(encryptedB64: string, secret: string): Promise<string> {
    try {
        const data = Uint8Array.from(atob(encryptedB64), c => c.charCodeAt(0));
        
        const salt = data.slice(0, 16);
        const iv = data.slice(16, 28);
        const ciphertext = data.slice(28);

        const key = await deriveKey(secret, salt);

        const decryptedBuffer = await crypto.subtle.decrypt(
            { name: ALGO, iv: iv },
            key,
            ciphertext
        );

        return new TextDecoder().decode(decryptedBuffer);
    } catch (e) {
        console.error("DECRYPTION_FAILURE: Integrity check failed or invalid Verbum Signature.", e);
        throw new Error("UNAUTHORIZED_DECRYPTION: Data payload corrupted or key mismatch.");
    }
}
