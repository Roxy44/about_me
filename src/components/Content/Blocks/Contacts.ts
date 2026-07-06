import type { ContentBlock } from '../types';
import { publicAsset } from '../../../utils';

const icon = (filename: string) => publicAsset(`icons/${filename}`);

export const contactsContent = (): ContentBlock[] => [
  {
    type: 'contacts',
    items: [
      {
        icon: icon('LinkedIn.webp'),
        type: 'link',
        value: 'https://www.linkedin.com/in/roxy44',
      },
      {
        icon: icon('Telegram.png'),
        type: 'link',
        value: 'https://t.me/Rox_y44',
      },
      {
        icon: icon('Github.png'),
        type: 'link',
        value: 'https://github.com/Roxy44',
      },
      {
        icon: icon('Discord.png'),
        type: 'copy',
        value: 'Roxy#4620',
      },
      {
        icon: icon('Mail.png'),
        type: 'copy',
        value: 'ivankov.d.i.roxy@gmail.com',
      },
    ],
  },
];
