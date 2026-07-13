import type { ContentBlock } from '../types';

export const educationContent = (locale: string = 'ru'): ContentBlock[] => [
    {
        type: 'sub-group',
        direction: 'column',
        className: 'mt-4',
        content: [
            {
                type: 'heading',
                text:
                    locale === 'ru'
                        ? 'Томский государственный университет систем управления и радиоэлектроники'
                        : 'Tomsk State University of Control Systems and Radioelectronics',
                caption: {
                    main: locale === 'ru' ? 'Магистр 2021 – 2023' : 'Master 2021 – 2023',
                },
            },
            {
                type: 'paragraph',
                text:
                    locale === 'ru'
                        ? 'Специальность: Программное обеспечение вычислительной техники и автоматизированных систем'
                        : 'Specialty: Software for Computer Technology and Automated Systems',
            },
            {
                type: 'divider',
            },
            {
                type: 'heading',
                text:
                    locale === 'ru'
                        ? 'Томский государственный университет систем управления и радиоэлектроники'
                        : 'Tomsk State University of Control Systems and Radioelectronics',
                caption: {
                    main: locale === 'ru' ? 'Бакалавр 2017 – 2021' : 'Bachelor 2017 – 2021',
                },
            },
            {
                type: 'paragraph',
                text:
                    locale === 'ru'
                        ? 'Специальность: Программное обеспечение вычислительной техники и автоматизированных систем'
                        : 'Specialty: Software for Computer Technology and Automated Systems',
            },
        ],
    },
];
