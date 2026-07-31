import type { ContentBlock } from '../types';
import { publicAsset } from '../../../utils';

const icon = (filename: string) => publicAsset(`icons/${filename}`);

export const contactsContent = (locale: string = 'ru', isMobile = false): ContentBlock[] => [
    {
        type: 'paragraph',
        text:
            locale === 'ru'
                ? isMobile
                    ? 'РА, Ереван · UTC+4 · удалённо (ИП / СЗ)'
                    : 'Республика Армения, Ереван · UTC+4 · удалённо (ИП / СЗ)'
                : isMobile
                  ? 'RA, Yerevan · UTC+4 · remote / on-site'
                  : 'Republic of Armenia, Yerevan · UTC+4 · remote / on-site',
    },
    {
        type: 'contacts',
        items: [
            {
                icon: icon('LinkedIn.svg'),
                type: 'link',
                value: 'https://www.linkedin.com/in/roxy44',
            },
            {
                icon: icon('Telegram.svg'),
                type: 'link',
                value: 'https://t.me/Rox_y44',
            },
            {
                icon: icon('Github.svg'),
                type: 'link',
                value: 'https://github.com/Roxy44',
            },
            {
                icon: icon('Discord.svg'),
                type: 'copy',
                value: 'Roxy#4620',
            },
            {
                icon: icon('Mail.svg'),
                type: 'copy',
                value: 'ivankov.d.i.roxy@gmail.com',
            },
        ],
    },
];
