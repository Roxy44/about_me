import { useLocale } from '../../utils'
import { ContentRenderer } from './ContentRenderer'
import { ContentBlocks } from './utils'

const Content = () => {
  const { locale, t } = useLocale()
  const contentBlocks = ContentBlocks(locale)

  const contentItems: React.ReactNode[] = Object.values(contentBlocks).map((item) => (
    <section key={item.link} id={item.link} className="text-black text-xl">
      <h2 className="text-2xl font-bold">{t(item.title)}</h2>
      <ContentRenderer content={item.content} />
    </section>
  ))

  return (
    <div className="flex flex-col flex-grow gap-10 py-10 px-100 bg-gray-100">
      {contentItems}
    </div>
  )
}

export default Content
