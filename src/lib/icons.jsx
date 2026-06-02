import {
  Sparkles,
  Gem,
  Zap,
  Layers,
  Activity,
  Stethoscope,
  Brush,
  Eye,
  Ruler,
  Eraser,
  Droplets,
  Gift,
  Waves,
  Flame,
  Syringe,
  BadgeDollarSign,
  Star,
} from 'lucide-react'

export const iconMap = {
  Sparkles,
  Gem,
  Zap,
  Layers,
  Activity,
  Stethoscope,
  Brush,
  Eye,
  Ruler,
  Eraser,
  Droplets,
  Gift,
  Waves,
  Flame,
  Syringe,
  BadgeDollarSign,
  Star,
}

export function Icon({ name, ...props }) {
  const Cmp = iconMap[name] || Sparkles
  return <Cmp {...props} />
}
