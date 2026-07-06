import type { ContentBlock } from '../types';
import { publicAsset, useIsMobile } from '../../../utils';

export const aboutMeContent = (locale: string = 'ru'): ContentBlock[] => {
  const isMobile = useIsMobile();

  return [
    {
      type: 'sub-group',
      direction: isMobile ? 'column' : 'row',
      className: `flex ${isMobile ? 'items-center gap-4' : 'items-start gap-12'}`,
      content: [
        {
          type: 'image',
          src: publicAsset('img/photo.jpg'),
          alt: locale === 'ru' ? 'Фото профиля' : 'Profile photo',
          variant: 'circle',
          size: isMobile ? 200 : 300,
          className: 'flex justify-center items-center',
          caption: {
            main: 'Дмитрий Иванков',
            sub: 'Frontend Developer',
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
              text: locale === 'ru' ? 
                  'Имею профильное высшее образование и опыт работы Frontend-разработчиком 4 года. Обладаю высокой экспертизой в React, а также опытом применения смежного стека технологий.' 
                  :
                  'I have a specialized higher education and 4 years of experience as a Frontend developer. I have a high level of expertise in React, as well as experience in using related technology stacks.',
            },
            {
              type: 'paragraph',
              text: locale === 'ru' ? 
                  'Мой опыт коммерческой разработки при взаимодействии с Backend составляет 3 года, где преимущественно использовались Django + Python / Node / Firebase.'
                  :
                  'I have 3 years of commercial development experience with backend on django + python / node / firebase. I have experienced in Agile development methodology.'
            },
            
            {
              type: 'heading',
              text: locale === 'ru' ? 'Своими основными профессиональными компетенциями считаю:' : 'I consider my main professional competencies to be:',
            },
            {
              type: 'list',
              items: [
                locale === 'ru' ? 'создание качественных и понятных UI/UX пользовательских интерфейсов' : 'creation of high-quality and understandable UI/UX user interfaces',
                locale === 'ru' ? 'сбор и управление обратной связью от проектной команды и пользователей с целью внесения необходимых доработок, улучшений' : 'collection and management of feedback from the project team and users in order to promptly make the necessary improvements',
                locale === 'ru' ? 'полный цикл управления frontend разработкой в единственном лице — умение работать по целям, а не только реализовывать пул конкретных задач' : 'a full cycle of frontend development management in a single person — the ability to work on goals, and not just implement a pool of specific tasks',
              ],
            },
          ],
        },
      ],
    },
  ];
};
