import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function ProductGrid() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API}/api/products`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) {
    return <div className="mx-auto max-w-6xl px-6 py-12 text-[var(--eclipse-charcoal)]/70">Loading products…</div>
  }

  if (!items.length) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-12 text-[var(--eclipse-charcoal)]/70">
        No products yet. <button onClick={async () => {
          try {
            const r = await fetch(`${API}/api/seed`, { method: 'POST' })
            if (r.ok) {
              const refreshed = await fetch(`${API}/api/products`).then(r=>r.json())
              setItems(refreshed)
            }
          } catch (e) { console.error(e) }
        }} className="underline">Seed sample data</button>.
      </div>
    )
  }

  return (
    <section className="py-6">
      <div className="mx-auto max-w-6xl px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(p => <ProductCard key={p.slug} product={p} />)}
      </div>
    </section>
  )
}
