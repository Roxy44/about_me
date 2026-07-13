import type { ContentBlock } from '../types';
import { publicAsset } from '../../../utils';

const icon = (filename: string) => publicAsset(`icons/${filename}`);

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
                        icon: icon('JavaScript.png'),
                        value: 'frontend',
                        text: 'JavaScript',
                        measureValue: 4,
                    },
                    {
                        icon: icon('TypeScript.png'),
                        value: 'frontend',
                        text: 'TypeScript',
                        measureValue: 2,
                    },
                    {
                        icon: icon('React.webp'),
                        value: 'frontend',
                        text: 'React',
                        measureValue: 4,
                    },
                    {
                        icon: icon('AntDesign.png'),
                        value: 'frontend',
                        text: 'Ant Design',
                        measureValue: 2,
                    },
                    {
                        icon: icon('shadcn.png'),
                        value: 'frontend',
                        text: 'shadcn',
                        measureValue: 1,
                    },
                    {
                        icon: icon('HTML.png'),
                        value: 'frontend',
                        text: 'HTML',
                        measureValue: 4,
                    },
                    {
                        icon: icon('CSS.png'),
                        value: 'frontend',
                        text: 'CSS',
                        measureValue: 4,
                    },
                    {
                        icon: icon('Less.png'),
                        value: 'frontend',
                        text: 'Less',
                        measureValue: 2,
                    },
                    {
                        icon: icon('Scss.png'),
                        value: 'frontend',
                        text: 'Scss',
                        measureValue: 2,
                    },
                    {
                        icon: icon('Tailwind.png'),
                        value: 'frontend',
                        text: 'Tailwind CSS',
                        measureValue: 1,
                    },
                    {
                        icon: icon('Redux.png'),
                        value: 'frontend',
                        text: 'Redux',
                        measureValue: 3,
                    },
                    {
                        icon: icon('NextJs.webp'),
                        value: 'frontend',
                        text: 'Next.js',
                        measureValue: 2,
                    },
                    {
                        icon: icon('Python.png'),
                        value: 'backend',
                        text: 'Python',
                        measureValue: 1,
                    },
                    {
                        icon: icon('NodeJs.png'),
                        value: 'backend',
                        text: 'Node.js',
                        measureValue: 3,
                    },
                    {
                        icon: icon('Postman.svg'),
                        value: 'backend',
                        text: 'Postman',
                        measureValue: 1,
                    },
                    {
                        icon: icon('Git.png'),
                        value: 'general',
                        text: 'Git',
                        measureValue: 4,
                    },
                    {
                        icon: icon('Jira.png'),
                        value: 'general',
                        text: 'Jira',
                        measureValue: 1,
                    },
                    {
                        icon: icon('YouTrack.webp'),
                        value: 'general',
                        text: 'YouTrack',
                        measureValue: 2,
                    },
                    {
                        icon: icon('Figma.webp'),
                        value: 'general',
                        text: 'Figma',
                        measureValue: 3,
                    },
                    {
                        icon: icon('Confluence.webp'),
                        value: 'general',
                        text: 'Confluence',
                        measureValue: 1,
                    },
                ],
                caption: {
                    main: locale === 'ru' ? '* lvl - значение лет владения навыком' : '* lvl - value of years of skill ownership',
                },
            },
        ],
    },
];
