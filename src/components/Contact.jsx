import React, { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const base = import.meta.env.VITE_BACKEND_URL || ''
      const res = await fetch(`${base}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (res.ok) setStatus('Thanks! We\'ll be in touch within 24 hours.')
      else setStatus(data?.detail || 'Something went wrong')
    } catch (e) {
      setStatus('Network error')
    }
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Let’s build your store</h2>
          <p className="mt-3 text-slate-600">Tell us about your brand and goals. We’ll respond with a plan and timeline.</p>
          <div className="mt-6 p-6 rounded-2xl border border-slate-200 bg-slate-50">
            <p className="text-sm text-slate-700">Prefer to pay a deposit now? Use the pricing section buttons to pay securely via Stripe.</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-4">
          <input name="name" required placeholder="Full name" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200" />
          <input name="email" required type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200" />
          <input name="company" placeholder="Company (optional)" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200" />
          <select name="plan" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200">
            <option value="">Select plan (optional)</option>
            <option value="starter">Starter</option>
            <option value="growth">Growth</option>
            <option value="premium">Premium</option>
          </select>
          <textarea name="message" required rows="5" placeholder="Tell us about your project" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200" />
          <button type="submit" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800">Send message</button>
          <p className="text-sm text-slate-600">{status}</p>
        </form>
      </div>
    </section>
  )
}
