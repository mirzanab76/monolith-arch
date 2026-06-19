type Step = { no: string; title: string; desc: string }
type Card = { name: string; desc: string }
type Stat = { value: string; label: string }

const STEPS: Step[] = [
  { no: "01", title: "Listen", desc: "We study the site, the client, and the way you live." },
  { no: "02", title: "Sketch", desc: "Ideas take shape in hand drawings and physical models." },
  { no: "03", title: "Refine", desc: "We test every line in light, scale, and material." },
  { no: "04", title: "Build", desc: "We see each detail through to the final millimeter." },
]

const PROJECTS: Card[] = [
  { name: "Cliff House", desc: "A cantilevered retreat suspended above the sea." },
  { name: "Glass Pavilion", desc: "A civic space that dissolves into its garden." },
  { name: "Vertical Village", desc: "A residential tower that breathes like a city." },
]

const SERVICES: Card[] = [
  { name: "Architecture", desc: "From concept to completion, at every scale." },
  { name: "Interiors", desc: "Spaces composed down to the last fixture." },
  { name: "Master planning", desc: "Neighborhoods designed for how people gather." },
]

const STATS: Stat[] = [
  { value: "1996", label: "studio founded" },
  { value: "240+", label: "projects delivered" },
  { value: "19", label: "countries" },
  { value: "32", label: "design awards" },
]

export function Sections() {
  return (
    <div className="w-screen text-[#ece7df]">
      <section className="flex h-screen w-screen flex-col items-center justify-center px-8 text-center">
        <p className="mb-5 text-xs uppercase tracking-[0.4em] text-amber-200/70">MONOLITH · Architecture & Design</p>
        <h1 className="font-display max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
          We build silence
          <br />
          <span className="bg-gradient-to-r from-amber-200 via-orange-200 to-stone-200 bg-clip-text text-transparent">
            into form.
          </span>
        </h1>
        <p className="mt-7 max-w-xl text-lg text-white/60">
          An architecture studio shaping calm, enduring spaces from light, mass, and the quiet
          intervals between them.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="rounded-full bg-amber-100 px-7 py-3 font-medium text-black transition hover:bg-amber-50">
            View our work
          </button>
          <button className="rounded-full border border-white/20 px-7 py-3 font-medium text-white backdrop-blur transition hover:bg-white/10">
            Start a project
          </button>
        </div>
      </section>

      <section className="flex h-screen w-screen items-center px-8 md:px-20">
        <div className="max-w-lg">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-amber-200/70">The studio</p>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
            Architecture that ages with grace.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/60">
            For nearly three decades MONOLITH has designed homes, museums, and public spaces that
            feel inevitable, as if they had always belonged to their place.
          </p>
        </div>
      </section>

      <section className="flex h-screen w-screen items-center justify-end px-8 md:px-20">
        <div className="max-w-lg text-right">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-amber-200/70">Our philosophy</p>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
            Light, mass, and the space between.
          </h2>
          <ul className="mt-8 space-y-4 text-white/65">
            <li>Every project begins with the quality of light.</li>
            <li>We design for decades, not for trends.</li>
            <li>Restraint is our most powerful material.</li>
          </ul>
        </div>
      </section>

      <section className="flex h-screen w-screen flex-col justify-center px-8 md:px-20">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-amber-200/70">How we work</p>
        <h2 className="font-display max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">From site to structure.</h2>
        <div className="mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div
              key={step.no}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition hover:border-amber-200/40"
            >
              <div className="font-display text-sm font-semibold text-amber-200/80">{step.no}</div>
              <h3 className="font-display mt-3 text-2xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-white/55">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex h-screen w-screen flex-col justify-center px-8 md:px-20">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-amber-200/70">Selected work</p>
        <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">Spaces we are proud of.</h2>
        <div className="mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {PROJECTS.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition hover:border-amber-200/40"
            >
              <h3 className="font-display text-2xl text-amber-100">{p.name}</h3>
              <p className="mt-3 text-white/55">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex h-screen w-screen flex-col justify-center px-8 md:px-20">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-amber-200/70">What we do</p>
        <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">One studio, every scale.</h2>
        <div className="mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {SERVICES.map((sv) => (
            <div
              key={sv.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition hover:border-stone-200/40"
            >
              <h3 className="font-display text-2xl text-stone-100">{sv.name}</h3>
              <p className="mt-3 text-white/55">{sv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex h-screen w-screen flex-col items-center justify-center px-8">
        <p className="mb-12 text-xs uppercase tracking-[0.4em] text-amber-200/70">The studio in numbers</p>
        <div className="grid w-full max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display bg-gradient-to-b from-white to-white/50 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
                {s.value}
              </div>
              <div className="mt-3 text-sm text-white/50">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex h-screen w-screen flex-col items-center justify-center px-8 text-center">
        <blockquote className="font-display max-w-3xl text-3xl font-medium leading-snug tracking-tight md:text-5xl">
          "A studio that treats restraint as the highest form of luxury."
        </blockquote>
        <p className="mt-6 text-white/50">- Architectural Digest</p>
        <p className="mt-16 text-xs uppercase tracking-[0.4em] text-white/40">Recognized by</p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 font-display text-lg font-semibold text-white/70">
          <span>RIBA</span>
          <span>Dezeen Awards</span>
          <span>AIA</span>
          <span>Wallpaper</span>
        </div>
      </section>

      <section className="flex h-screen w-screen flex-col items-center justify-center px-8 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-amber-200/70">Built to last</p>
        <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">Low impact, by design.</h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
          We specify reclaimed stone, low-carbon concrete, and timber from regenerative forests,
          designing buildings that tread lightly and are made to outlive us.
        </p>
      </section>

      <section className="flex h-screen w-screen flex-col justify-between px-8 pb-12 pt-32 md:px-20">
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <h2 className="font-display max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Let us design something enduring.
          </h2>
          <p className="mt-5 max-w-xl text-white/55">
            Tell us about your site, your vision, and your timeline.
          </p>
          <button className="mt-9 rounded-full bg-gradient-to-r from-amber-200 to-orange-200 px-9 py-4 text-lg font-semibold text-black transition hover:opacity-90">
            Start a project
          </button>
        </div>
        <div className="flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row md:items-center">
          <span className="font-display font-bold tracking-[0.3em] text-amber-100">MONOLITH</span>
          <div className="flex gap-8">
            <a href="#">Work</a>
            <a href="#">Studio</a>
            <a href="#">Journal</a>
            <a href="#">Contact</a>
          </div>
          <span className="text-white/30">(c) 2026 Monolith Studio. All rights reserved.</span>
        </div>
      </section>
    </div>
  )
}
