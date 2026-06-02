// Site-wide data — bilingual (es / en). Localizable fields use { es, en }.

export const business = {
  name: 'KC Salon',
  brand: 'Estética by Keity',
  tagline: { es: 'Resultados desde la primera sesión', en: 'Results from the first session' },
  phone: '+1 (305) 336-7129',
  phoneHref: 'tel:+13053367129',
  whatsappHref: 'https://wa.me/13053367129',
  email: 'hola@kcsalon.com',
  emailHref: 'mailto:hola@kcsalon.com',
  address: {
    line1: '2632 Hollywood Blvd',
    line2: { es: 'Piso 3, Suite 307', en: 'Floor 3, Suite 307' },
    city: 'Hollywood, FL 33020',
  },
  mapsHref:
    'https://www.google.com/maps/search/?api=1&query=2632+Hollywood+Blvd+Floor+3+Suite+307+Hollywood+FL+33020',
  instagramHref: 'https://instagram.com/',
  facebookHref: 'https://facebook.com/',
}

export const hours = [
  { day: { es: 'Lunes', en: 'Monday' }, time: '9:30 AM – 6:00 PM' },
  { day: { es: 'Martes', en: 'Tuesday' }, time: '9:30 AM – 6:00 PM' },
  { day: { es: 'Miércoles', en: 'Wednesday' }, time: '9:30 AM – 5:30 PM' },
  { day: { es: 'Jueves', en: 'Thursday' }, time: '9:30 AM – 5:30 PM' },
  { day: { es: 'Viernes', en: 'Friday' }, time: '9:30 AM – 5:30 PM' },
  { day: { es: 'Sábado', en: 'Saturday' }, time: '10:00 AM – 4:00 PM' },
  { day: { es: 'Domingo', en: 'Sunday' }, time: { es: 'Cerrado', en: 'Closed' }, closed: true },
]

export const highlights = [
  {
    icon: 'Gem',
    title: 'PicoSure',
    text: {
      es: 'Tecnología láser de grado celebridad para resultados que se notan.',
      en: 'Celebrity-grade laser technology for results you can see.',
    },
  },
  {
    icon: 'Waves',
    title: 'Venus Legacy',
    text: {
      es: 'Radiofrecuencia avanzada para esculpir, tonificar y reafirmar.',
      en: 'Advanced radiofrequency to sculpt, tone and firm.',
    },
  },
  {
    icon: 'Flame',
    title: { es: 'Láser CO2', en: 'CO2 Laser' },
    text: {
      es: 'Resurfacing fraccionado para una piel renovada y luminosa.',
      en: 'Fractional resurfacing for renewed, radiant skin.',
    },
  },
  {
    icon: 'Droplets',
    title: 'IV Therapy',
    text: {
      es: 'Vitaminas intravenosas para energía y bienestar desde adentro.',
      en: 'Intravenous vitamins for energy and wellness from within.',
    },
  },
  {
    icon: 'Syringe',
    title: 'Botox & Fillers',
    text: {
      es: 'Inyectables aplicados por enfermera profesional certificada.',
      en: 'Injectables administered by a certified professional nurse.',
    },
  },
  {
    icon: 'BadgeDollarSign',
    title: { es: 'Financiamiento', en: 'Financing' },
    text: {
      es: 'Planes de financiamiento disponibles para tu tratamiento.',
      en: 'Financing plans available for your treatment.',
    },
  },
]

export const team = [
  {
    name: 'Keity Cantillo',
    role: { es: 'Fundadora & Médico Estética', en: 'Founder & Medical Esthetician' },
    bio: {
      es: 'Visionaria detrás de Estética by Keity, especialista en tratamientos faciales y láser de alta tecnología.',
      en: 'The visionary behind Estética by Keity, specializing in facial treatments and high-tech laser.',
    },
    image: '/Owner.webp',
    founder: true,
  },
  {
    name: 'Camila',
    role: { es: 'Esteticista', en: 'Esthetician' },
    bio: {
      es: 'Experta en faciales profundos, peelings y cuidado personalizado de la piel.',
      en: 'Expert in deep facials, peels and personalized skincare.',
    },
    image:
      'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Annie',
    role: { es: 'Esteticista', en: 'Esthetician' },
    bio: {
      es: 'Especialista en depilación láser y tratamientos corporales.',
      en: 'Specialist in laser hair removal and body treatments.',
    },
    image:
      'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Tatiana',
    role: { es: 'Esteticista', en: 'Esthetician' },
    bio: {
      es: 'Apasionada por la micropigmentación, cejas y pestañas.',
      en: 'Passionate about micropigmentation, brows and lashes.',
    },
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Sandra',
    role: { es: 'Esteticista', en: 'Esthetician' },
    bio: {
      es: 'Dedicada a tratamientos corporales, drenaje y post-operatorio.',
      en: 'Dedicated to body treatments, drainage and post-op care.',
    },
    image:
      'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=600&q=80',
  },
]

// Before / after gallery.
export const beforeAfter = [
  {
    title: { es: 'Rejuvenecimiento Facial', en: 'Facial Rejuvenation' },
    treatment: { es: 'PicoSure + Facial Profundo', en: 'PicoSure + Deep Facial' },
    before:
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80',
    after:
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: { es: 'Piel Despigmentada', en: 'Depigmented Skin' },
    treatment: { es: 'Cosmelan Peel Treatment', en: 'Cosmelan Peel Treatment' },
    before:
      'https://images.unsplash.com/photo-1614108128846-4d3e2f5a0b6f?auto=format&fit=crop&w=800&q=80',
    after:
      'https://images.unsplash.com/photo-1599387737838-626d9b8be40a?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: { es: 'Contorno Corporal', en: 'Body Contouring' },
    treatment: { es: 'Venus Legacy + Criolipólisis', en: 'Venus Legacy + Cryolipolysis' },
    before:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    after:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80',
  },
]

export const testimonials = [
  {
    name: 'María G.',
    treatment: 'PicoSure Full Face',
    quote: {
      es: 'Desde la primera sesión vi un cambio increíble en mi piel. El equipo de Keity es profesional y cálido. ¡Lo recomiendo al 100%!',
      en: 'From the very first session I saw an incredible change in my skin. Keity’s team is professional and warm. I recommend them 100%!',
    },
    rating: 5,
  },
  {
    name: 'Daniela R.',
    treatment: { es: 'Venus Legacy 3 Zonas', en: 'Venus Legacy 3 Zones' },
    quote: {
      es: 'Los resultados de mi tratamiento corporal superaron mis expectativas. Me sentí cuidada en todo momento.',
      en: 'The results of my body treatment exceeded my expectations. I felt cared for the whole time.',
    },
    rating: 5,
  },
  {
    name: 'Andrea P.',
    treatment: { es: 'Facial VIP con Keity', en: 'VIP Facial with Keity' },
    quote: {
      es: 'Una experiencia de lujo de principio a fin. Mi piel nunca se había visto tan radiante. Volveré sin duda.',
      en: 'A luxury experience from start to finish. My skin has never looked so radiant. I’ll definitely be back.',
    },
    rating: 5,
  },
]

export const stats = [
  { value: '5,000+', label: { es: 'Clientes felices', en: 'Happy clients' } },
  { value: '12+', label: { es: 'Tecnologías premium', en: 'Premium technologies' } },
  { value: '60+', label: { es: 'Tratamientos', en: 'Treatments' } },
  { value: '5★', label: { es: 'Calificación', en: 'Rating' } },
]
