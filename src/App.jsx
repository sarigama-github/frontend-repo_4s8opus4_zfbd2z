import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CategoryGrid from './components/CategoryGrid'

function App() {
  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(180deg, var(--lunar-blush) 0%, #F3EAF4 40%, #FFFFFF 100%)'
    }}>
      <style>{`
        :root{
          --lunar-blush:#F7E7E9;
          --stellar-lavender:#C7B8EA;
          --eclipse-charcoal:#2F2E41;
          --glimmer-gold:#FFD9B0;
        }
      `}</style>
      <Navbar />
      <main className="pt-28">
        <Hero />
        <CategoryGrid />
      </main>
      <footer className="mt-16 border-t border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-[var(--eclipse-charcoal)]/70 grid md:grid-cols-3 gap-6">
          <div>
            <p>Size & Fit • Sustainability • Careers • Press • Contact • GDPR</p>
          </div>
          <div className="text-center">© {new Date().getFullYear()} Éclat de Lune • 3% to Women in STEM</div>
          <div className="text-right">USD • EUR • GBP</div>
        </div>
      </footer>
    </div>
  )
}

export default App
