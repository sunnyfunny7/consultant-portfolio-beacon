import { useState } from "react";
import {
  ArrowUpRight,
  ChevronRight,
  Compass,
  ExternalLink,
  Fingerprint,
  Gauge,
  Layers3,
  Linkedin,
  MessageCircle,
  Network,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

type SignalKey = "consulting" | "operations" | "research";

const signals: Record<
  SignalKey,
  {
    index: string;
    kicker: string;
    title: string;
    detail: string;
    year: string;
    icon: typeof Network;
    accent: string;
    facts: string[];
  }
> = {
  consulting: {
    index: "01",
    kicker: "Find the exposure",
    title: "Consulting risk analysis",
    detail:
      "Translating third-party risk into decisions leaders can act on, with scale and measurable residual-risk movement.",
    year: "Jan — Apr 2025",
    icon: Network,
    accent: "coral",
    facts: [
      "Consultant Intern — Cyber Risk & Third-Party Risk Management",
      "Ernst & Young Trajectory Program",
      "1,500+ clients in TPRM plans",
      "Modeled residual-risk reductions: approximately 42%",
    ],
  },
  operations: {
    index: "02",
    kicker: "Read the system",
    title: "Operational security",
    detail:
      "Getting close to the controls, signals, and day-to-day security work that make a risk posture real.",
    year: "Jul — Aug 2023",
    icon: ShieldCheck,
    accent: "teal",
    facts: [
      "Cybersecurity Intern — Security Operations & Controls Assurance",
      "NYC DOE",
      "Weak vendor oversight reduction modeled at 75%",
      "Insider threat reduction modeled at 56%",
    ],
  },
  research: {
    index: "03",
    kicker: "Design the guardrail",
    title: "LLM safety research",
    detail:
      "Carrying the same risk instinct forward: make complex systems more configurable, observable, and safer to use.",
    year: "Dec 2025",
    icon: Sparkles,
    accent: "indigo",
    facts: [
      "Research co-author on a configurable firewall-based LLM guardrail system",
      "Research co-author",
      "A safety layer for language-model workflows",
      "A bridge from risk analysis to emerging systems",
    ],
  },
};

const prompts = [
  "Trace the arc from TPRM to LLM safety.",
  "Show me the strongest quantified evidence.",
  "What did Popy learn in operations?",
  "Open the projects and research signal.",
];

function SignalNode({
  signal,
  active,
  onClick,
}: {
  signal: (typeof signals)[SignalKey];
  active: boolean;
  onClick: () => void;
}) {
  const Icon = signal.icon;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`signal-node signal-node--${signal.accent} ${active ? "signal-node--active" : ""}`}
    >
      <span className="signal-node__index">{signal.index}</span>
      <span className="signal-node__icon">
        <Icon size={20} strokeWidth={1.8} />
      </span>
      <span className="signal-node__copy">
        <span className="signal-node__kicker">{signal.kicker}</span>
        <span className="signal-node__title">{signal.title}</span>
        <span className="signal-node__year">{signal.year}</span>
      </span>
      <ChevronRight className="signal-node__arrow" size={19} />
    </button>
  );
}

export function SignalBoard() {
  const [active, setActive] = useState<SignalKey>("consulting");
  const [ambassadorOpen, setAmbassadorOpen] = useState(false);
  const selected = signals[active];
  const SelectedIcon = selected.icon;

  return (
    <main className="signal-board">
      <style>{`
        .signal-board {
          --ink: #15213d;
          --muted: #63708c;
          --paper: #f7f4ee;
          --panel: #fffdf8;
          --line: #d9d9d1;
          --coral: #ed765f;
          --teal: #138f88;
          --indigo: #6264c8;
          min-height: 100dvh;
          color: var(--ink);
          background:
            radial-gradient(circle at 85% 9%, rgba(98, 100, 200, .12), transparent 23rem),
            radial-gradient(circle at 12% 66%, rgba(19, 143, 136, .09), transparent 22rem),
            var(--paper);
          font-family: "DM Sans", "Plus Jakarta Sans", ui-sans-serif, sans-serif;
          overflow: hidden;
        }
        .signal-board * { box-sizing: border-box; }
        .signal-board button { font: inherit; }
        .signal-board__shell { max-width: 1240px; margin: 0 auto; padding: 24px 34px 64px; }
        .signal-board__topbar { display:flex; align-items:center; justify-content:space-between; gap:20px; }
        .signal-board__brand { display:flex; align-items:center; gap:11px; letter-spacing:.02em; font-size:13px; font-weight:800; }
        .brand-mark { display:grid; place-items:center; width:32px; height:32px; color:#fff; background:var(--ink); border-radius:9px; }
        .signal-board__meta { display:flex; align-items:center; gap:17px; color:var(--muted); font-size:12px; letter-spacing:.04em; }
        .status-dot { width:7px; height:7px; border-radius:999px; background:var(--teal); box-shadow:0 0 0 4px rgba(19,143,136,.12); }
        .linkedin-link { display:inline-flex; align-items:center; gap:7px; color:var(--ink); text-decoration:none; font-weight:750; }
        .linkedin-link:hover { color:var(--teal); }
        .signal-board__intro { display:grid; grid-template-columns:minmax(0,1fr) 340px; align-items:end; gap:50px; padding:88px 0 68px; }
        .eyebrow { display:flex; align-items:center; gap:10px; color:var(--teal); font-size:11px; font-weight:850; letter-spacing:.14em; text-transform:uppercase; }
        .eyebrow::before { content:""; width:30px; height:2px; background:var(--coral); }
        .signal-board h1 { max-width:760px; margin:18px 0 22px; font-family: "Bricolage Grotesque", "DM Sans", sans-serif; font-size:clamp(3.4rem, 7.3vw, 7.1rem); font-weight:600; line-height:.91; letter-spacing:-.075em; }
        .signal-board h1 em { color:var(--coral); font-style:normal; }
        .lede { max-width:590px; margin:0; color:var(--muted); font-size:17px; line-height:1.55; }
        .intro-note { border-left:1px solid var(--line); padding:0 0 3px 23px; color:var(--muted); font-size:13px; line-height:1.6; }
        .intro-note strong { display:block; margin-bottom:9px; color:var(--ink); font-family:"Space Mono", monospace; font-size:11px; letter-spacing:.1em; text-transform:uppercase; }
        .signal-map { position:relative; display:grid; grid-template-columns:1.02fr .98fr; gap:28px; align-items:start; }
        .signal-map__left { position:relative; padding:28px 0 14px; }
        .signal-map__left::before { content:""; position:absolute; top:74px; bottom:57px; left:19px; width:1px; background:linear-gradient(var(--coral), var(--teal) 52%, var(--indigo)); opacity:.48; }
        .map-label { display:flex; align-items:center; justify-content:space-between; margin:0 0 17px; color:var(--muted); font-family:"Space Mono", monospace; font-size:10px; letter-spacing:.1em; text-transform:uppercase; }
        .signal-node { position:relative; z-index:1; display:grid; grid-template-columns:38px 46px minmax(0,1fr) 30px; align-items:center; width:100%; margin:0 0 13px; padding:18px 15px 18px 0; border:1px solid transparent; border-radius:17px; color:var(--ink); background:transparent; text-align:left; cursor:pointer; transition:transform .2s ease, background .2s ease, border-color .2s ease; }
        .signal-node:hover { transform:translateX(5px); background:rgba(255,253,248,.75); border-color:var(--line); }
        .signal-node--active { background:var(--panel); border-color:var(--line); box-shadow:0 12px 34px rgba(21,33,61,.06); }
        .signal-node__index { align-self:start; padding-top:5px; color:var(--muted); font-family:"Space Mono", monospace; font-size:10px; text-align:center; }
        .signal-node__icon { display:grid; place-items:center; width:42px; height:42px; border-radius:13px; color:#fff; }
        .signal-node--coral .signal-node__icon { background:var(--coral); }
        .signal-node--teal .signal-node__icon { background:var(--teal); }
        .signal-node--indigo .signal-node__icon { background:var(--indigo); }
        .signal-node__copy { display:grid; gap:4px; padding-left:15px; }
        .signal-node__kicker { color:var(--muted); font-size:11px; font-weight:800; letter-spacing:.09em; text-transform:uppercase; }
        .signal-node__title { font-family:"Bricolage Grotesque", sans-serif; font-size:22px; font-weight:600; letter-spacing:-.03em; }
        .signal-node__year { color:var(--muted); font-size:12px; }
        .signal-node__arrow { color:var(--muted); }
        .signal-detail { min-height:410px; padding:31px 33px 29px; border:1px solid var(--line); border-radius:23px; background:rgba(255,253,248,.88); box-shadow:0 18px 55px rgba(21,33,61,.07); }
        .detail-top { display:flex; justify-content:space-between; gap:18px; align-items:start; }
        .detail-icon { display:grid; place-items:center; width:48px; height:48px; color:#fff; border-radius:15px; }
        .detail-icon--coral { background:var(--coral); } .detail-icon--teal { background:var(--teal); } .detail-icon--indigo { background:var(--indigo); }
        .detail-number { color:var(--muted); font-family:"Space Mono", monospace; font-size:11px; }
        .signal-detail h2 { max-width:430px; margin:28px 0 12px; font-family:"Bricolage Grotesque", sans-serif; font-size:clamp(2rem,4vw,3.2rem); line-height:.98; letter-spacing:-.06em; }
        .detail-summary { max-width:480px; margin:0 0 28px; color:var(--muted); line-height:1.55; }
        .fact-list { display:grid; gap:10px; margin:0; padding:0; list-style:none; }
        .fact-list li { display:flex; gap:10px; align-items:start; padding-top:10px; border-top:1px solid #e8e5dd; color:#36435d; font-size:13px; line-height:1.4; }
        .fact-list li::before { content:""; flex:0 0 5px; width:5px; height:5px; margin-top:6px; border-radius:50%; background:var(--coral); }
        .signal-board__lower { display:grid; grid-template-columns:1fr 1fr; gap:28px; margin-top:54px; }
        .evidence-strip, .projects-panel { border-top:1px solid var(--ink); padding-top:18px; }
        .section-label { display:flex; justify-content:space-between; align-items:center; color:var(--muted); font-family:"Space Mono", monospace; font-size:10px; letter-spacing:.1em; text-transform:uppercase; }
        .evidence-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:10px; margin-top:18px; }
        .metric { padding:17px 12px; border-radius:14px; background:var(--ink); color:#f8f5ec; }
        .metric strong { display:block; color:#fff; font-family:"Bricolage Grotesque", sans-serif; font-size:29px; letter-spacing:-.06em; }
        .metric span { display:block; margin-top:4px; color:#b9c0d2; font-size:11px; line-height:1.3; }
        .project-row { display:flex; align-items:center; justify-content:space-between; gap:14px; padding:15px 0; border-bottom:1px solid var(--line); }
        .project-name { font-family:"Bricolage Grotesque", sans-serif; font-size:18px; letter-spacing:-.03em; }
        .project-date { color:var(--muted); font-family:"Space Mono", monospace; font-size:10px; }
        .project-row svg { color:var(--coral); }
        .ambassador { position:fixed; right:24px; bottom:23px; z-index:5; width:min(360px, calc(100vw - 32px)); }
        .ambassador__panel { margin-bottom:10px; padding:19px; border:1px solid #c9cbd8; border-radius:19px; background:#202b49; color:#f8f5ec; box-shadow:0 17px 45px rgba(21,33,61,.2); }
        .ambassador__head { display:flex; justify-content:space-between; gap:10px; align-items:start; }
        .ambassador__head strong { font-family:"Bricolage Grotesque", sans-serif; font-size:18px; }
        .ambassador__head span { display:block; margin-top:4px; color:#bec6d7; font-size:12px; line-height:1.4; }
        .close-button { display:grid; place-items:center; width:28px; height:28px; border:0; border-radius:8px; color:#dfe4ee; background:rgba(255,255,255,.1); cursor:pointer; }
        .prompt-list { display:grid; gap:7px; margin-top:15px; }
        .prompt-button { display:flex; align-items:center; justify-content:space-between; gap:8px; padding:10px 11px; border:1px solid rgba(255,255,255,.13); border-radius:10px; color:#f8f5ec; background:rgba(255,255,255,.06); font-size:12px; text-align:left; cursor:pointer; }
        .prompt-button:hover { background:rgba(255,255,255,.13); }
        .ambassador__toggle { display:flex; align-items:center; gap:9px; margin-left:auto; padding:11px 14px; border:1px solid var(--ink); border-radius:999px; color:#fff; background:var(--ink); font-size:12px; font-weight:800; cursor:pointer; box-shadow:0 10px 24px rgba(21,33,61,.2); }
        @media (max-width: 760px) {
          .signal-board__shell { padding:19px 18px 45px; }
          .signal-board__meta { gap:8px; } .signal-board__meta > span:first-child { display:none; }
          .signal-board__intro { display:block; padding:68px 0 45px; }
          .signal-board h1 { font-size:clamp(3.4rem, 16vw, 5.5rem); }
          .lede { font-size:15px; }
          .intro-note { margin-top:30px; padding:17px 0 0; border-top:1px solid var(--line); border-left:0; }
          .signal-map { grid-template-columns:1fr; gap:22px; }
          .signal-map__left { padding-top:0; }
          .signal-detail { min-height:auto; padding:24px 21px; }
          .signal-detail h2 { margin-top:22px; font-size:2.55rem; }
          .signal-board__lower { grid-template-columns:1fr; gap:37px; margin-top:39px; }
          .ambassador { right:16px; bottom:16px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .signal-node { transition:none; }
        }
      `}</style>

      <div className="signal-board__shell">
        <header className="signal-board__topbar">
          <div className="signal-board__brand">
            <span className="brand-mark"><Fingerprint size={18} /></span>
            <span>POPY HALDER / SIGNAL BOARD</span>
          </div>
          <div className="signal-board__meta">
            <span className="status-dot" aria-hidden="true" />
            <span>OPEN TO THE NEXT SIGNAL</span>
            <a className="linkedin-link" href="https://www.linkedin.com/in/popy-halder-69b96727b/" target="_blank" rel="noreferrer">
              <Linkedin size={15} /> LinkedIn <ExternalLink size={12} />
            </a>
          </div>
        </header>

        <section className="signal-board__intro" aria-labelledby="signal-title">
          <div>
            <div className="eyebrow">Consultant analyst / cybersecurity</div>
            <h1 id="signal-title">Follow the <em>signal.</em></h1>
            <p className="lede">
              Popy Halder connects risk analysis, operational security, and LLM safety research into one clear working arc.
            </p>
          </div>
          <div className="intro-note">
            <strong>How to read this board</strong>
            Start with a signal. Each stop is a grounded detour into the work, the evidence, and the question it opens next.
          </div>
        </section>

        <section className="signal-map" aria-label="Popy Halder career signal map">
          <div className="signal-map__left">
            <div className="map-label"><span>Connected arc</span><span>3 signals / 1 direction</span></div>
            {(Object.keys(signals) as SignalKey[]).map((key) => (
              <SignalNode key={key} signal={signals[key]} active={active === key} onClick={() => setActive(key)} />
            ))}
          </div>
          <article className="signal-detail" aria-live="polite">
            <div className="detail-top">
              <div className={`detail-icon detail-icon--${selected.accent}`}><SelectedIcon size={24} /></div>
              <span className="detail-number">{selected.index} / SIGNAL</span>
            </div>
            <h2>{selected.title}</h2>
            <p className="detail-summary">{selected.detail}</p>
            <ul className="fact-list">
              {selected.facts.map((fact) => <li key={fact}>{fact}</li>)}
            </ul>
          </article>
        </section>

        <section className="signal-board__lower">
          <div className="evidence-strip">
            <div className="section-label"><span>Evidence, in motion</span><Gauge size={15} /></div>
            <div className="evidence-grid">
              <div className="metric"><strong>1,500+</strong><span>clients in TPRM plans</span></div>
              <div className="metric"><strong>42%</strong><span>approx. residual-risk reduction</span></div>
              <div className="metric"><strong>75 / 56</strong><span>vendor oversight / insider threat</span></div>
            </div>
          </div>
          <div className="projects-panel">
            <div className="section-label"><span>Grounded detours</span><Layers3 size={15} /></div>
            <div className="project-row">
              <div><div className="project-name">REEL REVIEWS</div><div className="project-date">DEC 2025 / movie review web application</div></div>
              <ArrowUpRight size={18} />
            </div>
            <div className="project-row">
              <div><div className="project-name">Configurable LLM guardrail</div><div className="project-date">DEC 2025 / research co-author</div></div>
              <ArrowUpRight size={18} />
            </div>
          </div>
        </section>
      </div>

      <aside className="ambassador" aria-label="Recruiter ambassador">
        {ambassadorOpen && (
          <div className="ambassador__panel">
            <div className="ambassador__head">
              <div><strong>Ask the ambassador</strong><span>Four useful ways into Popy&apos;s work.</span></div>
              <button type="button" className="close-button" onClick={() => setAmbassadorOpen(false)} aria-label="Close recruiter prompts"><X size={16} /></button>
            </div>
            <div className="prompt-list">
              {prompts.map((prompt) => (
                <button type="button" className="prompt-button" key={prompt} onClick={() => setAmbassadorOpen(false)}>
                  {prompt}<ChevronRight size={15} />
                </button>
              ))}
            </div>
          </div>
        )}
        <button type="button" className="ambassador__toggle" onClick={() => setAmbassadorOpen((open) => !open)}>
          {ambassadorOpen ? <X size={15} /> : <MessageCircle size={15} />}
          {ambassadorOpen ? "Close prompts" : "Recruiter prompts"}
          <Compass size={15} />
        </button>
      </aside>
    </main>
  );
}