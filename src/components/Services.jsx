import React from 'react'
import { CheckCircle2 } from 'lucide-react'

const services = [
  {
    title: 'Shopify Store Setup',
    points: ['Custom domain, apps, analytics', 'Payment & shipping configuration', 'Foundational SEO setup']
  },
  {
    title: 'Theme Customization',
    points: ['Tailored to your brand', 'Conversion-focused sections', 'Responsive across devices']
  },
  {
    title: 'Speed Optimization',
    points: ['Image compression & lazy loading', 'App bloat reduction', 'Core Web Vitals improvements']
  },
  {
    title: 'Monthly Maintenance',
    points: ['Updates & bug fixes', 'A/B testing & CRO tweaks', 'Performance monitoring']
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Everything you need to sell with confidence</h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
              <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              <ul className="mt-4 space-y-2">
                {s.points.map(p => (
                  <li key={p} className="flex items-start gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
