
import React from 'react';
import { View, ModuleStatus } from './types';
import { 
    GavelIcon, DocumentCheckIcon, ScaleIcon, HeartIcon, BuildingLibraryIcon, 
    BtcIcon, DiamondIcon, ShieldCheckIcon, BugIcon, ChatBubbleLeftEllipsisIcon, 
    PhotoIcon, VideoCameraIcon, WandIcon, FilmIcon, MicrophoneIcon, SpeakerWaveIcon,
    CodeIcon, NftIcon, ServerStackIcon, RecycleIcon, TargetIcon, ShieldCheckmarkIcon,
    ArrowsRightLeftIcon, ChipIcon, TerminalIcon, DnaIcon, KeyIcon, DocumentTextIcon,
    BriefcaseIcon, UserIcon, EyeIcon, ChartBarIcon, MagnifyingGlassIcon, SitemapIcon,
    FingerPrintIcon, TrashIcon, ClipboardDocumentIcon, SignalIcon, RobotIcon,
    AdjustmentsHorizontalIcon, PulseIcon, DashboardIcon, BrainCircuitIcon,
    BanknotesIcon, GlobeIcon, BookOpenIcon, CogIcon, ShieldExclamationIcon, ShieldLockIcon,
    ArrowUpIcon, ArrowDownIcon, BrainCogIcon
} from '../components/icons/Icons';
import { AlertCircle, Zap, ShieldAlert, TrendingUp, Cpu, Network, Lock, Activity, Eye, ZapOff, LifeBuoy, Skull, UserCheck, Ship, Lightbulb, User, Radar, Globe2, ScanFace, Telescope } from 'lucide-react';

/**
 * Registry of all KR0M3D1A protocol modules.
 */
export interface Module {
    id: View;
    name: string;
    description: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>> | any;
    status: ModuleStatus;
}

export interface ModuleCategory {
    id: string;
    name: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>> | any;
    modules: Module[];
}

const ALL_MODULES: Module[] = [
    // --- APEX TACTICAL UPGRADES ---
    { id: 'biometric-advisor', name: 'Genetic Forensics', description: 'AI-driven biometric interrogation and sensor optimization advisor.', icon: ScanFace, status: 'Online' },
    { id: 'intel-hub', name: 'Intelligence Hub', description: 'Unified multi-source forensic acquisition and cross-sector search.', icon: Globe2, status: 'Online' },
    { id: 'spatial-threat-matrix', name: 'Spatial Matrix', description: 'N-dimensional vector mapping of signals in coordinate space.', icon: Radar, status: 'Online' },
    { id: 'tactical-foresight', name: 'Foresight Engine', description: 'Predictive Black Swan simulation and meiotic signal deduction.', icon: Telescope, status: 'Online' },

    // --- SPECIAL UPGRADES ---
    { id: 'feature-suggestions', name: 'Roadmap Engine', description: 'AI-driven feature ideation and protocol roadmap synthesis.', icon: Lightbulb, status: 'Online' },
    { id: 'user-profile', name: 'Identity Suite', description: 'Operative profile management and clearance auditing.', icon: User, status: 'Online' },

    // --- ASYMMETRIC DEFENSE OPS ---
    { id: 'biometric-interrogator', name: 'Biometric Interrogator', description: 'Advanced 3D facial, retinal, and handprint deconstruction for zero-trust identity verification.', icon: UserCheck, status: 'Online' },
    { id: 'psych-mentality', name: 'Forensic Psych Lab', description: 'Deconstructing the psychological mentality and emotional stability of threat actors via Gemini Pro reasoning.', icon: BrainCogIcon, status: 'Online' },
    { id: 'malware-scourge', name: 'Malware Crevice Scourge', description: 'Scouring, screening, and scraping the dark web for clandestine payloads before they manifest.', icon: Skull, status: 'Online' },
    { id: 'ark-continuity', name: 'Digital Arc Continuity', description: 'Ensuring 99.9% protocol survival via distributed Noah-node redundancy and catastrophic failure modeling.', icon: Ship, status: 'Online' },

    // --- PERFORMANCE & SECURITY ---
    { id: 'quantum-vault', name: 'Quantum-Resistant Vault', description: 'Next-gen lattice-based encryption and Zero-Knowledge Proof handshakes for secure Ark storage.', icon: ShieldLockIcon, status: 'Online' },
    { id: 'bio-sync', name: 'Bio-Digital Sync', description: 'Real-time physiological stress detection via camera analysis to calibrate UI resonance.', icon: DnaIcon, status: 'Online' },
    { id: 'stress-test', name: 'Black Swan Simulator', description: 'Predictive stress-testing of protocol models against sudden, unpredictably high-impact events.', icon: ZapOff, status: 'Online' },

    // --- OGGI PRESENCE ON DEMAND ---
    { id: 'oggi-lab', name: 'Oggi Presence Lab', description: 'Real-time non-verbal communication calibration. Focuses on gaze congruency and volumetric AI rendering.', icon: EyeIcon, status: 'Online' },
    { id: 'presence-beta', name: 'Beta Presence Survey', description: 'Captures qualitative sentient mask assessments to improve cognitive load reduction KPIs.', icon: DocumentTextIcon, status: 'Online' },

    // --- FORESIGHT & GTAS ---
    { id: 'gtas-core', name: 'GTAE Global Engine', description: 'Predictive threat forecasting using search grounding and geopolitical signal correlation.', icon: TrendingUp, status: 'Online' },
    { id: 'intel-nexus', name: 'Intel Nexus (S-40)', description: 'Multi-source data fusion across enterprise security repositories (Splunk, Sentinel, etc.).', icon: Zap, status: 'Syncing' },
    { id: 'incident-response', name: 'Incident Response Command', description: 'NIST 800-61 automated containment and kill-switch orchestration.', icon: ShieldAlert, status: 'Online' },
    { id: 'personnel-safety', name: 'Personnel Safety Link', description: 'Duress signaling, geofencing, and dead-man switch protocols for personnel security.', icon: AlertCircle, status: 'Online' },

    // --- ENTERPRISE INTELLIGENCE ---
    { id: 'enterprise-nexus', name: 'Enterprise Scaffolding', description: 'FIPS-compliant repository integration for industrial data operations.', icon: Cpu, status: 'Online' },

    // --- ELITE TACTICAL OPERATIONS ---
    { id: 'misuse-guardrails', name: 'Misuse Guardrail Core', description: 'Intent auditing and ethical data handshake protocols to prevent PII leaks.', icon: ShieldLockIcon, status: 'Restricted' },
    { id: 'universal-query', name: 'Universal Query Scaffolding', description: 'Multi-modal AI resolution engine for cross-spectrum entity linking.', icon: BrainCircuitIcon, status: 'Online' },
    { id: 'device-fingerprint', name: 'Target Persistence Hub', description: 'Re-identifying targets via hardware noise signatures (battery, sensors) post-reset.', icon: FingerPrintIcon, status: 'Online' },
    { id: 'activity-intel', name: 'Activity Intelligence Engine', description: 'Pattern-of-life deconstruction and sector-grade behavioral envelope analysis.', icon: PulseIcon, status: 'Online' },
    { id: 'proxy-pivot', name: 'Proxy Pivot Visualizer', description: 'Tracking clandestine logistics by deconstructing executive support networks.', icon: Network, status: 'Online' },
    { id: 'maid-correlation', name: 'MAID Correlation Suite', description: 'Resolving home-work clusters via residential night-ping linkage forensics.', icon: TargetIcon, status: 'Online' },
    { id: 'f3ead-cycle', name: 'F3EAD Strategic Cycle', description: 'Targeting lifecycle management: Find, Fix, Finish, Exploit, Analyze, Disseminate.', icon: TargetIcon, status: 'Online' },
    { id: 'predictive-recon', name: 'Predictive Recon & Change', description: 'Temporal change detection and behavioral baselining via satellite resonance.', icon: EyeIcon, status: 'Syncing' },
    { id: 'clandestine-security', name: 'Clandestine Security Suite', description: 'Homomorphic forensics and steganographic payload embedding for dark-packets.', icon: ShieldLockIcon, status: 'Restricted' },
    { id: 'tactical-fusion', name: 'Tactical Fusion Nexus', description: 'High-velocity multi-intent hunting engine utilizing Informational Superconductors.', icon: SignalIcon, status: 'Online' },

    // --- CORE & ARCHITECTURE ---
    { id: 'neurodivergency-mandate', name: 'Special Section Selection', description: 'Cognitive diversity protocol recognizing neurodivergence as a tactical asset.', icon: BrainCogIcon, status: 'Online' },
    { id: 'health', name: 'System Health Dashboard', description: 'Monitor Kubernetics integrity and guardrail performance telemetry.', icon: PulseIcon, status: 'Online' },
    { id: 'architects-exegesis', name: 'Architect\'s Exegesis', description: 'Interrogating the philosophical genesis and topology of the Prime Mover.', icon: BrainCircuitIcon, status: 'Online' },
    { id: 'demonstrator', name: 'Prompt Demonstrator', description: 'Triage payloads and test client-side guardrails against SSPI vectors.', icon: TerminalIcon, status: 'Online' },
    { id: 'innovation-conduit', name: 'Innovation Conduit', description: 'Testing pipeline for emerging infrastructure and next-gen data scaffolds.', icon: ChipIcon, status: 'Online' },
    { id: 'code-execution', name: 'DEJA\' VU Sandbox', description: 'Secure execution of scripts against protocol APIs for custodial mandates.', icon: CodeIcon, status: 'Restricted' },

    // --- TACTICAL INTELLIGENCE ---
    { id: 'sigint-monitor', name: 'SIGINT Spectrum Analyzer', description: 'RF emission monitoring and UHF/S-Band signal triangulation.', icon: SignalIcon, status: 'Online' },
    { id: 'adsb-tracker', name: 'ADS-B Jet Tracker', description: 'Monitoring 1500+ corporate aircraft intersections for exfiltration tracking.', icon: FilmIcon, status: 'Online' },

    // --- LEGAL & JUDICIAL ---
    { id: 'arconomics', name: 'Arconomics: Bias Detector', description: 'Prosecuting algorithmic disenfranchisement via IDRC jurisdictional nodes.', icon: ScaleIcon, status: 'Online' },
    { id: 'live-tribunal', name: 'IDRC Live Tribunal', description: 'Real-time judicial proceedings for digital bias anomalies and ethical breaches.', icon: GavelIcon, status: 'Restricted' },
    { id: 'idrc-bonafides', name: 'IDRC Charters', description: 'Verifying cryptographic charters and international jurisdictional authority.', icon: DocumentCheckIcon, status: 'Online' },
    { id: 'preponderance-of-evidence', name: 'Evidence Docket', description: 'Evidence compilation dashboard for high-priority judicial cases.', icon: DocumentTextIcon, status: 'Online' },
    { id: 'legal', name: 'L.E.X. Legal Counsel', description: 'AI legal analysis based on case law precedents and digital accords.', icon: BriefcaseIcon, status: 'Online' },
    { id: 'guardrail-log', name: 'Activity Log', description: 'Immutable audit trail of all guardrail events and intent signatures.', icon: ClipboardDocumentIcon, status: 'Online' },
    { id: 'corporate-structure', name: 'Corporate Edicts', description: 'Reviewing the corporate framework and legal domicile of KR0M3D1A CORP.', icon: SitemapIcon, status: 'Online' },

    // --- FINANCIAL & ASSETS ---
    { id: 'money-market', name: 'Treasury & Money Market', description: 'Facilitating asset liquidity and TRIBUNAL conversion via Golden Ratio logic.', icon: BuildingLibraryIcon, status: 'Online' },
    { id: 'financial-command', name: 'Financial Command', description: 'Overview of divisional holdings and global asset allocation metrics.', icon: ChartBarIcon, status: 'Online' },
    { id: 'nft-studio', name: 'Genesis NFT Studio', description: 'Materializing cryptologic concepts into signed digital assets.', icon: NftIcon, status: 'Online' },
    { id: 'mining-rig', name: 'Custodial Mining Rig', description: 'Autonomous asset recovery and yield generation for internal funds.', icon: BtcIcon, status: 'Online' },
    { id: 'eco-mining', name: 'Eco-Philanthropic Mining', description: 'Carbon-negative yield generation powering global good initiatives.', icon: RecycleIcon, status: 'Online' },
    { id: 'precious-metals', name: 'Digital Metals Mining', description: 'Liquidating surplus gas into solid-state digital bullion reserves.', icon: DiamondIcon, status: 'Online' },
    { id: 'gamete-transfer', name: 'G.I.F.T. Protocol', description: 'Verified internal transfers for protocol capitalization and stock options.', icon: BanknotesIcon, status: 'Online' },
    { id: 'philanthropic-conduit', name: 'Philanthropic Conduit', description: 'Executing binding contribution agreements for silent partners.', icon: HeartIcon, status: 'Online' },

    // --- INTELLIGENCE & OSINT ---
    { id: 'threatintel', name: 'Threat Intel Codex', description: 'Live feed of global vulnerabilities managed under proactive mandates.', icon: BugIcon, status: 'Online' },
    { id: 'osint-asic', name: 'OSINT ASIC Integrator', description: 'Hardware-accelerated entity de-anonymization via ASIC-7 chips.', icon: ChipIcon, status: 'Online' },
    { id: 'global-intel', name: 'Global Intel Search', description: 'Comprehensive OSINT acquisition via the P.A.N.D.A. engine core.', icon: MagnifyingGlassIcon, status: 'Online' },
    { id: 'network-transmissions', name: 'A.T.D. Transmissions', description: 'Anti-Terrorism Defense monitoring of global policing data streams.', icon: ArrowsRightLeftIcon, status: 'Online' },
    { id: 'network-forensics', name: 'Forensic Isolator', description: 'Packet inspection and DGA triage for isolated subnet forensics.', icon: TerminalIcon, status: 'Online' },
    { id: 'secure-geo-link', name: 'Secure Geo-Link', description: 'Tactical interrogation of geospatial targets and satellite resonance nodes.', icon: GlobeIcon, status: 'Online' },
    { id: 'mitre-navigator', name: 'MITRE ATT&CK Navigator', description: 'Mapping threat vectors to MITRE techniques and kill-chain stages.', icon: ShieldExclamationIcon, status: 'Online' },

    // --- SECURITY & BIOMETRICS ---
    { id: 'vocal-analysis', name: 'A.V.A.T.A.R. Vocal Scan', description: 'Analyzing voice resonance for synthetic threats and sub-vocal anomalies.', icon: SignalIcon, status: 'Online' },
    { id: 'biometric-analysis', name: 'Biometric Geometry', description: 'Forensic deconstruction of identity via geometric signature patterns.', icon: DnaIcon, status: 'Online' },
    { id: 'identity-suite', name: 'Identity Integrity Suite', description: 'Chimera checks and geospatial cloaking for investigator OPSEC.', icon: FingerPrintIcon, status: 'Online' },
    { id: 'ssh-key-gen', name: 'Access Key Generator', description: 'Generating demonstration keys for secure sandboxed environments.', icon: KeyIcon, status: 'Online' },
    { id: 'guardrail-config', name: 'Directive Configurator', description: 'Modifying core security guardrails for authorized senior operatives.', icon: AdjustmentsHorizontalIcon, status: 'Restricted' },
    { id: 'i2p-nexus', name: 'I2P Invisible Nexus', description: 'Garlic routing tunnel management via Fibonacci pathing logic.', icon: ShieldLockIcon, status: 'Online' },

    // --- AI CREATIVE & SIMULATION ---
    { id: 'chat', name: 'Kubernetics Lite Chat', description: 'Direct neural uplink for rapid protocol assistance and reasoning.', icon: RobotIcon, status: 'Online' },
    { id: 'image-analysis', name: 'Multimodal Image Scan', description: 'Visual data interrogation for hidden context and forensic markers.', icon: PhotoIcon, status: 'Online' },
    { id: 'video-analysis', name: 'Multimodal Video Scan', description: 'AI-driven temporal analysis of video streams for target identification.', icon: VideoCameraIcon, status: 'Online' },
    { id: 'image-gen', name: 'High-Fidelity Image Gen', description: 'Synthesizing visual artifacts from descriptive prompts via Creative Core.', icon: WandIcon, status: 'Online' },
    { id: 'video-gen', name: 'Veo Cinematic Engine', description: 'Temporal narrative materialization via AI strategic storytelling.', icon: FilmIcon, status: 'Online' },
    { id: 'ai-gen', name: 'AI Image Synthesis', description: 'Generative imaging pipelines for KR0M3D1A internal asset creation.', icon: WandIcon, status: 'Online' },
    { id: 'audio-trans', name: 'Audio Transcription', description: 'High-precision conversion of live speech to protocol-ready text.', icon: MicrophoneIcon, status: 'Online' },
    { id: 'tts', name: 'Speech Synthesis', description: 'Lifelike vocal signature conversion for internal directive relays.', icon: SpeakerWaveIcon, status: 'Online' },
    { id: 'code-gen', name: 'Full-Stack Integrator', description: 'AI-driven generation of production-ready, engineered codebases.', icon: CodeIcon, status: 'Online' },
    { id: 'threat-sim', name: 'Threat Vector Sim', description: 'Simulating defensive grid clashes and potential vector penetrations.', icon: TargetIcon, status: 'Online' },
    { id: 'reg-sandbox', name: 'Regulatory Sandbox', description: 'Testing Policy-as-Code guardrails in a safe admission control flow.', icon: ShieldCheckmarkIcon, status: 'Online' },
    { id: 'api-key-manager', name: 'API Key Manager', description: 'Validating and managing cryptographic access to Google GenAI keys.', icon: KeyIcon, status: 'Online' },
    { id: 'neo-investigator', name: 'NεΩ Apex Investigator', description: 'Autonomous forensic AI for kill-chain deconstruction and audits.', icon: EyeIcon, status: 'Online' },

    // --- UTILITIES ---
    { id: 'task-manager', name: 'Objective Sequencer', description: 'Prioritizing tactical directives via drag-and-drop sequencing.', icon: ClipboardDocumentIcon, status: 'Online' },
    { id: 'video-recorder', name: 'Field Recorder', description: 'Local capture of surveillance data for browser-sandboxed analysis.', icon: VideoCameraIcon, status: 'Online' },
    { id: 'guardrail-glossary', name: 'Protocol Glossary', description: 'Precise definitions of specialized terms within the directive.', icon: BookOpenIcon, status: 'Online' },
    { id: 'user-feedback', name: 'Feedback Subroutine', description: 'AI-prioritized issue reporting for protocol refinements.', icon: ChatBubbleLeftEllipsisIcon, status: 'Online' },
    { id: 'privacy-policy', name: 'Privacy Edict', description: 'Legally-binding data protection mandates signed by the Architect.', icon: ShieldCheckIcon, status: 'Online' },
    { id: 'system-tools', name: 'Cache Tray & Tools', description: 'System maintenance and automated forensic data packet purging.', icon: TrashIcon, status: 'Online' },
];

const findModules = (ids: View[]) => ALL_MODULES.filter(m => ids.includes(m.id));

export const MODULE_CATEGORIES: ModuleCategory[] = [
    {
        id: 'apex_tactical',
        name: 'Apex Tactical Suite',
        icon: Telescope,
        modules: findModules(['biometric-advisor', 'intel-hub', 'spatial-threat-matrix', 'tactical-foresight']),
    },
    {
        id: 'upgrades',
        name: 'Directive Upgrades',
        icon: Lightbulb,
        modules: findModules(['feature-suggestions', 'user-profile']),
    },
    {
        id: 'tactical_ops',
        name: 'Asymmetric Defense Ops',
        icon: ShieldAlert,
        modules: findModules(['biometric-interrogator', 'psych-mentality', 'malware-scourge', 'ark-continuity']),
    },
    {
        id: 'performance',
        name: 'Performance & Resilience',
        icon: LifeBuoy,
        modules: findModules(['quantum-vault', 'bio-sync', 'stress-test']),
    },
    {
        id: 'oggi',
        name: 'Presence & Identity',
        icon: EyeIcon,
        modules: findModules(['oggi-lab', 'presence-beta', 'identity-suite']),
    },
    {
        id: 'anticipation',
        name: 'Foresight & GTAS',
        icon: TrendingUp,
        modules: findModules(['gtas-core', 'incident-response', 'intel-nexus', 'personnel-safety']),
    },
    {
        id: 'enterprise',
        name: 'Enterprise Intel',
        icon: Cpu,
        modules: findModules(['enterprise-nexus']),
    },
    {
        id: 'elite',
        name: 'Elite Tactical Ops',
        icon: TargetIcon,
        modules: findModules(['misuse-guardrails', 'universal-query', 'device-fingerprint', 'activity-intel', 'proxy-pivot', 'maid-correlation', 'f3ead-cycle', 'predictive-recon', 'clandestine-security', 'tactical-fusion']),
    },
    {
        id: 'core',
        name: 'Directives & Core',
        icon: DashboardIcon,
        modules: findModules(['neurodivergency-mandate', 'health', 'architects-exegesis', 'demonstrator', 'innovation-conduit', 'code-execution', 'system-tools']),
    },
    {
        id: 'legal',
        name: 'Legal & Judicial',
        icon: GavelIcon,
        modules: findModules(['arconomics', 'live-tribunal', 'idrc-bonafides', 'preponderance-of-evidence', 'legal', 'guardrail-log', 'corporate-structure']),
    },
    {
        id: 'intel',
        name: 'Intelligence & OSINT',
        icon: EyeIcon,
        modules: findModules(['global-intel', 'threatintel', 'osint-asic', 'network-transmissions', 'secure-geo-link', 'mitre-navigator']),
    },
    {
        id: 'ai',
        name: 'AI & Creative Suite',
        icon: WandIcon,
        modules: findModules(['chat', 'image-analysis', 'video-analysis', 'image-gen', 'video-gen', 'audio-trans', 'tts', 'code-gen', 'threat-sim', 'reg-sandbox', 'api-key-manager', 'neo-investigator']),
    },
    {
        id: 'financial',
        name: 'Financial & Assets',
        icon: BanknotesIcon,
        modules: findModules(['money-market', 'financial-command', 'nft-studio', 'mining-rig', 'eco-mining', 'precious-metals', 'gamete-transfer', 'philanthropic-conduit']),
    },
    {
        id: 'utility',
        name: 'Infrastructure & Misc',
        icon: CogIcon,
        modules: findModules(['task-manager', 'video-recorder', 'guardrail-glossary', 'user-feedback', 'privacy-policy']),
    },
];
