import { Instagram } from 'lucide-react'
import Reveal from '../Reveal.jsx'
import SectionHeading from '../SectionHeading.jsx'
import Img from '../Img.jsx'
import { team } from '../../data/site.js'
import { useLang } from '../../i18n/LanguageContext.jsx'

export default function Team() {
  const { t, L } = useLang()
  return (
    <section id="equipo" className="scroll-mt-12 bg-cream py-24">
      <div className="container-luxe">
        <SectionHeading
          eyebrow={t('Nuestro equipo', 'Our team')}
          title={t('Manos expertas,', 'Expert hands,')}
          highlight={t('trato de familia', 'family care')}
          subtitle={t(
            'Keity y su equipo de esteticistas te acompañan en cada paso de tu transformación, con dedicación y cariño.',
            'Keity and her team of estheticians guide you through every step of your transformation, with dedication and care.',
          )}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {team.map((member, i) => (
            <Reveal
              key={member.name}
              delay={(i % 5) * 80}
              className={`group relative overflow-hidden rounded-2xl shadow-[0_18px_50px_-30px_rgba(12,12,13,0.4)] ${
                member.founder ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent opacity-90" />
                {member.founder && (
                  <span className="absolute left-4 top-4 rounded-full bg-gold-gradient px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-ink">
                    {t('Fundadora', 'Founder')}
                  </span>
                )}
                <div className="absolute inset-x-0 bottom-0 p-5 text-cream">
                  <p className="font-display text-xl font-bold">{member.name}</p>
                  <p className="text-[11px] uppercase tracking-wide text-gold-300">{L(member.role)}</p>
                  <p className="mt-2 max-h-0 overflow-hidden text-xs text-cream/75 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                    {L(member.bio)}
                  </p>
                </div>
                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-cream opacity-0 transition group-hover:opacity-100">
                  <Instagram className="h-4 w-4" />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
