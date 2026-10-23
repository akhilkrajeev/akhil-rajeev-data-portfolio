import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akhil K Rajeev — Data Analyst" },
      { name: "description", content: "Portfolio of Akhil K Rajeev, Data Analyst with a B.Tech in Computer Science & Engineering — from dashboards to GNN-based C2 beaconing detection." },
      { property: "og:title", content: "Akhil K Rajeev — Data Analyst" },
      { property: "og:description", content: "Turning raw data into clear decisions. SQL, Python, Power BI, and graph neural networks for security analytics." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const skills = ["SQL", "Python", "Pandas", "Power BI", "Tableau", "Excel", "Statistics", "Data Cleaning", "Data Visualization", "Machine Learning Basics", "Graph Neural Networks"];

const featured = {
  label: "FEATURED · SECURITY ANALYTICS",
  t: "C2 Beaconing Detection using Graph Neural Networks",
  d: "Modelled network traffic as a graph and trained a graph neural network to catch command-and-control (C2) beaconing — the quiet, repeated check-ins malware makes back to its server. That periodic, machine-like rhythm hides inside ordinary flow data, and the model learns to flag it.",
  tags: ["Python", "Graph Neural Networks", "Network Security", "Traffic Analysis"],
  steps: [
    "NetFlow records become nodes",
    "Host conversations become edges",
    "The GNN learns beaconing rhythms",
    "Suspicious hosts are ranked for review",
  ],
};

const projects = [
  { n: "01", t: "Sales Performance Dashboard", d: "Interactive Power BI dashboard tracking revenue, regional trends and product KPIs.", tags: ["Power BI", "DAX"] },
  { n: "02", t: "Customer Churn Analysis", d: "Explored customer behaviour in Python to identify the key drivers of churn.", tags: ["Python", "Pandas", "Seaborn"] },
  { n: "03", t: "E‑commerce SQL Insights", d: "Wrote SQL queries to uncover top products, repeat buyers and seasonal patterns.", tags: ["SQL", "PostgreSQL"] },
];

const bars = [62, 40, 78, 55, 90, 70, 84];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground font-body">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="font-display text-lg font-bold">AKR<span className="text-primary">.</span></span>
        <nav className="flex gap-6 text-sm text-muted-foreground">
          <a href="#skills" className="hover:text-primary">Skills</a>
          <a href="#projects" className="hover:text-primary">Projects</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="font-mono text-sm text-primary">&gt; SELECT * FROM portfolio;</p>
          <h1 className="mt-4 font-display text-5xl font-bold leading-tight md:text-7xl">Akhil K<br />Rajeev</h1>
          <p className="mt-4 text-xl text-muted-foreground">Data Analyst · B.Tech CSE</p>
          <p className="mt-6 max-w-md text-muted-foreground">I turn messy data into clear stories and decisions — through clean queries, sharp analysis and dashboards people actually use.</p>
          <div className="mt-8 flex gap-4">
            <a href="#projects" className="rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:opacity-90">View work</a>
            <a href="#contact" className="rounded-md border border-border px-6 py-3 font-medium hover:border-primary">Get in touch</a>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-8">
          <p className="font-mono text-xs text-muted-foreground">insights_per_week.csv</p>
          <div className="mt-6 flex h-56 items-end gap-3">
            {bars.map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-primary/80" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-6 text-center">
            <div><p className="font-display text-2xl font-bold text-primary">10+</p><p className="text-xs text-muted-foreground">Projects</p></div>
            <div><p className="font-display text-2xl font-bold text-primary">5+</p><p className="text-xs text-muted-foreground">Tools</p></div>
            <div><p className="font-display text-2xl font-bold text-primary">∞</p><p className="text-xs text-muted-foreground">Curiosity</p></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-mono text-sm text-primary">// about</h2>
        <p className="mt-4 max-w-3xl font-display text-2xl leading-relaxed md:text-3xl">
          A Computer Science & Engineering graduate who fell for data. I combine an engineer's rigor with an analyst's curiosity to find the "why" behind the numbers.
        </p>
        <div className="mt-10 rounded-xl border border-border bg-card p-6">
          <p className="font-mono text-xs text-muted-foreground">EDUCATION</p>
          <p className="mt-2 font-display text-xl font-semibold">B.Tech — Computer Science & Engineering</p>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-mono text-sm text-primary">// skills</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {skills.map((s) => (
            <span key={s} className="rounded-full border border-border bg-card px-4 py-2 text-sm hover:border-primary">{s}</span>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-mono text-sm text-primary">// projects</h2>
        <article className="mt-6 rounded-xl border border-primary/40 bg-card p-8">
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-center">
            <div>
              <p className="font-mono text-xs tracking-wider text-primary">{featured.label}</p>
              <h3 className="mt-3 font-display text-2xl font-bold leading-snug md:text-3xl">{featured.t}</h3>
              <p className="mt-4 max-w-2xl text-muted-foreground">{featured.d}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {featured.tags.map((t) => <span key={t} className="rounded bg-secondary px-2 py-1 font-mono text-xs text-secondary-foreground">{t}</span>)}
              </div>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <p className="font-mono text-xs text-muted-foreground">how it works</p>
              <ol className="mt-5 space-y-4 text-sm">
                {featured.steps.map((s, i) => (
                  <li key={s} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/40 font-mono text-xs text-primary">{i + 1}</span>
                    <span className="text-muted-foreground">{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </article>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <article key={p.n} className="rounded-xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary">
              <p className="font-mono text-sm text-primary">{p.n}</p>
              <h3 className="mt-3 font-display text-xl font-semibold">{p.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.d}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => <span key={t} className="rounded bg-secondary px-2 py-1 font-mono text-xs text-secondary-foreground">{t}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h2 className="font-display text-4xl font-bold md:text-5xl">Let's make data talk.</h2>
        <p className="mt-4 text-muted-foreground">Open to data analyst roles and collaborations.</p>
        <a href="mailto:akhil@example.com" className="mt-8 inline-block rounded-md bg-primary px-8 py-3 font-medium text-primary-foreground hover:opacity-90">akhil@example.com</a>
      </section>

      <footer className="border-t border-border py-6 text-center text-xs text-muted-foreground">© 2026 Akhil K Rajeev</footer>
    </main>
  );
}
