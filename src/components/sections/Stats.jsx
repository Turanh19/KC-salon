import Reveal from '../Reveal.jsx'
import { stats } from '../../data/site.js'
import { useLang } from '../../i18n/LanguageContext.jsx'

export default function Stats() {
  const { L } = useLang()
  return (
    <section className="relative z-10 -mt-px bg-cream">
      <div className="container-luxe">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink/5 bg-ink/5 shadow-[0_18px_50px_-30px_rgba(12,12,13,0.4)] lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.value}
              delay={i * 80}
              className="flex flex-col items-center justify-center gap-1 bg-white px-4 py-8 text-center"
            >
              <span className="font-display text-3xl font-bold text-gradient-gold sm:text-4xl">{s.value}</span>
              <span className="text-xs font-medium uppercase tracking-wide text-ink-muted">{L(s.label)}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
