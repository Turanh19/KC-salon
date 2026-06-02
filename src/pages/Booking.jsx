import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  User,
  Mail,
  MessageCircle,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
} from 'lucide-react'
import ServicePicker from '../components/booking/ServicePicker.jsx'
import { business, hours } from '../data/site.js'
import { serviceCategories, serviceByValue } from '../data/services.js'
import { useLang } from '../i18n/LanguageContext.jsx'

const timeSlots = [
  { id: 'morning', es: 'Mañana · 9:30 – 12:00', en: 'Morning · 9:30 – 12:00' },
  { id: 'midday', es: 'Mediodía · 12:00 – 3:00', en: 'Midday · 12:00 – 3:00' },
  { id: 'afternoon', es: 'Tarde · 3:00 – 6:00', en: 'Afternoon · 3:00 – 6:00' },
  { id: 'any', es: 'Sin preferencia', en: 'No preference' },
]

export default function Booking() {
  const { t, L } = useLang()
  const [params] = useSearchParams()
  const preselect = params.get('servicio') || ''

  const initialCategory = useMemo(() => {
    if (serviceCategories.some((c) => c.id === preselect)) return preselect
    return 'all'
  }, [preselect])

  const [selected, setSelected] = useState([])
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: 'any',
    notes: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (preselect && preselect.includes(' — ')) {
      setSelected((prev) => (prev.includes(preselect) ? prev : [...prev, preselect]))
    }
  }, [preselect])

  const toggle = (v) => setSelected((prev) => (prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]))
  const remove = (v) => setSelected((prev) => prev.filter((x) => x !== v))
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const steps = [
    { icon: Sparkles, title: t('Elige tus servicios', 'Choose your services'), text: t('Selecciona uno o varios tratamientos de interés.', 'Select one or more treatments of interest.') },
    { icon: Calendar, title: t('Indica tu fecha', 'Pick your date'), text: t('Dinos cuándo te gustaría visitarnos.', 'Tell us when you’d like to visit.') },
    { icon: MessageCircle, title: t('Confirmamos contigo', 'We confirm with you'), text: t('Te escribimos para agendar tu cita.', 'We’ll message you to schedule your appointment.') },
  ]

  const selectedLabels = selected.map((v) => {
    const found = serviceByValue[v]
    return found ? L(found.name) : v.split(' — ')[1] || v
  })

  const timeLabel = L(timeSlots.find((s) => s.id === form.time) || timeSlots[3])

  const validate = () => {
    const err = {}
    if (!form.name.trim()) err.name = t('Por favor ingresa tu nombre.', 'Please enter your name.')
    if (!form.phone.trim()) err.phone = t('Necesitamos un teléfono para confirmar.', 'We need a phone number to confirm.')
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = t('Revisa el formato del email.', 'Please check the email format.')
    setErrors(err)
    return Object.keys(err).length === 0
  }

  const buildMessage = () => {
    const lines = [
      t('Hola KC Salon, quiero reservar una cita.', 'Hi KC Salon, I’d like to book an appointment.'),
      `${t('Nombre', 'Name')}: ${form.name}`,
      `${t('Teléfono', 'Phone')}: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      selectedLabels.length && `${t('Servicios de interés', 'Services of interest')}: ${selectedLabels.join(', ')}`,
      form.date && `${t('Fecha preferida', 'Preferred date')}: ${form.date}`,
      timeLabel && `${t('Horario', 'Time')}: ${timeLabel}`,
      form.notes && `${t('Notas', 'Notes')}: ${form.notes}`,
    ].filter(Boolean)
    return lines.join('\n')
  }

  const whatsappLink = `${business.whatsappHref}?text=${encodeURIComponent(buildMessage())}`
  const mailtoLink = `${business.emailHref}?subject=${encodeURIComponent(
    t('Reserva de cita — KC Salon', 'Appointment request — KC Salon'),
  )}&body=${encodeURIComponent(buildMessage())}`

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
    window.open(whatsappLink, '_blank', 'noopener')
  }

  if (submitted) {
    return (
      <section className="bg-cream pb-24 pt-36">
        <div className="container-luxe max-w-2xl">
          <div className="card overflow-hidden p-10 text-center">
            <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gold-gradient text-ink">
              <CheckCircle2 className="h-10 w-10" />
            </span>
            <h1 className="mt-6 font-display text-3xl font-bold text-ink">
              {t('¡Casi listo', 'Almost done')}, {form.name.split(' ')[0]}!
            </h1>
            <p className="mt-3 text-ink-muted">
              {t(
                'Abrimos WhatsApp con tu solicitud. Si no se abrió, usa los botones de abajo para enviárnosla. Te confirmaremos tu cita lo antes posible.',
                'We opened WhatsApp with your request. If it didn’t open, use the buttons below to send it. We’ll confirm your appointment as soon as possible.',
              )}
            </p>

            <div className="mt-6 rounded-2xl border border-ink/5 bg-cream/70 p-6 text-left">
              <p className="text-xs font-semibold uppercase tracking-luxe text-gold-700">{t('Resumen', 'Summary')}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-ink-soft">
                <li><strong>{t('Nombre', 'Name')}:</strong> {form.name}</li>
                <li><strong>{t('Teléfono', 'Phone')}:</strong> {form.phone}</li>
                {form.email && <li><strong>Email:</strong> {form.email}</li>}
                {selectedLabels.length > 0 && (
                  <li><strong>{t('Servicios', 'Services')}:</strong> {selectedLabels.join(', ')}</li>
                )}
                {form.date && <li><strong>{t('Fecha', 'Date')}:</strong> {form.date}</li>}
                <li><strong>{t('Horario', 'Time')}:</strong> {timeLabel}</li>
              </ul>
            </div>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-gold">
                <MessageCircle className="h-4 w-4" /> {t('Enviar por WhatsApp', 'Send via WhatsApp')}
              </a>
              <a href={mailtoLink} className="btn-outline">
                <Mail className="h-4 w-4" /> {t('Enviar por email', 'Send via email')}
              </a>
            </div>
            <Link to="/" className="mt-6 inline-block text-sm font-semibold text-gold-700 hover:text-gold-800">
              ← {t('Volver al inicio', 'Back to home')}
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative overflow-x-hidden bg-cream pb-24 pt-36">
      <div className="container-luxe">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gold-500/70" /> {t('Reserva tu cita', 'Book your appointment')} <span className="h-px w-8 bg-gold-500/70" />
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            {t('Agenda tu ', 'Schedule your ')}
            <span className="text-gradient-gold">{t('transformación', 'transformation')}</span>
          </h1>
          <p className="mt-4 text-ink-muted">
            {t(
              'Cuéntanos qué te interesa y cuándo. Resultados desde la primera sesión — con financiamiento disponible.',
              'Tell us what you’re interested in and when. Results from the first session — with financing available.',
            )}
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.6fr_1fr] [&>*]:min-w-0">
          <form onSubmit={handleSubmit} className="card min-w-0 overflow-hidden p-6 sm:p-9">
            <fieldset>
              <legend className="flex items-center gap-2 font-display text-xl font-bold text-ink">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-gradient text-sm text-ink">1</span>
                {t('¿Qué te interesa?', 'What are you interested in?')}
              </legend>
              <p className="mb-4 mt-1 text-sm text-ink-muted">
                {t('Selecciona uno o varios tratamientos. Puedes buscar o filtrar por categoría.', 'Select one or more treatments. You can search or filter by category.')}
              </p>
              <ServicePicker selected={selected} onToggle={toggle} onRemove={remove} initialCategory={initialCategory} />
            </fieldset>

            <div className="hairline my-8" />

            <fieldset>
              <legend className="flex items-center gap-2 font-display text-xl font-bold text-ink">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-gradient text-sm text-ink">2</span>
                {t('Tus datos', 'Your details')}
              </legend>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <Field label={t('Nombre completo', 'Full name')} icon={User} error={errors.name} required>
                  <input value={form.name} onChange={update('name')} placeholder={t('Tu nombre', 'Your name')} className="input" />
                </Field>
                <Field label={t('Teléfono', 'Phone')} icon={Phone} error={errors.phone} required>
                  <input value={form.phone} onChange={update('phone')} placeholder="(305) 000-0000" inputMode="tel" className="input" />
                </Field>
                <Field label={t('Email (opcional)', 'Email (optional)')} icon={Mail} error={errors.email}>
                  <input value={form.email} onChange={update('email')} placeholder="tucorreo@email.com" inputMode="email" className="input" />
                </Field>
                <Field label={t('Fecha preferida', 'Preferred date')} icon={Calendar}>
                  <input type="date" value={form.date} onChange={update('date')} className="input" />
                </Field>
                <Field label={t('Horario preferido', 'Preferred time')} icon={Clock}>
                  <select value={form.time} onChange={update('time')} className="input">
                    {timeSlots.map((s) => (
                      <option key={s.id} value={s.id}>{L(s)}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="mt-5">
                <Field label={t('Notas (opcional)', 'Notes (optional)')} icon={MessageCircle}>
                  <textarea value={form.notes} onChange={update('notes')} rows={3} placeholder={t('Cuéntanos cualquier detalle o pregunta…', 'Tell us any details or questions…')} className="input resize-none" />
                </Field>
              </div>
            </fieldset>

            <button type="submit" className="btn-gold mt-8 w-full text-base">
              <Calendar className="h-5 w-5" /> {t('Solicitar mi cita', 'Request my appointment')}
            </button>
            <p className="mt-3 flex items-center justify-center gap-2 text-center text-xs text-ink-muted">
              <ShieldCheck className="h-4 w-4 text-gold-600" />
              {t('Al enviar, abriremos WhatsApp con tu solicitud lista para enviar.', 'On submit, we’ll open WhatsApp with your request ready to send.')}
            </p>
          </form>

          <aside className="min-w-0 space-y-6 lg:sticky lg:top-32 lg:self-start">
            <div className="card p-7">
              <h3 className="font-display text-lg font-bold text-ink">{t('Cómo funciona', 'How it works')}</h3>
              <ol className="mt-5 space-y-5">
                {steps.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-50 text-gold-700">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">{i + 1}. {s.title}</p>
                      <p className="text-xs text-ink-muted">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="card overflow-hidden">
              <div className="bg-ink p-6 text-cream">
                <h3 className="font-display text-lg font-bold">{t('Visítanos', 'Visit us')}</h3>
                <a href={business.mapsHref} target="_blank" rel="noreferrer" className="mt-3 flex gap-3 text-sm text-cream/80 hover:text-gold-300">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                  <span>{business.address.line1}, {L(business.address.line2)}<br />{business.address.city}</span>
                </a>
                <a href={business.phoneHref} className="mt-3 flex items-center gap-3 text-sm text-cream/80 hover:text-gold-300">
                  <Phone className="h-4 w-4 text-gold-400" /> {business.phone}
                </a>
              </div>
              <div className="p-6">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-luxe text-gold-700">
                  <Clock className="h-4 w-4" /> {t('Horario', 'Hours')}
                </p>
                <ul className="mt-3 space-y-1.5 text-sm">
                  {hours.map((h) => (
                    <li key={h.day.es} className="flex justify-between">
                      <span className="text-ink-muted">{L(h.day)}</span>
                      <span className={h.closed ? 'text-gold-600' : 'text-ink-soft'}>{L(h.time)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a href={business.whatsappHref} target="_blank" rel="noreferrer" className="btn-dark w-full">
              <MessageCircle className="h-4 w-4" /> {t('Prefiero escribir por WhatsApp', 'I prefer to message on WhatsApp')}
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}

function Field({ label, icon: Icon, error, required, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-muted">
        <Icon className="h-3.5 w-3.5 text-gold-600" />
        {label} {required && <span className="text-gold-600">*</span>}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs font-medium text-red-500">{error}</span>}
    </label>
  )
}
