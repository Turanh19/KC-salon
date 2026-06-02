import { useState } from 'react'

// Image with a graceful, on-brand fallback if the source fails to load.
export default function Img({ src, alt = '', className = '', style, ...rest }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        style={style}
        className={`flex items-center justify-center bg-gradient-to-br from-gold-300 via-gold-100 to-cream ${className}`}
      >
        <span className="font-display text-4xl font-bold tracking-tight text-gold-600/30">KC</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      style={style}
      className={className}
      onError={() => setFailed(true)}
      {...rest}
    />
  )
}
