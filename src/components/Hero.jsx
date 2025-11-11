import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero({ onCTAClick }) {
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 opacity-50">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/90" />
      <div className="relative z-10 container mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="py-20">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs tracking-wider uppercase">Shopify Experts</span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            Launch Your Dream Store—
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-300 bg-clip-text text-transparent">Fast, Beautiful, and Profitable</span>
          </h1>
          <p className="mt-6 text-slate-300 max-w-xl">We design, build, and optimize Shopify stores that convert. From setup and theme customization to speed optimization and ongoing growth.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button onClick={onCTAClick} className="pointer-events-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-teal-400 text-slate-900 font-semibold hover:brightness-110 transition">
              Start Your Store Today
            </button>
            <a href="#pricing" className="pointer-events-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/15 transition">View Pricing</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
