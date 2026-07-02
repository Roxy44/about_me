import type { ContentBlock } from '../types'

export const skillsContent = (locale: string = 'ru'): ContentBlock[] => [
  {
    type: 'toggle',
    options: [
      {
        label: 'Frontend',
        value: 'frontend',
      },
      {
        label: 'Backend',
        value: 'backend',
      },
      {
        label: locale === 'ru' ? 'Общие' : 'General',
        value: 'general',
      },
    ],
    content: [
      {
        type: 'list',
        measure: 'lvl',
        columns: 3,
        items: [
          {
            icon: '/icons/JavaScript.png',
            value: 'frontend',
            text: 'JavaScript',
            measureValue: 4,
          },
          {
            icon: '/icons/TypeScript.png',
            value: 'frontend',
            text: 'TypeScript',
            measureValue: 2,
          },
          {
            icon: '/icons/React.webp',
            value: 'frontend',
            text: 'React',
            measureValue: 4,
          },
          {
            icon: '/icons/AntDesign.png',
            value: 'frontend',
            text: 'Ant Design',
            measureValue: 2,
          },
          {
            icon: '/icons/shadcn.png',
            value: 'frontend',
            text: 'shadcn',
            measureValue: 1,
          },
          {
            icon: '/icons/HTML.png',
            value: 'frontend',
            text: 'HTML',
            measureValue: 4,
          },
          {
            icon: '/icons/CSS.png',
            value: 'frontend',
            text: 'CSS',
            measureValue: 4,
          },
          {
            icon: '/icons/Less.png',
            value: 'frontend',
            text: 'Less',
            measureValue: 2,
          },
          {
            icon: '/icons/Scss.png',
            value: 'frontend',
            text: 'Scss',
            measureValue: 2,
          },
          {
            icon: '/icons/Tailwind.png',
            value: 'frontend',
            text: 'Tailwind CSS',
            measureValue: 1,
          },
          {
            icon: '/icons/Redux.png',
            value: 'frontend',
            text: 'Redux',
            measureValue: 3,
          },
          {
            icon: '/icons/NextJs.webp',
            value: 'frontend',
            text: 'Next.js',
            measureValue: 2,
          },
          {
            icon: '/icons/Python.png',
            value: 'backend',
            text: 'Python',
            measureValue: 1,
          },
          {
            icon: '/icons/NodeJs.png',
            value: 'backend',
            text: 'Node.js',
            measureValue: 3,
          },
          {
            icon: '/icons/Postman.svg',
            value: 'backend',
            text: 'Postman',
            measureValue: 1,
          },
          {
            icon: '/icons/Git.png',
            value: 'general',
            text: 'Git',
            measureValue: 4,
          },
          {
            icon: '/icons/Jira.png',
            value: 'general',
            text: 'Jira',
            measureValue: 1,
          },
          {
            icon: '/icons/YouTrack.webp',
            value: 'general',
            text: 'YouTrack',
            measureValue: 2,
          },
          {
            icon: '/icons/Figma.webp',
            value: 'general',
            text: 'Figma',
            measureValue: 3,
          },
          {
            icon: '/icons/Confluence.webp',
            value: 'general',
            text: 'Confluence',
            measureValue: 1,
          }
        ],
        caption: {
          main: locale === 'ru' ? '* lvl - значение лет владения навыком' : '* lvl - value of years of skill ownership',
        },
      },
    ],
  },
]
