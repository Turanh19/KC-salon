# KC Salon · Estética by Keity

Sitio web para el med spa **KC Salon (Estética by Keity)** en Hollywood, FL.
Diseño elegante en **blanco, negro y dorado**, inspirado en el brochure de la marca.

## ✨ Características

- **Inicio** — Hero, estadísticas, sobre Keity, categorías principales de servicios, tratamiento estrella PicoSure, tecnología premium, galería antes/después (slider interactivo), equipo, testimonios y contacto con mapa.
- **Servicios** (`/servicios`) — Catálogo completo (60+ tratamientos en 12 categorías) con búsqueda en vivo, navegación por categorías (scrollspy) y precios. Cada servicio se puede reservar con un clic.
- **Reservar** (`/reservar`) — Formulario de reserva con selector de servicios (búsqueda + filtros por categoría + multi-selección), datos de contacto y fecha/hora. Al enviar, genera un mensaje de WhatsApp (o email) listo para enviar. Acepta preselección vía `?servicio=`.

## 🛠️ Stack

- [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/) (multipágina)
- [Tailwind CSS](https://tailwindcss.com/) (paleta dorada/negra personalizada)
- [Lucide React](https://lucide.dev/) (íconos)
- Tipografías: Playfair Display, Cormorant Garamond, Montserrat (Google Fonts)

## 🚀 Empezar

```bash
npm install
npm run dev
```

Abre la URL que indique la terminal (por defecto `http://localhost:5173`).

## 📦 Build de producción

```bash
npm run build      # genera /dist
npm run preview    # previsualiza el build
```

## 🎨 Personalización

- **Servicios y precios:** `src/data/services.js`
- **Contacto, horario, equipo, testimonios, antes/después:** `src/data/site.js`
- **Colores y tipografías:** `tailwind.config.js`

## 📍 Contacto

- **Dirección:** 2632 Hollywood Blvd, Floor 3, Suite 307, Hollywood, FL 33020
- **Teléfono:** +1 (305) 336-7129
- **Horario:** Lun–Mar 9:30–18:00 · Mié–Vie 9:30–17:30 · Sáb 10:00–16:00 · Dom cerrado

---

> Las imágenes provienen de Unsplash y son ilustrativas. Reemplázalas por fotos reales del salón en `src/data/`.
