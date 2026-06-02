import { useCallback, useRef, useState } from 'react'
import { MoveHorizontal } from 'lucide-react'
import Img from './Img.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'

// Draggable before/after image comparison slider.
export default function BeforeAfter({ before, after, title, treatment }) {
  const { t, L } = useLang()
  const [pos, setPos] = useState(50)
  const containerRef = useRef(null)
  const dragging = useRef(false)

  const titleText = L(title)
  const treatmentText = L(treatment)

  const setFromClientX = useCallback((clientX) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, pct)))
  }, [])

  const onPointerDown = (e) => {
    dragging.current = true
    setFromClientX(e.clientX)
  }
  const onPointerMove = (e) => {
    if (!dragging.current) return
    setFromClientX(e.clientX)
  }
  const onPointerUp = () => {
    dragging.current = false
  }

  return (
    <figure className="card group overflow-hidden">
      <div
        ref={containerRef}
        className="relative aspect-[4/5] w-full cursor-ew-resize select-none overflow-hidden"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        {/* After (base layer) */}
        <Img
          src={after}
          alt={`${titleText} — ${t('después', 'after')}`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
        <span className="absolute right-3 top-3 rounded-full bg-ink/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-luxe text-gold-200 backdrop-blur">
          {t('Después', 'After')}
        </span>

        {/* Before (clipped layer) */}
        <div className="absolute inset-0 h-full overflow-hidden" style={{ width: `${pos}%` }}>
          <Img
            src={before}
            alt={`${titleText} — ${t('antes', 'before')}`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ width: containerRef.current?.offsetWidth || '100%' }}
            draggable={false}
          />
          <span className="absolute left-3 top-3 rounded-full bg-cream/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-luxe text-ink backdrop-blur">
            {t('Antes', 'Before')}
          </span>
        </div>

        {/* Handle */}
        <div className="absolute top-0 z-10 flex h-full w-1 -translate-x-1/2 items-center justify-center bg-gold-300" style={{ left: `${pos}%` }}>
          <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-gold-400 bg-cream text-gold-700 shadow-luxe">
            <MoveHorizontal className="h-5 w-5" />
          </span>
        </div>
      </div>

      <figcaption className="flex items-center justify-between gap-3 p-5">
        <div>
          <p className="font-display text-lg font-semibold text-ink">{titleText}</p>
          <p className="text-xs uppercase tracking-wide text-gold-600">{treatmentText}</p>
        </div>
        <span className="text-[11px] text-ink-muted">{t('Desliza', 'Slide')} →</span>
      </figcaption>
    </figure>
  )
}
