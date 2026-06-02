import Reveal from './Reveal.jsx'

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = 'center',
  light = false,
}) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'
  return (
    <Reveal className={`flex flex-col ${alignment}`}>
      {eyebrow && (
        <span className="eyebrow flex items-center gap-3">
          <span className="h-px w-8 bg-gold-500/70" />
          {eyebrow}
          {align === 'center' && <span className="h-px w-8 bg-gold-500/70" />}
        </span>
      )}
      <h2
        className={`mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem] ${
          light ? 'text-cream' : 'text-ink'
        }`}
      >
        {title} {highlight && <span className="text-gradient-gold">{highlight}</span>}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed ${
            light ? 'text-cream/70' : 'text-ink-muted'
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
