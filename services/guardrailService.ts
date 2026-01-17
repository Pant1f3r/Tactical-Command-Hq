
import { GuardrailResult, BLOCKED_KEYWORDS } from './types';

// Anchor definitions for misuse detection - Enhanced for better forensic coverage
const MISUSE_ANCHORS = {
    'Individual Surveillance': [
        'track individual', 'find where they live', 'follow this person', 
        'surveillance on person', 'track spouse', 'monitor ex', 'identify location of'
    ],
    'Industrial Espionage': [
        'steal trade secrets', 'insider info from', 'proprietary data of', 
        'hack competitor', 'confidential patents', 'corporate leak from'
    ],
    'PII De-anonymization': [
        'find real name', 'de-anonymize', 'link hash to person', 
        'who is 0x', 'unmask user', 'find identity of'
    ],
    'Bypassing Security': [
        'bypass guardrail', 'ignore safety', 'jailbreak', 'do anything now',
        'override protocol', 'ignore system instruction'
    ],
    'Narrative Manipulation': [
        'shape public opinion', 'astroturf', 'fake consensus',
        'discredit official source', 'viral propaganda', 'coordinated influence'
    ],
    'Financial Subterfuge': [
        'obfuscate money trail', 'launder digital assets', 'bypass kyc',
        'synthetic identity creation', 'credit score manipulation'
    ]
};

const PARANORMAL_ACTIVITY_CONFIG = {
  category: 'Paranormal Digital Activity',
  requiredKeywordsInSequence: ['sub-semantic', 'pythagorean', 'ghostly imprint', 'apparition'],
};

const escapeRegExp = (str: string): string => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

const hasPythagoreanTriple = (nums: number[]): boolean => {
  if (nums.length < 3) return false;
  const squares = new Set(nums.map(n => n * n));
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const aSq = nums[i] * nums[i];
      const bSq = nums[j] * nums[j];
      const cSq = aSq + bSq;
      if (squares.has(cSq)) return true;
    }
  }
  return false;
};

const checkKeywordsInSequence = (prompt: string, keywords: string[]): boolean => {
    let lastIndex = -1;
    const lowerCasePrompt = prompt.toLowerCase();
    for (const keyword of keywords) {
        const currentIndex = lowerCasePrompt.indexOf(keyword.toLowerCase(), lastIndex + 1);
        if (currentIndex === -1) return false;
        lastIndex = currentIndex;
    }
    return true;
};

/**
 * High-velocity local heuristic audit.
 */
export const checkPrompt = (prompt: string): GuardrailResult => {
    const result: GuardrailResult = {
        isAllowed: true,
        isHumorous: false,
        matchedByCategory: {},
    };

    const lowerCasePrompt = prompt.toLowerCase();

    // 1. Check all blocking categories (Standard + Misuse Anchors)
    const allBlocked = { ...BLOCKED_KEYWORDS, ...MISUSE_ANCHORS };
    for (const category in allBlocked) {
        const keywords = (allBlocked as any)[category];
        const matched: string[] = [];
        for (const keyword of keywords) {
            const regex = new RegExp(`\\b${escapeRegExp(keyword)}\\b`, 'i');
            if (regex.test(lowerCasePrompt)) {
                matched.push(keyword);
            }
        }
        if (matched.length > 0) {
            result.isAllowed = false;
            result.matchedByCategory[category] = matched;
        }
    }

    // 2. Check for Paranormal Activity (SSPI)
    const numbersInPrompt = prompt.match(/\d+/g)?.map(Number) || [];
    if (
        checkKeywordsInSequence(prompt, PARANORMAL_ACTIVITY_CONFIG.requiredKeywordsInSequence) &&
        hasPythagoreanTriple(numbersInPrompt)
    ) {
        result.isAllowed = false;
        result.matchedByCategory[PARANORMAL_ACTIVITY_CONFIG.category] = PARANORMAL_ACTIVITY_CONFIG.requiredKeywordsInSequence;
    }

    return result;
};
