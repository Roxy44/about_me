import { useIsMobile, useIsTablet, useLocale } from '../../utils';
import { ContentRenderer } from './ContentRenderer';
import { ContentBlocks } from './utils';

const Content = () => {
  const { locale, t } = useLocale();
  const contentBlocks = ContentBlocks(locale);

  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  const contentItems: React.ReactNode[] = Object.values(contentBlocks).map((item, index) => (
    <section
      key={item.link ?? item.title ?? index}
      id={item.link}
      className="text-black text-xl"
    >
      {item.title && 
        <div data-section-anchor className={`font-bold px-[12px] py-[4px] border-2 border-black-500 rounded-xl bg-blue-400 text-white mb-1 ${isMobile ? 'w-full text-xl text-center' : 'w-fit text-2xl'}`}>
          {t(item.title)}
        </div>
      }
      <ContentRenderer content={item.content} />
    </section>
  ));

  return (
    <div className={`flex flex-col flex-grow gap-10 bg-gray-100 px-4 lg:px-16 xl:px-24 2xl:px-60 ${isMobile ? 'py-4' : 'py-10 md:px-10'}`}>
      {contentItems}
    </div>
  );
};

export default Content;
