import { Star, Quote } from 'lucide-react'
import Reveal from '../Reveal.jsx'
import SectionHeading from '../SectionHeading.jsx'
import { testimonials } from '../../data/site.js'
import { useLang } from '../../i18n/LanguageContext.jsx'

export default function Testimonials() {
  const { t, L } = useLang()
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-cream">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gold-500/10 blur-[120px]" />
      <div className="container-luxe relative">
        <SectionHeading
          eyebrow={t('Testimonios', 'Testimonials')}
          title={t('Lo que dicen', 'What our')}
          highlight={t('nuestras clientas', 'clients say')}
          light
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal
              key={item.name}
              delay={(i % 3) * 100}
              className="relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur transition-colors duration-300 hover:border-gold-400/40"
            >
              <Quote className="h-9 w-9 text-gold-400/60" />
              <div className="mt-4 flex gap-0.5 text-gold-400">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold-400" />
                ))}
              </div>
              <p className="mt-4 flex-1 font-serif text-lg italic leading-relaxed text-cream/85">“{L(item.quote)}”</p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-display text-lg font-semibold text-cream">{item.name}</p>
                <p className="text-xs uppercase tracking-wide text-gold-300">{L(item.treatment)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
