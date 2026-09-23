import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import resumePdf from '@assets/Resume_Popy_Halder_SM_1790188074530.pdf';
import { useAskAmbassador } from '@workspace/api-client-react';
import {
  AlertCircle,
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ChevronRight,
  CircleDot,
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  Layers3,
  Link2,
  Linkedin,
  LoaderCircle,
  LockKeyhole,
  MapPin,
  Menu,
  MessageCircle,
  Network,
  Radar,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  X,
} from 'lucide-react';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

const queryClient = new QueryClient();

function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const ambassador = useAskAmbassador();
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Popy Halder | Cyber Risk & Security Analysis';
    const description = 'Popy Halder translates cyber risk and third-party risk analysis into clear, evidence-backed decisions.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, []);

  const ask = (message: string) => {
    const trimmed = message.trim();
    if (!trimmed || ambassador.isPending) return;
    ambassador.mutate({ data: { message: trimmed } });
    setQuestion('');
  };

  const submitQuestion = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    ask(question);
  };

  return (
    <main className="page-shell min-h-[100dvh] bg-background">
      <div className="content-layer">
        <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
          <div className="container-wide flex h-[72px] items-center justify-between">
            <a href="#top" className="flex items-center gap-3" data-testid="link-top">
              <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-primary text-primary-foreground">
                <span className="font-display text-lg font-bold">PH</span>
              </span>
              <span className="hidden text-sm font-semibold tracking-tight sm:block">Popy Halder</span>
            </a>
            <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
              {[
                ['Positioning', '#positioning'],
                ['Evidence', '#evidence'],
                ['Experience', '#experience'],
                ['Projects', '#projects'],
                ['Skills', '#skills'],
                ['Leadership', '#leadership'],
              ].map(([label, href]) => (
                <a className="nav-link text-[13px] font-semibold" href={href} key={href} data-testid={`link-nav-${label.toLowerCase()}`}>
                  {label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/popy-halder-69b96727/"
                target="_blank"
                rel="noreferrer"
                className="hidden items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-[12px] font-bold transition hover:border-secondary hover:text-secondary sm:flex"
                data-testid="link-header-linkedin"
              >
                <Linkedin className="h-3.5 w-3.5" aria-hidden="true" /> LinkedIn
              </a>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card md:hidden"
                onClick={() => setMobileOpen((open) => !open)}
                aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileOpen}
                data-testid="button-mobile-menu"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
          {mobileOpen && (
            <nav className="border-t border-border bg-card px-5 py-4 md:hidden" aria-label="Mobile navigation">
              <div className="container-wide flex flex-col gap-1">
                {[
                  ['Positioning', '#positioning'],
                  ['Evidence', '#evidence'],
                  ['Experience', '#experience'],
                  ['Projects', '#projects'],
                  ['Skills', '#skills'],
                  ['Leadership', '#leadership'],
                  ['Ambassador', '#ambassador'],
                ].map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    className="rounded-lg px-3 py-3 text-sm font-semibold hover:bg-muted"
                    onClick={() => setMobileOpen(false)}
                    data-testid={`link-mobile-${label.toLowerCase()}`}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </nav>
          )}
        </header>

        <section id="top" className="container-wide grid min-h-[620px] items-center gap-12 py-20 lg:grid-cols-[1.08fr_.92fr] lg:py-28">
          <div>
            <div className="reveal flex items-center gap-3 text-secondary">
              <span className="h-px w-10 bg-secondary" />
              <span className="eyebrow">Cyber risk / analyst profile</span>
            </div>
            <h1 className="reveal reveal-delay-1 text-balance mt-6 max-w-[760px] font-display text-[clamp(3.6rem,8vw,7.6rem)] font-semibold leading-[.88] tracking-[-.075em] text-primary">
              Clear decisions<br /><span className="text-secondary">under pressure.</span>
            </h1>
            <p className="reveal reveal-delay-2 mt-8 max-w-[650px] text-balance text-[17px] leading-8 text-muted-foreground md:text-[19px]">
              Popy Halder translates cyber risk and third-party risk analysis into evidence-backed decisions, with hands-on security operations and LLM safety research close at hand.
            </p>
            <div className="reveal reveal-delay-3 mt-9 flex flex-wrap items-center gap-3">
              <a href="#experience" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition hover:bg-secondary hover:text-secondary-foreground" data-testid="link-hero-evidence">
                Review the evidence <ArrowDownRight className="h-4 w-4" />
              </a>
              <a href={resumePdf} download="Popy-Halder-Resume.pdf" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-bold transition hover:border-secondary hover:text-secondary" data-testid="link-download-resume">
                <Download className="h-4 w-4" /> Download resume
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 font-mono-custom text-[11px] uppercase tracking-[.08em] text-muted-foreground">
              <span className="inline-flex items-center gap-2"><CircleDot className="h-3 w-3 text-secondary" /> University at Albany</span>
              <span className="inline-flex items-center gap-2"><GraduationCap className="h-3 w-3 text-secondary" /> B.S. Cybersecurity · May 2026</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[440px] lg:justify-self-end">
            <div className="absolute -right-5 -top-7 hidden h-24 w-24 rounded-full border border-secondary/40 sm:block" />
            <div className="relative overflow-hidden rounded-[28px] border border-primary/10 bg-primary p-6 text-primary-foreground shadow-[0_25px_70px_hsl(204_35%_16%_/_0.23)]">
              <div className="mb-16 flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono-custom text-[10px] uppercase tracking-[.16em] text-primary-foreground/60">
                  <LockKeyhole className="h-3.5 w-3.5 text-accent" /> Decision brief / 01
                </div>
                <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_0_5px_hsl(66_77%_57%_/_0.15)]" />
              </div>
              <div className="font-mono-custom text-[10px] uppercase tracking-[.14em] text-primary-foreground/60">Core signal</div>
              <div className="mt-3 font-display text-[clamp(2.2rem,5vw,3.6rem)] font-semibold leading-[.95] tracking-[-.06em]">
                Risk, made<br /><span className="text-accent">legible.</span>
              </div>
              <div className="mt-14 grid grid-cols-2 gap-3 border-t border-primary-foreground/15 pt-4">
                <div>
                  <div className="font-mono-custom text-2xl text-accent">42%</div>
                  <div className="mt-1 text-[11px] leading-4 text-primary-foreground/60">modeled total residual-risk reduction</div>
                </div>
                <div>
                  <div className="font-mono-custom text-2xl text-accent">1,500+</div>
                  <div className="mt-1 text-[11px] leading-4 text-primary-foreground/60">clients in TPRM implementation planning</div>
                </div>
              </div>
              <div className="mt-7 flex items-center justify-between text-[11px] text-primary-foreground/50">
                <span>Cyber risk · TPRM · AI safety</span>
                <ArrowUpRight className="h-4 w-4 text-accent" />
              </div>
            </div>
            <div className="mt-4 flex items-center justify-end gap-2 font-mono-custom text-[10px] uppercase tracking-[.12em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" /> Signal over noise
            </div>
          </div>
        </section>

        <section id="positioning" className="bg-primary py-20 text-primary-foreground md:py-28">
          <div className="container-wide">
            <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
              <div>
                <div className="eyebrow text-accent">01 / Positioning</div>
                <h2 className="mt-5 max-w-[340px] font-display text-4xl font-semibold leading-[.98] tracking-[-.055em] md:text-5xl">A translator between exposure and action.</h2>
              </div>
              <div>
                <p className="max-w-[790px] text-balance text-[clamp(1.45rem,3vw,2.55rem)] font-medium leading-[1.16] tracking-[-.04em] text-primary-foreground/90">
                  The work sits where frameworks, control evidence, and business consequences meet. The output is not more noise; it is a decision a stakeholder can defend.
                </p>
                <div className="mt-12 grid gap-6 border-t border-primary-foreground/15 pt-6 sm:grid-cols-3">
                  {[
                    ['01', 'Frame', 'NIST, FFIEC, questionnaires, and control context become a shared risk language.'],
                    ['02', 'Test', 'Likelihood, severity, residual risk, and adversarial behavior make the signal accountable.'],
                    ['03', 'Move', 'Recommendations connect PAM, identity security, SLA monitoring, and implementation planning.'],
                  ].map(([number, title, copy]) => (
                    <div key={number} data-testid={`card-positioning-${number}`}>
                      <div className="font-mono-custom text-xs text-accent">{number}</div>
                      <div className="mt-4 font-display text-xl font-semibold">{title}</div>
                      <p className="mt-2 text-sm leading-6 text-primary-foreground/60">{copy}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="evidence" className="container-wide py-20 md:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="eyebrow text-secondary">02 / Role-match evidence</div>
              <h2 className="mt-4 max-w-[620px] font-display text-4xl font-semibold leading-[.98] tracking-[-.06em] md:text-6xl">The short version recruiters need.</h2>
            </div>
            <p className="max-w-[310px] text-sm leading-6 text-muted-foreground">A quick read across cyber risk, operations, and applied AI safety.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-12">
            <EvidenceCard className="md:col-span-7" icon={<Network />} label="Cyber risk & TPRM" title="Framework fluency with a business lens." copy="Applied NIST CSF, NIST SP 800-53, NIST RMF, FFIEC, questionnaires, likelihood-severity scoring, and cost-benefit analysis." accent="lime" />
            <EvidenceCard className="md:col-span-5" icon={<Radar />} label="Controls assurance" title="Operational exposure, made visible." copy="Worked across DMZ security, asset validation, VPN audit, Zscaler, CrowdStrike asset tagging, and Rapid7 vulnerability scans." accent="teal" />
            <EvidenceCard className="md:col-span-5" icon={<BrainCircuit />} label="LLM safety research" title="Adversarial thinking beyond the checklist." copy="Co-authored a configurable firewall-based guardrail system covering injection, jailbreaking, exfiltration, IOCs, signatures, semantics, and PII." accent="coral" />
            <div className="md:col-span-7 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="font-mono-custom text-4xl tracking-[-.08em] text-secondary">75%</div>
                <p className="mt-3 text-sm leading-5 text-muted-foreground">modeled reduction in weak vendor-oversight risk</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="font-mono-custom text-4xl tracking-[-.08em] text-secondary">56%</div>
                <p className="mt-3 text-sm leading-5 text-muted-foreground">modeled reduction in insider-threat risk</p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="border-y border-border bg-card py-20 md:py-28">
          <div className="container-wide">
            <div className="eyebrow text-secondary">03 / Experience</div>
            <div className="mt-4 grid gap-10 lg:grid-cols-[.55fr_1.45fr]">
              <div>
                <h2 className="font-display text-4xl font-semibold leading-[.98] tracking-[-.06em] md:text-6xl">Work that holds up in review.</h2>
                <p className="mt-6 max-w-sm text-sm leading-6 text-muted-foreground">A compact record of applying analysis, controls, and security research in real operating contexts.</p>
              </div>
              <div className="space-y-5">
                <ExperienceRow
                  number="01"
                  icon={<BriefcaseBusiness />}
                  title="Consultant Intern — Cyber Risk & Third-Party Risk Management"
                  org="Ernst & Young Trajectory Program"
                  location="Albany, NY"
                  date="January–April 2025"
                  points={[
                    'Applied NIST CSF, NIST SP 800-53, NIST RMF, and FFIEC to third-party risk analysis.',
                    'Built likelihood-severity risk scoring and cost-benefit analysis for TPRM implementation planning across 1,500+ clients.',
                    'Recommended PAM / identity-security and SLA-monitoring improvements; modeled approximately 42% total residual-risk reduction.',
                  ]}
                />
                <ExperienceRow
                  number="02"
                  icon={<ShieldCheck />}
                  title="Cybersecurity Intern — Security Operations & Controls Assurance"
                  org="NYC DOE"
                  location="Brooklyn, NY"
                  date="July–August 2023"
                  points={[
                    'Supported DMZ security and asset validation, including a Cisco ISE VPN audit.',
                    'Worked with Zscaler ZIA, ZPA, and ZDX; tagged assets in CrowdStrike and reviewed Rapid7 vulnerability scans.',
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="container-wide py-20 md:py-28">
          <div className="grid gap-8 md:grid-cols-[.8fr_1.2fr] md:items-end">
            <div>
              <div className="eyebrow text-secondary">04 / Selected projects</div>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-[.98] tracking-[-.06em] md:text-6xl">Proof of range.</h2>
            </div>
            <p className="max-w-[480px] text-sm leading-6 text-muted-foreground md:justify-self-end">Two projects show the same through-line from adversarial detail to useful, legible systems.</p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
            <ProjectCard
              featured
              icon={<BrainCircuit />}
              index="A"
              title="Configurable Firewall-Based LLM Guardrail System"
              meta="Researcher · University at Albany · December 2025"
              description="Co-authored research covering prompt injection, jailbreaking, adversarial prompts, data exfiltration, and configurable policies."
              detail="Detection and evaluation included IOC, signature, semantic, and PII detection alongside TPR, FPR, accuracy, and latency benchmarking aligned with OWASP LLM security guidance."
              tags={['LLM guardrails', 'Adversarial evaluation', 'PII detection', 'OWASP LLM security']}
            />
            <ProjectCard
              icon={<Search />}
              index="B"
              title="REEL REVIEWS"
              meta="Interactive movie review web app · December 2025"
              description="Searchable content, ratings, reviews, and dynamic sorting in a responsive browser experience."
              detail="Built with JavaScript DOM manipulation, localStorage, responsive HTML/CSS, and Python/pandas IMDb-to-JSON processing."
              tags={['JavaScript', 'Python / pandas', 'localStorage', 'Responsive UI']}
            />
          </div>
        </section>

        <section id="education" className="bg-muted/70 py-20 md:py-24">
          <div className="container-wide">
            <div>
              <div className="eyebrow text-secondary">05 / Foundation</div>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-[.98] tracking-[-.06em] md:text-5xl">Learning with one foot in the lab.</h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-7 md:p-9">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-accent"><GraduationCap className="h-5 w-5" /></span>
                    <div>
                      <div className="font-display text-xl font-semibold">B.S. Cybersecurity</div>
                      <div className="mt-1 text-sm text-muted-foreground">University at Albany</div>
                    </div>
                  </div>
                  <div className="font-mono-custom text-right text-[11px] uppercase tracking-[.12em] text-secondary">May 2026</div>
                </div>
                <div className="mt-8 border-t border-border pt-5 text-sm leading-6 text-muted-foreground">Researcher, University at Albany · December 2025</div>
              </div>
              <div id="leadership" className="rounded-2xl border border-border bg-card p-7 md:p-9" data-testid="card-leadership">
                <div className="eyebrow text-secondary">Leadership & collaboration</div>
                <h3 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-[-.04em]">Evidence is specific; gaps stay visible.</h3>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">The provided resume does not list a formal leadership title or organization. It does document co-authored research and collaboration tools including Microsoft Teams and Zoom.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="container-wide py-20 md:py-28">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="eyebrow text-secondary">06 / Working toolkit</div>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-[.98] tracking-[-.06em] md:text-6xl">Tools are useful.<br />Judgment is the tool.</h2>
            </div>
            <TerminalSquare className="hidden h-14 w-14 text-secondary/50 md:block" strokeWidth={1} />
          </div>
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            <SkillGroup title="Languages & data" icon={<Layers3 />} items={['Python', 'Java', 'JavaScript', 'HTML', 'CSS', 'PyTorch', 'torchvision', 'NumPy', 'pandas', 'Matplotlib', 'SHAP']} />
            <SkillGroup title="Security operations" icon={<Radar />} items={['Rapid7', 'CrowdStrike', 'Cisco ISE', 'Zscaler ZIA / ZPA / ZDX', 'Wireshark', 'OPNsense', 'Kali Linux', 'DMZ / VPN auditing']} />
            <SkillGroup title="Risk & detection" icon={<ShieldCheck />} items={['TPRM', 'Vendor risk assessment', 'Vulnerability management', 'Risk scoring', 'IOC-based detection', 'Signature-based detection', 'Zero Trust', 'NIST CSF / RMF / SP 800-53', 'FFIEC']} />
            <SkillGroup title="AI safety & workflow" icon={<BrainCircuit />} items={['LLM guardrails', 'Prompt injection and jailbreak detection', 'Adversarial prompting', 'AI safety', 'PII detection', 'Data leakage prevention', 'Input / output filtering', 'GitHub', 'Google Colab', 'Jupyter Notebook', 'UTM', 'VirtualBox', 'Cursor', 'Claude Code', 'Copilot', 'Microsoft Access']} />
          </div>
        </section>

        <section ref={chatRef} id="ambassador" className="bg-primary py-20 text-primary-foreground md:py-28">
          <div className="container-wide grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
            <div>
              <div className="eyebrow text-accent">07 / Virtual ambassador</div>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-[.98] tracking-[-.06em] md:text-6xl">Ask the brief.</h2>
              <p className="mt-6 max-w-sm text-sm leading-6 text-primary-foreground/65">Ask a recruiter-focused question. The ambassador answers using only the verified resume content on this page.</p>
              <div className="mt-8 flex items-center gap-2 font-mono-custom text-[10px] uppercase tracking-[.12em] text-primary-foreground/50"><MessageCircle className="h-3.5 w-3.5 text-accent" /> No private contact details are shared</div>
            </div>
            <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/[.06] p-4 sm:p-6">
              <div className="mb-5 flex items-center justify-between border-b border-primary-foreground/10 pb-4">
                <div className="flex items-center gap-2 font-mono-custom text-[11px] uppercase tracking-[.1em] text-primary-foreground/65"><Sparkles className="h-3.5 w-3.5 text-accent" /> Recruiter Q&A</div>
                {ambassador.data && <button type="button" className="text-[11px] font-semibold text-primary-foreground/60 hover:text-accent" onClick={() => ambassador.reset()} data-testid="button-clear-answer">Clear answer</button>}
              </div>
              <div className="min-h-[115px]">
                {!ambassador.data && !ambassador.isPending && !ambassador.isError && (
                  <div className="grid gap-2 sm:grid-cols-2">
                    {[
                      'What makes Popy a strong cyber risk candidate?',
                      'Which experience best shows third-party risk skills?',
                      'How has Popy worked with LLM safety?',
                      'What tools and frameworks does Popy know?',
                    ].map((starter, index) => (
                      <button key={starter} type="button" className="group flex min-h-14 items-center justify-between rounded-xl border border-primary-foreground/12 bg-primary-foreground/[.04] px-4 text-left text-sm leading-5 text-primary-foreground/80 transition hover:border-accent/60 hover:bg-accent hover:text-accent-foreground" onClick={() => ask(starter)} data-testid={`button-starter-question-${index}`}>
                        <span>{starter}</span><ChevronRight className="ml-3 h-4 w-4 shrink-0 text-accent group-hover:text-accent-foreground" />
                      </button>
                    ))}
                  </div>
                )}
                {ambassador.isPending && (
                  <div className="flex items-center gap-3 rounded-xl border border-primary-foreground/10 bg-primary-foreground/[.04] p-5 text-sm text-primary-foreground/70" role="status" data-testid="status-ambassador-loading">
                    <LoaderCircle className="h-4 w-4 animate-spin text-accent" /> Reviewing the verified brief…
                  </div>
                )}
                {ambassador.isError && (
                  <div className="rounded-xl border border-destructive/50 bg-destructive/10 p-5" role="alert" data-testid="status-ambassador-error">
                    <div className="flex items-center gap-2 font-semibold text-red-200"><AlertCircle className="h-4 w-4" /> The brief could not answer right now.</div>
                    <button type="button" className="mt-3 text-sm font-semibold text-accent underline underline-offset-4" onClick={() => ask(question || 'What makes Popy a strong cyber risk candidate?')} data-testid="button-retry-ambassador">Try again</button>
                  </div>
                )}
                {ambassador.data && (
                  <div className="rounded-xl bg-card p-5 text-card-foreground" data-testid="content-ambassador-answer">
                    <div className="font-mono-custom text-[10px] uppercase tracking-[.13em] text-secondary">Answer</div>
                    <p className="mt-3 whitespace-pre-line text-sm leading-7">{ambassador.data.answer}</p>
                    {ambassador.data.links.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
                        {ambassador.data.links.map((link) => (
                          <a key={`${link.section}-${link.href}`} href={link.href} className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-bold text-secondary transition hover:border-secondary" data-testid={`link-answer-${link.section}`}>
                            <Link2 className="h-3 w-3" /> {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
              <form className="mt-5 flex gap-2 border-t border-primary-foreground/10 pt-5" onSubmit={submitQuestion}>
                <label className="sr-only" htmlFor="ambassador-question">Ask a recruiter-focused question</label>
                <input id="ambassador-question" value={question} onChange={(event) => setQuestion(event.target.value)} maxLength={800} placeholder="Ask about experience, tools, or fit…" className="min-w-0 flex-1 rounded-xl border border-primary-foreground/15 bg-primary-foreground/[.07] px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/35 focus:border-accent focus:outline-none" data-testid="input-ambassador-question" />
                <button type="submit" disabled={!question.trim() || ambassador.isPending} className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-40" aria-label="Send question" data-testid="button-send-question">
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </section>

        <footer className="container-wide flex flex-col gap-8 py-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-bold text-accent">PH</span>
              <span className="font-display font-semibold">Popy Halder</span>
            </div>
            <p className="mt-3 max-w-sm text-xs leading-5 text-muted-foreground">Cyber risk, third-party risk, security operations, and LLM safety research.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a href="https://www.linkedin.com/in/popy-halder-69b96727/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-bold transition hover:border-secondary hover:text-secondary" data-testid="link-footer-linkedin"><Linkedin className="h-3.5 w-3.5" /> LinkedIn <ExternalLink className="h-3 w-3" /></a>
            <a href={resumePdf} download="Popy-Halder-Resume.pdf" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-bold transition hover:border-secondary hover:text-secondary" data-testid="link-footer-download"><FileText className="h-3.5 w-3.5" /> Resume <Download className="h-3 w-3" /></a>
          </div>
        </footer>
      </div>
    </main>
  );
}

function EvidenceCard({ icon, label, title, copy, accent, className = '' }: { icon: ReactNode; label: string; title: string; copy: string; accent: 'lime' | 'teal' | 'coral'; className?: string }) {
  const accentClass = accent === 'lime' ? 'text-accent bg-accent/15' : accent === 'teal' ? 'text-secondary bg-secondary/12' : 'text-[#d96b4d] bg-[#d96b4d]/12';
  return (
    <article className={`lift rounded-2xl border border-border bg-card p-7 ${className}`} data-testid={`card-evidence-${label.toLowerCase().replaceAll(' ', '-')}`}>
      <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${accentClass}`}>{icon}</div>
      <div className="mt-9 eyebrow text-muted-foreground">{label}</div>
      <h3 className="mt-3 max-w-[430px] font-display text-2xl font-semibold leading-[1.04] tracking-[-.045em]">{title}</h3>
      <p className="mt-4 max-w-[500px] text-sm leading-6 text-muted-foreground">{copy}</p>
    </article>
  );
}

function ExperienceRow({ number, icon, title, org, location, date, points }: { number: string; icon: ReactNode; title: string; org: string; location: string; date: string; points: string[] }) {
  return (
    <article className="lift rounded-2xl border border-border bg-background p-6 md:p-8" data-testid={`card-experience-${number}`}>
      <div className="flex flex-wrap items-start justify-between gap-5">
        <div className="flex gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-accent">{icon}</div>
          <div>
            <div className="font-mono-custom text-[10px] uppercase tracking-[.13em] text-secondary">Experience {number}</div>
            <h3 className="mt-2 max-w-[600px] font-display text-xl font-semibold leading-tight tracking-[-.03em]">{title}</h3>
            <div className="mt-2 text-sm font-semibold text-muted-foreground">{org}</div>
          </div>
        </div>
        <div className="flex shrink-0 flex-col gap-1 text-left text-xs text-muted-foreground sm:text-right">
          <span className="inline-flex items-center gap-1.5 sm:justify-end"><CalendarDays className="h-3.5 w-3.5 text-secondary" /> {date}</span>
          <span className="inline-flex items-center gap-1.5 sm:justify-end"><MapPin className="h-3.5 w-3.5 text-secondary" /> {location}</span>
        </div>
      </div>
      <ul className="mt-7 space-y-3 border-t border-border pt-5">
        {points.map((point) => <li className="flex gap-3 text-sm leading-6 text-muted-foreground" key={point}><Check className="mt-1 h-4 w-4 shrink-0 text-secondary" /> <span>{point}</span></li>)}
      </ul>
    </article>
  );
}

function ProjectCard({ icon, index, title, meta, description, detail, tags, featured = false }: { icon: ReactNode; index: string; title: string; meta: string; description: string; detail: string; tags: string[]; featured?: boolean }) {
  return (
    <article className={`lift group rounded-2xl border border-border bg-card p-7 ${featured ? 'lg:p-9' : ''}`} data-testid={`card-project-${index.toLowerCase()}`}>
      <div className="flex items-start justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-accent">{icon}</span>
        <span className="font-mono-custom text-xs text-secondary">{index} / 02</span>
      </div>
      <h3 className={`mt-12 max-w-[600px] font-display font-semibold leading-[.98] tracking-[-.055em] ${featured ? 'text-4xl md:text-5xl' : 'text-3xl'}`}>{title}</h3>
      <div className="mt-4 font-mono-custom text-[10px] uppercase leading-5 tracking-[.1em] text-muted-foreground">{meta}</div>
      <p className="mt-7 max-w-[590px] text-base leading-7 text-foreground/85">{description}</p>
      <p className="mt-4 max-w-[590px] text-sm leading-6 text-muted-foreground">{detail}</p>
      <div className="mt-8 flex flex-wrap gap-2">
        {tags.map((tag) => <span className="rounded-full border border-border px-3 py-1.5 text-[11px] font-semibold text-muted-foreground" key={tag}>{tag}</span>)}
      </div>
      <div className="mt-10 flex items-center gap-2 text-xs font-bold text-secondary opacity-70 transition group-hover:opacity-100"><ArrowUpRight className="h-4 w-4" /> Evidence-led work</div>
    </article>
  );
}

function SkillGroup({ title, icon, items }: { title: string; icon: ReactNode; items: string[] }) {
  return (
    <div data-testid={`group-skills-${title.toLowerCase().replaceAll(' ', '-')}`}>
      <div className="flex items-center gap-2 font-display text-base font-semibold"><span className="text-secondary">{icon}</span>{title}</div>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => <span className="rounded-md bg-muted px-2.5 py-1.5 font-mono-custom text-[10px] leading-4 text-muted-foreground" key={item}>{item}</span>)}
      </div>
    </div>
  );
}

function Router() {
  return (
    // Keep a shared shell (sidebar, navbar) outside the boundary so it
    // survives a page crash.
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
