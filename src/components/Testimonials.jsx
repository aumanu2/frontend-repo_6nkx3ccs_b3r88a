import React from 'react'

const testimonials = [
  { quote: 'They launched our store in under two weeks and hit a 4.2% conversion rate in month one.', author: 'Maya, Beauty Brand' },
  { quote: 'Site speed jumped to 98 on Lighthouse. Revenue followed.', author: 'Alex, Apparel Founder' },
  { quote: 'Professional, fast, and strategic. Worth every dollar.', author: 'Jordan, DTC Operator' },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6 md:px-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">What clients say</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure key={i} className="p-8 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <blockquote className="text-slate-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-slate-900">— {t.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
