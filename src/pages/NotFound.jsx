import { Link } from 'react-router-dom'
import { Home, Calendar } from 'lucide-react'
import { Monogram } from '../components/Logo.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function NotFound() {
  const { t } = useLang()
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink text-cream">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/15 blur-[120px]" />
      <div className="container-luxe relative text-center">
        <Monogram className="mx-auto h-20 w-20" light />
        <p className="mt-8 font-display text-7xl font-bold text-gradient-gold">404</p>
        <h1 className="mt-2 font-display text-3xl font-bold">{t('Página no encontrada', 'Page not found')}</h1>
        <p className="mx-auto mt-3 max-w-md text-cream/70">
          {t(
            'Lo sentimos, esta página no existe. Pero tu próxima cita de belleza sí.',
            'Sorry, this page doesn’t exist. But your next beauty appointment does.',
          )}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/" className="btn-gold">
            <Home className="h-4 w-4" /> {t('Ir al inicio', 'Go home')}
          </Link>
          <Link to="/reservar" className="btn-ghost-gold">
            <Calendar className="h-4 w-4" /> {t('Reservar cita', 'Book appointment')}
          </Link>
        </div>
      </div>
    </section>
  )
}
