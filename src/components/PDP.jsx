import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function PDP() {
  const { slug } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const r = await fetch(`${API}/api/products/${slug}`)
        if (!r.ok) throw new Error('Not found')
        setProduct(await r.json())
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [slug])

  if (loading) return <div className="mx-auto max-w-6xl px-6 py-12">Loading…</div>
  if (!product) return <div className="mx-auto max-w-6xl px-6 py-12">Product not found. <Link to="/" className="underline">Back</Link></div>

  return (
    <div className="mx-auto max-w-6xl px-6 py-10 grid md:grid-cols-2 gap-8">
      <div className="rounded-2xl overflow-hidden bg-white shadow">
        <img src={product.images?.[0]} alt={product.title} className="w-full object-cover" />
      </div>
      <div>
        <h1 className="text-3xl font-serif text-[var(--eclipse-charcoal)]">{product.title}</h1>
        <div className="mt-2 text-[var(--eclipse-charcoal)]/70">${product.price?.toFixed(2)}</div>
        <p className="mt-4 text-[var(--eclipse-charcoal)]/80">{product.description}</p>
        <div className="mt-6">
          <div className="text-sm text-[var(--eclipse-charcoal)]/70">Sizes</div>
          <div className="mt-2 flex flex-wrap gap-2">
            {(product.sizes||[]).map(s => (
              <button key={s} className="px-3 py-1.5 rounded-full bg-black/5 hover:bg-black/10">{s}</button>
            ))}
          </div>
        </div>
        {product.co2_saved_kg != null && (
          <div className="mt-6 text-sm text-[var(--eclipse-charcoal)]/70">CO₂ saved: {product.co2_saved_kg} kg</div>
        )}
      </div>
    </div>
  )
}
