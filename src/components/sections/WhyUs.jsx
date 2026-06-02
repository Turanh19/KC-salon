import Reveal from '../Reveal.jsx'
import SectionHeading from '../SectionHeading.jsx'
import { Icon } from '../../lib/icons.jsx'
import { highlights } from '../../data/site.js'
import { useLang } from '../../i18n/LanguageContext.jsx'

export default function WhyUs() {
  const { t, L } = useLang()
  return (
    <section className="bg-cream py-24">
      <div className="container-luxe">
        <SectionHeading
          eyebrow={t('Por qué KC Salon', 'Why KC Salon')}
          title={t('Tecnología premium,', 'Premium technology,')}
          highlight={t('resultados reales', 'real results')}
          subtitle={t(
            'Invertimos en los mejores equipos del mercado y en formación continua para ofrecerte tratamientos seguros, efectivos y a tu medida.',
            'We invest in the best equipment on the market and in continuous training to offer you safe, effective, tailored treatments.',
          )}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h, i) => (
            <Reveal
              key={L(h.title)}
              delay={(i % 3) * 90}
              className="group card flex flex-col gap-4 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-luxe"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-gold-300 transition-colors duration-300 group-hover:bg-gold-gradient group-hover:text-ink">
                <Icon name={h.icon} className="h-7 w-7" />
              </span>
              <h3 className="font-display text-xl font-bold text-ink">{L(h.title)}</h3>
              <p className="text-sm leading-relaxed text-ink-muted">{L(h.text)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
