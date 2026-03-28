import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Courses', path: '/courses' },
  { name: 'Study Resources', path: '/resources' },
  { name: 'Toppers', path: '/toppers' },
  { name: 'About Us', path: '/about' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      {/* Mobile Backdrop */}
      <div
        className={`mobile-menu-backdrop ${isOpen ? 'open' : ''} lg:hidden`}
        onClick={() => setIsOpen(false)}
      />

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav ambient-shadow' : 'bg-transparent'}`}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <img src="/images/logo.svg" alt="Ravindra IAS Logo" className="w-11 h-11 rounded-full group-hover:scale-110 transition-transform duration-300" />
              <div>
                <span className={`font-headline font-bold text-lg tracking-tight block leading-tight transition-colors duration-300 ${scrolled ? 'text-primary-container' : 'text-white'}`}>Ravindra IAS</span>
                <span className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${scrolled ? 'text-outline' : 'text-white/60'}`}>Gwalior</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === link.path
                      ? scrolled
                        ? 'text-primary-container bg-primary-fixed/30'
                        : 'text-white bg-white/15'
                      : scrolled
                        ? 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/faq"
                className={`hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-[0.375rem] text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
                  scrolled
                    ? 'gradient-primary text-on-primary hover:shadow-lg'
                    : 'bg-white/15 backdrop-blur-sm text-white border border-white/20 hover:bg-white/25'
                }`}
              >
                <span className="material-icons-outlined text-base">edit_note</span>
                Enquire Now
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${scrolled ? 'hover:bg-surface-container' : 'hover:bg-white/10'}`}
                aria-label="Toggle menu"
              >
                <div className="flex flex-col gap-1.5 w-5">
                  <span className={`block h-0.5 rounded-full transition-all duration-300 ${scrolled ? 'bg-on-surface' : 'bg-white'} ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                  <span className={`block h-0.5 rounded-full transition-all duration-300 ${scrolled ? 'bg-on-surface' : 'bg-white'} ${isOpen ? 'opacity-0 scale-x-0' : ''}`}></span>
                  <span className={`block h-0.5 rounded-full transition-all duration-300 ${scrolled ? 'bg-on-surface' : 'bg-white'} ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu — Slide-down panel */}
        <div className={`lg:hidden transition-all duration-400 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white border-t border-outline-variant/15 px-6 pb-6 pt-3 shadow-xl">
            {navLinks.map((link, i) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3.5 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === link.path
                    ? 'text-primary-container bg-primary-fixed/30'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                }`}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/faq"
              className="mt-3 flex items-center justify-center gap-2 px-5 py-3.5 gradient-primary text-on-primary rounded-lg text-sm font-semibold hover:shadow-lg transition-all"
            >
              <span className="material-icons-outlined text-base">edit_note</span>
              Enquire Now
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
