import type { ContentBlock } from '../types';
import { publicAsset } from '../../../utils';

export const aboutMeContent = (locale: string = 'ru', isMobile = false): ContentBlock[] => [
    {
        type: 'sub-group',
        direction: isMobile ? 'column' : 'row',
        className: `flex ${isMobile ? 'items-center gap-4' : 'items-start gap-12'}`,
        content: [
            {
                type: 'image',
                src: publicAsset('img/photo-avatar.jpg'),
                alt: locale === 'ru' ? 'Фото профиля' : 'Profile photo',
                variant: 'circle',
                size: isMobile ? 200 : 300,
                className: 'flex justify-center items-center',
                caption: {
                    main: 'Дмитрий Иванков',
                    sub: 'Middle Frontend Developer',
                },
            },
            {
                type: 'sub-group',
                title: 'Обо мне',
                direction: 'column',
                className: 'text-base gap-4',
                content: [
                    {
                        type: 'paragraph',
                        text:
                            locale === 'ru'
                                ? 'Frontend-разработчик с профильным высшим образованием и 4 годами опыта коммерческой разработки.'
                                : 'Frontend Developer with a degree in Computer Science and 4 years of commercial web development experience.',
                    },
                    {
                        type: 'paragraph',
                        text:
                            locale === 'ru'
                                ? 'Специализируюсь на создании сложных SPA/SSR-приложений на React, Next.js и TypeScript. Имею опыт проектирования архитектуры с нуля, оптимизации производительности (PageSpeed / Core Web Vitals) и внедрения AI-инструментов во Frontend-разработку. Работал в кросс-функциональных командах по Agile/Scrum.'
                                : 'Specialized in building complex SPA/SSR applications with React, Next.js, and TypeScript. Experienced in architectural design from scratch, web performance optimization (PageSpeed / Core Web Vitals), and integrating AI tools into Frontend development workflows. Proven track record in Agile/Scrum cross-functional environments.',
                    },
                    {
                        type: 'heading',
                        text: locale === 'ru' ? 'Ключевые компетенции:' : 'Core Competencies:',
                    },
                    {
                        type: 'list',
                        items: [
                            locale === 'ru'
                                ? 'Создание продуманных UI/UX интерфейсов и продуктовая работа по целям'
                                : 'Designing intuitive UI/UX interfaces aligned with product goals',
                            locale === 'ru'
                                ? 'Полный цикл управления Frontend-разработкой — в том числе как единственный Frontend разработчик на проекте'
                                : 'Full-cycle Frontend development management — including as the sole Frontend developer on a project',
                            locale === 'ru'
                                ? 'Сбор обратной связи от команды и пользователей с последующей итеративной доработкой продукта'
                                : 'Iterative product development driven by team and user feedback',
                        ],
                    },
                ],
            },
        ],
    },
];
