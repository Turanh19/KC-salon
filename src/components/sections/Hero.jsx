import { Link } from 'react-router-dom'
import { Calendar, ArrowRight, Star, ShieldCheck } from 'lucide-react'
import { useLang } from '../../i18n/LanguageContext.jsx'

export default function Hero() {
  const { t } = useLang()
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-gold-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-[28rem] w-[28rem] rounded-full bg-gold-400/10 blur-[120px]" />

      <div className="container-luxe relative grid min-h-screen items-center gap-12 pb-16 pt-36 lg:grid-cols-2 lg:gap-8 lg:pb-24">
        <div className="max-w-xl">
          <span className="eyebrow flex items-center gap-3 text-gold-300">
            <span className="h-px w-8 bg-gold-400/70" />
            {t('Bienvenidos a Estética by Keity', 'Welcome to Estética by Keity')}
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            {t('Resultados reales,', 'Real results,')}
            <span className="block text-gradient-gold animate-shimmer">
              {t('desde la primera sesión', 'from the first session')}
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/75 sm:text-lg">
            {t(
              'Eliminamos arrugas, cicatrices, acné, foliculitis, manchas, vello, estrías y tatuajes para lucir una piel sana. Med spa de lujo en el corazón de Hollywood, FL.',
              'We treat wrinkles, scars, acne, folliculitis, spots, hair, stretch marks and tattoos for healthy, beautiful skin. A luxury med spa in the heart of Hollywood, FL.',
            )}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link to="/reservar" className="btn-gold">
              <Calendar className="h-4 w-4" />
              {t('Reservar cita', 'Book appointment')}
            </Link>
            <Link to="/servicios" className="btn-ghost-gold">
              {t('Conoce nuestros servicios', 'Explore our services')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-cream/70">
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-gold-400" />
              {t('Financiamiento disponible', 'Financing available')}
            </span>
            <span className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-gold-400 text-gold-400" />
              {t('5.0 · Resultados reales', '5.0 · Real results')}
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative">
            <div className="relative overflow-hidden rounded-[1.75rem] shadow-luxe">
              <video
                src="/Herovideo.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            </div>

            <div className="absolute -left-5 bottom-10 hidden rounded-2xl border border-gold-300/30 bg-ink/85 p-4 shadow-luxe backdrop-blur sm:block animate-float-slow">
              <p className="text-[10px] uppercase tracking-luxe text-gold-300">{t('Tecnología', 'Technology')}</p>
              <p className="font-display text-lg font-semibold text-cream">PicoSure®</p>
              <p className="text-[11px] text-cream/60">{t('Grado celebridad', 'Celebrity-grade')}</p>
            </div>

            <div className="absolute -right-4 top-8 hidden rounded-2xl border border-gold-300/30 bg-cream p-4 text-ink shadow-luxe sm:block">
              <div className="flex gap-0.5 text-gold-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold-500" />
                ))}
              </div>
              <p className="mt-1 text-xs font-semibold">{t('+5,000 clientes', '+5,000 clients')}</p>
            </div>
          </div>
        </div>
      </div>

      <a href="#categorias" className="container-luxe relative flex justify-center pb-6 text-[11px] uppercase tracking-luxe text-cream/40 hover:text-gold-300">
        {t('Desliza para descubrir', 'Scroll to discover')}
      </a>
    </section>
  )
}
