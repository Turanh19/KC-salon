import { Link } from 'react-router-dom'
import { Calendar, Phone } from 'lucide-react'
import Reveal from '../Reveal.jsx'
import { business } from '../../data/site.js'
import { useLang } from '../../i18n/LanguageContext.jsx'

export default function CtaBand() {
  const { t, L } = useLang()
  return (
    <section className="bg-white py-20">
      <div className="container-luxe">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-gold-gradient px-8 py-16 text-center shadow-gold sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.4),transparent_60%)]" />
          <div className="relative">
            <p className="font-sans text-xs font-semibold uppercase tracking-luxe text-ink/70">{L(business.tagline)}</p>
            <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
              {t('Tu mejor versión empieza con una cita', 'Your best self starts with an appointment')}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ink/75">
              {t(
                'Agenda tu valoración y descubre el tratamiento ideal para ti. Resultados desde la primera sesión — con financiamiento disponible.',
                'Book your assessment and discover the perfect treatment for you. Results from the first session — with financing available.',
              )}
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link to="/reservar" className="btn-dark">
                <Calendar className="h-4 w-4" /> {t('Reservar ahora', 'Book now')}
              </Link>
              <a href={business.phoneHref} className="btn-outline !border-ink/30 !text-ink hover:!border-ink hover:!text-ink">
                <Phone className="h-4 w-4" /> {business.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
