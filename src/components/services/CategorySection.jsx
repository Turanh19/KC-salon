import { Link } from 'react-router-dom'
import { ArrowRight, Crown, Check, Star } from 'lucide-react'
import { Icon } from '../../lib/icons.jsx'
import { serviceValue } from '../../data/services.js'
import { useLang } from '../../i18n/LanguageContext.jsx'

function PriceRow({ categoryNameEs, service }) {
  const { t, L } = useLang()
  const value = serviceValue(categoryNameEs, service.name.es)
  return (
    <Link
      to={`/reservar?servicio=${encodeURIComponent(value)}`}
      className={`group flex items-center justify-between gap-4 rounded-xl border px-4 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-gold-400 hover:shadow-[0_14px_30px_-20px_rgba(176,125,42,0.7)] ${
        service.featured ? 'border-gold-300 bg-gold-50/60' : 'border-ink/5 bg-white'
      }`}
    >
      <span className="min-w-0">
        <span className="flex items-center gap-2">
          {service.featured && <Star className="h-3.5 w-3.5 shrink-0 fill-gold-500 text-gold-500" />}
          <span className="truncate text-sm font-medium text-ink-soft group-hover:text-ink">{L(service.name)}</span>
        </span>
        {service.note && <span className="mt-0.5 block text-[11px] text-ink-muted">{L(service.note)}</span>}
        <span className="mt-1 hidden items-center gap-1 text-[10px] font-semibold uppercase tracking-wide text-gold-600 group-hover:flex">
          {t('Reservar', 'Book')} <ArrowRight className="h-3 w-3" />
        </span>
      </span>
      <span className="shrink-0 font-display text-base font-bold text-gold-700">{L(service.price)}</span>
    </Link>
  )
}

export default function CategorySection({ category }) {
  const { t, L } = useLang()
  const hero = category.hero
  const shortName = L(category.name).split(' ')[0]
  return (
    <section id={category.id} className="scroll-mt-[14rem] md:scroll-mt-[16rem]">
      <div
        className={`overflow-hidden rounded-3xl border ${
          hero ? 'border-gold-400/40 bg-ink text-cream shadow-luxe' : 'border-ink/5 bg-white shadow-[0_18px_50px_-30px_rgba(12,12,13,0.4)]'
        }`}
      >
        <div className="grid lg:grid-cols-[1fr_1.4fr]">
          <div className={`relative flex flex-col justify-between gap-6 p-8 ${hero ? '' : 'lg:border-r lg:border-ink/5'}`}>
            {hero && <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gold-500/20 blur-3xl" />}
            <div className="relative">
              <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${hero ? 'bg-gold-gradient text-ink' : 'bg-gold-50 text-gold-700'}`}>
                <Icon name={category.icon} className="h-7 w-7" />
              </span>
              {hero && (
                <span className="ml-0 mt-4 inline-flex items-center gap-1 rounded-full bg-gold-gradient px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-ink">
                  <Crown className="h-3 w-3" /> {t('Tratamiento estrella', 'Signature treatment')}
                </span>
              )}
              <h2 className={`mt-4 font-display text-2xl font-bold ${hero ? 'text-cream' : 'text-ink'}`}>{L(category.name)}</h2>
              <p className={`text-xs font-semibold uppercase tracking-luxe ${hero ? 'text-gold-300' : 'text-gold-600'}`}>{L(category.tagline)}</p>
              <p className={`mt-3 text-sm leading-relaxed ${hero ? 'text-cream/75' : 'text-ink-muted'}`}>{L(category.blurb)}</p>

              {category.treats && (
                <ul className="mt-5 space-y-2">
                  {category.treats.map((treat) => (
                    <li key={treat.es} className="flex items-start gap-2 text-sm text-cream/85">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-ink">
                        <Check className="h-2.5 w-2.5" />
                      </span>
                      {L(treat)}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="relative">
              <Link to="/reservar" className={hero ? 'btn-gold w-full' : 'btn-dark w-full'}>
                {t('Reservar', 'Book')} {shortName}
              </Link>
            </div>
          </div>

          <div className={`p-6 sm:p-8 ${hero ? 'bg-cream' : ''}`}>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {category.services.map((s) => (
                <PriceRow key={s.name.es} categoryNameEs={category.name.es} service={s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
