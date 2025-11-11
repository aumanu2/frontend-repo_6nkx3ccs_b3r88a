import React, { useEffect, useState } from 'react'

export default function Showcase() {
  const [templates, setTemplates] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || ''
        const res = await fetch(`${base}/api/templates`)
        const data = await res.json()
        setTemplates(data)
      } catch (e) {
        console.error(e)
      }
    }
    load()
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Demo projects & templates</h2>
          <a href="#contact" className="hidden md:inline-flex items-center px-4 py-2 rounded-xl bg-slate-900 text-white">Request a demo</a>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {templates.map(t => (
            <a key={t.title} href={t.url} className="group rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 hover:shadow-xl transition">
              <div className="aspect-video overflow-hidden">
                <img src={t.image} alt={t.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{t.title}</h3>
                <p className="text-slate-600 text-sm mt-1">{t.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
