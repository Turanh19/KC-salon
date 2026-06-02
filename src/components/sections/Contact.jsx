import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Calendar, MessageCircle } from 'lucide-react'
import Reveal from '../Reveal.jsx'
import SectionHeading from '../SectionHeading.jsx'
import { business, hours } from '../../data/site.js'
import { useLang } from '../../i18n/LanguageContext.jsx'

export default function Contact() {
  const { t, L } = useLang()
  return (
    <section id="contacto" className="scroll-mt-12 bg-cream py-24">
      <div className="container-luxe">
        <SectionHeading
          eyebrow={t('Visítanos', 'Visit us')}
          title={t('Contacto &', 'Contact &')}
          highlight={t('ubicación', 'location')}
          subtitle={t(
            'Estamos en el corazón de Hollywood, FL. Agenda tu cita o escríbenos — con gusto resolvemos todas tus dudas.',
            'We’re in the heart of Hollywood, FL. Book your appointment or message us — we’re happy to answer any questions.',
          )}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <a href={business.mapsHref} target="_blank" rel="noreferrer" className="card group flex flex-col gap-2 p-6 transition hover:-translate-y-1 hover:shadow-luxe">
                <MapPin className="h-6 w-6 text-gold-600" />
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">{t('Dirección', 'Address')}</p>
                <p className="text-sm text-ink-soft">
                  {business.address.line1}, {L(business.address.line2)}
                  <br />
                  {business.address.city}
                </p>
              </a>
              <a href={business.phoneHref} className="card group flex flex-col gap-2 p-6 transition hover:-translate-y-1 hover:shadow-luxe">
                <Phone className="h-6 w-6 text-gold-600" />
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">{t('Teléfono', 'Phone')}</p>
                <p className="text-sm text-ink-soft">{business.phone}</p>
              </a>
              <a href={business.emailHref} className="card group flex flex-col gap-2 p-6 transition hover:-translate-y-1 hover:shadow-luxe">
                <Mail className="h-6 w-6 text-gold-600" />
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">{t('Email', 'Email')}</p>
                <p className="text-sm text-ink-soft">{business.email}</p>
              </a>
              <a href={business.whatsappHref} target="_blank" rel="noreferrer" className="card group flex flex-col gap-2 p-6 transition hover:-translate-y-1 hover:shadow-luxe">
                <MessageCircle className="h-6 w-6 text-gold-600" />
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">WhatsApp</p>
                <p className="text-sm text-ink-soft">{t('Chatea con nosotros', 'Chat with us')}</p>
              </a>
            </div>

            <div className="card p-6">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-luxe text-gold-700">
                <Clock className="h-4 w-4" /> {t('Horario de atención', 'Business hours')}
              </p>
              <ul className="mt-4 divide-y divide-ink/5">
                {hours.map((h) => (
                  <li key={h.day.es} className="flex items-center justify-between py-2 text-sm">
                    <span className="text-ink-muted">{L(h.day)}</span>
                    <span className={h.closed ? 'font-medium text-gold-600' : 'font-medium text-ink-soft'}>{L(h.time)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link to="/reservar" className="btn-gold w-full">
              <Calendar className="h-4 w-4" /> {t('Reservar cita', 'Book appointment')}
            </Link>
          </Reveal>

          <Reveal delay={120} className="overflow-hidden rounded-2xl border border-ink/5 shadow-luxe">
            <iframe
              title={t('Ubicación KC Salon', 'KC Salon location')}
              src="https://maps.google.com/maps?q=2632%20Hollywood%20Blvd%2C%20Hollywood%2C%20FL%2033020&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="h-full min-h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
