import { motion } from 'framer-motion'
import React, { Suspense } from 'react'

const MoonHalo = React.lazy(() => import('./MoonHalo'))

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 right-20 w-72 h-72 rounded-full blur-3xl opacity-50" style={{background: 'radial-gradient(circle, #C7B8EA55, transparent 60%)'}}></div>
        <div className="absolute -bottom-24 left-10 w-96 h-96 rounded-full blur-3xl opacity-60" style={{background: 'radial-gradient(circle, #FFD9B055, transparent 60%)'}}></div>
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl font-serif tracking-tight text-[var(--eclipse-charcoal)]"
        >
          Éclat de Lune
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.15 } }}
          className="mt-4 text-lg sm:text-xl text-[var(--eclipse-charcoal)]/80"
        >
          Wear the sky.
        </motion.p>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} className="mt-10 flex items-center justify-center gap-4">
          <a href="#products" className="px-5 py-3 rounded-full bg-[var(--stellar-lavender)] text-[var(--eclipse-charcoal)] font-medium shadow hover:shadow-md transition">New Arrivals</a>
          <a href="#universe" className="px-5 py-3 rounded-full bg-black/5 text-[var(--eclipse-charcoal)] font-medium hover:bg-black/10 transition">Explore Universe</a>
        </motion.div>
      </div>

      <Suspense fallback={null}>
        <MoonHalo />
      </Suspense>
    </section>
  )
}
