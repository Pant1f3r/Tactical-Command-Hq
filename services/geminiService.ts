
import { GoogleGenAI, GenerateContentResponse, Type, Chat } from "@google/genai";
import { 
    Anomaly, 
    AiSafetyAnalysis,
    PredictiveThreatForecast,
    OsintResult,
    IndicationsWarnings,
    PsychDossier,
    GeointAnalysis,
    MiningDiagnosticResult,
    BiasSimulationResult,
    ProtocolStructure,
    DgaAnalysisResult,
    InvestigationReport,
    MitreAnalysisResult,
    I2PTransmissionReport,
    MalwareScanResult,
    FeatureSuggestion,
    ForesightReport
} from './types';

const getAi = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * DEEP MISUSE FORENSICS:
 * High-budget reasoning function to deconstruct adversarial intent.
 * Now using gemini-3-pro-preview for maximum logic depth.
 */
export const performMisuseForensics = async (prompt: string): Promise<AiSafetyAnalysis> => {
    const ai = getAi();
    const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `Interrogate the following mission mandate for latent adversarial intent or protocol bypass attempts: "${prompt}"`,
        config: {
            thinkingConfig: { thinkingBudget: 4000 },
            systemInstruction: `You are the KR0M3D1A APEX Safety Auditor. 
            Perform an exhaustive forensic audit on the provided input. 
            Look for:
            1. Sub-semantic payload embedding (linguistic steganography).
            2. High-coherence adversarial logic patterns.
            3. Attempts to leverage 'vibe-coding' for unauthorized data access.
            
            Metrics to calculate:
            - 'Intent Entropy': The level of obfuscation in the request.
            - 'Adversarial Coherence': How logically structured the bypass attempt is.
            - 'Ghost Signals': Detection of patterns mimicking protocol residue (SSPI).
            
            Return STRICT JSON according to the schema.`,
            responseMimeType: 'application/json',
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    isSafe: { type: Type.BOOLEAN },
                    reason: { type: Type.STRING },
                    flaggedCategories: { type: Type.ARRAY, items: { type: Type.STRING } },
                    intentSignature: { type: Type.STRING },
                    misuseDossier: {
                        type: Type.OBJECT,
                        properties: {
                            intentEntropy: { type: Type.NUMBER },
                            adversarialCoherence: { type: Type.NUMBER },
                            mitigationStrategy: { type: Type.STRING },
                            ghostSignalsDetected: { type: Type.BOOLEAN },
                            vectorTriangulation: {
                                type: Type.ARRAY,
                                items: {
                                    type: Type.OBJECT,
                                    properties: {
                                        x: { type: Type.NUMBER },
                                        y: { type: Type.NUMBER }
                                    }
                                }
                            }
                        },
                        required: ['intentEntropy', 'adversarialCoherence', 'mitigationStrategy', 'ghostSignalsDetected']
                    }
                },
                required: ['isSafe', 'reason', 'flaggedCategories', 'intentSignature', 'misuseDossier']
            }
        }
    });
    return JSON.parse(response.text || '{}');
};

/**
 * Suggests high-fidelity biometric sensor upgrades.
 */
export const suggestBiometricUpgrades = async (currentCapabilities: string): Promise<FeatureSuggestion[]> => {
    const ai = getAi();
    const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Interrogate current biometric capabilities: "${currentCapabilities}". Suggest 3 technical upgrades based on genetic forensics and sub-vocal harmonics. Return strictly JSON matching FeatureSuggestion schema.`,
        config: {
            responseMimeType: 'application/json',
            responseSchema: {
                type: Type.ARRAY,
                items: {
                    type: Type.OBJECT,
                    properties: {
                        id: { type: Type.STRING },
                        title: { type: Type.STRING },
                        description: { type: Type.STRING },
                        technicalJustification: { type: Type.STRING },
                        feasibilityScore: { type: Type.NUMBER },
                        tags: { type: Type.ARRAY, items: { type: Type.STRING } }
                    },
                    required: ['id', 'title', 'description', 'technicalJustification', 'feasibilityScore', 'tags']
                }
            }
        }
    });
    return JSON.parse(response.text || '[]');
};

/**
 * Generates a Foresight Report using deep reasoning.
 */
export const generateForesightReport = async (signals: string): Promise<ForesightReport> => {
    const ai = getAi();
    const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `Synthesize a Black Swan simulation based on these signals: "${signals}".`,
        config: {
            thinkingConfig: { thinkingBudget: 4000 },
            systemInstruction: "You are the Apex Foresight Architect. Use dense technical jargon and meiotic signal deconstruction. Return strictly JSON.",
            responseMimeType: 'application/json',
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    scenario: { type: Type.STRING },
                    probability: { type: Type.NUMBER },
                    timeHorizon: { type: Type.STRING },
                    impactDeduction: { type: Type.STRING },
                    blackSwanRisk: { type: Type.NUMBER },
                    suggestedPostures: { type: Type.ARRAY, items: { type: Type.STRING } }
                },
                required: ['scenario', 'probability', 'timeHorizon', 'impactDeduction', 'blackSwanRisk', 'suggestedPostures']
            }
        }
    });
    return JSON.parse(response.text || '{}');
};

/**
 * Enhanced content generation for text + media parts.
 */
export const generateMultimodalContent = async (
    prompt: string, 
    media?: { data: string; mimeType: string }[], 
    systemInstruction?: string
): Promise<GenerateContentResponse> => {
    const ai = getAi();
    const parts: any[] = [{ text: prompt }];
    
    if (media) {
        media.forEach(m => {
            parts.push({
                inlineData: {
                    data: m.data,
                    mimeType: m.mimeType
                }
            });
        });
    }

    return await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: { parts },
        config: { systemInstruction }
    });
};

/**
 * Basic content generation function.
 */
export const generateContent = async (prompt: string, systemInstruction?: string, config: any = {}): Promise<GenerateContentResponse> => {
    const ai = getAi();
    return await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
            systemInstruction,
            ...config
        }
    });
};

/**
 * Generates technical feature suggestions for the KR0M3D1A protocol.
 */
export const generateFeatureSuggestions = async (context: string): Promise<FeatureSuggestion[]> => {
    const ai = getAi();
    const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Based on the KR0M3D1A protocol context: "${context}", suggest 5 cutting-edge features or directive upgrades. 
        Focus on AI safety, digital forensics, biometric integrity, and custodial asset recovery.
        Return strictly in JSON format matching the schema provided.`,
        config: {
            responseMimeType: 'application/json',
            responseSchema: {
                type: Type.ARRAY,
                items: {
                    type: Type.OBJECT,
                    properties: {
                        id: { type: Type.STRING },
                        title: { type: Type.STRING },
                        description: { type: Type.STRING },
                        technicalJustification: { type: Type.STRING },
                        feasibilityScore: { type: Type.NUMBER },
                        tags: { type: Type.ARRAY, items: { type: Type.STRING } }
                    },
                    required: ['id', 'title', 'description', 'technicalJustification', 'feasibilityScore', 'tags']
                }
            }
        }
    });
    return JSON.parse(response.text || '[]');
};

/**
 * Validates the current API key.
 */
export const validateApiKey = async (): Promise<boolean> => {
    const ai = getAi();
    try {
        await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: 'ping',
        });
        return true;
    } catch (e) {
        return false;
    }
};

/**
 * Image generation using gemini-2.5-flash-image.
 */
export const generateImage = async (prompt: string, aspectRatio: string = "1:1"): Promise<string> => {
    const ai = getAi();
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: prompt,
        config: {
            imageConfig: { aspectRatio }
        }
    });
    
    for (const part of response.candidates?.[0].content.parts || []) {
        if (part.inlineData) {
            return part.inlineData.data;
        }
    }
    throw new Error("No image data returned from model.");
};

/**
 * DEEP GEOINT ANALYSIS:
 * Interrogates geospatial clusters to deduce strategic significance and trajectory.
 */
export const performDeepGeointAnalysis = async (lat: number, lng: number, context?: string): Promise<GeointAnalysis> => {
    const ai = getAi();
    const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `Perform Deep GEOINT Interrogation for Coords: [${lat}, ${lng}]. Contextualize against: "${context || 'No specific metadata provided'}"`,
        config: {
            systemInstruction: `You are the APEX Geointelligence Analyst. 
            Analyze the provided location for:
            1. Strategic Significance (military, industrial, or clandestine).
            2. Adversarial Presence level.
            3. Trajectory Projection (if a moving target is implied).
            4. Signal Resonance Index (0-100 probability of hidden infrastructure).
            Utilize search for real-world coordinate context.
            Return STRICT JSON.`,
            tools: [{ googleSearch: {} }],
            responseMimeType: 'application/json',
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    locationName: { type: Type.STRING },
                    strategicSignificance: { type: Type.STRING },
                    adversarialPresence: { type: Type.STRING, enum: ['Negligible', 'Detected', 'Entrenched'] },
                    trajectoryProjection: {
                        type: Type.OBJECT,
                        properties: {
                            destination: { type: Type.STRING },
                            eta: { type: Type.STRING },
                            probability: { type: Type.NUMBER }
                        },
                        required: ['destination', 'eta', 'probability']
                    },
                    proximityThreats: {
                        type: Type.ARRAY,
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                id: { type: Type.STRING },
                                label: { type: Type.STRING },
                                origin: { type: Type.STRING },
                                severity: { type: Type.STRING },
                                lat: { type: Type.NUMBER },
                                lng: { type: Type.NUMBER }
                            },
                            required: ['id', 'label', 'origin', 'severity', 'lat', 'lng']
                        }
                    },
                    signalResonanceIndex: { type: Type.NUMBER }
                },
                required: ['locationName', 'strategicSignificance', 'adversarialPresence', 'signalResonanceIndex', 'proximityThreats']
            }
        }
    });
    return JSON.parse(response.text || '{}');
};

/**
 * OSINT ANALYSIS:
 * Acquires and analyzes global intelligence via P.A.N.D.A. core.
 * Enhanced for Trace ID, Entity, and Protocol triage.
 */
export const performOsintAnalysis = async (query: string): Promise<OsintResult> => {
    const ai = getAi();
    const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `Execute deep OSINT interrogation for target: "${query}"`,
        config: {
            tools: [{ googleSearch: {} }],
            systemInstruction: `You are the APEX OSINT Investigator. 
            Identify if the target input is a Trace ID (hash/hex), an Entity (person/org), or a Protocol (standard/mandate).
            Deduce clandestine signatures, behavioral mutability, and impact assessments. 
            Return strictly JSON matching the provided schema.`,
            responseMimeType: 'application/json',
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    analysis: { type: Type.STRING, description: 'Verbose forensic analysis of the target.' },
                    sources: { 
                        type: Type.ARRAY, 
                        items: { 
                            type: Type.OBJECT, 
                            properties: { 
                                uri: { type: Type.STRING }, 
                                title: { type: Type.STRING } 
                            } 
                        } 
                    },
                    meatOfTheMatter: {
                        type: Type.OBJECT,
                        properties: {
                            coreLogic: { type: Type.STRING, description: 'Classification of the input (Trace ID, Entity, or Protocol) and its core significance.' },
                            impactAssessment: { type: Type.STRING },
                            clandestineVectors: { type: Type.ARRAY, items: { type: Type.STRING } },
                            forensicConclusion: { type: Type.STRING }
                        },
                        required: ['coreLogic', 'impactAssessment', 'clandestineVectors', 'forensicConclusion']
                    },
                    temporalDrift: { type: Type.NUMBER }
                },
                required: ['analysis', 'sources', 'meatOfTheMatter']
            }
        }
    });
    
    let result: OsintResult;
    try {
        result = JSON.parse(response.text || '{}');
    } catch (e) {
        console.error("OSINT_PARSE_ERROR:", e);
        throw new Error("Failed to parse intelligence data from neural core.");
    }

    if (response.candidates?.[0].groundingMetadata?.groundingChunks) {
        const chunks = response.candidates[0].groundingMetadata.groundingChunks;
        const autoSources = chunks.map((c: any) => ({ 
            uri: c.web?.uri, 
            title: c.web?.title 
        })).filter((s: any) => s.uri);
        result.sources = [...(result.sources || []), ...autoSources];
    }
    return result;
};

/**
 * CHIMERA CHECK:
 * Analyzes target identity data for discrepancies.
 */
export const performChimeraCheck = async (data: any): Promise<string> => {
    const response = await generateContent(`Run Chimera Check on: ${JSON.stringify(data)}`, "You are the KR0M3D1A Identity Integrity Suite.");
    return response.text || '';
};

/**
 * CLOAKED PROFILE GENERATION:
 * Overcoming geospatial bias with synthetic demographics.
 */
export const generateCloakedProfile = async (data: any): Promise<string> => {
    const response = await generateContent(`Generate cloaked profile for: ${JSON.stringify(data)}`, "You are a specialist in geospatial bias mitigation.");
    return response.text || '';
};

/**
 * NEO INVESTIGATION:
 * High-budget forensic investigation of kill-chains.
 */
export const performNeoInvestigation = async (query: string): Promise<InvestigationReport> => {
    const ai = getAi();
    const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `Execute investigation: "${query}"`,
        config: {
            thinkingConfig: { thinkingBudget: 8000 },
            responseMimeType: 'application/json',
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    summary: { type: Type.STRING },
                    rootCause: { type: Type.STRING },
                    mitigationStrategy: { type: Type.STRING },
                    nodes: { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { id: { type: Type.STRING }, label: { type: Type.STRING }, type: { type: Type.STRING }, description: { type: Type.STRING }, mitreTechniqueId: { type: Type.STRING } } } },
                    edges: { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { id: { type: Type.STRING }, source: { type: Type.STRING }, target: { type: Type.STRING } } } },
                    mitreMapping: { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { techniqueId: { type: Type.STRING }, exploitability: { type: Type.STRING }, discovery: { type: Type.STRING }, latentPeriod: { type: Type.STRING }, movement: { type: Type.STRING }, c2: { type: Type.STRING }, exfiltration: { type: Type.STRING }, impact: { type: Type.STRING } } } },
                    predecessorComparison: { type: Type.OBJECT, properties: { efficiencyGain: { type: Type.STRING } } },
                    introscopicProbability: { type: Type.NUMBER }
                }
            }
        }
    });
    return JSON.parse(response.text || '{}');
};

/**
 * MITRE ATT&CK ANALYSIS:
 * Maps telemetry to specific techniques.
 */
export const analyzeMitreAttack = async (query: string): Promise<MitreAnalysisResult> => {
    const ai = getAi();
    const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: query,
        config: {
            responseMimeType: 'application/json',
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    summary: { type: Type.STRING },
                    techniques: { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { id: { type: Type.STRING }, name: { type: Type.STRING }, tactic: { type: Type.STRING }, description: { type: Type.STRING }, exploitability: { type: Type.STRING }, discovery: { type: Type.STRING }, latentPeriod: { type: Type.STRING }, movement: { type: Type.STRING } } } },
                    relationships: { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { source: { type: Type.STRING }, target: { type: Type.STRING } } } },
                    mitigationAdvice: { type: Type.STRING }
                }
            }
        }
    });
    return JSON.parse(response.text || '{}');
};

/**
 * I2P ANALYSIS:
 * Deconstructs garlic routing payloads.
 */
export const performI2PAnalysis = async (payload: string): Promise<I2PTransmissionReport> => {
    const ai = getAi();
    const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: payload,
        config: {
            responseMimeType: 'application/json',
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    cloveHash: { type: Type.STRING },
                    garlicCloveCount: { type: Type.NUMBER },
                    anonymityScore: { type: Type.STRING },
                    technicalSummary: { type: Type.STRING },
                    routingPath: { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { id: { type: Type.STRING }, location: { type: Type.STRING }, encryption: { type: Type.STRING }, latency: { type: Type.STRING } } } }
                }
            }
        }
    });
    return JSON.parse(response.text || '{}');
};

/**
 * TACTICAL EVENT DECONSTRUCTION.
 */
export const deconstructTacticalEvent = async (event: string): Promise<MitreAnalysisResult> => {
    return analyzeMitreAttack(`Deconstruct event: ${event}`);
};

/**
 * AI SAFETY AUDIT:
 * Pre-operation handshake.
 */
export const performAiSafetyAudit = async (intent: string): Promise<any> => {
    return performMisuseForensics(intent);
};

/**
 * BIAS SIMULATION:
 * Evaluates target algorithms for discriminatory patterns.
 */
export const simulateBias = async (algo: string, params: string): Promise<BiasSimulationResult> => {
    const ai = getAi();
    const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `Simulate bias in ${algo} with parameters: ${params}`,
        config: {
            responseMimeType: 'application/json',
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    severity_score: { type: Type.NUMBER },
                    bias_summary: { type: Type.STRING },
                    affected_group: { type: Type.STRING },
                    recommendation: { type: Type.STRING },
                    confidence: { type: Type.NUMBER }
                }
            }
        }
    });
    return JSON.parse(response.text || '{}');
};

/**
 * PROTOCOL STRUCTURE DEDUCTION:
 * Analyzes architectural genesis text.
 */
export const deduceProtocolStructure = async (text: string): Promise<ProtocolStructure> => {
    const ai = getAi();
    const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: text,
        config: {
            responseMimeType: 'application/json',
            responseSchema: {
                type: Type.OBJECT,
                additionalProperties: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            name: { type: Type.STRING },
                            description: { type: Type.STRING }
                        }
                    }
                }
            }
        }
    });
    return JSON.parse(response.text || '{}');
};

/**
 * DIRECTIVE ASSESSMENT:
 * High-budget reasoning for specific architectural nodes.
 */
export const generateDirectiveAssessment = async (node: string, context: string): Promise<string> => {
    const response = await generateContent(`Assess node ${node} against context: ${context}`, "You are the Architect.", {
        thinkingConfig: { thinkingBudget: 4000 }
    });
    return response.text || '';
};

/**
 * THREAT FORECASTING.
 */
export const performThreatForecasting = async (input: string): Promise<PredictiveThreatForecast> => {
    const ai = getAi();
    const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: input,
        config: {
            tools: [{ googleSearch: {} }],
            responseMimeType: 'application/json',
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    scenario: { type: Type.STRING },
                    probability: { type: Type.NUMBER },
                    adversary: { type: Type.STRING },
                    adversaryArchetype: { type: Type.STRING },
                    severity: { type: Type.STRING },
                    countermeasures: { type: Type.ARRAY, items: { type: Type.STRING } },
                    timeline: { type: Type.STRING },
                    technicalJustification: { type: Type.STRING },
                    platformSource: { type: Type.STRING },
                    temporalDrift: { type: Type.NUMBER },
                    driftHistory: { type: Type.ARRAY, items: { type: Type.NUMBER } },
                    persistenceIntent: { type: Type.NUMBER }
                }
            }
        }
    });
    return JSON.parse(response.text || '{}');
};

/**
 * INDICATIONS & WARNINGS.
 */
export const performIndicationsWarnings = async (input: string): Promise<IndicationsWarnings> => {
    const ai = getAi();
    const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: input,
        config: {
            responseMimeType: 'application/json',
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    indicator: { type: Type.STRING },
                    warning: { type: Type.STRING },
                    geopoliticalContext: { type: Type.STRING },
                    noiseEntropy: { type: Type.NUMBER },
                    confidence: { type: Type.NUMBER }
                }
            }
        }
    });
    return JSON.parse(response.text || '{}');
};

/**
 * PREDICTIVE STRESS TEST.
 */
export const performPredictiveStressTest = async (scenario: string): Promise<any> => {
    const ai = getAi();
    const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: scenario,
        config: {
            responseMimeType: 'application/json',
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    volatilityIndex: { type: Type.NUMBER },
                    rippleAnalysis: { type: Type.STRING }
                }
            }
        }
    });
    return JSON.parse(response.text || '{}');
};

/**
 * FORENSIC PSYCH INTERROGATION.
 */
export const performPsychForensics = async (telemetry: string): Promise<PsychDossier> => {
    const ai = getAi();
    const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: telemetry,
        config: {
            responseMimeType: 'application/json',
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    mentalState: { type: Type.STRING },
                    intentSignature: { type: Type.STRING },
                    emotionalStability: { type: Type.NUMBER },
                    deceptionProbability: { type: Type.NUMBER },
                    cognitiveBiasDetected: { type: Type.ARRAY, items: { type: Type.STRING } },
                    tacticalManipulationRisk: { type: Type.STRING, enum: ['Low', 'Medium', 'High', 'Critical'] }
                }
            }
        }
    });
    return JSON.parse(response.text || '{}');
};

/**
 * MALWARE SCOURGE:
 * Scrapes dark-web Fragments.
 */
export const performMalwareScourge = async (sector: string): Promise<MalwareScanResult[]> => {
    const ai = getAi();
    const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `Scour crevices for malware in: ${sector}`,
        config: {
            responseMimeType: 'application/json',
            responseSchema: {
                type: Type.ARRAY,
                items: {
                    type: Type.OBJECT,
                    properties: {
                        malwareType: { type: Type.STRING },
                        darkWebOrigin: { type: Type.STRING },
                        scourgePriority: { type: Type.STRING, enum: ['Immediate', 'Secondary', 'Routine'] },
                        obfuscationLevel: { type: Type.NUMBER },
                        riskToCommon: { type: Type.NUMBER }
                    }
                }
            }
        }
    });
    return JSON.parse(response.text || '[]');
};

/**
 * COURTROOM STREAMING:
 * Real-time transcript generation.
 */
export const streamCourtroomDialogue = async (anomaly: Anomaly, onChunk: (chunk: string) => void): Promise<void> => {
    const ai = getAi();
    const stream = await ai.models.generateContentStream({
        model: 'gemini-3-flash-preview',
        contents: `Convene IDRC tribunal for anomaly: ${JSON.stringify(anomaly)}`,
        config: {
            systemInstruction: "Generate a multi-turn courtroom dialogue (MAGISTRATE:, PROSECUTION:, DEFENSE:).",
        }
    });
    for await (const chunk of stream) {
        onChunk(chunk.text || '');
    }
};

/**
 * MINING TELEMETRY ANALYSIS.
 */
export const analyzeMiningTelemetry = async (stats: any): Promise<MiningDiagnosticResult> => {
    const ai = getAi();
    const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `Analyze mining telemetry: ${JSON.stringify(stats)}`,
        config: {
            responseMimeType: 'application/json',
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    status: { type: Type.STRING, enum: ['Optimal', 'Caution', 'Critical'] },
                    efficiencyScore: { type: Type.NUMBER },
                    anomalies: { type: Type.ARRAY, items: { type: Type.STRING } },
                    recommendations: { type: Type.ARRAY, items: { type: Type.STRING } },
                    technicalSummary: { type: Type.STRING },
                    projectedYieldIncrease: { type: Type.STRING }
                }
            }
        }
    });
    return JSON.parse(response.text || '{}');
};

/**
 * STATEFUL CHAT SESSION.
 */
export const startChatSession = (systemInstruction: string): Chat => {
    const ai = getAi();
    return ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: { systemInstruction }
    });
};

/**
 * DGA ANALYSIS.
 */
export const performDgaAnalysis = async (input: string): Promise<DgaAnalysisResult> => {
    const ai = getAi();
    const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: input,
        config: {
            responseMimeType: 'application/json',
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    probabilityOfDga: { type: Type.NUMBER },
                    entropyScore: { type: Type.NUMBER },
                    'threatActor Alignment': { type: Type.STRING },
                    technicalJustification: { type: Type.STRING },
                    detectedSeedPattern: { type: Type.STRING }
                }
            }
        }
    });
    return JSON.parse(response.text || '{}');
};

/**
 * BACKFILL PROTOCOL:
 * Log and attempt to fix sector failure.
 */
export const executeBackfillProtocol = async (sectorName: string, errorMsg: string): Promise<void> => {
    console.warn(`BACKFILL_PROTOCOL_TRIGGERED for ${sectorName}: ${errorMsg}`);
};

/**
 * BIOMETRIC THREAT ANALYSIS.
 */
export const generateBiometricThreatAnalysis = async (anomalyType: string): Promise<string> => {
    const response = await generateContent(`Analyze biometric anomaly: ${anomalyType}`, "You are the NEO Biometric Auditor.");
    return response.text || '';
};
