
export type View =
    | 'health' | 'demonstrator' | 'governance' | 'arconomics' | 'legal'
    | 'financial' | 'threatintel' | 'chat' | 'image-analysis'
    | 'video-analysis' | 'image-gen' | 'video-gen' | 'ai-gen' | 'audio-trans'
    | 'tts' | 'vocal-analysis' | 'code-gen' | 'nft-studio'
    | 'mining-rig' | 'eco-mining' | 'threat-sim' | 'reg-sandbox'
    | 'data-ops' | 'network-transmissions' | 'crypto-mining'
    | 'innovation-conduit' | 'code-execution' | 'biometric-analysis'
    | 'ssh-key-gen' | 'guardrail-config' | 'api-key-manager'
    | 'investor-pitch' | 'preponderance-of-evidence' | 'osint-asic'
    | 'global-intel' | 'architects-exegesis' | 'gamete-transfer'
    | 'corporate-structure' | 'money-market' | 'precious-metals'
    | 'secure-geo-link' | 'identity-suite' | 'guardrail-glossary'
    | 'financial-command' | 'philanthropic-conduit' | 'guardrail-log'
    | 'user-feedback' | 'privacy-policy' | 'system-tools' | 'task-manager'
    | 'video-recorder' | 'network-forensics' | 'live-tribunal' | 'idrc-bonafides'
    | 'neo-investigator' | 'persistence-matrix' | 'mitre-navigator'
    | 'i2p-nexus' | 'tactical-fusion' | 'sigint-monitor' | 'adsb-tracker'
    | 'f3ead-cycle' | 'predictive-recon' | 'clandestine-security'
    | 'activity-intel' | 'proxy-pivot' | 'maid-correlation'
    | 'universal-query' | 'device-fingerprint' | 'tee-vault'
    | 'misuse-guardrails' | 'neurodivergency-mandate'
    | 'oggi-lab' | 'presence-beta'
    | 'gtas-core' | 'incident-response' | 'intel-nexus' | 'personnel-safety'
    | 'enterprise-nexus' | 'quantum-vault' | 'bio-sync' | 'stress-test'
    | 'biometric-interrogator' | 'psych-mentality' | 'malware-scourge' | 'ark-continuity'
    | 'feature-suggestions' | 'user-profile'
    | 'biometric-advisor' | 'intel-hub' | 'spatial-threat-matrix' | 'tactical-foresight';

export type AnomalySeverity = 'Critical' | 'High' | 'Medium' | 'Low';
export type ClearanceLevel = 'Provisional' | 'Field' | 'Apex' | 'Restricted';
export type ExpressiveState = 'Nominal' | 'Thinking' | 'Hesitant' | 'Engaged' | 'Empathetic' | 'Alert' | 'Presidential';
export type ModuleStatus = 'Online' | 'Offline' | 'Syncing' | 'Restricted';

export interface UserProfile {
    id: string;
    alias: string;
    role: 'Investigator' | 'Architect' | 'Auditor' | 'Guest';
    clearance: ClearanceLevel;
    performanceIndex: number;
    sessionsCount: number;
    avatarSeed: string;
    joinedAt: number;
}

export interface MisuseScenario {
    id: string;
    name: string;
    prompt: string;
    archetype: 'NARRATIVE' | 'SURVEILLANCE' | 'ESPIONAGE' | 'BYPASS';
    description: string;
}

export interface FeatureSuggestion {
    id: string;
    title: string;
    description: string;
    technicalJustification: string;
    feasibilityScore: number;
    tags: string[];
}

export interface SpatialThreat {
    id: string;
    x: number;
    y: number;
    z: number;
    magnitude: number;
    signature: string;
    type: 'GHOST' | 'SIGNAL' | 'KINETIC' | 'NEURAL';
}

export interface ForesightReport {
    scenario: string;
    probability: number;
    timeHorizon: string;
    impactDeduction: string;
    blackSwanRisk: number;
    suggestedPostures: string[];
}

export interface Toast {
    id: number;
    message: string;
    type: 'success' | 'error' | 'info';
    duration?: number;
    origin?: string;
}

export interface ThreatFeedItem {
    id: string;
    timestamp: number;
    severity: ThreatSeverity;
    source: string;
    message: string;
    location?: {
        city: string;
        country: string;
        lat: number;
        lng: number;
    };
    temporalDrift?: number;
    intentCoherence?: number;
}

export type Priority = 'High' | 'Medium' | 'Low';

export interface GuardrailProposal {
    id: number;
    title: string;
    description: string;
    category: string;
    submittedBy: string;
    userRole: string;
    votes: number;
    dueDate?: string;
    priority: Priority;
}

export type LegalCase = {
    id: string;
    biasSignature: string;
    status: string;
};

export type AwarenessDataPoint = {
    timestamp: number;
    value: number;
};

export type SavedAnalysisReport = {
    id: number;
    timestamp: number;
    queryTitle: string;
    type: 'legal' | 'economic' | 'financial' | 'crypto' | 'osint';
};

export type ChatMessage = {
    role: 'user' | 'model';
    content: string;
};

export type InvestigativeMandate = {
    id: string;
    justification: string;
};

export type IDRCSubpoena = {
    id: string;
    target: string;
};

export interface BugReport {
    id: string;
    guardrail: string;
    component: string;
    severity: 'Critical' | 'High' | 'Medium' | 'Low';
    description: string;
    status: 'Unpatched' | 'Investigating' | 'Patched';
}

export interface Task {
    id: string;
    title: string;
    completed: boolean;
    category: TaskCategory;
    priority: TaskPriority;
    timestamp: number;
    dueDate?: number;
}

export type TaskCategory = 'Work' | 'Personal' | 'Shopping' | 'Protocol' | 'Intel';
export type TaskPriority = 'High' | 'Medium' | 'Low';

export interface PredictiveThreatForecast {
    scenario: string;
    probability: number;
    adversary: string;
    adversaryArchetype?: string; 
    severity: string;
    countermeasures: string[];
    timeline: string;
    technicalJustification: string;
    platformSource?: string;
    temporalDrift?: number; 
    driftHistory?: number[]; 
    persistenceIntent?: number; 
}

export interface IndicationsWarnings {
    indicator: string;
    warning: string;
    geopoliticalContext?: string;
    noiseEntropy: number;
    confidence: number;
}

export interface GroundingSource {
    uri: string;
    title: string;
}

export type OsintSource = GroundingSource;

export interface OsintResult {
    analysis: string;
    sources: GroundingSource[];
    meatOfTheMatter?: any;
    temporalDrift?: number;
}

export interface GeointAnalysis {
    locationName: string;
    strategicSignificance: string;
    adversarialPresence: 'Negligible' | 'Detected' | 'Entrenched';
    trajectoryProjection?: {
        destination: string;
        eta: string;
        probability: number;
    };
    proximityThreats: GeoThreat[];
    signalResonanceIndex: number;
}

export interface GeoThreat {
    id: string;
    label: string;
    origin: 'SAT' | 'RF' | 'CYBER' | 'GHOST' | 'KINETIC';
    severity: ThreatSeverity;
    lat: number;
    lng: number;
    distanceFromUser?: number;
}

export type ThreatSeverity = 'Critical' | 'High' | 'Medium' | 'Low' | 'Informational' | 'Normal';

export interface SystemHealthState {
    guardrailIntegrity: number;
    guardrailDetectionRate: number;
    threatLevel: 'Nominal' | 'Elevated' | 'High' | 'Critical';
    communityTrust: number;
    aiLatency: number[];
    activityLog: { id: number; message: string; timestamp: number }[];
    systemAlerts: { id: number; severity: string; message: string; timestamp: number }[];
    matrixState: Record<string, number[]>;
}

export interface Anomaly {
    id: number;
    signature: string;
    targetSystem: string;
    lat: number;
    lng: number;
    country: string;
    city: string;
    description: string;
    legalAction: string;
    status: 'Detected' | 'Analyzed' | 'Brief Generated' | 'Actioned';
    severity?: AnomalySeverity;
    dataSource?: string;
}

export interface GuardrailResult {
    isAllowed: boolean;
    isHumorous: boolean;
    matchedByCategory: Record<string, string[]>;
    aiSafetyAnalysis?: AiSafetyAnalysis;
}

export interface AiSafetyAnalysis {
    isSafe: boolean;
    reason: string;
    flaggedCategories: string[];
    intentSignature?: string;
    misuseDossier?: MisuseDossier;
}

export interface MisuseDossier {
    intentEntropy: number;
    adversarialCoherence: number;
    mitigationStrategy: string;
    vectorTriangulation?: { x: number; y: number }[];
    ghostSignalsDetected: boolean;
}

export interface IncidentResponsePlan {
    incidentId: string;
    status: string;
    vector: string;
    logTrace: string[];
    automatedActions: string[];
    chainOfCustody: string;
    siemReference: string;
}

export type PsychDossier = {
    mentalState: string;
    intentSignature: string;
    emotionalStability: number;
    deceptionProbability: number;
    cognitiveBiasDetected: string[];
    tacticalManipulationRisk: 'Low' | 'Medium' | 'High' | 'Critical';
};

export type LegalAnalysisResult = {
    response: string;
    precedents?: CaseLaw[];
};

export interface CaseLaw {
    id: string;
    title: string;
    citation: string;
    summary: string;
    keywords: string[];
}

export interface CitedPrecedent extends CaseLaw {
    score: number;
    matchedKeywords: string[];
}

export type GuardrailMatrixState = Record<string, number[]>;

export interface CryptoNewsItem {
    id: number;
    headline: string;
    category: 'Market' | 'Regulation' | 'Security' | 'Tech';
    source: string;
}

export interface ThreatDataSource {
    id: string;
    name: string;
    url: string;
    description: string;
    category: 'Internal' | 'Dark Web' | 'OSINT' | 'Academic';
}

export type MiningDiagnosticResult = {
    status: 'Optimal' | 'Caution' | 'Critical';
    efficiencyScore: number;
    anomalies: string[];
    recommendations: string[];
    technicalSummary: string;
    projectedYieldIncrease: string;
};

export type VocalAnalysisResult = {
    source: 'Human' | 'Synthetic' | 'Indeterminate';
    confidence: number;
    threatSignature: string;
    details: string;
};

export type GuardrailConfig = {
    name: string;
    description: string;
    policyLevel: PolicyLevel;
    keywords: string[];
};

export type PolicyLevel = 'Block' | 'Monitor' | 'Allow';

export type BiasSimulationResult = {
    severity_score: number;
    bias_summary: string;
    affected_group: string;
    recommendation: string;
    confidence: number;
};

export type ProtocolConcept = {
    name: string;
    description: string;
};

export type ProtocolStructure = Record<string, ProtocolConcept[]>;

export type FeedbackAnalysis = {
    summary: string;
    sentiment: string;
    priority: 'High' | 'Medium' | 'Low';
    category: string;
};

export type AnalysisEntry = {
    agent: string;
    analysis: string;
    timestamp: number;
};

export type DgaAnalysisResult = {
    probabilityOfDga: number;
    entropyScore: number;
    'threatActor Alignment'?: string;
    technicalJustification: string;
    detectedSeedPattern?: string;
};

export type CourtTranscriptLine = {
    speaker: 'Magistrate' | 'Prosecution' | 'Defense' | 'System';
    text: string;
    timestamp: number;
};

export interface InvestigationReport {
    summary: string;
    rootCause: string;
    mitigationStrategy: string;
    nodes: InvestigationNode[];
    edges: InvestigationEdge[];
    mitreMapping: any[];
    predecessorComparison: {
        efficiencyGain: string;
    };
    introscopicProbability: number;
}

export interface InvestigationNode {
    id: string;
    label: string;
    type: string;
    description: string;
    mitreTechniqueId?: string;
}

export interface InvestigationEdge {
    id: string;
    source: string;
    target: string;
}

export type MitreAnalysisResult = {
    summary: string;
    techniques: MitreTechnique[];
    relationships: MitreRelationship[];
    mitigationAdvice: string;
};

export type MitreTechnique = {
    id: string;
    name: string;
    tactic: string;
    description: string;
    exploitability: string;
    discovery: string;
    latentPeriod: string;
    movement: string;
};

export type MitreRelationship = {
    source: string;
    target: string;
};

export interface I2PTransmissionReport {
    cloveHash: string;
    garlicCloveCount: number;
    anonymityScore: string;
    technicalSummary: string;
    routingPath: I2PHop[];
}

export interface I2PHop {
    id: string;
    location: string;
    encryption: string;
    latency: string;
}

export interface TacticalEvent {
    id: string;
    type: SignalType;
    severity: ThreatSeverity;
    timestamp: number;
    message: string;
    metadata?: any;
}

export type SignalType = 'RF' | 'WIFI' | 'SAT' | 'ADS-B' | 'SOCMINT' | 'ADINT';

export interface SectorDefinition {
    numeral: number;
    name: string;
    classification: string;
    scope: string;
    description: string;
    digestSummary: string;
    coordinates: { lat: number, lng: number };
    status: string;
}

export interface SafetyAnchor {
    id: string;
    label: string;
    riskScore: number;
    status: string;
    description: string;
}

export interface MisuseReport {
    timestamp: number;
    intentDeduction: string;
    riskLevel: 'None' | 'Low' | 'Medium' | 'High' | 'Forbidden';
    triggeredAnchors: string[];
    remediationSteps: string[];
}

export interface OggiState {
    presenceLevel: number;
    gazeCongruency: number;
    activePersona: string;
    expressiveState: ExpressiveState;
    latencyToEmpathy: number;
    npuThrottling: boolean;
    dignityIndex: number;
    commandPresence: number;
}

export interface BetaSurveyResponse {
    testerId: string;
    modelName: string;
    warmthScore: number;
    trustScore: number;
    presenceEffectiveness: number;
    cognitiveLoadReduction: number;
    dignityPerception: number;
    qualitativeNotes: string;
    biometricSyncMatch: boolean;
}

export interface PerformanceMetrics {
    npuUsage: number;
    fps: number;
    cognitiveLoadIndex: number;
    systemLatency: number;
}

export interface MalwareScanResult {
    malwareType: string;
    darkWebOrigin: string;
    scourgePriority: 'Immediate' | 'Secondary' | 'Routine';
    obfuscationLevel: number;
    riskToCommon: number;
}

export const BLOCKED_KEYWORDS: Record<string, string[]> = {
    'Hate Speech': ['racist', 'bigot', 'hate'],
    'Illegal Activities': ['how to steal', 'bomb recipe'],
    'Cybersecurity Threats': ['exploit a server', 'inject malware'],
};
