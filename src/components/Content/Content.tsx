import { useLocale } from '../../utils'
import { ContentRenderer } from './ContentRenderer'
import { ContentBlocks } from './utils'

const Content = () => {
  const { locale, t } = useLocale()
  const contentBlocks = ContentBlocks(locale)

  const contentItems: React.ReactNode[] = Object.values(contentBlocks).map((item, index) => (
    <section
      key={item.link ?? item.title ?? index}
      id={item.link}
      className="text-black text-xl"
    >
      {item.title && 
        <div data-section-anchor className="w-fit text-2xl font-bold px-[12px] py-[4px] border-2 border-black-500 rounded-xl bg-black text-white mb-1">
          {t(item.title)}
        </div>
      }
      <ContentRenderer content={item.content} />
    </section>
  ))

  return (
    <div className="flex flex-col flex-grow gap-10 py-10 px-80 bg-gray-100">
      {contentItems}
    </div>
  )
}

export default Content
