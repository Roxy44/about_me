import { useState } from 'react';
import { useLocale } from '../../utils'
import { Globe } from 'lucide-react'
import { HeaderBlocks } from './utils';

const Header = () => {
  const { locale, setLocale, t } = useLocale();
	const [activeItem, setActiveItem] = useState<string>('');

	const styles = {
		language_buttons: (lang: string) => `
			rounded px-3 py-2 ${locale === lang ? 'bg-white text-blue-500' : 'text-white'} cursor-pointer
			hover:bg-white/30 hover:text-blue-500
		`,
		header_item: (isActive: boolean) => `
			text-xl cursor-pointer 
			${!isActive ? 'text-white hover:border-b-2 hover:border-white' : 'border-b-2 border-[#d4ecb9] text-[#d4ecb9]'}
		` 
	};

	const handleClick = (link: string) => {
		setActiveItem(link);
		window.location.href = link;
	};

	const headerItems: React.ReactNode[] = Object.values(HeaderBlocks).map((item) => (
		<div 
			key={item.title}
			className={styles.header_item(activeItem === item.link)}
			onClick={() => handleClick(item.link)}
		>{t(item.title)}</div>
	));

  return (
    <div className="flex items-center justify-between p-[12px] bg-[#3b97ed] px-100">
      <div className="flex items-center gap-10">{headerItems}</div>
      <div className="flex items-center gap-2 text-sm">
        <Globe className="size-6 text-white" />
        <button
          type="button"
          className={styles.language_buttons('ru')}
          onClick={() => setLocale('ru')}
        >
          RU
        </button>
        <button
          type="button"
          className={styles.language_buttons('en')}
          onClick={() => setLocale('en')}
        >
          EN
        </button>
      </div>
    </div>
  )
}

export default Header
