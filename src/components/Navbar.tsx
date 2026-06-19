export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4">
      <nav className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-7 py-3 backdrop-blur-xl">
        <span className="font-display text-lg font-bold tracking-[0.3em] text-amber-100">MONOLITH</span>
        <div className="hidden gap-8 text-sm text-white/60 md:flex">
          <a className="transition hover:text-amber-100" href="#">Work</a>
          <a className="transition hover:text-amber-100" href="#">Studio</a>
          <a className="transition hover:text-amber-100" href="#">Journal</a>
        </div>
        <button className="rounded-full border border-amber-200/40 px-5 py-2 text-sm font-medium text-amber-100 transition hover:bg-amber-200/10">
          Start a project
        </button>
      </nav>
    </header>
  )
}
