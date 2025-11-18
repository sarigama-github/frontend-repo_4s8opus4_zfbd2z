import { motion } from 'framer-motion'

export default function ProductCard({ product }) {
  return (
    <a href={`/p/${product.slug}`} className="group block rounded-2xl overflow-hidden bg-white shadow hover:shadow-md transition">
      <div className="aspect-[4/5] w-full overflow-hidden">
        <img src={product.images?.[0]} alt={product.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-4">
        <h3 className="text-[var(--eclipse-charcoal)] font-medium">{product.title}</h3>
        <div className="mt-1 text-sm text-[var(--eclipse-charcoal)]/70">${product.price.toFixed(2)}</div>
      </div>
    </a>
  )
}
