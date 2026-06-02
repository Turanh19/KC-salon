import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import Reveal from '../Reveal.jsx'
import Img from '../Img.jsx'
import { useLang } from '../../i18n/LanguageContext.jsx'

const points = [
  {
    es: 'Atención personalizada por Keity y su equipo de esteticistas',
    en: 'Personalized care from Keity and her team of estheticians',
  },
  {
    es: 'Tecnología de punta: PicoSure, Venus Legacy y láser CO2',
    en: 'Cutting-edge technology: PicoSure, Venus Legacy and CO2 laser',
  },
  {
    es: 'Planes de financiamiento para que inviertas en ti',
    en: 'Financing plans so you can invest in yourself',
  },
]

export default function About() {
  const { t, L } = useLang()
  return (
    <section id="nosotros" className="scroll-mt-12 bg-cream py-24">
      <div className="container-luxe grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-[1.75rem] shadow-luxe">
            <Img
              src="/Owner.webp"
              alt={t('Keity Cantillo — KC Salon', 'Keity Cantillo — KC Salon')}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -left-5 top-8 rounded-2xl border border-gold-200 bg-white px-5 py-4 shadow-luxe">
            <p className="font-display text-2xl font-bold text-gradient-gold">Keity Cantillo</p>
            <p className="text-xs uppercase tracking-wide text-ink-muted">
              {t('Fundadora & Médico Estética', 'Founder & Medical Esthetician')}
            </p>
          </div>
        </Reveal>

        <div>
          <span className="eyebrow flex items-center gap-3">
            <span className="h-px w-8 bg-gold-500/70" />
            {t('Conoce KC Salon', 'Meet KC Salon')}
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            {t('Estética de lujo con ', 'Luxury esthetics with ')}
            <span className="text-gradient-gold">{t('alma latina', 'a Latin soul')}</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted">
            {t('En ', 'At ')}
            <strong className="text-ink">Estética by Keity</strong>
            {t(
              ' combinamos la tecnología más avanzada con un trato cálido y cercano. Nuestra fundadora, ',
              ' we combine the most advanced technology with warm, personal care. Our founder, ',
            )}
            <strong className="text-ink">Keity Cantillo</strong>
            {t(
              ', lidera un pequeño y dedicado equipo de esteticistas —Camila, Annie, Tatiana y Sandra— comprometidas con tu belleza y bienestar.',
              ', leads a small, dedicated team of estheticians —Camila, Annie, Tatiana and Sandra— committed to your beauty and wellbeing.',
            )}
          </p>
          <p className="mt-4 font-serif text-xl italic text-gold-700">
            “{t('Resultados desde la primera sesión.', 'Results from the first session.')}”
          </p>

          <ul className="mt-7 space-y-3">
            {points.map((p) => (
              <li key={p.es} className="flex items-start gap-3 text-sm text-ink-soft">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                  <Check className="h-3 w-3" />
                </span>
                {L(p)}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/reservar" className="btn-dark">{t('Reserva tu valoración', 'Book your assessment')}</Link>
            <Link to="/servicios" className="btn-outline">
              {t('Ver servicios', 'View services')} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
