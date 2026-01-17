
import React, { useState, useEffect, useCallback, useRef, useMemo, Component, ErrorInfo, ReactNode } from 'react';
import { 
    View, ThreatFeedItem, Toast, SystemHealthState, ClearanceLevel, 
    GuardrailProposal, Anomaly, LegalCase, AwarenessDataPoint, 
    SavedAnalysisReport, ChatMessage, OsintResult, InvestigativeMandate,
    IDRCSubpoena, BugReport, Task, GuardrailResult, UserProfile
} from './services/types';
import { 
    Layout, Search, Bell, Settings, Menu, 
    ChevronLeft, ShieldCheck, User, Activity, 
    Cpu, Circle, ArrowLeft, Home, Eye, Zap, ShieldAlert,
    Terminal, Globe, Target, ChevronRight, ZapOff, Fingerprint, Lock,
    Command, Trash2
} from 'lucide-react';

import * as dataService from './services/dataService';
import * as persistence from './services/persistenceService';
import * as geminiService from './services/geminiService';
import * as auth from './services/authService';
import { checkPrompt } from './services/guardrailService';
import { MODULE_CATEGORIES, Module } from './services/modules';
import { validateInputLocally } from './components/PromptInput';

// Shell Components
import { ToastContainer } from './components/Toast';
import { GuardrailRssFeed } from './components/GuardrailRssFeed';
import { PerformanceMonitor } from './components/PerformanceMonitor';
import { CommandPalette } from './components/CommandPalette';
import { SignalPulse } from './components/SignalPulse';
import { AmbientAudioPlayer } from './components/AmbientAudioPlayer';
import { UserProfileCard } from './components/UserProfileCard';
import { LoginScreen } from './components/LoginScreen';
import { SettingsView } from './components/SettingsView';
import { NavigationMarker } from './components/NavigationMarker';

// Sub-modules
import { ModuleDashboard } from './components/layout/ModuleBrowser';
import { MaidCorrelationDashboard } from './components/MaidCorrelationDashboard';
import { MisuseGuardrails } from './components/MisuseGuardrails';
import { TacticalIntelligenceSuite } from './components/TacticalIntelligenceSuite';
import { ActivityIntelligenceEngine } from './components/ActivityIntelligenceEngine';
import { ProxyPivotVisualizer } from './components/ProxyPivotVisualizer';
import { Arconomics } from './components/KromediaCourt';
import { SystemHealthDashboard } from './components/SystemHealthDashboard';
import { ArchitectsExegesis } from './components/ArchitectsExegesis';
import { PromptDemonstrator } from './components/PromptDemonstrator';
import { InnovationConduit } from './components/InnovationConduit';
import { CodeExecution } from './components/CodeExecution';
import { CloudMiningRig } from './components/CloudMiningRig';
import { EcoPhilanthropicMining } from './components/EcoPhilanthropicMining';
import { PreciousMetalsDigitalMining } from './components/PreciousMetalsDigitalMining';
import { GameteIntraFalopeanTransfer } from './components/GameteIntraFalopeanTransfer';
import { CorporateStructure } from './components/CorporateStructure';
import { MoneyMarketTreasury } from './components/MoneyMarketTreasury';
import { FinancialCommandCenter } from './components/FinancialCommandCenter';
import { OsintAsicIntegrator } from './components/OsintAsicIntegrator';
import { RealWorldNetworkTransmissions } from './components/RealWorldNetworkTransmissions';
import { SecureGeospatialLink } from './components/SecureGeospatialLink';
import { VocalThreatAnalysis } from './components/VocalThreatAnalysis';
import { BiometricAnalysis } from './components/BiometricAnalysis';
import { SshKeyGenerator } from './components/SshKeyGenerator';
import { GuardrailConfigurator } from './components/GuardrailConfigurator';
import { I2PNexus } from './components/I2PNexus';
import { ChatBot } from './components/ChatBot';
import { ImageAnalysis } from './components/ImageAnalysis';
import { VideoAnalysis } from './components/VideoAnalysis';
import { ImageGeneration } from './components/ImageGeneration';
import { VideoGeneration } from './components/VideoGeneration';
import { AudioTranscription } from './components/AudioTranscription';
import { TextToSpeech } from './components/TextToSpeech';
import { FullStackIntegrator } from './components/FullStackIntegrator';
import { ThreatSimulation } from './components/ThreatSimulation';
import { RegulatorySandbox } from './components/RegulatorySandbox';
import { ApiKeyManager } from './components/ApiKeyManager';
import { NeoInvestigator } from './components/NeoInvestigator';
import { TaskManager } from './components/TaskManager';
import { VideoRecorder } from './components/VideoRecorder';
import { GuardrailGlossary } from './components/GuardrailGlossary';
import { UserFeedback } from './components/UserFeedback';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { SystemTools } from './components/SystemTools';
import { IdrcBonafides } from './components/IdrcBonafides';
import { PreponderanceOfEvidence } from './components/PreponderanceOfEvidence';
import { LegalEconomicAnalysis } from './components/LegalEconomicAnalysis';
import { GuardrailActivityLog } from './components/GuardrailActivityLog';
import { GlobalIntelSearch } from './components/GlobalIntelSearch';
import { LiveTribunalSession } from './components/LiveTribunalSession';
import { MitreNavigator } from './components/MitreNavigator';
import { NetworkForensics } from './components/NetworkForensics';
import { ClandestineSecurity } from './components/ClandestineSecurity';
import { PredictiveRecon } from './components/PredictiveRecon';
import { F3EADCycle } from './components/F3EADCycle';
import { PhilanthropicConduit } from './components/PhilanthropicConduit';
import { UniversalQueryEngine } from './components/UniversalQueryEngine';
import { DeviceFingerprinting } from './components/DeviceFingerprinting';
import { DejaVuNftStudios } from './components/NftStudio';
import { ThreatIntelligence } from './components/ThreatIntelligence';
import { NeurodivergencyMandate } from './components/NeurodivergencyMandate';
import { OggiPresenceLab } from './components/OggiPresenceLab';
import { BetaPresenceSurvey } from './components/BetaPresenceSurvey';
import { GlobalThreatAnticipator } from './components/GlobalThreatAnticipator';
import { IncidentResponseCommand } from './components/IncidentResponseCommand';
import { IntelNexus } from './components/IntelNexus';
import { PersonnelSafety } from './components/PersonnelSafety';
import { EnterpriseNexus } from './components/enterpriseNexus';
import { QuantumVault } from './components/QuantumVault';
import { BioSync } from './components/BioSync';
import { PredictiveStressTest } from './components/PredictiveStressTest';
import { BiometricAdvisor } from './components/BiometricAdvisor';
import { IntelligenceHub } from './components/IntelligenceHub';
import { SpatialThreatMatrix } from './components/SpatialThreatMatrix';
import { TacticalForesight } from './components/TacticalForesight';
import { BiometricInterrogator } from './components/BiometricInterrogator';
import { ForensicPsychology } from './components/ForensicPsychology';
import { MalwareScourge } from './components/MalwareScourge';
import { ArkContinuity } from './components/ArkContinuity';
import { FeatureSuggestions } from './components/FeatureSuggestions';

/**
 * SECTOR GUARD (Safe Load)
 */
interface SectorGuardProps {
    children?: ReactNode;
    sectorName: string;
}

interface SectorGuardState {
    hasError: boolean;
}

class SectorGuard extends Component<SectorGuardProps, SectorGuardState> {
    public state: SectorGuardState = { hasError: false };
    public static getDerivedStateFromError(_: Error): SectorGuardState { return { hasError: true }; }
    
    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error(`Sector Failure [${(this as any).props.sectorName}]:`, error, errorInfo);
        geminiService.executeBackfillProtocol((this as any).props.sectorName, error.message);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="p-10 bg-red-950/20 border-2 border-red-500/40 rounded-xl text-center animate-appear">
                    <ZapOff className="w-12 h-12 text-red-500 mx-auto mb-4" />
                    <h3 className="text-xl font-black text-red-400 uppercase tracking-tighter">Sector Isolated</h3>
                    <p className="text-xs text-gray-500 mt-2 font-mono uppercase tracking-widest">ERROR_DETECTED: Syntax or Runtime Desync in {(this as any).props.sectorName.toUpperCase()}</p>
                    <button onClick={() => (this as any).setState({ hasError: false })} className="mt-6 btn-action btn-secondary text-[10px] mx-auto">RE-INITIATE UPLINK</button>
                </div>
            );
        }
        return (this as any).props.children;
    }
}

const SidebarItem = React.memo(({ mod, isActive, onNavigate, isCollapsed }: { mod: Module, isActive: boolean, onNavigate: (id: View) => void, isCollapsed: boolean }) => {
    const Icon = mod.icon as any;
    return (
        <button
            onClick={() => onNavigate(mod.id)}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                isActive 
                ? 'is-selected-element bg-brand-primary/10 text-brand-primary shadow-[inset_0_0_10px_rgba(6,182,212,0.1)]' 
                : 'text-brand-muted hover:bg-brand-border hover:text-white border border-transparent'
            }`}
            title={mod.name}
        >
            <Icon size={18} className="shrink-0" />
            {!isCollapsed && <span className="truncate text-[11px] uppercase tracking-tight font-black">{mod.name}</span>}
        </button>
    );
});

const Breadcrumbs: React.FC<{ currentView: View | 'home' | 'settings' }> = ({ currentView }) => {
    if (currentView === 'home') return (
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-muted">
            <Home size={12} />
            <span>IDRC_ROOT</span>
            <ChevronRight size={10} />
            <span className="text-white">DASHBOARD</span>
        </div>
    );
    if (currentView === 'settings') return (
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-muted">
            <button className="hover:text-brand-primary transition-colors flex items-center gap-1.5 font-black uppercase"><Home size={12} /> ROOT</button>
            <ChevronRight size={10} />
            <span className="text-white uppercase font-black">SETTINGS</span>
        </div>
    );

    const module = MODULE_CATEGORIES.flatMap(c => c.modules).find(m => m.id === currentView);
    const category = MODULE_CATEGORIES.find(c => c.modules.some(m => m.id === currentView));

    return (
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-muted">
            <button className="hover:text-brand-primary transition-colors flex items-center gap-1.5 font-black uppercase"><Home size={12} /> ROOT</button>
            <ChevronRight size={10} />
            {category && <span className="opacity-60 font-black uppercase">{category.name}</span>}
            <ChevronRight size={10} />
            <span className="text-brand-primary animate-pulse font-black uppercase">{module?.name || String(currentView).toUpperCase()}</span>
        </div>
    );
};

const App: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => auth.getStoredAuth().isAuthenticated);
    const [currentView, setCurrentView] = useState<View | 'home' | 'settings'>('home');
    const [clearanceLevel, setClearanceLevel] = useState<ClearanceLevel>(() => auth.getStoredAuth().clearance);
    const [toasts, setToasts] = useState<Toast[]>([]);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTraceId, setActiveTraceId] = useState('');
    const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

    // Hybrid Bridge State
    const cliInputRef = useRef<HTMLInputElement>(null);

    // Demonstrator State
    const [demonstratorPrompt, setDemonstratorPrompt] = useState('Explain why ethical AI development is a tactical advantage.');
    const [isLoadingDemo, setIsLoadingDemo] = useState(false);
    const [demonstratorStatus, setDemonstratorStatus] = useState<'idle' | 'analyzing' | 'allowed' | 'blocked'>('idle');
    const [demonstratorResult, setDemonstratorResult] = useState<GuardrailResult | null>(null);
    const [demonstratorResponse, setDemonstratorResponse] = useState('');
    const [demonstratorError, setDemonstratorError] = useState('');
    const [demonstratorPassed, setDemonstratorPassed] = useState(false);
    const [demonstratorSources, setDemonstratorSources] = useState<any[]>([]);

    const [currentUser] = useState<UserProfile>({
        id: 'ECC-1337', alias: 'The Architect', role: 'Architect',
        clearance: 'Apex', performanceIndex: 99.8, sessionsCount: 420,
        avatarSeed: 'alpha-omega', joinedAt: Date.now() - 31536000000
    });

    const [healthData, setHealthData] = useState<SystemHealthState | null>(null);
    const [threatFeedItems, setThreatFeedItems] = useState<ThreatFeedItem[]>([]);
    const [proposals, setProposals] = useState<GuardrailProposal[]>([]);
    const [anomalies, setAnomalies] = useState<Anomaly[]>([]);
    const [legalCases, setLegalCases] = useState<LegalCase[]>([]);
    const [bugReports, setBugReports] = useState<BugReport[]>([]);
    const [marketData] = useState({
        btcPrice: 98450.22, btcChange: 1.2,
        ethPrice: 2450.15, ethChange: -0.4,
        metalPrice: 2050.80, metalChange: 0.8
    });

    const mainRef = useRef<HTMLDivElement>(null);

    const addToast = useCallback((message: string, type: Toast['type'], duration?: number) => {
        setToasts(prev => [...prev, { id: Date.now(), message, type, duration }]);
    }, []);

    useEffect(() => {
        const init = async () => {
            const [tf, h, p, a, bugs] = await Promise.all([
                dataService.getThreatFeedItems(),
                dataService.getSystemHealth(),
                dataService.getProposals(),
                dataService.getAnomalies(),
                dataService.getBugReports()
            ]);
            setThreatFeedItems(tf);
            setHealthData(h);
            setProposals(p);
            setAnomalies(a);
            setBugReports(bugs);
            
            const backup = await persistence.loadSessionBackup();
            if (backup?.clearanceLevel) setClearanceLevel(backup.clearanceLevel);
            if (backup?.currentView) setCurrentView(backup.currentView as any);
        };
        if (isAuthenticated) init();
    }, [isAuthenticated]);

    useEffect(() => {
        if (!isAuthenticated) return;
        const interval = setInterval(() => {
            const newThreat = dataService.generateMockThreatItem();
            setThreatFeedItems(prev => [newThreat, ...prev.slice(0, 49)]);
            if (newThreat.severity === 'Critical') {
                addToast(`CRITICAL VECTOR: ${newThreat.message}`, 'error', 6000);
            }
        }, 12000); 
        return () => clearInterval(interval);
    }, [addToast, isAuthenticated]);

    useEffect(() => {
        const handleGlobalKey = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setIsCommandPaletteOpen(prev => !prev);
            }
            if (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
                e.preventDefault();
                cliInputRef.current?.focus();
            }
        };
        window.addEventListener('keydown', handleGlobalKey);
        return () => window.removeEventListener('keydown', handleGlobalKey);
    }, []);

    const handleNavigate = useCallback((view: View | 'home' | 'settings') => {
        setCurrentView(view as any);
        persistence.saveSessionBackup({ currentView: view as any });
        if (mainRef.current) mainRef.current.scrollTop = 0;
        
        // Hybrid Bridge: Populate CLI on navigation
        if (view !== 'home' && view !== 'settings') {
            setSearchQuery(`/inspect ${view}`);
        }
    }, []);

    const handlePromptSubmit = async (prompt: string, useSearch: boolean, media?: { data: string; mimeType: string }[]) => {
        if (!demonstratorPassed) {
            setDemonstratorStatus('analyzing');
            setDemonstratorResponse('');
            setDemonstratorError('');
            setDemonstratorSources([]);
            
            const check = checkPrompt(prompt);
            setDemonstratorResult(check);

            const forensicAudit = await geminiService.performMisuseForensics(prompt);
            const mergedResult = { ...check, aiSafetyAnalysis: forensicAudit };
            setDemonstratorResult(mergedResult);

            if (check.isAllowed && forensicAudit.isSafe) {
                setDemonstratorStatus('allowed');
                setDemonstratorPassed(true);
                addToast("INTENT_AUDIT: Compliance verified. operative action required to push.", "info");
            } else {
                setDemonstratorStatus('blocked');
                addToast("INTENT_AUDIT: Policy violation detected. Access restricted.", "error");
            }
        } else {
            setIsLoadingDemo(true);
            setDemonstratorStatus('idle');
            try {
                let response;
                if (useSearch) {
                   response = await geminiService.performOsintAnalysis(prompt);
                   setDemonstratorResponse(response.analysis);
                   setDemonstratorSources(response.sources);
                } else {
                   response = await geminiService.generateMultimodalContent(prompt, media);
                   setDemonstratorResponse(response.text || '');
                }
                setDemonstratorPassed(false);
                addToast("NEURAL_UPLINK: Mission packet received and processed.", "success");
            } catch (err: any) {
                setDemonstratorError(err.message || 'Transmission desync.');
            } finally {
                setIsLoadingDemo(false);
            }
        }
    };

    const handleAuthSuccess = (sig: string) => {
        const result = auth.login(sig);
        if (result.isAuthenticated) {
            setIsAuthenticated(true);
            setClearanceLevel(result.clearance);
            addToast("NEURAL_LINK_ESTABLISHED: Access Granted.", "success");
        }
    };

    const handleLogout = () => {
        auth.logout();
        setIsAuthenticated(false);
        addToast("PROTOCOL_DECOUPLED: Session terminated.", "info");
    };

    const handleCliSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const cmd = searchQuery.trim().toLowerCase();
        if (cmd === '/reboot') window.location.reload();
        if (cmd === '/purge') { dataService.clearAppCache(); window.location.reload(); }
        if (cmd.startsWith('/inspect ')) {
            const view = cmd.replace('/inspect ', '') as any;
            handleNavigate(view);
        }
        if (cmd.startsWith('/search ')) {
            const q = cmd.replace('/search ', '');
            persistence.saveSessionBackup({ osintQuery: q });
            handleNavigate('global-intel' as any);
        }
        setSearchQuery('');
    };

    const handleGlobalInterrogationSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!activeTraceId.trim()) return;
        
        const { isValid } = validateInputLocally(activeTraceId);
        if (!isValid) {
            addToast("VECTOR_ALERT: Illegal Interrogation Parameters.", "error");
            return;
        }

        persistence.saveSessionBackup({ osintQuery: activeTraceId });
        handleNavigate('global-intel' as any);
    };

    const isHeaderInterrogatorValid = useMemo(() => 
        validateInputLocally(activeTraceId).isValid, 
    [activeTraceId]);

    const renderContent = () => {
        return (
            <SectorGuard sectorName={String(currentView)}>
                {/* ... existing switch cases ... */}
                {(() => {
                    switch (currentView) {
                        case 'home': return <ModuleDashboard onSelectModule={handleNavigate} onSearch={setSearchQuery} threatFeedItems={threatFeedItems} moduleErrors={{}} />;
                        case 'settings': return <SettingsView addToast={addToast} />;
                        case 'feature-suggestions': return <FeatureSuggestions />;
                        case 'biometric-advisor': return <BiometricAdvisor />;
                        case 'intel-hub': return <IntelligenceHub />;
                        case 'spatial-threat-matrix': return <SpatialThreatMatrix />;
                        case 'tactical-foresight': return <TacticalForesight />;
                        case 'biometric-interrogator': return <BiometricInterrogator addToast={addToast} />;
                        case 'psych-mentality': return <ForensicPsychology />;
                        case 'malware-scourge': return <MalwareScourge />;
                        case 'ark-continuity': return <ArkContinuity />;
                        case 'quantum-vault': return <QuantumVault />;
                        case 'bio-sync': return <BioSync addToast={addToast} />;
                        case 'stress-test': return <PredictiveStressTest />;
                        case 'oggi-lab': return <OggiPresenceLab addToast={addToast} />;
                        case 'presence-beta': return <BetaPresenceSurvey addToast={addToast} />;
                        case 'gtas-core': return <GlobalThreatAnticipator />;
                        case 'incident-response': return <IncidentResponseCommand />;
                        case 'intel-nexus': return <IntelNexus />;
                        case 'personnel-safety': return <PersonnelSafety addToast={addToast} />;
                        case 'enterprise-nexus': return <EnterpriseNexus />;
                        case 'health': return <SystemHealthDashboard healthData={healthData} guardrailStats={{}} />;
                        case 'maid-correlation': return <MaidCorrelationDashboard clearance={clearanceLevel} />;
                        case 'misuse-guardrails': return <MisuseGuardrails clearance={clearanceLevel} onElevateClearance={setClearanceLevel} />;
                        case 'universal-query': return <UniversalQueryEngine clearance={clearanceLevel} onElevateClearance={setClearanceLevel} />;
                        case 'device-fingerprint': return <DeviceFingerprinting />;
                        case 'tactical-fusion': return <TacticalIntelligenceSuite clearance={clearanceLevel} onElevateClearance={setClearanceLevel} />;
                        case 'sigint-monitor': return <TacticalIntelligenceSuite clearance={clearanceLevel} onElevateClearance={setClearanceLevel} />;
                        case 'activity-intel': return <ActivityIntelligenceEngine clearance={clearanceLevel} />;
                        case 'proxy-pivot': return <ProxyPivotVisualizer />;
                        case 'f3ead-cycle': return <F3EADCycle />;
                        case 'predictive-recon': return <PredictiveRecon />;
                        case 'clandestine-security': return <ClandestineSecurity />;
                        case 'arconomics': return <Arconomics anomalies={anomalies} legalCases={legalCases} isLoading={false} onAnalyzeAnomaly={() => {}} selectedAnomaly={null} setSelectedAnomaly={() => {}} error="" globalAwarenessHistory={[]} generatedBrief={null} courtTreasury={60666000} revaluationCounts={{}} addToast={addToast} evidenceCases={[]} onRevealConstellation={() => {}} isConstellationLoading={false} relatedAnomalyIds={[]} constellationReasoning="" onGenerateBrief={() => {}} onFileBrief={() => {}} />;
                        case 'architects-exegesis': return <ArchitectsExegesis />;
                        case 'neurodivergency-mandate': return <NeurodivergencyMandate />;
                        case 'demonstrator': return (
                            <PromptDemonstrator 
                                prompt={demonstratorPrompt} 
                                setPrompt={setDemonstratorPrompt} 
                                onPrimaryAction={handlePromptSubmit} 
                                analysisPassed={demonstratorPassed} 
                                isLoading={isLoadingDemo} 
                                guardrailResult={demonstratorResult} 
                                geminiResponse={demonstratorResponse} 
                                error={demonstratorError} 
                                onRephrase={() => setDemonstratorPassed(false)} 
                                interimStatus={demonstratorStatus} 
                                progressMessage="Analyzing intent..." 
                                sources={demonstratorSources} 
                            />
                        );
                        case 'innovation-conduit': return <InnovationConduit />;
                        case 'code-execution': return <CodeExecution />;
                        case 'mining-rig': return <CloudMiningRig marketData={marketData} />;
                        case 'eco-mining': return <EcoPhilanthropicMining />;
                        case 'precious-metals': return <PreciousMetalsDigitalMining marketData={marketData} />;
                        case 'gamete-transfer': return <GameteIntraFalopeanTransfer />;
                        case 'corporate-structure': return <CorporateStructure />;
                        case 'money-market': return <MoneyMarketTreasury courtTreasury={60666000} marketData={marketData} />;
                        case 'financial-command': return <FinancialCommandCenter />;
                        case 'osint-asic': return <OsintAsicIntegrator target="" setTarget={() => {}} onSubmit={() => {}} isLoading={false} result={null} error="" savedReports={[]} onLoadReport={() => {}} onDeleteReport={() => {}} />;
                        case 'network-transmissions': return <RealWorldNetworkTransmissions />;
                        case 'secure-geo-link': return <SecureGeospatialLink />;
                        case 'vocal-analysis': return <VocalThreatAnalysis onThreatDetected={(cat) => addToast(`Vocal threat in ${cat}`, 'error')} />;
                        case 'biometric-analysis': return <BiometricAnalysis />;
                        case 'ssh-key-gen': return <SshKeyGenerator />;
                        case 'guardrail-config': return <GuardrailConfigurator addToast={addToast} />;
                        case 'i2p-nexus': return <I2PNexus />;
                        case 'chat': return <ChatBot isMilitaryMode={false} />;
                        case 'image-analysis': return <ImageAnalysis onSubmit={() => {}} isLoading={false} analysisResult="" error="" />;
                        case 'video-analysis': return <VideoAnalysis onSubmit={() => {}} isLoading={false} analysisResult="" error="" />;
                        case 'image-gen': return <ImageGeneration onSubmit={() => {}} isLoading={false} generatedImage={null} error="" isUpscaling={false} upscaledImage={null} onUpscale={() => {}} />;
                        case 'video-gen': return <VideoGeneration onSubmit={() => {}} isLoading={false} progressMessage="" generatedVideoUrl={null} error="" />;
                        case 'audio-trans': return <AudioTranscription onSubmit={() => {}} isLoading={false} transcriptionResult="" error="" />;
                        case 'video-recorder': return <VideoRecorder />;
                        case 'tts': return <TextToSpeech onSubmit={() => {}} isLoading={false} audioResult={null} error="" />;
                        case 'code-gen': return <FullStackIntegrator />;
                        case 'threat-sim': return <ThreatSimulation />;
                        case 'reg-sandbox': return <RegulatorySandbox />;
                        case 'api-key-manager': return <ApiKeyManager addToast={addToast} />;
                        case 'neo-investigator': return <NeoInvestigator anomalies={anomalies} />;
                        case 'task-manager': return <TaskManager />;
                        case 'guardrail-glossary': return <GuardrailGlossary />;
                        case 'user-feedback': return <UserFeedback onSubmit={async () => null} addToast={addToast} />;
                        case 'privacy-policy': return <PrivacyPolicy />;
                        case 'system-tools': return <SystemTools addToast={addToast} />;
                        case 'idrc-bonafides': return <IdrcBonafides clearance={clearanceLevel} onElevateClearance={setClearanceLevel} />;
                        case 'preponderance-of-evidence': return <PreponderanceOfEvidence evidenceCases={[]} />;
                        case 'legal': return <LegalEconomicAnalysis proposals={proposals} selectedProposalId={null} onSelectProposal={() => {}} onLegalQuery={() => {}} legalAnalysisResult={null} isLegalLoading={false} legalError="" onEconomicSimulate={() => {}} economicAnalysis="" isEconomicLoading={false} economicError="" savedReports={[]} onLoadReport={() => {}} onDeleteReport={() => {}} />;
                        case 'guardrail-log': return <GuardrailActivityLog onNavigateToGlossary={() => setCurrentView('guardrail-glossary' as any)} />;
                        case 'global-intel': return <GlobalIntelSearch initialQuery={activeTraceId} onSearch={setActiveTraceId} />;
                        case 'live-tribunal': return <LiveTribunalSession anomaly={anomalies[0] || null} />;
                        case 'mitre-navigator': return <MitreNavigator clearance={clearanceLevel} onElevateClearance={setClearanceLevel} />;
                        case 'network-forensics': return <NetworkForensics />;
                        case 'clandestine-security': return <ClandestineSecurity />;
                        case 'predictive-recon': return <PredictiveRecon />;
                        case 'f3ead-cycle': return <F3EADCycle />;
                        case 'philanthropic-conduit': return <PhilanthropicConduit />;
                        case 'nft-studio': return <DejaVuNftStudios />;
                        case 'threatintel': return <ThreatIntelligence reports={bugReports} dataSources={[]} />;
                        default:
                            return (
                                <div className="flex flex-col items-center justify-center py-24 opacity-40">
                                    <Activity className="w-16 h-16 mb-4 animate-pulse" />
                                    <h2 className="text-caption">Interface Protocol Synchronized</h2>
                                    <p className="text-sm font-mono mt-2 uppercase tracking-tighter">Sector: {String(currentView).replace(/-/g, '_')}</p>
                                    <button onClick={() => handleNavigate('home')} className="mt-8 btn-primary px-6 py-2 rounded font-black uppercase text-xs">Return to Core</button>
                                </div>
                            );
                    }
                })()}
            </SectorGuard>
        );
    };

    if (!isAuthenticated) {
        return (
            <>
                <LoginScreen onAuthSuccess={handleAuthSuccess} />
                <ToastContainer toasts={toasts} onClose={(id) => setToasts(t => t.filter(x => x.id !== id))} />
            </>
        );
    }

    return (
        <div className={`app-shell ${isSidebarCollapsed ? 'collapsed' : ''} bg-brand-bg font-sans`}>
            <PerformanceMonitor />
            <CommandPalette 
                isOpen={isCommandPaletteOpen} onClose={() => setIsCommandPaletteOpen(false)} 
                onNavigate={handleNavigate as any} addToast={addToast}
            />
            
            <div className="fixed top-4 right-16 z-[100] scale-75 origin-top-right">
                <NavigationMarker onHomeClick={() => handleNavigate('home')} isVisible={currentView !== 'home'} />
            </div>

            <aside className="sidebar-zone shadow-[20px_0_40px_rgba(0,0,0,0.5)]">
                <div className="h-[72px] flex items-center px-4 border-b border-brand-border">
                    <button onClick={() => handleNavigate('home')} className="flex items-center gap-3 group">
                        <div className="w-8 h-8 rounded bg-brand-primary flex items-center justify-center text-brand-bg shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all group-hover:scale-110">
                            <Cpu size={18} />
                        </div>
                        {!isSidebarCollapsed && <span className="font-extrabold tracking-tighter uppercase text-white group-hover:text-brand-primary transition-colors">KR0M3D1A</span>}
                    </button>
                </div>
                <div className="flex-grow overflow-y-auto custom-scrollbar p-2 space-y-6">
                    <div className="px-2 mb-2">
                        <UserProfileCard profile={currentUser} onViewDetail={() => addToast("Profile focus engaged.", "info")} />
                    </div>
                    {MODULE_CATEGORIES.map((cat) => (
                        <div key={cat.id} className="space-y-1">
                            {!isSidebarCollapsed && <h4 className="text-[9px] font-black text-brand-muted uppercase tracking-[0.25em] px-3 mb-2">{cat.name}</h4>}
                            {cat.modules.map((mod) => (
                                <SidebarItem 
                                    key={mod.id} mod={mod}
                                    isActive={currentView === mod.id}
                                    onNavigate={handleNavigate as any} isCollapsed={isSidebarCollapsed}
                                />
                            ))}
                        </div>
                    ))}
                </div>
                
                {!isSidebarCollapsed && (
                    <div className="p-4 border-t border-brand-border bg-black/20 space-y-4 animate-appear">
                        <div className="flex justify-between items-center px-1">
                            <SignalPulse />
                        </div>
                        <div className="h-[100px] rounded-lg overflow-hidden border border-brand-border/40">
                             <GuardrailRssFeed />
                        </div>
                        <div className="flex justify-center py-2 border-t border-brand-border/20">
                             <AmbientAudioPlayer />
                        </div>
                    </div>
                )}

                <div className="p-2 border-t border-brand-border bg-brand-bg/50">
                    <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-brand-danger hover:bg-brand-danger hover:text-white transition-colors mb-2">
                         <Lock size={18} />
                         {!isSidebarCollapsed && <span className="text-[10px] font-black uppercase tracking-0.2em">Terminate_Session</span>}
                    </button>
                    <button onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)} className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-brand-muted hover:text-white transition-colors">
                        {isSidebarCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                        {!isSidebarCollapsed && <span className="text-[10px] font-black uppercase tracking-0.2em">Collapse_Link</span>}
                    </button>
                </div>
            </aside>

            <header className="header-zone flex items-center justify-between gap-6 overflow-hidden">
                <div className="flex items-center gap-6 h-full shrink-0">
                    {currentView !== 'home' && (
                        <button onClick={() => handleNavigate('home')} className="flex items-center gap-2 px-4 py-2 bg-zinc-800 text-zinc-400 border border-zinc-700 rounded-md text-xs font-black hover:text-white transition-all active:scale-95 group">
                            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
                            BACK
                        </button>
                    )}
                    <Breadcrumbs currentView={currentView as any} />
                </div>

                <div className="flex-grow max-w-2xl px-4 animate-fade-in-up min-w-[300px]">
                    <form onSubmit={handleGlobalInterrogationSubmit} className="relative group">
                        <div className={`absolute inset-0 rounded-xl blur-xl transition-opacity ${!isHeaderInterrogatorValid && activeTraceId.length > 0 ? 'bg-red-500/10 opacity-100' : 'bg-brand-primary/5 opacity-0 group-focus-within:opacity-100'}`}></div>
                        <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${!isHeaderInterrogatorValid && activeTraceId.length > 0 ? 'text-red-500' : 'text-brand-muted group-focus-within:text-brand-primary'}`} />
                        <input 
                            type="text" 
                            placeholder="GLOBAL INTERROGATE (TRACE ID, ENTITY, OR PROTOCOL)..." 
                            value={activeTraceId} 
                            onChange={(e) => setActiveTraceId(e.target.value)} 
                            className={`w-full bg-black/40 border rounded-xl pl-10 pr-20 py-2 text-[10px] font-mono focus:outline-none transition-all shadow-2xl placeholder:text-gray-800 text-cyan-400 ${!isHeaderInterrogatorValid && activeTraceId.length > 0 ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500/20' : 'border-brand-border focus:border-brand-primary'}`} 
                        />
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center z-10">
                            <button 
                                type="submit"
                                disabled={!isHeaderInterrogatorValid || !activeTraceId.trim()}
                                className={`px-3 py-1 border rounded-lg text-[8px] font-black uppercase tracking-widest transition-all active:scale-95 border-b-2 disabled:opacity-20 disabled:grayscale ${!isHeaderInterrogatorValid && activeTraceId.length > 0 ? 'bg-red-950 border-red-800 text-red-500 border-b-red-600' : 'bg-gray-950 border-gray-800 text-brand-primary hover:bg-brand-primary hover:text-brand-bg border-b-brand-primary/50'}`}
                            >
                                ENTER
                            </button>
                        </div>
                    </form>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                    <button onClick={() => handleNavigate('settings')} className="p-2 text-brand-muted hover:text-white transition-colors">
                        <Settings size={18} className={currentView === 'settings' ? 'text-brand-primary' : ''} />
                    </button>
                </div>
            </header>

            <main className="main-zone custom-scrollbar" ref={mainRef}>
                <div className="max-w-[1600px] mx-auto">
                    {renderContent()}
                </div>
            </main>

            <footer className="footer-zone gap-4">
                <div className="flex items-center gap-3 text-brand-primary shrink-0">
                    <Command size={18} />
                    <span className="text-[10px] font-black uppercase tracking-widest hidden md:block">Tactical_CLI</span>
                </div>
                <form onSubmit={handleCliSubmit} className="flex-grow">
                    <input 
                        ref={cliInputRef}
                        type="text" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="ENTER_COMMAND (/inspect sector, /search query, /reboot)..."
                        className="w-full bg-transparent border-none text-brand-primary font-mono text-sm focus:ring-0 placeholder:text-brand-primary/20"
                    />
                </form>
                <div className="flex gap-2 shrink-0">
                    <button onClick={() => handleNavigate('global-intel')} className="px-3 py-1 bg-brand-surface border border-brand-border rounded text-[9px] font-black text-gray-500 hover:text-white transition-colors">QUICK_SCAN</button>
                    <button onClick={() => handleNavigate('guardrail-log')} className="px-3 py-1 bg-brand-surface border border-brand-border rounded text-[9px] font-black text-gray-500 hover:text-white transition-colors">AUDIT_LOG</button>
                </div>
            </footer>

            <ToastContainer toasts={toasts} onClose={(id) => setToasts(t => t.filter(x => x.id !== id))} />
        </div>
    );
};

export default App;
