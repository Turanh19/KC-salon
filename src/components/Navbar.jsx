import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone, MapPin, Calendar } from 'lucide-react'
import Logo from './Logo.jsx'
import { business } from '../data/site.js'
import { useLang } from '../i18n/LanguageContext.jsx'

const links = [
  { to: '/', label: { es: 'Inicio', en: 'Home' } },
  { to: '/servicios', label: { es: 'Servicios', en: 'Services' } },
  { to: '/#resultados', label: { es: 'Resultados', en: 'Results' } },
  { to: '/#equipo', label: { es: 'Equipo', en: 'Team' } },
  { to: '/#contacto', label: { es: 'Contacto', en: 'Contact' } },
]

function LangToggle({ transparent }) {
  const { lang, setLang } = useLang()
  return (
    <div
      className={`flex items-center rounded-full border p-0.5 text-[11px] font-bold uppercase tracking-wide ${
        transparent ? 'border-white/30 text-cream' : 'border-ink/15 text-ink'
      }`}
      role="group"
      aria-label="Language"
    >
      {['es', 'en'].map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          className={`rounded-full px-2.5 py-1 transition ${
            lang === code ? 'bg-gold-gradient text-ink' : 'opacity-70 hover:opacity-100'
          }`}
          aria-pressed={lang === code}
        >
          {code}
        </button>
      ))}
    </div>
  )
}

export default function Navbar() {
  const { pathname } = useLocation()
  const { t, L } = useLang()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const transparent = isHome && !scrolled
  const barBg = transparent
    ? 'bg-transparent'
    : 'bg-cream/90 backdrop-blur-md shadow-[0_8px_30px_-18px_rgba(12,12,13,0.35)]'

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Slim contact strip */}
      <div
        className={`hidden border-b border-white/10 transition-colors duration-300 md:block ${
          transparent ? 'bg-ink/40 text-cream/80' : 'bg-ink text-cream/80'
        }`}
      >
        <div className="container-luxe flex h-9 items-center justify-between text-[11px] tracking-wide">
          <a href={business.mapsHref} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-gold-300">
            <MapPin className="h-3.5 w-3.5 text-gold-400" />
            {business.address.line1}, {L(business.address.line2)} · {business.address.city}
          </a>
          <a href={business.phoneHref} className="flex items-center gap-2 hover:text-gold-300">
            <Phone className="h-3.5 w-3.5 text-gold-400" />
            {business.phone}
          </a>
        </div>
      </div>

      {/* Main bar */}
      <nav className={`transition-colors duration-300 ${barBg}`}>
        <div className="container-luxe flex h-20 items-center justify-between px-3 sm:px-8 lg:px-12">
          <Logo light={transparent} />

          <div className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `relative text-sm font-medium tracking-wide transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-gold-500 after:transition-all after:duration-300 hover:after:w-full ${
                    transparent ? 'text-cream/90 hover:text-white' : 'text-ink-soft hover:text-gold-700'
                  } ${isActive && l.to !== '/' ? 'after:w-full' : 'after:w-0'}`
                }
              >
                {L(l.label)}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <LangToggle transparent={transparent} />
            </div>
            <Link to="/reservar" className="hidden btn-gold !px-6 !py-3 sm:inline-flex">
              <Calendar className="h-4 w-4" />
              {t('Reservar', 'Book')}
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition lg:hidden ${
                transparent ? 'border-white/30 text-cream' : 'border-ink/15 text-ink'
              }`}
              aria-label={t('Abrir menú', 'Open menu')}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        } transition-opacity duration-300`}
      >
        <div className="container-luxe">
          <div className="card mt-2 overflow-hidden p-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-ink-soft transition hover:bg-gold-50 hover:text-gold-700"
              >
                {L(l.label)}
              </Link>
            ))}
            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                {t('Idioma', 'Language')}
              </span>
              <LangToggle transparent={false} />
            </div>
            <Link to="/reservar" className="btn-gold mt-1 w-full">
              <Calendar className="h-4 w-4" />
              {t('Reservar cita', 'Book appointment')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
