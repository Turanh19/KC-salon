import { Link } from 'react-router-dom'
import { Phone, MapPin, Mail, Clock, Instagram, Facebook, Calendar } from 'lucide-react'
import { Monogram } from './Logo.jsx'
import { business, hours } from '../data/site.js'
import { serviceCategories } from '../data/services.js'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function Footer() {
  const { t, L } = useLang()
  const year = new Date().getFullYear()
  const topCategories = serviceCategories.slice(0, 6)

  return (
    <footer className="relative overflow-hidden bg-ink text-cream/80">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/70 to-transparent" />
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="container-luxe relative grid gap-12 py-16 lg:grid-cols-12">
        {/* Brand */}
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <Monogram className="h-12 w-12" light />
            <div className="leading-none">
              <p className="font-display text-2xl font-bold text-cream">
                KC <span className="text-gradient-gold">Salon</span>
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-luxe text-gold-200/80">
                Estética by Keity
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-sm font-serif text-lg italic text-cream/70">
            “{L(business.tagline)}.”
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href={business.instagramHref} target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-gold-400 hover:text-gold-300" aria-label="Instagram">
              <Instagram className="h-4.5 w-4.5" />
            </a>
            <a href={business.facebookHref} target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-gold-400 hover:text-gold-300" aria-label="Facebook">
              <Facebook className="h-4.5 w-4.5" />
            </a>
            <a href={business.phoneHref} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-gold-400 hover:text-gold-300" aria-label={t('Llamar', 'Call')}>
              <Phone className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="lg:col-span-3">
          <h4 className="text-xs font-semibold uppercase tracking-luxe text-gold-300">{t('Servicios', 'Services')}</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {topCategories.map((c) => (
              <li key={c.id}>
                <Link to={`/servicios#${c.id}`} className="text-cream/70 transition hover:text-gold-300">
                  {L(c.name)}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/servicios" className="font-medium text-gold-300 hover:text-gold-200">
                {t('Ver todos', 'View all')} →
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-2">
          <h4 className="text-xs font-semibold uppercase tracking-luxe text-gold-300">{t('Contacto', 'Contact')}</h4>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a href={business.mapsHref} target="_blank" rel="noreferrer" className="flex gap-3 transition hover:text-gold-300">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>
                  {business.address.line1}
                  <br />
                  {L(business.address.line2)}
                  <br />
                  {business.address.city}
                </span>
              </a>
            </li>
            <li>
              <a href={business.phoneHref} className="flex items-center gap-3 transition hover:text-gold-300">
                <Phone className="h-4 w-4 shrink-0 text-gold-400" />
                {business.phone}
              </a>
            </li>
            <li>
              <a href={business.emailHref} className="flex items-center gap-3 transition hover:text-gold-300">
                <Mail className="h-4 w-4 shrink-0 text-gold-400" />
                {business.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div className="lg:col-span-3">
          <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-luxe text-gold-300">
            <Clock className="h-4 w-4" /> {t('Horario', 'Hours')}
          </h4>
          <ul className="mt-5 space-y-2 text-sm">
            {hours.map((h) => (
              <li key={h.day.es} className="flex items-center justify-between gap-4">
                <span className="text-cream/60">{L(h.day)}</span>
                <span className={h.closed ? 'text-gold-400/70' : 'text-cream/85'}>{L(h.time)}</span>
              </li>
            ))}
          </ul>
          <Link to="/reservar" className="btn-gold mt-6 w-full !py-3 text-xs">
            <Calendar className="h-4 w-4" />
            {t('Reservar cita', 'Book appointment')}
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-luxe flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/50 sm:flex-row">
          <p>© {year} KC Salon · Estética by Keity. {t('Todos los derechos reservados.', 'All rights reserved.')}</p>
          <p className="flex items-center gap-2">
            <span className="text-gold-400">{t('Resultados reales', 'Real results')}</span> · {t('Financiamiento disponible', 'Financing available')}
          </p>
        </div>
      </div>
    </footer>
  )
}
