import React from 'react'

export function Navbar({ onCTAClick }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b border-slate-200/60">
      <div className="container mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#" className="font-extrabold tracking-tight text-slate-900">StoreForge</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#services" className="hover:text-slate-900">Services</a>
          <a href="#pricing" className="hover:text-slate-900">Pricing</a>
          <a href="#showcase" className="hover:text-slate-900">Showcase</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </nav>
        <button onClick={onCTAClick} className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800">Start Your Store Today</button>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="py-10 bg-slate-950 text-slate-300">
      <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm">© {new Date().getFullYear()} StoreForge Agency. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div>
      </div>
    </footer>
  )
}
