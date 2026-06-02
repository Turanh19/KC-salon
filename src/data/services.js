// All KC Salon service categories with detailed pricing — bilingual (es / en).
// Localizable fields use { es, en }. `price` is a string when identical in both
// languages, or { es, en } when wording differs (e.g. "desde" / "from").
// The booking "value" is always built from the Spanish strings so it stays stable.

export const serviceCategories = [
  {
    id: 'faciales',
    name: { es: 'Tratamientos Faciales', en: 'Facial Treatments' },
    tagline: { es: 'Faciales', en: 'Facials' },
    icon: 'Sparkles',
    blurb: {
      es: 'Limpieza profunda, peelings médicos, microneedling y faciales premium para una piel luminosa y sana.',
      en: 'Deep cleansing, medical peels, microneedling and premium facials for radiant, healthy skin.',
    },
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
    services: [
      { name: { es: 'Facial Básico con Extracción', en: 'Basic Facial with Extraction' }, price: '$99' },
      { name: { es: 'Mini Facial Exfoliante', en: 'Mini Exfoliating Facial' }, price: '$80' },
      { name: { es: 'Peeling Médico Facial', en: 'Medical Facial Peel' }, price: '$90' },
      { name: { es: 'Peeling Algas Marinas', en: 'Seaweed Peel' }, price: '$100' },
      { name: { es: 'Facial Profundo + Microdermabrasión', en: 'Deep Facial + Microdermabrasion' }, price: '$140' },
      { name: { es: 'Facial Profundo + Luz LED', en: 'Deep Facial + LED Light' }, price: '$120' },
      { name: { es: 'Facial Profundo + Peeling Médico', en: 'Deep Facial + Medical Peel' }, price: '$200' },
      { name: { es: 'Facial Profundo con Dermaplaning', en: 'Deep Facial with Dermaplaning' }, price: '$160' },
      { name: { es: 'Facial con Vitaminas (Hidratante)', en: 'Vitamin Facial (Hydrating)' }, price: '$170' },
      { name: { es: 'Facial Hydra Plus', en: 'Hydra Plus Facial' }, price: '$160' },
      { name: { es: 'Facial Oxígeneo', en: 'OxyGeneo Facial' }, price: '$160' },
      { name: { es: 'Facial con Microneedling + Vitaminas', en: 'Microneedling Facial + Vitamins' }, price: '$190' },
      { name: { es: 'Facial Especializado', en: 'Specialized Facial' }, price: '$150' },
      { name: { es: 'Facial VIP con Keity', en: 'VIP Facial with Keity' }, price: '$250', featured: true },
      { name: { es: 'Facial Acné', en: 'Acne Facial' }, price: '$250' },
      { name: { es: 'Facial Acné Espalda / Glúteos', en: 'Acne Facial — Back / Glutes' }, price: '$199' },
      { name: { es: 'Facial Despigmentante', en: 'Depigmenting Facial' }, price: '$200' },
      { name: { es: 'Facial con Plasma Rico en Plaquetas (PRP)', en: 'Platelet-Rich Plasma Facial (PRP)' }, price: '$299' },
      { name: { es: 'Facial Básico + Hilos de Colágeno + PRP', en: 'Basic Facial + Collagen Threads + PRP' }, price: '$230' },
      { name: { es: 'Exosomas Facial con Microneedling', en: 'Exosomes Facial with Microneedling' }, price: '$280' },
      { name: { es: 'Esperma ADN del Salmón', en: 'Salmon DNA (PDRN)' }, price: '$300' },
      { name: { es: 'CO2 Fraccionado Full Face', en: 'Fractional CO2 — Full Face' }, price: '$700', featured: true },
      { name: { es: 'Nanopore Facial Turno Roller', en: 'Nanopore Facial — Roller Session' }, price: '$250' },
      { name: { es: 'Glow Facial en Manos', en: 'Hand Glow Facial' }, price: '$100' },
      { name: { es: 'Cosmelan Peel Treatment', en: 'Cosmelan Peel Treatment' }, price: '$1,400' },
    ],
  },
  {
    id: 'picosure',
    name: { es: 'PicoSure Laser', en: 'PicoSure Laser' },
    tagline: { es: 'Láser de grado celebridad', en: 'Celebrity-grade laser' },
    icon: 'Gem',
    hero: true,
    blurb: {
      es: 'La tecnología láser de grado celebridad. Elimina tatuajes, manchas y melasma, rejuvenece y aclara — con menos sesiones.',
      en: 'The celebrity-grade laser technology. Removes tattoos, spots and melasma, rejuvenates and brightens — in fewer sessions.',
    },
    image:
      'https://images.unsplash.com/photo-1612908689621-e2e7a36e8d8b?auto=format&fit=crop&w=1200&q=80',
    treats: [
      { es: 'Eliminación de tatuajes', en: 'Tattoo removal' },
      { es: 'Pigmentación y melasma', en: 'Pigmentation & melasma' },
      { es: 'Rejuvenecimiento facial', en: 'Facial rejuvenation' },
      { es: 'Cicatrices de acné', en: 'Acne scars' },
      { es: 'Aclaramiento de cuello / manos / zona íntima', en: 'Neck / hand / intimate brightening' },
    ],
    services: [
      { name: { es: 'Full Face PicoSure Focus', en: 'Full Face PicoSure Focus' }, price: '$1,600', featured: true },
      { name: { es: 'PicoSure Face + Cuello', en: 'PicoSure Face + Neck' }, price: '$1,800', featured: true },
      { name: { es: 'Cuello Skin Rejuvenation', en: 'Neck Skin Rejuvenation' }, price: '$600' },
      { name: { es: 'Despigmentación Axilas / Zona Íntima', en: 'Underarm / Intimate Depigmentation' }, price: '$150' },
      { name: { es: 'Pico Zona Íntima Aclaramiento', en: 'Pico Intimate Brightening' }, price: '$250' },
    ],
  },
  {
    id: 'laser-diodo',
    name: { es: 'Láser Diodo — Depilación', en: 'Diode Laser — Hair Removal' },
    tagline: { es: 'Sesión única', en: 'Single session' },
    icon: 'Zap',
    blurb: {
      es: 'Depilación láser de diodo por zona. Piel suave y libre de vello, sesión por sesión.',
      en: 'Diode laser hair removal by zone. Smooth, hair-free skin, session by session.',
    },
    image:
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1200&q=80',
    services: [
      { name: { es: 'Bozo', en: 'Upper Lip' }, price: '$40' },
      { name: { es: 'Bikini', en: 'Bikini' }, price: '$50' },
      { name: { es: 'Entre Piernas', en: 'Between Legs' }, price: '$50' },
      { name: { es: 'Axilas', en: 'Underarms' }, price: '$70' },
      { name: { es: 'Bozo + Barba', en: 'Upper Lip + Beard' }, price: '$60' },
      { name: { es: 'Full Face', en: 'Full Face' }, price: '$90' },
      { name: { es: 'Full Brazilean', en: 'Full Brazilian' }, price: '$99' },
      { name: { es: 'Brazos', en: 'Arms' }, price: '$120' },
      { name: { es: 'Media Pierna', en: 'Half Leg' }, price: '$80' },
      { name: { es: 'Piernas Completas', en: 'Full Legs' }, price: '$130' },
      { name: { es: 'Espalda', en: 'Back' }, price: '$130' },
      { name: { es: 'Full Brazilean + Axilas', en: 'Full Brazilian + Underarms' }, price: '$130' },
      { name: { es: 'Axilas + Zona Íntima (Hombres)', en: 'Underarms + Intimate Area (Men)' }, price: '$220' },
      { name: { es: '3 Zonas (Axilas + Brazilean + Media Pierna)', en: '3 Zones (Underarms + Brazilian + Half Leg)' }, price: '$160' },
      { name: { es: 'Axilas + Brazilean + Piernas Completas', en: 'Underarms + Brazilian + Full Legs' }, price: '$200' },
      { name: { es: 'Full Body Láser Diodo', en: 'Full Body Diode Laser' }, price: '$399', featured: true },
      { name: { es: 'Full Body Extra', en: 'Full Body Extra' }, price: '$450' },
    ],
  },
  {
    id: 'laser-packages',
    name: { es: 'Paquetes de Láser', en: 'Laser Packages' },
    tagline: { es: '6 sesiones', en: '6 sessions' },
    icon: 'Layers',
    blurb: {
      es: 'Paquetes de depilación láser de 6 sesiones para resultados duraderos con el mejor valor.',
      en: '6-session laser hair removal packages for lasting results at the best value.',
    },
    image:
      'https://images.unsplash.com/photo-1629196914168-3a2652305f8f?auto=format&fit=crop&w=1200&q=80',
    services: [
      { name: { es: 'Axilas (6 ses)', en: 'Underarms (6 sessions)' }, price: '$350' },
      { name: { es: 'Full Brazilian (6 ses)', en: 'Full Brazilian (6 sessions)' }, price: '$500' },
      { name: { es: 'Pierna Completa (6 ses)', en: 'Full Leg (6 sessions)' }, price: '$700' },
      { name: { es: 'Axilas + Full Brazilian (6 ses)', en: 'Underarms + Full Brazilian (6 sessions)' }, price: '$700' },
      { name: { es: 'Axilas + Brazilian + Bozo (6 ses)', en: 'Underarms + Brazilian + Upper Lip (6 sessions)' }, price: '$725' },
      { name: { es: 'Pack Full Face + Cuello (6 ses)', en: 'Full Face + Neck Pack (6 sessions)' }, price: '$650' },
      { name: { es: 'Media Piernas + Axilas + Brazilian (6 ses)', en: 'Half Legs + Underarms + Brazilian (6 sessions)' }, price: '$850' },
      { name: { es: 'Piernas Completas + Axilas + Brazilian (6 ses)', en: 'Full Legs + Underarms + Brazilian (6 sessions)' }, price: '$999' },
      { name: { es: 'Piernas + Brazos + Brazilian (6 ses)', en: 'Legs + Arms + Brazilian (6 sessions)' }, price: '$1,200' },
      { name: { es: 'Full Body Láser (6 ses)', en: 'Full Body Laser (6 sessions)' }, price: '$1,800', featured: true },
      { name: { es: 'Axilas (8 sesiones)', en: 'Underarms (8 sessions)' }, price: '$450' },
    ],
  },
  {
    id: 'corporales',
    name: { es: 'Tratamientos Corporales', en: 'Body Treatments' },
    tagline: { es: 'Corporales', en: 'Body' },
    icon: 'Activity',
    blurb: {
      es: 'Venus Legacy, criolipólisis, maderoterapia, drenaje y post-operatorio para esculpir y tonificar.',
      en: 'Venus Legacy, cryolipolysis, wood therapy, drainage and post-op care to sculpt and tone.',
    },
    image:
      'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80',
    services: [
      { name: { es: 'Slim Body Sculpting', en: 'Slim Body Sculpting' }, price: '$60' },
      { name: { es: 'Sesión Indiva', en: 'Indiva Session' }, price: '$80' },
      { name: { es: 'Venus Papada', en: 'Venus Double Chin' }, price: '$80' },
      { name: { es: 'Venus 1 Zona', en: 'Venus 1 Zone' }, price: '$130' },
      { name: { es: 'Venus 2 Zonas', en: 'Venus 2 Zones' }, price: '$250' },
      { name: { es: 'Venus Legacy 3 Zonas', en: 'Venus Legacy 3 Zones' }, price: '$280', featured: true },
      { name: { es: 'Venus Abdomen 360', en: 'Venus Abdomen 360' }, price: '$200' },
      { name: { es: 'Venus 360 + Drenaje Manual', en: 'Venus 360 + Manual Drainage' }, price: '$230' },
      { name: { es: 'Venus Legacy Corporal + Drenaje', en: 'Venus Legacy Body + Drainage' }, price: '$130' },
      { name: { es: 'Venus 360 Abdomen + Piernas / + Brazos', en: 'Venus 360 Abdomen + Legs / + Arms' }, price: '$350' },
      { name: { es: 'Abdomen 360 Plus', en: 'Abdomen 360 Plus' }, price: '$400' },
      { name: { es: 'Maderoterapia + Drenaje + Aparatología', en: 'Wood Therapy + Drainage + Apparatus' }, price: '$130' },
      { name: { es: 'DLM Post Operatorio', en: 'Post-Op Lymphatic Drainage (MLD)' }, price: '$150' },
      { name: { es: 'Post Operatorio Etapa 2', en: 'Post-Op Stage 2' }, price: '$150' },
      { name: { es: 'Divine Body Detox', en: 'Divine Body Detox' }, price: '$150' },
      { name: { es: 'Sesión de Criolipolisis', en: 'Cryolipolysis Session' }, price: '$200' },
      { name: { es: 'Mesoterapia', en: 'Mesotherapy' }, price: '$100' },
      { name: { es: 'Kinesiotape', en: 'Kinesiotape' }, price: '$150' },
      { name: { es: 'Lipoflash (HIFU + Crio + Detox)', en: 'Lipoflash (HIFU + Cryo + Detox)' }, price: '$900', featured: true },
      { name: { es: 'Paquete Anti Celulitis (4 ses)', en: 'Anti-Cellulite Package (4 sessions)' }, price: '$499' },
      { name: { es: 'Paquete Anti Celulitis (8 ses)', en: 'Anti-Cellulite Package (8 sessions)' }, price: '$900' },
      { name: { es: 'Paquete Divine Body Detox (9 ses)', en: 'Divine Body Detox Package (9 sessions)' }, price: '$1,050' },
      { name: { es: 'Paquete Corporal 6 sesiones + Cejas', en: 'Body Package 6 sessions + Brows' }, price: '$699' },
    ],
  },
  {
    id: 'medica',
    name: { es: 'Médico Estética', en: 'Medical Esthetician' },
    tagline: { es: 'Avanzado', en: 'Advanced' },
    icon: 'Stethoscope',
    blurb: {
      es: 'Procedimientos médico-estéticos avanzados: Morpheus, radiofrecuencia fraccionada, PRP/PRF, fibroblast y más.',
      en: 'Advanced medical-esthetic procedures: Morpheus, fractional radiofrequency, PRP/PRF, fibroblast and more.',
    },
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    services: [
      { name: { es: 'Valoración Médico Estética', en: 'Medical Esthetic Assessment' }, price: '$30' },
      { name: { es: 'Plasma Rico en Fibrina', en: 'Platelet-Rich Fibrin (PRF)' }, price: '$180' },
      {
        name: { es: 'Radiofrecuencia Fraccionada Cara', en: 'Fractional Radiofrequency — Face' },
        price: '$350',
        note: { es: '2.ª sesión $200', en: '2nd session $200' },
      },
      { name: { es: 'Morpheus Microagujas + Plasma Facial', en: 'Morpheus Microneedling + Facial Plasma' }, price: '$450', featured: true },
      { name: { es: 'PRP Capilar (Meso Capilar)', en: 'Hair PRP (Scalp Meso)' }, price: '$200' },
      {
        name: { es: 'Fibroblast', en: 'Fibroblast' },
        price: { es: 'desde $250', en: 'from $250' },
        note: { es: 'contorno · hasta $800+ cara y cuello', en: 'contour · up to $800+ face and neck' },
      },
      {
        name: { es: 'Revitalización Eye Bags', en: 'Eye Bags Revitalization' },
        price: '$200',
        note: { es: '3 sesiones $550', en: '3 sessions $550' },
      },
      { name: { es: 'Rejuvenecimiento Vaginal', en: 'Vaginal Rejuvenation' }, price: '$1,200' },
    ],
  },
  {
    id: 'micropigmentacion',
    name: { es: 'Micropigmentación', en: 'Micropigmentation' },
    tagline: { es: 'Cejas / Labios', en: 'Brows / Lips' },
    icon: 'Brush',
    blurb: {
      es: 'Powder brows, brow lamination, micropigmentación de labios y diseño de cejas perfecto.',
      en: 'Powder brows, brow lamination, lip micropigmentation and perfect brow design.',
    },
    image:
      'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=1200&q=80',
    services: [
      { name: { es: 'Depilación Bozo', en: 'Upper Lip Waxing' }, price: '$10' },
      { name: { es: 'Cejas Cera', en: 'Brows — Wax' }, price: '$25' },
      { name: { es: 'Cejas Hilo', en: 'Brows — Threading' }, price: '$30' },
      { name: { es: 'Diseño + Depilación + Tinte', en: 'Design + Waxing + Tint' }, price: '$45' },
      {
        name: { es: 'Brow Lamination', en: 'Brow Lamination' },
        price: '$99',
        note: { es: 'con tinte $120', en: 'with tint $120' },
      },
      { name: { es: 'Powder Brows', en: 'Powder Brows' }, price: '$450', featured: true },
      { name: { es: 'Powder Brows — Retoque', en: 'Powder Brows — Touch-up' }, price: '$200' },
      { name: { es: 'Powder Brows — Retoque Anual', en: 'Powder Brows — Annual Touch-up' }, price: '$300' },
      { name: { es: 'New Lips Micropigmentación / Neutralización', en: 'New Lips Micropigmentation / Neutralization' }, price: '$350' },
      { name: { es: 'New Lips — Retoque', en: 'New Lips — Touch-up' }, price: '$250' },
      { name: { es: 'Hidratación Lips Dermapen', en: 'Lip Hydration — Dermapen' }, price: '$99' },
    ],
  },
  {
    id: 'pestanas',
    name: { es: 'Pestañas', en: 'Lashes' },
    tagline: { es: 'Extensiones', en: 'Extensions' },
    icon: 'Eye',
    blurb: {
      es: 'Extensiones clásicas, híbridas, volumen y mega volumen, además de lifting de pestañas.',
      en: 'Classic, hybrid, volume and mega volume extensions, plus lash lifting.',
    },
    image:
      'https://images.unsplash.com/photo-1583241800698-9c2e0d2b4f3a?auto=format&fit=crop&w=1200&q=80',
    services: [
      { name: { es: 'Lashes Clásicas', en: 'Classic Lashes' }, price: '$120' },
      { name: { es: 'Lashes Híbridas', en: 'Hybrid Lashes' }, price: '$130' },
      { name: { es: 'Lashes Volumen', en: 'Volume Lashes' }, price: '$140' },
      { name: { es: 'Mega Volumen / Wispy', en: 'Mega Volume / Wispy' }, price: '$150', featured: true },
      { name: { es: 'Refill 2 semanas', en: 'Refill — 2 weeks' }, price: '$85' },
      { name: { es: 'Refill 3 semanas', en: 'Refill — 3 weeks' }, price: '$95' },
      { name: { es: 'Lifting de Pestañas con Tinte', en: 'Lash Lift with Tint' }, price: '$120' },
      { name: { es: 'Remoción de Pestañas', en: 'Lash Removal' }, price: '$30' },
    ],
  },
  {
    id: 'estrias',
    name: { es: 'Estrías & Cicatrices', en: 'Stretch Marks & Scars' },
    tagline: { es: 'Corrección', en: 'Correction' },
    icon: 'Ruler',
    blurb: {
      es: 'Camuflaje de estrías con y sin tinta, y tratamiento profesional de cicatrices.',
      en: 'Stretch mark camouflage with and without ink, and professional scar treatment.',
    },
    image:
      'https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=1200&q=80',
    services: [
      { name: { es: 'Camuflaje Sin Tinta para Estrías', en: 'Inkless Stretch Mark Camouflage' }, price: { es: 'desde $399', en: 'from $399' } },
      { name: { es: 'Camuflaje Profesional con Tinta', en: 'Professional Camouflage with Ink' }, price: '$600' },
      { name: { es: 'Tratamiento Cicatriz', en: 'Scar Treatment' }, price: '$280' },
    ],
  },
  {
    id: 'tattoo-removal',
    name: { es: 'Tatuajes & Láser Removal', en: 'Tattoo & Laser Removal' },
    tagline: { es: 'Remoción', en: 'Removal' },
    icon: 'Eraser',
    blurb: {
      es: 'Eliminación de tatuajes y remoción de cejas con láser, por zona y número de sesiones.',
      en: 'Tattoo removal and laser brow removal, by zone and number of sessions.',
    },
    image:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=1200&q=80',
    services: [
      {
        name: { es: 'Láser Tattoo Removal', en: 'Laser Tattoo Removal' },
        price: '$50 – $350',
        note: { es: 'por sesión, según tamaño de zona', en: 'per session, by zone size' },
      },
      { name: { es: 'Remoción de Cejas con Láser — 1 sesión', en: 'Laser Brow Removal — 1 session' }, price: '$200' },
      { name: { es: 'Remoción de Cejas con Láser — 3 sesiones', en: 'Laser Brow Removal — 3 sessions' }, price: '$350' },
      { name: { es: 'Remoción de Cejas con Láser — 5 sesiones', en: 'Laser Brow Removal — 5 sessions' }, price: '$500' },
    ],
  },
  {
    id: 'iv-therapy',
    name: { es: 'IV Therapy', en: 'IV Therapy' },
    tagline: { es: 'Vitaminas intravenosas', en: 'Intravenous vitamins' },
    icon: 'Droplets',
    blurb: {
      es: 'Sueros de vitaminas, hidratación y NAD+ para energía, recuperación y bienestar desde adentro.',
      en: 'Vitamin drips, hydration and NAD+ for energy, recovery and wellness from within.',
    },
    image:
      'https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?auto=format&fit=crop&w=1200&q=80',
    services: [
      { name: { es: 'IV Therapy', en: 'IV Therapy' }, price: '$175' },
      { name: { es: 'IV Full Vitaminas', en: 'IV Full Vitamins' }, price: '$210' },
      { name: { es: 'NAD IV Therapy', en: 'NAD IV Therapy' }, price: '$600', featured: true },
    ],
  },
  {
    id: 'especiales',
    name: { es: 'Especiales / Otros', en: 'Specials / Other' },
    tagline: { es: 'Más servicios', en: 'More services' },
    icon: 'Gift',
    blurb: {
      es: 'Valoración virtual gratuita, inyectables con enfermera y mentoría profesional para medspas.',
      en: 'Free virtual assessment, nurse-administered injectables and professional medspa mentorship.',
    },
    image:
      'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1200&q=80',
    services: [
      { name: { es: 'Valoración Virtual', en: 'Virtual Assessment' }, price: { es: 'Gratis', en: 'Free' }, featured: true },
      { name: { es: 'Inyectable Nurse (Botox & Fillers)', en: 'Nurse Injectables (Botox & Fillers)' }, price: '$550' },
      { name: { es: 'Mentoría Medspa (para profesionales)', en: 'Medspa Mentorship (for pros)' }, price: { es: 'desde $1,000', en: 'from $1,000' } },
    ],
  },
]

// Canonical, language-stable booking value for a category + service pair.
export const serviceValue = (catNameEs, svcNameEs) => `${catNameEs} — ${svcNameEs}`

// Flat list of every bookable service. `value` is stable (Spanish-based).
export const allBookableServices = serviceCategories.flatMap((cat) =>
  cat.services.map((s) => ({
    catId: cat.id,
    category: cat.name,
    name: s.name,
    price: s.price,
    value: serviceValue(cat.name.es, s.name.es),
  })),
)

// value -> { category, name, price, catId } lookup, for localized display of selections.
export const serviceByValue = Object.fromEntries(
  allBookableServices.map((s) => [s.value, s]),
)

export const getCategoryById = (id) => serviceCategories.find((c) => c.id === id)
