import type { ContentBlock } from '../types';

export const contactsContent = (): ContentBlock[] => [
    {
        type: 'contacts',
        items: [
          {
            icon: '/icons/LinkedIn.webp',
            type: 'link',
            value: 'https://www.linkedin.com/in/roxy44',
          },
          {
            icon: '/icons/Telegram.png',
            type: 'link',
            value: 'https://t.me/Rox_y44',
          },
          {
            icon: '/icons/Github.png',
            type: 'link',
            value: 'https://github.com/Roxy44',
          },
          {
            icon: '/icons/Discord.png',
            type: 'copy',
            value: 'Roxy#4620',
          },
          {
            icon: '/icons/Mail.png',
            type: 'copy',
            value: 'ivankov.d.i.roxy@gmail.com',
          },
        ]
    }
]