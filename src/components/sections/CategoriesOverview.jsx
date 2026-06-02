import { Link } from 'react-router-dom'
import { ArrowUpRight, Crown } from 'lucide-react'
import Reveal from '../Reveal.jsx'
import SectionHeading from '../SectionHeading.jsx'
import { Icon } from '../../lib/icons.jsx'
import { serviceCategories } from '../../data/services.js'
import { useLang } from '../../i18n/LanguageContext.jsx'

// Smallest numeric price in a category, for a "desde $X" hint.
function startingPrice(services) {
  const nums = services
    .map((s) => {
      const raw = typeof s.price === 'string' ? s.price : s.price?.es || ''
      const m = raw.replace(/,/g, '').match(/\d+/)
      return m ? parseInt(m[0], 10) : null
    })
    .filter((n) => n !== null && n > 0)
  if (!nums.length) return null
  return Math.min(...nums)
}

export default function CategoriesOverview() {
  const { t, L } = useLang()
  return (
    <section id="categorias" className="scroll-mt-12 bg-white py-24">
      <div className="container-luxe">
        <SectionHeading
          eyebrow={t('Nuestros servicios', 'Our services')}
          title={t('Tratamientos para', 'Treatments for')}
          highlight={t('cada necesidad', 'every need')}
          subtitle={t(
            'Explora nuestras categorías principales. Cada una reúne tratamientos diseñados para darte resultados visibles. Toca cualquiera para ver el detalle y los precios.',
            'Explore our main categories. Each one gathers treatments designed for visible results. Tap any to see details and pricing.',
          )}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((cat, i) => {
            const from = startingPrice(cat.services)
            const hero = cat.hero
            return (
              <Reveal key={cat.id} delay={(i % 3) * 90}>
                <Link
                  to={`/servicios#${cat.id}`}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1.5 ${
                    hero
                      ? 'border-gold-400/40 bg-ink text-cream shadow-luxe'
                      : 'border-ink/5 bg-white text-ink shadow-[0_18px_50px_-30px_rgba(12,12,13,0.4)] hover:shadow-luxe'
                  }`}
                >
                  {hero && (
                    <>
                      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold-500/20 blur-2xl" />
                      <span className="absolute right-5 top-5 flex items-center gap-1 rounded-full bg-gold-gradient px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-ink">
                        <Crown className="h-3 w-3" /> {t('Estrella', 'Star')}
                      </span>
                    </>
                  )}

                  <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${hero ? 'bg-gold-gradient text-ink' : 'bg-gold-50 text-gold-700'}`}>
                    <Icon name={cat.icon} className="h-7 w-7" />
                  </span>

                  <h3 className={`mt-5 font-display text-xl font-bold ${hero ? 'text-cream' : 'text-ink'}`}>{L(cat.name)}</h3>
                  <p className={`text-[11px] uppercase tracking-wide ${hero ? 'text-gold-300' : 'text-gold-600'}`}>{L(cat.tagline)}</p>
                  <p className={`mt-3 flex-1 text-sm leading-relaxed ${hero ? 'text-cream/70' : 'text-ink-muted'}`}>{L(cat.blurb)}</p>

                  <div className={`mt-6 flex items-center justify-between border-t pt-4 ${hero ? 'border-white/10' : 'border-ink/5'}`}>
                    <span className="text-xs">
                      {from ? (
                        <>
                          <span className={hero ? 'text-cream/50' : 'text-ink-muted'}>{t('desde ', 'from ')}</span>
                          <span className={`font-display text-base font-bold ${hero ? 'text-gold-300' : 'text-gold-700'}`}>${from}</span>
                        </>
                      ) : (
                        <span className="font-semibold text-gold-600">{t('Valoración gratis', 'Free assessment')}</span>
                      )}
                    </span>
                    <span className={`flex items-center gap-1 text-xs font-semibold uppercase tracking-wide transition-colors ${hero ? 'text-gold-300 group-hover:text-gold-200' : 'text-ink group-hover:text-gold-700'}`}>
                      {t('Ver más', 'See more')}
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Link to="/servicios" className="btn-dark">
            {t('Ver todos los servicios y precios', 'View all services & pricing')}
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
