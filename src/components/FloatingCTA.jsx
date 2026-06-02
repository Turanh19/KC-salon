import { MessageCircle } from 'lucide-react'
import { business } from '../data/site.js'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function FloatingCTA() {
  const { t } = useLang()
  return (
    <a
      href={business.whatsappHref}
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-gradient-to-r from-gold-600 to-gold-400 px-5 py-4 text-ink shadow-gold transition-all duration-300 hover:-translate-y-1 hover:shadow-luxe"
      aria-label={t('Escríbenos por WhatsApp', 'Message us on WhatsApp')}
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden max-w-0 overflow-hidden text-sm font-semibold uppercase tracking-wide transition-all duration-500 group-hover:max-w-[140px] sm:inline">
        WhatsApp
      </span>
      <span className="absolute right-0 top-0 -z-10 h-full w-full animate-ping rounded-full bg-gold-400/40" />
    </a>
  )
}
