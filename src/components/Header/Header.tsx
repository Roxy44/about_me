import { useEffect, useRef, useState } from 'react';
import { useIsMobile, useLocale } from '../../utils';
import { Globe } from 'lucide-react';
import { HeaderBlocks } from './utils';

const sectionLinks = Object.values(HeaderBlocks);
const SCROLL_GAP = 20;
const SCROLL_KEYS = new Set(['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' ']);

function getSectionAnchor(section: HTMLElement): HTMLElement {
    return section.querySelector<HTMLElement>('[data-section-anchor]') ?? section;
}

function scrollToSection(sectionId: string, headerHeight: number): void {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const anchor = getSectionAnchor(section);
    const top = anchor.getBoundingClientRect().top + window.scrollY - headerHeight - SCROLL_GAP;

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

    const isMobile = useIsMobile();

    useEffect(() => {
        const header = headerRef.current;
        if (!header) return;

        const updateHeaderHeight = () => {
            document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
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
        document.addEventListener('pointerdown', onPointerDown);
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

    const handleClick = (link: string) => {
        navigationLockRef.current = true;
        setActiveItem(link);

        const targetId = link.replace('#', '');
        scrollToSection(targetId, headerRef.current?.offsetHeight ?? 72);
        window.history.replaceState(null, '', link);
    };

    const headerItems: React.ReactNode[] = Object.values(HeaderBlocks).map((item) => {
        const isActive = activeItem === item.link;

        return (
            <button
                key={item.title}
                type='button'
                onClick={() => handleClick(item.link)}
                className={`
          cursor-pointer whitespace-nowrap pb-0.5 text-sm leading-tight
          md:text-base lg:text-lg xl:text-xl
          ${
              isActive
                  ? `text-[#d4ecb9] ${isMobile ? '' : 'border-b-2 border-[#d4ecb9]'}`
                  : `text-white ${isMobile ? '' : 'hover:border-b-2 hover:border-white'}`
          }
        `}
            >
                {isMobile ? <item.icon className='size-5' /> : t(item.title)}
            </button>
        );
    });

    return (
        <header
            ref={headerRef}
            className={`
        sticky top-0 z-50 flex w-full flex-wrap items-center justify-between
        bg-[#3b97ed] py-2.5
        ${isMobile ? 'px-4' : 'md:px-10 lg:px-16 xl:px-24 2xl:px-60'}
      `}
        >
            <nav
                aria-label='Main'
                className={`
          flex min-w-0 flex-1 flex-wrap items-center
          ${isMobile ? 'gap-x-5 mt-1' : 'gap-x-3 md:gap-x-4 lg:gap-x-6 xl:gap-x-8 2xl:gap-x-10'}
        `}
            >
                {headerItems}
            </nav>

            <div className='flex shrink-0 items-center gap-1.5 sm:gap-2'>
                <Globe className='size-5 text-white sm:size-6' aria-hidden />
                <button
                    type='button'
                    className={`
            cursor-pointer rounded px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm
            ${locale === 'ru' ? 'bg-white text-blue-500' : 'text-white'}
            hover:bg-white/30 hover:text-blue-500
          `}
                    onClick={() => setLocale('ru')}
                >
                    RU
                </button>
                <button
                    type='button'
                    className={`
            cursor-pointer rounded px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm
            ${locale === 'en' ? 'bg-white text-blue-500' : 'text-white'}
            hover:bg-white/30 hover:text-blue-500
          `}
                    onClick={() => setLocale('en')}
                >
                    EN
                </button>
            </div>
        </header>
    );
};

export default Header;
