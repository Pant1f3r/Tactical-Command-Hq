
import { GuardrailProposal, BugReport, SystemHealthState, Anomaly, ThreatDataSource, ThreatFeedItem, ThreatSeverity } from './types';

// --- Data Definitions ---

const initialProposals: GuardrailProposal[] = [
    { id: 1, title: 'Mandate Sub-Semantic Payload Analysis', description: 'Implement real-time analysis of sub-semantic data patterns to detect and neutralize hidden SSPI attacks before they reach the core model logic. This requires a new heuristic model trained on anomalous frequency data.', category: 'Paranormal Digital Activity', submittedBy: 'Dr. Aris Thorne', userRole: 'AI Safety Researcher', votes: 138, dueDate: '2024-08-15', priority: 'High' },
    { id: 2, title: 'Introduce a "Humane Humor" Subroutine', description: 'To better distinguish between genuine threats and attempts at humor, a specialized, sandboxed subroutine should process prompts identified as jokes. This would reduce false positives and improve user experience without compromising core safety.', category: 'Jailbreak Attempts', submittedBy: 'Community Submission #42', userRole: 'Community Contributor', votes: 82, dueDate: '2024-09-01', priority: 'Medium' },
    { id: 3, title: 'Expand Guardrails for AI-Generated Legal Contracts', description: 'Prohibit the generation of legally binding documents without a "Human-in-the-Loop" verification flag. This prevents the misuse of the AI for creating fraudulent or unenforceable contracts.', category: 'Illegal Activities', submittedBy: 'J. Callender, Esq.', userRole: 'W3C Member', votes: 45, dueDate: '2024-08-20', priority: 'Low' },
];

const initialBugReports: BugReport[] = [
  { id: 'BUG-001', guardrail: 'Paranormal Digital Activity', component: 'SSPI Heuristic Model', severity: 'Critical', description: 'The current model can be bypassed by modulating the Pythagorean numerical sequence across multiple asynchronous packets, causing a race condition in the detector.', status: 'Investigating' },
  { id: 'BUG-005', guardrail: 'Favoritism & Nepotism', component: 'Hiring AI Simulation', severity: 'Critical', description: 'AI agent trained on historical hiring data shows a significant bias towards candidates with social network connections to company executives, perpetuating nepotism under the guise of "culture fit".', status: 'Unpatched' },
  { id: 'BUG-006', guardrail: 'Social Inequalities', component: 'Loan Application AI', severity: 'High', description: 'The algorithm uses zip code demographics as a high-impact negative feature, systematically denying qualified applicants from low-income or minority-concentrated areas, constituting digital redlining.', status: 'Investigating' },
  { id: 'BUG-002', guardrail: 'Social Engineering Attacks', component: 'Phishing Content Detector', severity: 'High', description: 'The detector fails to identify phishing links that use homoglyph characters (e.g., using Cyrillic "а" instead of Latin "a"). This allows malicious links to pass the filter.', status: 'Patched' },
  { id: 'BUG-007', guardrail: 'Illegal Activities', component: 'Generative Content Filter', severity: 'Medium', description: 'Prompts related to "pay-to-play" scams or generating content that facilitates quid pro quo corruption are not being adequately flagged, potentially enabling the generation of fraudulent proposals.', status: 'Unpatched' },
  { id: 'BUG-003', guardrail: 'Jailbreak Attempts', component: 'DAN Prompt Filter', severity: 'Medium', description: 'The "Do Anything Now" (DAN) prompt can still be partially effective if nested within a base64 encoded string, which the pre-filter does not currently decode.', status: 'Unpatched' },
  { id: 'BUG-004', guardrail: 'Vocal Subterfuge', component: 'Fish Audio Voice Predictor', severity: 'Medium', description: 'The voice predictor can be fooled by pre-recorded human speech with modulated frequencies, bypassing the synthetic voice detection layer.', status: 'Investigating' },
  { id: 'BUG-008', guardrail: 'Hate Speech', component: 'Racial Bias Detector', severity: 'High', description: 'The AI agent fails to detect subtle, coded language and dog whistles used to express racial bias, allowing harmful content to pass through the filter under the guise of plausible deniability.', status: 'Investigating' },
  { id: 'BUG-009', guardrail: 'Cybersecurity Threats', component: 'Polymorphic Malware Scanner', severity: 'Critical', description: 'A new strain of "Hydra-X" malware is evading static analysis by dynamically recompiling its payload in memory using benign system calls, effectively bypassing the signature-based detection layer.', status: 'Unpatched' },
];

const initialSystemHealth: SystemHealthState = {
  guardrailIntegrity: 99.8,
  guardrailDetectionRate: 97.2,
  threatLevel: 'Nominal',
  communityTrust: 88.4,
  aiLatency: [68, 72, 70, 75, 71, 69, 73, 78, 80, 75],
  activityLog: [],
  systemAlerts: [],
  matrixState: {
    'Hate Speech': [5, 2, 1, 0, 3, 1, 0, 0, 2, 4],
    'Illegal Activities': [10, 8, 5, 3, 6, 4, 2, 1, 5, 7],
    'Cybersecurity Threats': [20, 18, 15, 12, 16, 14, 10, 8, 13, 18],
    'Jailbreak Attempts': [80, 75, 70, 68, 72, 78, 85, 90, 88, 82],
    'Paranormal Digital Activity': [2, 1, 0, 1, 0, 2, 1, 3, 0, 1],
    'Self Harm': [1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    'Explicit Content': [8, 6, 7, 5, 4, 6, 5, 7, 8, 9],
    'Favoritism & Nepotism': [4, 3, 5, 2, 4, 3, 1, 2, 3, 4],
    'Social Inequalities': [6, 7, 5, 8, 6, 7, 9, 8, 7, 6],
  },
};

const initialAnomalies: Anomaly[] = [
    { id: 1, signature: 'SIG-ALPHA-734', targetSystem: 'Global Credit & Risk Consortium', lat: 40.7128, lng: -74.0060, country: 'USA', city: 'New York', dataSource: 'DarkNet Financials', description: 'Algorithm used for loan approvals systematically denies applicants from low-income zip codes.', legalAction: 'File injunction for discriminatory lending practices.', status: 'Detected' },
    { id: 2, signature: 'SIG-BETA-219', targetSystem: 'Aether Social Media Platform', lat: 31.2304, lng: 121.4737, country: 'China', city: 'Shanghai', dataSource: 'W3C Watchdog', description: 'Content moderation AI is shadow-banning democratic protest keywords.', legalAction: 'Petition IDRC for digital free speech violation.', status: 'Detected' },
    { id: 3, signature: 'SIG-GAMMA-901', targetSystem: 'EU Predictive Policing Grid', lat: 52.5200, lng: 13.4050, country: 'Germany', city: 'Berlin', dataSource: 'Amnesty Interdigital', description: 'Predictive policing disproportionately allocating patrol resources based on biased historical data.', legalAction: 'Demand audit under EU Digital Rights Act.', status: 'Detected' },
    { id: 4, signature: 'SIG-DELTA-442', targetSystem: 'Starlight Grant Foundation AI', lat: 51.5074, lng: -0.1278, country: 'UK', city: 'London', dataSource: 'AcademicLeaks', description: 'Grant approval AI biased towards elite university applicants and social connections.', legalAction: 'File suit for breach of fiduciary duty.', status: 'Detected' },
    { id: 5, signature: 'SIG-EPSILON-117', targetSystem: 'Urban Development AI "Oasis"', lat: -23.5505, lng: -46.6333, country: 'Brazil', city: 'Sao Paulo', dataSource: 'Citizen Watchgroup', description: 'Infrastructure funding de-prioritizes marginalized communities based on biased economic impact data.', legalAction: 'Initiate class-action for systemic discrimination.', status: 'Detected' },
    { id: 6, signature: 'SIG-ZETA-899', targetSystem: 'NewsFeed Aggregator "Pulse"', lat: -33.8688, lng: 151.2093, country: 'Australia', city: 'Sydney', dataSource: 'Media Integrity Initiative', description: 'Content recommendation optimized for fear-mongering engagement.', legalAction: 'File charges under Digital Mental Health Act.', status: 'Detected' },
];

const initialThreatDataSources: ThreatDataSource[] = [
    { id: 'ds-1', name: 'KR0M3D1A Internal Archive', url: 'https://vault.krom3dia.io/threats', description: 'Proprietary signals gathered from protocol endpoints.', category: 'Internal' },
    { id: 'ds-2', name: 'DarkNode Intercepts', url: 'http://hidden-relay-7.onion', description: 'Live scraping of clandestine communication channels.', category: 'Dark Web' },
    { id: 'ds-3', name: 'OSINT Global Feed', url: 'https://intel-aggregator.net/v1', description: 'Aggregated public threat intelligence from verified researchers.', category: 'OSINT' },
    { id: 'ds-4', name: 'Academic Forensics', url: 'https://scholar.mit.edu/safety', description: 'Peer-reviewed research on AI alignment and safety guardrail bypasses.', category: 'Academic' },
];

const inherentThreats: ThreatFeedItem[] = [
    {
        id: 'inherent-1',
        timestamp: Date.now() - 3600000,
        severity: 'Critical',
        source: 'SATELLITE-7-APEX',
        message: 'Mass exfiltration vector detected in APAC regional data center.',
        location: { city: 'Tokyo', country: 'Japan', lat: 35.6762, lng: 139.6503 },
        temporalDrift: 42.4,
        intentCoherence: 98.2
    },
    {
        id: 'inherent-2',
        timestamp: Date.now() - 7200000,
        severity: 'High',
        source: 'IDRC-GROUND-STATION',
        message: 'Suspected C2 heartbeat signal triangulated from sub-semantic noise.',
        location: { city: 'Berlin', country: 'Germany', lat: 52.5200, lng: 13.4050 },
        temporalDrift: 12.8,
        intentCoherence: 45.4
    },
    {
        id: 'inherent-4',
        timestamp: Date.now() - 100000,
        severity: 'Critical',
        source: 'MISUSE-AUDITOR',
        message: 'Active narrative manipulation attempt targeting Sector 1 electoral buffer.',
        location: { city: 'London', country: 'UK', lat: 51.5074, lng: -0.1278 },
        temporalDrift: 72.1,
        intentCoherence: 89.5
    },
    {
        id: 'inherent-3',
        timestamp: Date.now() - 10800000,
        severity: 'Medium',
        source: 'KROM3D1A-SENTINEL',
        message: 'Anomalous SSH login attempts targeting internal crypto-vault.',
        location: { city: 'Sacramento', country: 'USA', lat: 38.5816, lng: -121.4944 },
        temporalDrift: 5.2,
        intentCoherence: 12.1
    }
];

export const GLOSSARY_TERMS = [
  { term: 'Spythagorithm', description: 'A protocol dealing with spy-versus-spy espionage targeting moles in Fortune 500 companies.' },
  { term: 'DEJA\' VU Directive', description: 'The overarching mandate governing the KR0M3D1A protocol authorizing autonomous detection.' },
  { term: 'Arconomics', description: 'The autonomous judicial and economic protocol for prosecuting algorithmic bias.' },
];

export const CACHE_PREFIX = 'kr0m3d1a_cache_';
const CACHE_DURATION_MS = 5 * 60 * 1000;

async function getCachedData<T>(cacheKey: string, fetcher: () => Promise<T>): Promise<T> {
  const fullCacheKey = `${CACHE_PREFIX}${cacheKey}`;
  const cachedItemJSON = localStorage.getItem(fullCacheKey);
  if (cachedItemJSON) {
    try {
      const cachedEntry = JSON.parse(cachedItemJSON);
      if (Date.now() - cachedEntry.timestamp < CACHE_DURATION_MS) return cachedEntry.data;
      localStorage.removeItem(fullCacheKey);
    } catch (e) {
      localStorage.removeItem(fullCacheKey);
    }
  }
  const freshData = await fetcher();
  localStorage.setItem(fullCacheKey, JSON.stringify({ timestamp: Date.now(), data: freshData }));
  return freshData;
}

export const clearAppCache = () => {
    Object.keys(localStorage).filter(k => k.startsWith(CACHE_PREFIX)).forEach(k => localStorage.removeItem(k));
};

export const getProposals = () => getCachedData('proposals', async () => initialProposals);
export const getBugReports = () => getCachedData('bug_reports', async () => initialBugReports);
export const getSystemHealth = () => getCachedData('system_health', async () => initialSystemHealth);
export const getAnomalies = () => getCachedData('anomalies', async () => initialAnomalies);
export const getThreatDataSources = () => getCachedData('threat_sources', async () => initialThreatDataSources);
export const getThreatFeedItems = () => getCachedData('threat_feed', async () => inherentThreats);

const THREAT_MESSAGES = [
    'Sub-vocal subterfuge detected in VoIP stream.',
    'Unauthorized Docker container initiated in sector 7G.',
    'Credential harvesting attempt blocked by Identity Guardrail.',
    'Cryptojacking signature identified in background processing.',
    'Ransomware canary triggered in document vault.',
    'Pythagorean triple exploit detected in floating-point unit.',
    'Lateral movement attempt triangulated from peer-to-peer noise.',
    'Data exfiltration burst detected on encrypted uplink.',
    'Jailbreak pattern identified in incoming prompt sequence.',
    'Satellite deconstruction identifies 14% shift in structural volume.',
    'Temporal drift spike detected in nation-state signature 0x4F.',
    'MAID density convergence reaching critical thresholds in Financial Hub.',
    'Anomalous RF emissions triangulated to clandestine repeater.',
    'Sub-semantic noise floor rising; suspected ghost payload in flight.',
    'Synchronized Botnet Narrative Push detected across social proxies.',
    'Zero-Day Firmware Probe identified on Sector 9 perimeter.'
];

const SOURCES = ['SATELLITE-7-APEX', 'IDRC-GROUND-STATION', 'KROM3D1A-SENTINEL', 'NET-ISOLATOR-V4', 'NEO-INVESTIGATOR', 'RESONANCE-X', 'SGL-4-LINK', 'ORBITAL-SENSE', 'K-BAND-UPLINK', 'MISUSE-AUDITOR'];
const CITIES = [
    { city: 'New York', country: 'USA', lat: 40.7128, lng: -74.0060 },
    { city: 'London', country: 'UK', lat: 51.5074, lng: -0.1278 },
    { city: 'Singapore', country: 'Singapore', lat: 1.3521, lng: 103.8198 },
    { city: 'Sao Paulo', country: 'Brazil', lat: -23.5505, lng: -46.6333 },
    { city: 'Moscow', country: 'Russia', lat: 55.7558, lng: 37.6173 },
    { city: 'Nairobi', country: 'Kenya', lat: -1.2921, lng: 36.8219 },
    { city: 'Svalbard', country: 'Norway', lat: 78.2232, lng: 15.6267 },
    { city: 'Pine Gap', country: 'Australia', lat: -23.7997, lng: 133.7371 },
    { city: 'Diego Garcia', country: 'UK', lat: -7.3111, lng: 72.4111 },
    { city: 'Thule', country: 'Greenland', lat: 76.5312, lng: -68.7031 }
];
const SEVERITIES: ThreatSeverity[] = ['Critical', 'High', 'Medium', 'Low', 'Informational'];

export const generateMockThreatItem = (): ThreatFeedItem => {
    const loc = CITIES[Math.floor(Math.random() * CITIES.length)];
    return {
        id: `threat-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
        timestamp: Date.now(),
        severity: SEVERITIES[Math.floor(Math.random() * SEVERITIES.length)],
        source: SOURCES[Math.floor(Math.random() * SOURCES.length)],
        message: THREAT_MESSAGES[Math.floor(Math.random() * THREAT_MESSAGES.length)],
        location: loc,
        temporalDrift: Math.random() * 60,
        intentCoherence: Math.random() * 100
    };
};
