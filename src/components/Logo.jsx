import { Link } from 'react-router-dom'

// Brand KC monogram — gold logo image with a transparent background.
export function Monogram({ className = 'h-10 w-10' }) {
  return (
    <img
      src="/logo.webp"
      alt="KC Salon"
      width="400"
      height="400"
      className={`object-contain ${className}`}
    />
  )
}

export default function Logo({ light = false, compact = false }) {
  return (
    <Link to="/" className="group flex items-center" aria-label="KC Salon">
      <Monogram className="h-20 w-20 transition-transform duration-500 group-hover:rotate-[8deg]" />
    </Link>
  )
}
