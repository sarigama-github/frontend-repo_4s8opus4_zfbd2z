import { useState } from 'react'
import { ShoppingBag, Search, User, Menu } from 'lucide-react'

const links = [
  'New',
  'Ready-to-Wear',
  'Occasion',
  'Atelier',
  'Journal',
  'Universe',
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl bg-white/50 dark:bg-white/10 backdrop-blur-xl border border-white/30 shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <button className="md:hidden p-2 rounded-lg hover:bg-black/5" onClick={() => setOpen(v => !v)}>
                <Menu className="w-5 h-5 text-[var(--eclipse-charcoal)]" />
              </button>
              <a href="/" className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[var(--stellar-lavender)] to-[var(--glimmer-gold)] shadow" />
                <span className="font-serif text-lg tracking-wide text-[var(--eclipse-charcoal)]">Éclat de Lune</span>
              </a>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              {links.map(l => (
                <a key={l} href="#" className="text-sm text-[var(--eclipse-charcoal)]/80 hover:text-[var(--eclipse-charcoal)] transition-colors">
                  {l}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button className="p-2 rounded-lg hover:bg-black/5" aria-label="Search">
                <Search className="w-5 h-5 text-[var(--eclipse-charcoal)]" />
              </button>
              <button className="p-2 rounded-lg hover:bg-black/5" aria-label="Bag">
                <ShoppingBag className="w-5 h-5 text-[var(--eclipse-charcoal)]" />
              </button>
              <button className="p-2 rounded-lg hover:bg-black/5" aria-label="Profile">
                <User className="w-5 h-5 text-[var(--eclipse-charcoal)]" />
              </button>
            </div>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4 grid grid-cols-2 gap-3">
              {links.map(l => (
                <a key={l} href="#" className="text-sm bg-white/60 rounded-lg px-3 py-2 text-[var(--eclipse-charcoal)]/80 hover:text-[var(--eclipse-charcoal)]">
                  {l}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
