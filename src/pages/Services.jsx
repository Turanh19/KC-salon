import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, X, Calendar, Phone } from 'lucide-react'
import { Icon } from '../lib/icons.jsx'
import { serviceCategories } from '../data/services.js'
import { business } from '../data/site.js'
import CategorySection from '../components/services/CategorySection.jsx'
import Reveal from '../components/Reveal.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function Services() {
  const { t, L } = useLang()
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(serviceCategories[0].id)
  const pillRefs = useRef({})

  const q = query.trim().toLowerCase()

  const displayed = useMemo(() => {
    if (!q) return serviceCategories
    return serviceCategories
      .map((cat) => {
        const catHay = [cat.name.es, cat.name.en, cat.tagline.es, cat.tagline.en].join(' ').toLowerCase()
        const matchCat = catHay.includes(q)
        const services = matchCat
          ? cat.services
          : cat.services.filter((s) => {
              const hay = [s.name.es, s.name.en, s.note?.es, s.note?.en].filter(Boolean).join(' ').toLowerCase()
              return hay.includes(q)
            })
        return { ...cat, services }
      })
      .filter((cat) => cat.services.length > 0)
  }, [q])

  useEffect(() => {
    if (q) return
    const sections = serviceCategories.map((c) => document.getElementById(c.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [q])

  useEffect(() => {
    const el = pillRefs.current[active]
    if (el) el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [active])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const totalServices = serviceCategories.reduce((n, c) => n + c.services.length, 0)

  return (
    <>
      <section className="relative overflow-hidden bg-ink pb-16 pt-36 text-cream">
        <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-gold-500/15 blur-[120px]" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-gold-400/10 blur-[120px]" />
        <div className="container-luxe relative">
          <span className="eyebrow flex items-center gap-3 text-gold-300">
            <span className="h-px w-8 bg-gold-400/70" /> {t('Servicios & Precios', 'Services & Pricing')}
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {t('Todos nuestros ', 'All our ')}
            <span className="text-gradient-gold">{t('tratamientos', 'treatments')}</span>
          </h1>
          <p className="mt-5 max-w-2xl text-cream/75">
            {t(
              `${totalServices}+ tratamientos en ${serviceCategories.length} categorías. Explora, filtra y toca cualquier servicio para reservarlo al instante.`,
              `${totalServices}+ treatments across ${serviceCategories.length} categories. Browse, filter and tap any service to book it instantly.`,
            )}
          </p>

          <div className="mt-8 flex max-w-xl items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 backdrop-blur focus-within:border-gold-400">
            <Search className="h-5 w-5 text-gold-300" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('Buscar tratamiento… (ej. PicoSure, facial, láser)', 'Search a treatment… (e.g. PicoSure, facial, laser)')}
              className="w-full bg-transparent text-sm text-cream placeholder:text-cream/40 focus:outline-none"
            />
            {query && (
              <button onClick={() => setQuery('')} aria-label={t('Limpiar búsqueda', 'Clear search')}>
                <X className="h-4 w-4 text-cream/60 hover:text-cream" />
              </button>
            )}
          </div>
        </div>
      </section>

      {!q && (
        <div className="sticky top-20 z-30 border-b border-ink/5 bg-cream/90 backdrop-blur-md md:top-[7.25rem]">
          <div className="container-luxe">
            <div className="flex gap-2 overflow-x-auto py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {serviceCategories.map((c) => (
                <button
                  key={c.id}
                  ref={(el) => (pillRefs.current[c.id] = el)}
                  onClick={() => scrollTo(c.id)}
                  className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                    active === c.id ? 'border-transparent bg-ink text-cream' : 'border-ink/10 bg-white text-ink-soft hover:border-gold-400 hover:text-gold-700'
                  }`}
                >
                  <Icon name={c.icon} className="h-4 w-4" />
                  {L(c.name)}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <section className="bg-cream py-14">
        <div className="container-luxe space-y-8">
          {displayed.length === 0 && (
            <div className="card flex flex-col items-center gap-3 p-16 text-center">
              <Search className="h-10 w-10 text-gold-400" />
              <p className="font-display text-xl font-semibold text-ink">{t('Sin resultados', 'No results')}</p>
              <p className="text-sm text-ink-muted">
                {t(`No encontramos “${query}”. Prueba con otra palabra o explora todas las categorías.`, `We couldn’t find “${query}”. Try another word or explore all categories.`)}
              </p>
              <button onClick={() => setQuery('')} className="btn-outline mt-2">{t('Ver todo', 'View all')}</button>
            </div>
          )}

          {displayed.map((cat, i) => (
            <Reveal key={cat.id} delay={Math.min(i, 4) * 60}>
              <CategorySection category={cat} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white pb-24">
        <div className="container-luxe">
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-gold-200 bg-gold-50/60 p-10 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="font-display text-2xl font-bold text-ink">{t('¿No sabes qué elegir?', 'Not sure what to choose?')}</h2>
              <p className="mt-2 text-sm text-ink-muted">
                {t('Agenda una valoración —presencial o virtual gratis— y diseñamos tu plan ideal.', 'Book an assessment —in person or free virtual— and we’ll design your ideal plan.')}
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap justify-center gap-3">
              <Link to="/reservar" className="btn-gold">
                <Calendar className="h-4 w-4" /> {t('Reservar cita', 'Book appointment')}
              </Link>
              <a href={business.phoneHref} className="btn-outline">
                <Phone className="h-4 w-4" /> {t('Llamar', 'Call')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
