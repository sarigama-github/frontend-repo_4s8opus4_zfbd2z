const categories = [
  { title: 'New', image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2000&auto=format&fit=crop' },
  { title: 'Ready-to-Wear', image: 'https://images.unsplash.com/photo-1620924049153-4d32fcbe88fe?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZXd8ZW58MHwwfHx8MTc2MzQ3Mzk0Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { title: 'Occasion', image: 'https://images.unsplash.com/photo-1620924049153-4d32fcbe88fe?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZXd8ZW58MHwwfHx8MTc2MzQ3Mzk0Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { title: 'Atelier', image: 'https://images.unsplash.com/photo-1620924049153-4d32fcbe88fe?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZXd8ZW58MHwwfHx8MTc2MzQ3Mzk0Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
]

export default function CategoryGrid() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-6xl px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((c) => (
          <a key={c.title} href="#" className="group relative rounded-2xl overflow-hidden shadow bg-white">
            <img src={c.image} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" alt={c.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <h3 className="text-white font-medium tracking-wide">{c.title}</h3>
              <span className="px-3 py-1 rounded-full text-[12px] bg-white/80 text-[var(--eclipse-charcoal)]">Shop</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
