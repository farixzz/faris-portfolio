// ---------------------------------------------------------------------------
// PROJECT DATA
// ---------------------------------------------------------------------------
// To add a new project: copy one of the objects below, paste it at the end
// of the PROJECTS array, and edit the fields. Nothing else needs to change —
// ProjectsSection.tsx just renders whatever is in this array, in order.
//
// status: 'live'       -> small green "LIVE" indicator next to the category
// status: 'deploying'  -> small blue "DEPLOYING SOON" indicator — code is done
//                         or near-done, just not publicly live yet
// status: 'building'   -> small amber "IN DEVELOPMENT" indicator instead
//
// links: an array of however many call-to-action buttons actually apply.
//   Add one, two, three, or leave it empty entirely — the card adapts:
//   - Nothing pushed anywhere yet?      -> links: []
//   - Code's on GitHub, not deployed?   -> links: [{ label: 'View Code', url: '...' }]
//   - Fully live?                       -> links: [{ label: 'Live Demo', url: '...' }, { label: 'View Code', url: '...' }]
//   Common labels: 'Live Demo', 'View Code', 'Case Study', 'Read Write-up'
//
// category prefix convention:
//   'Personal — ...'  for your own security/AI research projects
//   'Webit — ...'     for web apps/sites built under the Webit umbrella
//   (Purely a labeling convention — add whichever prefix fits when you
//   add a new project. No code change needed.)
// ---------------------------------------------------------------------------

export type ProjectStatus = 'live' | 'deploying' | 'building';

export interface ProjectPanel {
  /** Icon name from lucide-react, e.g. 'Bot', 'Terminal', 'Radar' */
  icon: string;
  label: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  number: string;
  category: string;
  name: string;
  status: ProjectStatus;

  /** One or two sentences on what the project actually does. */
  description: string;

  /** Tech stack tags, shown as pills, e.g. ['Python', 'FastAPI', 'LangGraph'] */
  stack: string[];

  /** Zero or more CTA buttons. Empty array = nothing public yet. */
  links: ProjectLink[];

  /**
   * Rendered inside the terminal block. Lines starting with "$ " are
   * styled as commands; everything else as command output. Good place
   * for metrics, benchmarks, or a build log.
   */
  terminalLines: string[];

  /** Three placeholder image panels: [col1-top, col1-bottom, col2-tall] */
  panels: [ProjectPanel, ProjectPanel, ProjectPanel];
}

export const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Personal — AI Security & Detection Engineering',
    name: 'VEIL',
    status: 'deploying',
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
      { icon: 'ShieldCheck', label: 'Kernel Syscall Auditing' },
      { icon: 'Bot', label: 'Semantic Intent Classification' },
      { icon: 'Radar', label: 'Live Ops Dashboard' },
    ],
  },
  {
    number: '02',
    category: 'Personal — SOC Operations & Threat Intelligence',
    name: 'Umbra',
    status: 'deploying',
    description:
      'A centralized cyber threat intelligence platform that ingests OSINT feeds, enriches indicators of compromise across multiple providers, and uses an AI scoring engine to produce contextual, executive-ready threat assessments.',
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
      { icon: 'Network', label: 'IOC Enrichment' },
      { icon: 'Bot', label: 'Gemini Threat Scoring' },
      { icon: 'ShieldCheck', label: 'Case Management' },
    ],
  },
  {
    number: '03',
    category: 'Personal — Offensive Security & Agentic Orchestration',
    name: 'ARES',
    status: 'live',
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
      { icon: 'Bot', label: 'LangGraph Orchestration' },
      { icon: 'Terminal', label: 'Automated Tool Execution' },
      { icon: 'Radar', label: 'Live Telemetry Stream' },
    ],
  },
  {
    number: '04',
    category: 'Personal — Network Security & Systems Engineering',
    name: 'Specter (NetWatch)',
    status: 'deploying',
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
      { icon: 'Wifi', label: 'ARP Scanner & Blocking' },
      { icon: 'Activity', label: 'Wi-Fi Signal Heatmap' },
      { icon: 'Eye', label: 'Live SSE Telemetry' },
    ],
  },
  {
    number: '05',
    category: 'Personal — Applied Machine Learning & Predictive Defense',
    name: 'Phishing URL Detection ML',
    status: 'live',
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
      { icon: 'FlaskConical', label: 'Feature Engineering' },
      { icon: 'BarChart3', label: 'LightGBM Classifier' },
      { icon: 'ShieldCheck', label: 'Analyst Risk Console' },
    ],
  },
  {
    number: '06',
    category: 'Personal — Security Automation',
    name: 'Cyber Recon Scanner',
    status: 'live',
    description:
      "A multi-threaded desktop GUI that unifies Nmap, Nikto, Gobuster, SQLMap, Hydra, and Metasploit into a single control interface, so a full red-team recon pass doesn't mean juggling six separate tools.",
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
      { icon: 'Terminal', label: 'Unified Tool Execution' },
      { icon: 'Cpu', label: 'Async Multi-threaded GUI' },
      { icon: 'Boxes', label: 'Metasploit Payload Mgmt' },
    ],
  },

  // ---------------------------------------------------------------------
  // Webit-tagged projects go here once you send the details — same shape,
  // just use a 'Webit — ...' category prefix, e.g.:
  //
  // {
  //   number: '07',
  //   category: 'Webit — Client Web Platform',
  //   name: 'Some Client Site',
  //   status: 'live',
  //   description: '...',
  //   stack: [...],
  //   links: [{ label: 'Visit Site', url: '...' }],
  //   terminalLines: [...],
  //   panels: [...],
  // },
  // ---------------------------------------------------------------------
];