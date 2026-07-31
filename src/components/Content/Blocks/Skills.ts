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
                        icon: icon('JavaScript.svg'),
                        value: 'frontend',
                        text: 'JavaScript',
                        measureValue: 4,
                    },
                    {
                        icon: icon('TypeScript.svg'),
                        value: 'frontend',
                        text: 'TypeScript',
                        measureValue: 2,
                    },
                    {
                        icon: icon('React.svg'),
                        value: 'frontend',
                        text: 'React',
                        measureValue: 4,
                    },
                    {
                        icon: icon('NextJs.svg'),
                        value: 'frontend',
                        text: 'Next.js',
                        measureValue: 2,
                    },
                    {
                        icon: icon('Redux.svg'),
                        value: 'frontend',
                        text: 'Redux',
                        measureValue: 3,
                    },
                    {
                        icon: icon('AntDesign.svg'),
                        value: 'frontend',
                        text: 'Ant Design',
                        measureValue: 2,
                    },
                    {
                        icon: icon('shadcn.svg'),
                        value: 'frontend',
                        text: 'shadcn',
                        measureValue: 1,
                    },
                    {
                        icon: icon('HTML.svg'),
                        value: 'frontend',
                        text: 'HTML',
                        measureValue: 4,
                    },
                    {
                        icon: icon('CSS.svg'),
                        value: 'frontend',
                        text: 'CSS',
                        measureValue: 4,
                    },
                    {
                        icon: icon('Less.svg'),
                        value: 'frontend',
                        text: 'Less',
                        measureValue: 2,
                    },
                    {
                        icon: icon('Scss.svg'),
                        value: 'frontend',
                        text: 'Scss',
                        measureValue: 2,
                    },
                    {
                        icon: icon('Tailwind.svg'),
                        value: 'frontend',
                        text: 'Tailwind CSS',
                        measureValue: 1,
                    },
                    {
                        icon: icon('Python.svg'),
                        value: 'backend',
                        text: 'Python',
                        measureValue: 1,
                    },
                    {
                        icon: icon('NodeJs.svg'),
                        value: 'backend',
                        text: 'Node.js',
                        measureValue: 3,
                    },
                    {
                        icon: icon('GraphQL.svg'),
                        value: 'backend',
                        text: 'GraphQL',
                        measureValue: 1,
                    },
                    {
                        icon: icon('Postman.svg'),
                        value: 'backend',
                        text: 'Postman',
                        measureValue: 1,
                    },
                    {
                        icon: icon('Git.svg'),
                        value: 'general',
                        text: 'Git',
                        measureValue: 4,
                    },
                    {
                        icon: icon('Github.svg'),
                        value: 'general',
                        text: 'GitHub',
                        measureValue: 4,
                    },
                    {
                        icon: icon('GitLab.svg'),
                        value: 'general',
                        text: 'GitLab',
                        measureValue: 3,
                    },
                    {
                        icon: icon('ESLint.svg'),
                        value: 'general',
                        text: 'ESLint',
                        measureValue: 3,
                    },
                    {
                        icon: icon('Prettier.svg'),
                        value: 'general',
                        text: 'Prettier',
                        measureValue: 3,
                    },
                    {
                        icon: icon('Webpack.svg'),
                        value: 'general',
                        text: 'Webpack',
                        measureValue: 2,
                    },
                    {
                        icon: icon('Cursor.svg'),
                        value: 'general',
                        text: 'Cursor',
                        measureValue: 1,
                    },
                    {
                        icon: icon('AtlassianJira.svg'),
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
                        icon: icon('Figma.svg'),
                        value: 'general',
                        text: 'Figma',
                        measureValue: 3,
                    },
                    {
                        icon: icon('Confluence.svg'),
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
