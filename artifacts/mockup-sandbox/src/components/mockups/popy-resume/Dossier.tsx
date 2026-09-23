import { useMemo, useState, type ReactNode } from "react";
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  ExternalLink,
  FileText,
  Linkedin,
  Menu,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const evidence = [
  { value: "1,500+", label: "clients included in TPRM plans", note: "EY Trajectory Program" },
  { value: "~42%", label: "modeled residual-risk reduction", note: "risk prioritization model" },
  { value: "75%", label: "modeled reduction in weak vendor oversight", note: "control coverage signal" },
  { value: "56%", label: "modeled reduction in insider threat", note: "control coverage signal" },
];

const starters = [
  "What makes Popy relevant for cyber risk consulting?",
  "Show me the strongest evidence from her EY work.",
  "What has Popy built or researched?",
  "Give me a 30-second recruiter brief.",
];

const answers: Record<string, string> = {
  "What makes Popy relevant for cyber risk consulting?":
    "Popy combines cyber risk experience with a clear evidence trail: TPRM planning for 1,500+ clients, residual-risk modeling, and controls assurance work at NYC DOE.",
  "Show me the strongest evidence from her EY work.":
    "At the Ernst & Young Trajectory Program, Popy worked on Cyber Risk and Third-Party Risk Management. Her documented models indicated approximately 42% residual-risk reduction, including 75% in weak vendor oversight and 56% in insider threat.",
  "What has Popy built or researched?":
    "Her portfolio includes REEL REVIEWS, a movie review web application, and research co-authorship on a configurable firewall-based LLM guardrail system.",
  "Give me a 30-second recruiter brief.":
    "Popy Halder is a cybersecurity student graduating from the University at Albany in May 2026. She brings cyber risk, TPRM, controls assurance, and applied build experience from EY, NYC DOE, and independent research.",
};

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#68756f]">
      <span className="h-px w-8 bg-[#c8d1c9]" />
      {children}
    </div>
  );
}

export function Dossier() {
  const [chatOpen, setChatOpen] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);
  const [mobileNav, setMobileNav] = useState(false);
  const [query, setQuery] = useState("");
  const [sent, setSent] = useState(false);

  const answer = useMemo(
    () => (selectedPrompt ? answers[selectedPrompt] : null),
    [selectedPrompt],
  );

  const ask = (prompt: string) => {
    setSelectedPrompt(prompt);
    setQuery("");
    setSent(true);
  };

  return (
    <main className="min-h-[100dvh] overflow-x-hidden bg-[#f4f5ef] text-[#1d2824] selection:bg-[#d4e66b] selection:text-[#172019]">
      <style>{`
        .dossier-grain { background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.07'/%3E%3C/svg%3E"); }
        .dossier-ring { box-shadow: inset 0 0 0 1px rgba(29,40,36,.13); }
        .dossier-display { font-family: Georgia, 'Times New Roman', serif; }
        .dossier-mono { font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', monospace; }
        @keyframes dossier-rise { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .dossier-rise { animation: dossier-rise .6s ease both; }
        .dossier-delay-1 { animation-delay: .08s; } .dossier-delay-2 { animation-delay: .16s; } .dossier-delay-3 { animation-delay: .24s; }
      `}</style>

      <div className="dossier-grain pointer-events-none fixed inset-0 z-50 opacity-40 mix-blend-multiply" />
      <header className="relative z-20 border-b border-[#cfd7ce] bg-[#f4f5ef]/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="dossier-mono text-xs font-bold tracking-[0.18em] text-[#1d2824]">
            PH / DOSSIER<span className="text-[#839c19]">_01</span>
          </a>
          <nav className={`${mobileNav ? "flex" : "hidden"} absolute left-0 top-full w-full flex-col gap-4 border-b border-[#cfd7ce] bg-[#f4f5ef] px-5 py-5 text-xs font-semibold uppercase tracking-[0.15em] md:static md:flex md:w-auto md:flex-row md:border-0 md:bg-transparent md:p-0`}>
            <a href="#fit" onClick={() => setMobileNav(false)} className="transition-colors hover:text-[#70880d]">Fit</a>
            <a href="#proof" onClick={() => setMobileNav(false)} className="transition-colors hover:text-[#70880d]">Proof</a>
            <a href="#work" onClick={() => setMobileNav(false)} className="transition-colors hover:text-[#70880d]">Work</a>
            <button onClick={() => { setChatOpen(true); setMobileNav(false); }} className="text-left transition-colors hover:text-[#70880d]">Ask the dossier</button>
          </nav>
          <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com/in/popy-halder-69b96727b/" target="_blank" rel="noreferrer" aria-label="Open Popy Halder on LinkedIn" className="hidden rounded-full border border-[#aebbb0] p-2 transition hover:bg-[#dfe7de] sm:block">
              <Linkedin size={15} />
            </a>
            <button onClick={() => setMobileNav(!mobileNav)} aria-label={mobileNav ? "Close navigation" : "Open navigation"} className="rounded-full border border-[#aebbb0] p-2 md:hidden">
              {mobileNav ? <X size={15} /> : <Menu size={15} />}
            </button>
          </div>
        </div>
      </header>

      <section id="top" className="relative mx-auto max-w-[1240px] px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:pb-28">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
          <div className="dossier-rise">
            <div className="mb-8 flex items-center gap-2 text-[#70880d]">
              <span className="h-2 w-2 rounded-full bg-[#a9c82c]" />
              <span className="dossier-mono text-[10px] font-bold uppercase tracking-[0.18em]">Recruiter-ready profile / May 2026</span>
            </div>
            <h1 className="dossier-display max-w-[800px] text-[clamp(3.8rem,11vw,9.3rem)] leading-[.83] tracking-[-.07em]">
              Popy<br /><em className="text-[#70880d]">Halder.</em>
            </h1>
            <p className="mt-10 max-w-[610px] text-lg leading-relaxed text-[#52605a] sm:text-xl">
              Cybersecurity analyst in formation, with a bias toward the questions behind the controls: who is exposed, what evidence proves it, and what changes the risk.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#proof" className="inline-flex items-center gap-2 rounded-full bg-[#1d2824] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#f4f5ef] transition hover:bg-[#70880d]">
                Read the evidence <ArrowUpRight size={14} />
              </a>
              <button onClick={() => setChatOpen(true)} className="inline-flex items-center gap-2 rounded-full border border-[#aebbb0] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] transition hover:border-[#1d2824]">
                <MessageCircle size={14} /> Ask a question
              </button>
            </div>
          </div>
          <div className="dossier-rise dossier-delay-1 relative">
            <div className="dossier-ring relative overflow-hidden rounded-[2rem] bg-[#dfe6da] p-7 sm:p-9">
              <div className="absolute -right-10 -top-12 h-44 w-44 rounded-full border-[22px] border-[#c9df53]/65" />
              <div className="relative">
                <div className="mb-12 flex items-start justify-between">
                  <span className="dossier-mono text-[10px] uppercase tracking-[0.15em] text-[#66746b]">Role alignment</span>
                  <ShieldCheck className="text-[#70880d]" size={22} />
                </div>
                <h2 className="dossier-display text-4xl leading-tight tracking-[-.045em]">Cyber risk<br />&amp; TPRM</h2>
                <div className="mt-10 border-t border-[#b8c7b5] pt-4 text-sm leading-relaxed text-[#52605a]">
                  Evidence-led work across third-party risk management, controls assurance, and security operations.
                </div>
                <div className="mt-8 flex items-end justify-between">
                  <span className="dossier-mono text-[10px] text-[#66746b]">ALBANY / NY</span>
                  <span className="dossier-mono text-[10px] font-bold text-[#70880d]">01 — 04 / 25</span>
                </div>
              </div>
            </div>
            <p className="dossier-mono mt-4 text-[10px] uppercase tracking-[0.13em] text-[#77827b]">A concise case for the first conversation.</p>
          </div>
        </div>
      </section>

      <section id="fit" className="border-y border-[#cfd7ce] bg-[#e9eee5]">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[.7fr_1.3fr] lg:py-20">
          <div>
            <SectionLabel>01 / Why this profile</SectionLabel>
            <h2 className="dossier-display max-w-md text-4xl leading-[.95] tracking-[-.05em] sm:text-5xl">The signal is in the translation.</h2>
          </div>
          <div className="grid gap-8 text-[15px] leading-relaxed text-[#52605a] sm:grid-cols-2">
            <p>Popy is building the connective tissue between technical security work and the business decisions that follow. Her experience moves from security operations to third-party risk, with research and product work showing how she thinks beyond the brief.</p>
            <p className="border-l border-[#b8c7b5] pl-5">For a recruiter, the short read: she can organize ambiguous risk, make a model legible, and support a recommendation with a measurable point of view.</p>
          </div>
        </div>
      </section>

      <section id="proof" className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div><SectionLabel>02 / Evidence ledger</SectionLabel><h2 className="dossier-display text-4xl tracking-[-.05em] sm:text-6xl">Proof, not adjectives.</h2></div>
          <span className="dossier-mono text-[10px] uppercase tracking-[.16em] text-[#77827b]">Selected metrics / source-grounded</span>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[#cfd7ce] bg-[#cfd7ce] sm:grid-cols-2 lg:grid-cols-4">
          {evidence.map((item, index) => (
            <article key={item.value} className="group bg-[#f4f5ef] p-6 transition hover:bg-[#dfe7a3] sm:p-7">
              <div className="dossier-mono mb-16 text-[10px] text-[#77827b]">0{index + 1} / SIGNAL</div>
              <div className="dossier-display text-5xl tracking-[-.06em] text-[#70880d]">{item.value}</div>
              <p className="mt-3 text-sm font-semibold leading-snug">{item.label}</p>
              <p className="mt-5 border-t border-[#cfd7ce] pt-3 text-[10px] uppercase tracking-[.12em] text-[#77827b]">{item.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="bg-[#1d2824] text-[#f4f5ef]">
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
            <div><SectionLabel>03 / Experience &amp; output</SectionLabel><h2 className="dossier-display text-4xl leading-[.95] tracking-[-.05em] text-[#e0e9dc] sm:text-6xl">The deeper file.</h2></div>
            <div className="divide-y divide-[#45544c]">
              <article className="grid gap-4 py-7 first:pt-0 sm:grid-cols-[145px_1fr]">
                <div className="dossier-mono text-[10px] uppercase tracking-[.12em] text-[#a9c82c]">Jan — Apr 2025</div>
                <div><div className="flex items-start justify-between gap-4"><h3 className="text-xl font-semibold">Consultant Intern</h3><BriefcaseBusiness size={18} className="shrink-0 text-[#a9c82c]" /></div><p className="mt-1 text-sm text-[#b8c7b5]">Cyber Risk &amp; Third-Party Risk Management · Ernst &amp; Young Trajectory Program</p><p className="mt-5 max-w-xl text-sm leading-relaxed text-[#b8c7b5]">Worked across TPRM plans for 1,500+ clients and modeled residual-risk reductions to make vendor oversight and insider-threat exposure easier to prioritize.</p></div>
              </article>
              <article className="grid gap-4 py-7 sm:grid-cols-[145px_1fr]">
                <div className="dossier-mono text-[10px] uppercase tracking-[.12em] text-[#a9c82c]">Jul — Aug 2023</div>
                <div><div className="flex items-start justify-between gap-4"><h3 className="text-xl font-semibold">Cybersecurity Intern</h3><ShieldCheck size={18} className="shrink-0 text-[#a9c82c]" /></div><p className="mt-1 text-sm text-[#b8c7b5]">Security Operations &amp; Controls Assurance · NYC DOE</p><p className="mt-5 max-w-xl text-sm leading-relaxed text-[#b8c7b5]">Early exposure to the operational side of security and the assurance work that turns controls into confidence.</p></div>
              </article>
              <article className="grid gap-4 py-7 sm:grid-cols-[145px_1fr]">
                <div className="dossier-mono text-[10px] uppercase tracking-[.12em] text-[#a9c82c]">Dec 2025</div>
                <div><div className="flex items-start justify-between gap-4"><h3 className="text-xl font-semibold">Research co-author</h3><BookOpen size={18} className="shrink-0 text-[#a9c82c]" /></div><p className="mt-1 text-sm text-[#b8c7b5]">Configurable firewall-based LLM guardrail system</p><p className="mt-5 max-w-xl text-sm leading-relaxed text-[#b8c7b5]">Research exploring how configurable network controls can add a practical layer of governance around LLM systems.</p></div>
              </article>
              <article className="grid gap-4 py-7 last:pb-0 sm:grid-cols-[145px_1fr]">
                <div className="dossier-mono text-[10px] uppercase tracking-[.12em] text-[#a9c82c]">Dec 2025</div>
                <div><div className="flex items-start justify-between gap-4"><h3 className="text-xl font-semibold">REEL REVIEWS</h3><FileText size={18} className="shrink-0 text-[#a9c82c]" /></div><p className="mt-1 text-sm text-[#b8c7b5]">Movie review web application</p><p className="mt-5 max-w-xl text-sm leading-relaxed text-[#b8c7b5]">A shipped web application demonstrating product-minded execution outside formal security work.</p></div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-24">
        <div className="dossier-ring grid overflow-hidden rounded-[2rem] bg-[#dfe6da] lg:grid-cols-[1fr_.85fr]">
          <div className="p-7 sm:p-12"><SectionLabel>04 / Education</SectionLabel><h2 className="dossier-display text-5xl tracking-[-.06em] sm:text-7xl">B.S.<br /><span className="text-[#70880d]">Cybersecurity.</span></h2><div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm"><span className="font-semibold">University at Albany</span><span className="h-1 w-1 rounded-full bg-[#70880d]" /><span className="dossier-mono text-[10px] uppercase tracking-[.14em] text-[#66746b]">May 2026</span></div></div>
          <div className="flex flex-col justify-between border-t border-[#b8c7b5] p-7 sm:p-12 lg:border-l lg:border-t-0"><Sparkles className="text-[#70880d]" size={22} /><p className="mt-14 max-w-sm text-lg leading-relaxed text-[#52605a]">A foundation in cybersecurity, carried into applied risk work, control thinking, research, and building.</p><a href="https://www.linkedin.com/in/popy-halder-69b96727b/" target="_blank" rel="noreferrer" className="mt-12 inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-[.14em] underline decoration-[#a9c82c] decoration-2 underline-offset-4">Open LinkedIn <ExternalLink size={13} /></a></div>
        </div>
      </section>

      <footer className="border-t border-[#cfd7ce] px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-4 text-[10px] uppercase tracking-[.15em] text-[#77827b] sm:flex-row sm:items-center sm:justify-between"><span>POPy HALDER / CONSULTANT ANALYST</span><span>Evidence dossier · v1.0</span></div>
      </footer>

      <button onClick={() => setChatOpen(true)} aria-label="Open evidence-grounded ambassador chat" className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#a9c82c] px-4 py-3 text-xs font-bold uppercase tracking-[.12em] text-[#1d2824] shadow-[0_8px_28px_rgba(29,40,36,.18)] transition hover:-translate-y-1">
        <MessageCircle size={16} /> <span className="hidden sm:inline">Ask the dossier</span>
      </button>

      {chatOpen && <div className="fixed inset-0 z-50 flex items-end justify-end bg-[#1d2824]/25 p-3 sm:p-6" onClick={() => setChatOpen(false)}>
        <section role="dialog" aria-modal="true" aria-labelledby="chat-title" onClick={(event) => event.stopPropagation()} className="w-full max-w-[430px] overflow-hidden rounded-2xl border border-[#aebbb0] bg-[#f4f5ef] shadow-2xl">
          <div className="flex items-start justify-between bg-[#1d2824] p-5 text-[#f4f5ef]"><div><div className="dossier-mono text-[10px] uppercase tracking-[.16em] text-[#a9c82c]">Evidence-grounded ambassador</div><h2 id="chat-title" className="mt-2 text-lg font-semibold">Ask about Popy&apos;s fit</h2></div><button onClick={() => setChatOpen(false)} aria-label="Close chat" className="rounded-full p-1 hover:bg-[#45544c]"><X size={18} /></button></div>
          <div className="max-h-[55vh] overflow-y-auto p-5">
            {!sent && <div className="mb-5 rounded-xl bg-[#e9eee5] p-4 text-sm leading-relaxed text-[#52605a]">I can answer from the facts in this dossier. Choose a starting point or ask a focused question.</div>}
            {sent && answer && <div className="mb-5 space-y-3"><div className="ml-8 rounded-xl bg-[#1d2824] p-4 text-sm leading-relaxed text-[#f4f5ef]">{selectedPrompt}</div><div className="mr-8 rounded-xl bg-[#e9eee5] p-4 text-sm leading-relaxed text-[#52605a]"><span className="mb-2 block text-[10px] font-bold uppercase tracking-[.14em] text-[#70880d]">Dossier answer</span>{answer}</div><button onClick={() => { setSent(false); setSelectedPrompt(null); }} className="text-[10px] font-bold uppercase tracking-[.14em] text-[#70880d] underline underline-offset-4">Ask another</button></div>}
            {!sent && <div className="space-y-2">{starters.map((prompt) => <button key={prompt} onClick={() => ask(prompt)} className="flex w-full items-center justify-between rounded-lg border border-[#cfd7ce] p-3 text-left text-xs font-semibold transition hover:border-[#70880d] hover:bg-[#e9eee5]">{prompt}<ChevronDown size={14} className="-rotate-90 text-[#70880d]" /></button>)}</div>}
          </div>
          <form onSubmit={(event) => { event.preventDefault(); if (query.trim()) ask(query.trim()); }} className="flex gap-2 border-t border-[#cfd7ce] p-4">
            <label htmlFor="dossier-query" className="sr-only">Ask a question about Popy</label><input id="dossier-query" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ask a focused question..." className="min-w-0 flex-1 rounded-lg border border-[#cfd7ce] bg-transparent px-3 py-2 text-sm outline-none placeholder:text-[#89958d] focus:border-[#70880d] focus:ring-2 focus:ring-[#c9df53]" />
            <button type="submit" aria-label="Send question" disabled={!query.trim()} className="rounded-lg bg-[#70880d] px-3 text-[#f4f5ef] transition hover:bg-[#5d710b] disabled:cursor-not-allowed disabled:opacity-40"><Send size={16} /></button>
          </form>
        </section>
      </div>}
    </main>
  );
}

export default Dossier;