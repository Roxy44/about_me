import { useEffect, useRef, useState } from 'react';
import { useLocale } from '../../utils'
import { Globe } from 'lucide-react'
import { HeaderBlocks } from './utils';

const sectionLinks = Object.values(HeaderBlocks);
const SCROLL_GAP = 20;
const SCROLL_KEYS = new Set([
  'ArrowUp',
  'ArrowDown',
  'PageUp',
  'PageDown',
  'Home',
  'End',
  ' ',
]);

function getSectionAnchor(section: HTMLElement): HTMLElement {
  return section.querySelector<HTMLElement>('[data-section-anchor]') ?? section;
}

function scrollToSection(sectionId: string, headerHeight: number): void {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const anchor = getSectionAnchor(section);
  const top =
    anchor.getBoundingClientRect().top + window.scrollY - headerHeight - SCROLL_GAP;

  window.scrollTo({
    top: Math.max(0, top),
    behavior: 'smooth',
  });
}

const Header = () => {
  const { locale, setLocale, t } = useLocale();
	const [activeItem, setActiveItem] = useState<string>(sectionLinks[0].link);
  const headerRef = useRef<HTMLElement>(null);
  const navigationLockRef = useRef(false);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const updateHeaderHeight = () => {
      document.documentElement.style.setProperty(
        '--header-height',
        `${header.offsetHeight}px`,
      );
    };

    updateHeaderHeight();

    const observer = new ResizeObserver(updateHeaderHeight);
    observer.observe(header);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let ticking = false;

    const unlockNavigationLock = () => {
      navigationLockRef.current = false;
    };

    const updateActiveSection = () => {
      if (navigationLockRef.current) return;

      const offset = headerRef.current?.offsetHeight ?? 72;
      let currentLink = sectionLinks[0].link;

      for (const item of sectionLinks) {
        const element = document.getElementById(item.link.replace('#', ''));
        if (!element) continue;

        if (element.getBoundingClientRect().top - offset <= 0) {
          currentLink = item.link;
        }
      }

      setActiveItem((prev) => (prev === currentLink ? prev : currentLink));
    };

    const onScroll = () => {
      if (ticking) return;

      ticking = true;
      requestAnimationFrame(() => {
        updateActiveSection();
        ticking = false;
      });
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (SCROLL_KEYS.has(event.key)) {
        unlockNavigationLock();
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      if (headerRef.current?.contains(event.target as Node)) return;
      unlockNavigationLock();
    };

    updateActiveSection();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    window.addEventListener('wheel', unlockNavigationLock, { passive: true });
    window.addEventListener('touchmove', unlockNavigationLock, { passive: true });
    window.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateActiveSection);
      window.removeEventListener('wheel', unlockNavigationLock);
      window.removeEventListener('touchmove', unlockNavigationLock);
      window.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, []);

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
    navigationLockRef.current = true;
		setActiveItem(link);

    const targetId = link.replace('#', '');
    scrollToSection(targetId, headerRef.current?.offsetHeight ?? 72);
    window.history.replaceState(null, '', link);
	};

	const headerItems: React.ReactNode[] = Object.values(HeaderBlocks).map((item) => (
		<div 
			key={item.title}
			className={styles.header_item(activeItem === item.link)}
			onClick={() => handleClick(item.link)}
		>{t(item.title)}</div>
	));

  return (
    <header ref={headerRef} className="sticky top-0 z-50 flex w-full items-center justify-between bg-[#3b97ed] p-[12px] px-80">
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
    </header>
  )
}

export default Header
