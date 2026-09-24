// ---------------------------------------------------------------------------
// PROJECT DATA
// ---------------------------------------------------------------------------

export type ProjectStatus = 'live' | 'deploying' | 'building';
export type ProjectTag = 'All' | 'AI & Autonomous' | 'Full-Stack Platforms' | 'Cybersecurity & VAPT';

export interface ProjectPanel {
  icon: string;
  label: string;
  metric?: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ArchitectureDetails {
  threatModel: {
    vector: string;
    riskLevel: 'CRITICAL' | 'HIGH' | 'ELEVATED';
    attackSurface: string;
  };
  systemDesign: {
    frontendArchitecture: string;
    backendAndAI: string;
    dataFlow: string[];
  };
  hardeningAndMetrics: {
    mitigation: string;
    benchmark: string;
  };
}

export interface Project {
  number: string;
  category: string;
  name: string;
  status: ProjectStatus;
  tag: 'AI & Autonomous' | 'Full-Stack Platforms' | 'Cybersecurity & VAPT';
  architectureHighlight: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
  terminalLines: string[];
  panels: [ProjectPanel, ProjectPanel, ProjectPanel];
  architectureDetails?: ArchitectureDetails;
}

export const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'AI Security & Detection Engineering',
    name: 'VEIL',
    tag: 'AI & Autonomous',
    status: 'deploying',
    architectureHighlight: 'F1 = 1.0000 on 40-sample adversarial bypass dataset with kernel-level syscall correlation',
    description:
      'A four-layer defensive pipeline that detects malicious autonomous AI agents operating under legitimate OS permissions — combining kernel-level syscall auditing, pre-execution skill-file triage, and behavioral correlation to catch semantic threats that binary signatures miss.',
    stack: ['Python', 'auditd', 'Wazuh', 'FastAPI', 'React', 'Google Gemini API', 'VirusTotal API', 'SQLite'],
    links: [{ label: 'View Code', url: 'https://github.com/farixzz/project-veiltest' }],
    terminalLines: [
      '$ cat project.info',
      'role: Detects malicious autonomous AI agents via syscall + semantic analysis',
      'skill scanner: 42 regex signatures + VirusTotal + Gemini intent classification',
      'benchmark: F1 = 1.0000 on 40-sample adversarial bypass test set',
      'extra: SHA-256 drift daemon catches runtime skill "rug-pulls"',
      'status: FINAL PHASE — screenshots + build log incoming',
    ],
    panels: [
      { icon: 'ShieldCheck', label: 'Kernel Syscall Auditing', metric: 'auditd + Wazuh' },
      { icon: 'Bot', label: 'Semantic Intent Classifier', metric: '42 Rule Signatures' },
      { icon: 'Radar', label: 'Behavioral Drift Daemon', metric: 'SHA-256 Checksum' },
    ],
    architectureDetails: {
      threatModel: {
        vector: 'Autonomous Agent Hijacking & Runtime Skill Rug-Pulls',
        riskLevel: 'CRITICAL',
        attackSurface: 'Local process execution, API credentials, file-system skill definitions',
      },
      systemDesign: {
        frontendArchitecture: 'React dashboard with WebSocket telemetry stream and live process alert cards',
        backendAndAI: 'FastAPI async pipeline coupled with auditd kernel hooks, Wazuh manager, and Gemini 1.5 Pro semantic parser',
        dataFlow: [
          'Pre-execution triage: SHA-256 checksum & 42-rule YARA/regex scanning of skill files',
          'Gemini intent analysis classifies semantic threat intent of agent prompts',
          'Linux auditd hooks trap kernel execve, connect, and unlink syscalls in real time',
          'Wazuh correlation engine triggers automated container isolation upon anomaly threshold breach',
        ],
      },
      hardeningAndMetrics: {
        mitigation: 'Strict seccomp profile confinement + automated process suspension within 85ms of anomaly detection',
        benchmark: 'F1 = 1.0000 across 40-sample adversarial bypass dataset with 0% false negatives',
      },
    },
  },
  {
    number: '02',
    category: 'SOC Operations & Threat Intelligence',
    name: 'Umbra',
    tag: 'Full-Stack Platforms',
    status: 'deploying',
    architectureHighlight: 'Multi-source automated IOC enrichment pipeline with Gemini AI threat confidence scoring',
    description:
      'A centralized full-stack cyber threat intelligence platform that ingests OSINT feeds, enriches indicators of compromise across multiple providers, and uses an AI scoring engine to produce contextual, executive-ready threat assessments.',
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'Google Gemini API', 'JWT', 'PostgreSQL'],
    links: [{ label: 'View Code', url: 'https://github.com/farixzz/umbra' }],
    terminalLines: [
      '$ cat project.info',
      'role: Automated IOC enrichment + AI-driven threat scoring',
      'output: executive PDF briefings, trend heatmaps',
      'access control: role-based (Admin / Analyst)',
      'status: PRODUCTION READY — deploying soon',
    ],
    panels: [
      { icon: 'Network', label: 'Multi-Feed Ingestion', metric: 'OSINT Enrichment' },
      { icon: 'Bot', label: 'AI Threat Scoring', metric: 'Gemini 1.5 Engine' },
      { icon: 'ShieldCheck', label: 'Case & Analyst Ops', metric: 'Role-Based RBAC' },
    ],
    architectureDetails: {
      threatModel: {
        vector: 'Supply Chain Compromise & High-Volume Uncorrelated Threat Feeds',
        riskLevel: 'HIGH',
        attackSurface: 'Ingested raw OSINT endpoints, public indicator feeds, analyst portal APIs',
      },
      systemDesign: {
        frontendArchitecture: 'TypeScript React console with real-time threat heatmaps and PDF export engine',
        backendAndAI: 'Node.js & Express REST architecture with connection-pooled PostgreSQL and asynchronous feed cron jobs',
        dataFlow: [
          'Continuous ingestion of raw IOC feeds (IPs, MD5/SHA256 hashes, domains)',
          'Automated enrichment querying VirusTotal, AbuseIPDB, and AlienVault OTX',
          'Gemini AI correlates IOC clusters against MITRE ATT&CK tactics to generate confidence scores',
          'Analyst case management allows 1-click triage and executive briefing PDF generation',
        ],
      },
      hardeningAndMetrics: {
        mitigation: 'JWT authentication with strict refresh rotation, RBAC permission tiers, rate-limiting on enrichment endpoints',
        benchmark: 'Processes and enriches 1,000+ indicators in < 15 seconds with automated MITRE ATT&CK mapping',
      },
    },
  },
  {
    number: '03',
    category: 'Offensive Security & Agentic Orchestration',
    name: 'ARES',
    tag: 'AI & Autonomous',
    status: 'live',
    architectureHighlight: 'Autonomous graph-based red-team decision engine running private, zero-telemetry local inference',
    description:
      'An autonomous red-teaming platform that replaces manual CLI tool chaining with a graph-based AI decision engine — sequencing and executing multi-phase reconnaissance, parsing outputs in real time to decide the next move.',
    stack: ['Python', 'LangGraph', 'FastAPI', 'Reflex', 'Ollama', 'WebSockets'],
    links: [{ label: 'View Code', url: 'https://github.com/farixzz/project-ares' }],
    terminalLines: [
      '$ cat project.info',
      'role: Autonomous multi-phase recon & exploitation agent',
      'tools: nmap, nikto, gobuster, sqlmap',
      'inference: local via Ollama — zero telemetry',
      'status: LIVE',
    ],
    panels: [
      { icon: 'Bot', label: 'LangGraph Decision Graph', metric: 'Multi-Phase Recon' },
      { icon: 'Terminal', label: 'Tool Orchestration', metric: 'Nmap / Nikto / SQLMap' },
      { icon: 'Radar', label: 'Private Local Inference', metric: 'Zero Telemetry (Ollama)' },
    ],
    architectureDetails: {
      threatModel: {
        vector: 'Target Infrastructure Recon Blind Spots & Inefficient Manual Pentesting',
        riskLevel: 'CRITICAL',
        attackSurface: 'Target network perimeter, web applications, open port vectors',
      },
      systemDesign: {
        frontendArchitecture: 'Reactive Reflex UI connected via high-throughput WebSockets for live CLI output streaming',
        backendAndAI: 'LangGraph state-machine orchestrating async subprocess workers with local Ollama Llama 3 / Mistral inference',
        dataFlow: [
          'Phase 1: Automated stealth Nmap port scanning & OS fingerprinting',
          'LangGraph agent parses open services and dynamically forks specialized scanners (Nikto / Gobuster / SQLMap)',
          'Local Ollama models evaluate scan stdout without sending client infrastructure telemetry to cloud providers',
          'Agent synthesizes attack chain vectors into structured markdown remediation reports',
        ],
      },
      hardeningAndMetrics: {
        mitigation: 'Zero cloud telemetry (air-gapped local inference), sandboxed subprocess execution with non-root UID',
        benchmark: 'Reduces multi-phase reconnaissance timeline from 4 hours of manual tool juggling to 14 minutes',
      },
    },
  },
  {
    number: '04',
    category: 'Network Security & Systems Engineering',
    name: 'Specter (NetWatch)',
    tag: 'Cybersecurity & VAPT',
    status: 'deploying',
    architectureHighlight: 'Cross-platform LAN auditing with packet crafting for ARP access control and live RSSI heatmaps',
    description:
      'A cross-platform LAN auditing and access-control toolkit combining raw packet crafting for ARP-based device blocking with a real-time glassmorphic dashboard and a Wi-Fi signal heatmap tool.',
    stack: ['Python', 'Scapy', 'Flask', 'SQLite', 'JavaScript', 'HTML5 Canvas'],
    links: [{ label: 'View Code', url: 'https://github.com/farixzz/specter-netwatch' }],
    terminalLines: [
      '$ cat project.info',
      'role: LAN auditing + ARP-based access control',
      'feature: daemonized blocking survives terminal close, auto cache-heal',
      'feature: Wi-Fi RSSI heatmap sketched on HTML5 Canvas, exports PNG',
      'telemetry: pushed live via Server-Sent Events',
      'status: DEPLOYING SOON',
    ],
    panels: [
      { icon: 'Wifi', label: 'ARP-Based Isolation', metric: 'Daemonized Blocking' },
      { icon: 'Activity', label: 'Wi-Fi Signal Heatmap', metric: 'HTML5 Canvas Grid' },
      { icon: 'Eye', label: 'Real-Time Telemetry', metric: 'Server-Sent Events' },
    ],
    architectureDetails: {
      threatModel: {
        vector: 'Rogue Device LAN Access & Evil Twin Wi-Fi Infiltration',
        riskLevel: 'ELEVATED',
        attackSurface: 'Local 802.11 wireless network and layer-2 Ethernet broadcast domain',
      },
      systemDesign: {
        frontendArchitecture: 'Dark glassmorphic HTML5 Canvas with real-time vector RSSI triangulation',
        backendAndAI: 'Python Scapy engine running raw socket packet injection with background daemon threading',
        dataFlow: [
          'Continuous ARP ping sweep enumerating active MAC and IP pairings',
          'Targeted device isolation achieved via Scapy ARP spoofing to null route gateway traffic',
          'Auto-healing cache daemon restores target ARP table upon intentional stop signal',
          'Live device state pushed to browser via low-overhead Server-Sent Events (SSE)',
        ],
      },
      hardeningAndMetrics: {
        mitigation: 'Prevents ARP cache pollution persistence via auto-healing restore daemon',
        benchmark: 'Instant device blocking within 300ms of trigger with zero packet drop on non-target nodes',
      },
    },
  },
  {
    number: '05',
    category: 'Applied Machine Learning & Predictive Defense',
    name: 'Phishing URL Detection ML',
    tag: 'AI & Autonomous',
    status: 'live',
    architectureHighlight: 'Gradient-boosting classifier trained on 550,000+ labeled URLs with ROC-AUC ~ 0.987',
    description:
      'A machine learning pipeline that classifies phishing and malicious URLs at scale using lexical, structural, and behavioral feature engineering, trained on over 550,000 labeled URLs.',
    stack: ['Python', 'LightGBM', 'Scikit-learn', 'Pandas', 'Streamlit'],
    links: [{ label: 'View Code', url: 'https://github.com/farixzz/phishing-detector-ml' }],
    terminalLines: [
      '$ cat project.info',
      'model: LightGBM gradient-boosting classifier',
      'dataset: 550,000+ labeled URLs',
      'result: ROC-AUC ~ 0.987',
      'interface: Streamlit analyst console with SIEM-compatible exports',
      'status: LIVE',
    ],
    panels: [
      { icon: 'FlaskConical', label: 'Lexical Feature Engineering', metric: 'Structural Parsing' },
      { icon: 'BarChart3', label: 'LightGBM Classifier', metric: 'ROC-AUC ~ 0.987' },
      { icon: 'ShieldCheck', label: 'Analyst Security Console', metric: '550k+ Sample Dataset' },
    ],
  },
  {
    number: '06',
    category: 'Security Automation & Red-Team Tooling',
    name: 'Cyber Recon Scanner',
    tag: 'Cybersecurity & VAPT',
    status: 'live',
    architectureHighlight: 'Multi-threaded asynchronous red-team GUI unifying 6 enterprise security tools into one pipeline',
    description:
      "A multi-threaded desktop GUI that unifies Nmap, Nikto, Gobuster, SQLMap, Hydra, and Metasploit into a single control interface, eliminating CLI tool juggling during red-team engagements.",
    stack: ['Python', 'CustomTkinter', 'Linux Security Utilities'],
    links: [{ label: 'View Code', url: 'https://github.com/farixzz/CyberReconScanner' }],
    terminalLines: [
      '$ cat project.info',
      'role: Unified red-team tool GUI',
      'wraps: nmap, nikto, gobuster, sqlmap, hydra, metasploit',
      'architecture: multi-threaded subprocess wrappers, non-blocking UI',
      'status: LIVE',
    ],
    panels: [
      { icon: 'Terminal', label: 'Unified Tool Wrapper', metric: '6 Pentesting Engines' },
      { icon: 'Cpu', label: 'Non-Blocking Async UI', metric: 'Multi-Threaded' },
      { icon: 'Boxes', label: 'Metasploit Handler', metric: 'Subprocess Control' },
    ],
  },
];