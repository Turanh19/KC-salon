import { Link } from 'react-router-dom'
import { Check, Sparkles, ArrowRight } from 'lucide-react'
import Reveal from '../Reveal.jsx'
import Img from '../Img.jsx'
import { getCategoryById } from '../../data/services.js'
import { useLang } from '../../i18n/LanguageContext.jsx'

export default function PicoSureFeature() {
  const { t, L } = useLang()
  const pico = getCategoryById('picosure')

  return (
    <section className="relative overflow-hidden bg-ink py-24 text-cream">
      <div className="pointer-events-none absolute -right-32 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-gold-500/15 blur-[130px]" />
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-gold-400/10 blur-[120px]" />

      <div className="container-luxe relative grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative order-2 lg:order-1">
          <div className="absolute -inset-3 rounded-[2rem] bg-gold-gradient opacity-40 blur-sm" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-gold-300/30">
            <Img
              src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&w=900&q=80"
              alt={t('Tratamiento láser PicoSure', 'PicoSure laser treatment')}
              className="aspect-[5/4] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
            <div className="absolute bottom-5 left-5 rounded-xl border border-gold-300/30 bg-ink/70 px-4 py-3 backdrop-blur">
              <p className="text-[10px] uppercase tracking-luxe text-gold-300">{t('Desde', 'From')}</p>
              <p className="font-display text-2xl font-bold text-cream">$150</p>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <span className="eyebrow flex items-center gap-3 text-gold-300">
            <Sparkles className="h-4 w-4" />
            {t('Tratamiento estrella', 'Signature treatment')}
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
            PicoSure<span className="text-gradient-gold">®</span> {t('Láser', 'Laser')}
          </h2>
          <p className="mt-3 text-lg text-gold-200/90">{t('La tecnología láser de grado celebridad.', 'The celebrity-grade laser technology.')}</p>
          <p className="mt-5 max-w-lg leading-relaxed text-cream/75">
            {L(pico.blurb)}{' '}
            {t(
              'Picosegundos de energía que tratan lo que otros láseres no pueden, con menos sesiones y mínimo tiempo de recuperación.',
              'Picoseconds of energy that treat what other lasers can’t, with fewer sessions and minimal downtime.',
            )}
          </p>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {pico.treats.map((treat) => (
              <li key={treat.es} className="flex items-start gap-3 text-sm text-cream/85">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-ink">
                  <Check className="h-3 w-3" />
                </span>
                {L(treat)}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/reservar?servicio=picosure" className="btn-gold">{t('Reservar PicoSure', 'Book PicoSure')}</Link>
            <Link to="/servicios#picosure" className="btn-ghost-gold">
              {t('Ver precios', 'See pricing')} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
