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
              text: locale === 'ru' ? 
                  'Имею профильное высшее образование и опыт работы Frontend-разработчиком 4 года. Обладаю высокой экспертизой в React, а также опытом применения смежного стека технологий.' 
                  :
                  'I have a specialized higher education and 4 years of experience as a Frontend developer. I have a high level of expertise in React, as well as experience in using related technology stacks.',
            },
            {
              type: 'paragraph',
              text: locale === 'ru' ? 
                  'Мой опыт коммерческой разработки при взаимодействии с Backend составляет 3 года, где преимущественно использовались Django + Python / Node / Firebase. Работал в проектных командах по методологиям Agile, Scrum.'
                  :
                  'I have 3 years of experience in commercial development, working with Backend, where I primarily used Django + Python / Node / Firebase. I have worked in project teams using Agile and Scrum methodologies.',
            },
            
            {
              type: 'heading',
              text: locale === 'ru' ? 'Своими основными профессиональными компетенциями считаю:' : 'I consider my main professional competencies to be:',
            },
            {
              type: 'list',
              items: [
                locale === 'ru' ? 'создание качественных и понятных UI/UX пользовательских интерфейсов' : 'creating high-quality and intuitive UI/UX user interfaces',
                locale === 'ru' ? 'сбор и управление обратной связью от проектной команды и пользователей с целью внесения необходимых доработок, улучшений' : 'collecting and managing feedback from the project team and users in order to make necessary improvements',
                locale === 'ru' ? 'полный цикл управления Frontend-разработкой в единственном лице (Микран) — умение работать по целям, а не только реализовывать пул конкретных задач' : 'full-cycle Frontend development management as a single person (Mikran) — the ability to work on goals, and not just implement a pool of specific tasks',
              ],
            },
          ],
        },
      ],
    },
  ];
};
