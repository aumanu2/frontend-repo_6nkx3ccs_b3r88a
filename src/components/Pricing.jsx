import React from 'react'
import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Starter',
    price: '$999',
    features: ['Store setup', 'Theme install + basics', 'Payment & shipping', 'Speed pass'],
    highlight: false
  },
  {
    name: 'Growth',
    price: '$2,499',
    features: ['Custom sections', 'CRO essentials', 'App stack setup', 'Email capture + flows'],
    highlight: true
  },
  {
    name: 'Premium',
    price: '$4,999',
    features: ['Advanced customization', 'Performance + CRO suite', 'Migrations & automations', 'Priority support'],
    highlight: false
  }
]

export default function Pricing({ onPayClick }) {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Choose a package that fits your stage. Upgrade anytime.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className={`relative p-8 rounded-2xl border ${t.highlight ? 'bg-slate-900 text-white border-slate-800 shadow-2xl' : 'bg-white border-slate-200'} `}>
              {t.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs bg-emerald-400 text-slate-900 font-semibold px-3 py-1 rounded-full">Most Popular</span>
              )}
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <div className="mt-4 text-4xl font-extrabold">{t.price}</div>
              <ul className="mt-6 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => onPayClick(t)} className={`mt-8 w-full inline-flex items-center justify-center py-3 rounded-xl font-semibold transition ${t.highlight ? 'bg-emerald-400 text-slate-900 hover:brightness-110' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                Start with {t.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
