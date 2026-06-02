import { useMemo, useState } from 'react'
import { Search, Check, X, Plus } from 'lucide-react'
import { Icon } from '../../lib/icons.jsx'
import { serviceCategories, serviceValue, serviceByValue } from '../../data/services.js'
import { useLang } from '../../i18n/LanguageContext.jsx'

export default function ServicePicker({ selected, onToggle, onRemove, initialCategory = 'all' }) {
  const { t, L } = useLang()
  const [query, setQuery] = useState('')
  const [cat, setCat] = useState(initialCategory)
  const q = query.trim().toLowerCase()

  const matches = (svc, category) => {
    if (!q) return true
    const hay = [svc.name.es, svc.name.en, category.name.es, category.name.en]
      .join(' ')
      .toLowerCase()
    return hay.includes(q)
  }

  const groups = useMemo(() => {
    return serviceCategories
      .filter((c) => cat === 'all' || c.id === cat)
      .map((c) => ({ ...c, services: c.services.filter((s) => matches(s, c)) }))
      .filter((c) => c.services.length > 0)
  }, [q, cat])

  // Localized label for a stored (Spanish-based) value.
  const labelFor = (v) => {
    const found = serviceByValue[v]
    return found ? L(found.name) : v.split(' — ')[1] || v
  }

  return (
    <div>
      {selected.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {selected.map((v) => (
            <span key={v} className="flex items-center gap-2 rounded-full bg-gold-gradient px-3 py-1.5 text-xs font-semibold text-ink">
              {labelFor(v)}
              <button type="button" onClick={() => onRemove(v)} aria-label={`${t('Quitar', 'Remove')} ${labelFor(v)}`}>
                <X className="h-3.5 w-3.5" />
              </button>
            </span>
          ))}
        </div>
      )}

      <div className="mb-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <button
          type="button"
          onClick={() => setCat('all')}
          className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition ${
            cat === 'all' ? 'border-transparent bg-ink text-cream' : 'border-ink/10 bg-white text-ink-soft hover:border-gold-400'
          }`}
        >
          {t('Todos', 'All')}
        </button>
        {serviceCategories.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setCat(c.id)}
            className={`flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition ${
              cat === c.id ? 'border-transparent bg-ink text-cream' : 'border-ink/10 bg-white text-ink-soft hover:border-gold-400'
            }`}
          >
            <Icon name={c.icon} className="h-3.5 w-3.5" />
            {L(c.name)}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3 rounded-xl border border-ink/10 bg-white px-4 py-2.5 focus-within:border-gold-400">
        <Search className="h-4 w-4 text-gold-600" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t('Buscar servicio…', 'Search a service…')}
          className="w-full bg-transparent text-sm text-ink placeholder:text-ink-muted/70 focus:outline-none"
        />
        {query && (
          <button type="button" onClick={() => setQuery('')} aria-label={t('Limpiar', 'Clear')}>
            <X className="h-4 w-4 text-ink-muted" />
          </button>
        )}
      </div>

      <div className="mt-3 max-h-72 space-y-4 overflow-y-auto rounded-xl border border-ink/5 bg-cream/60 p-3">
        {groups.length === 0 && (
          <p className="py-8 text-center text-sm text-ink-muted">
            {t('Sin resultados para', 'No results for')} “{query}”.
          </p>
        )}
        {groups.map((c) => (
          <div key={c.id}>
            <p className="mb-1.5 px-1 text-[11px] font-bold uppercase tracking-luxe text-gold-700">{L(c.name)}</p>
            <div className="grid gap-1.5 sm:grid-cols-2">
              {c.services.map((s) => {
                const value = serviceValue(c.name.es, s.name.es)
                const isSel = selected.includes(value)
                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() => onToggle(value)}
                    className={`flex items-center justify-between gap-2 rounded-lg border px-3 py-2 text-left text-sm transition ${
                      isSel ? 'border-gold-400 bg-gold-50 text-ink' : 'border-ink/5 bg-white text-ink-soft hover:border-gold-300'
                    }`}
                  >
                    <span className="min-w-0">
                      <span className="block truncate">{L(s.name)}</span>
                      <span className="text-[11px] text-gold-700">{L(s.price)}</span>
                    </span>
                    <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${isSel ? 'bg-gold-gradient text-ink' : 'bg-ink/5 text-ink-muted'}`}>
                      {isSel ? <Check className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
