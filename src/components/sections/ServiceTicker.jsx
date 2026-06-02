import { useLang } from '../../i18n/LanguageContext.jsx'

const ITEMS = {
  es: [
    'Faciales Profundos',
    'PicoSure Láser',
    'Depilación Láser',
    'Botox & Fillers',
    'IV Therapy',
    'Venus Legacy',
    'Microneedling',
    'CO2 Fraccionado',
    'Tratamientos Corporales',
    'PRP Facial',
    'Cosmelan Peel',
    'Dermaplaning',
    'Luz LED',
    'Nanopore',
  ],
  en: [
    'Deep Facials',
    'PicoSure Laser',
    'Laser Hair Removal',
    'Botox & Fillers',
    'IV Therapy',
    'Venus Legacy',
    'Microneedling',
    'Fractional CO2',
    'Body Treatments',
    'PRP Facial',
    'Cosmelan Peel',
    'Dermaplaning',
    'LED Light',
    'Nanopore',
  ],
}

export default function ServiceTicker() {
  const { lang } = useLang()
  const list = ITEMS[lang] ?? ITEMS.es

  return (
    <div className="relative overflow-hidden bg-zinc-600 py-3.5">
      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        {[...list, ...list].map((item, i) => (
          <span
            key={i}
            className="inline-flex shrink-0 items-center gap-5 px-8 font-sans text-[11px] font-semibold uppercase tracking-luxe text-gold-300/80"
          >
            {item}
            <span className="text-gold-600/50 text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
