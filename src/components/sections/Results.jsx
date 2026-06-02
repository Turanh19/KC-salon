import Reveal from '../Reveal.jsx'
import SectionHeading from '../SectionHeading.jsx'
import BeforeAfter from '../BeforeAfter.jsx'
import { beforeAfter } from '../../data/site.js'
import { useLang } from '../../i18n/LanguageContext.jsx'

export default function Results() {
  const { t } = useLang()
  return (
    <section id="resultados" className="scroll-mt-12 bg-white py-24">
      <div className="container-luxe">
        <SectionHeading
          eyebrow={t('Antes & Después', 'Before & After')}
          title={t('Transformaciones', 'Transformations')}
          highlight={t('que hablan por sí solas', 'that speak for themselves')}
          subtitle={t(
            'Desliza el control sobre cada imagen para ver el antes y el después de nuestros tratamientos. Resultados reales de clientes reales.',
            'Drag the slider over each image to see the before and after of our treatments. Real results from real clients.',
          )}
        />

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {beforeAfter.map((item, i) => (
            <Reveal key={item.title.es} delay={(i % 3) * 100}>
              <BeforeAfter {...item} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center text-xs text-ink-muted">
          {t(
            'Las imágenes son ilustrativas. Los resultados pueden variar según cada persona.',
            'Images are illustrative. Results may vary from person to person.',
          )}
        </Reveal>
      </div>
    </section>
  )
}
