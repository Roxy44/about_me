import type { ContentBlock } from '../types';

export const additionalContent: (locale: string) => ContentBlock[] = (locale: string = 'ru') => [
    {
        type: 'heading',
        text: locale === 'ru' ? 'Имею портфель самостоятельных проектов:' : 'I have a portfolio of personal projects:',
    },
    {
        type: 'project',
        title: locale === 'ru' ? 'Разработка мини-приложений на JS / TS' : 'JS / TS Mini-Apps',
        href: 'https://roxy44.github.io/Mini-Apps/',
        description:
            locale === 'ru'
                ? 'В проекте использовал широкий набор возможностей JavaScript.'
                : 'A collection of web apps demonstrating advanced JavaScript/TypeScript patterns.',
    },
    {
        type: 'project',
        title:
            locale === 'ru'
                ? 'Разработка приложения администрирования работы вендинговых аппаратов'
                : 'Vending Machine Management App',
        href: 'https://roxy44.github.io/VendingMachine',
        description:
            locale === 'ru'
                ? 'В рамках проекта спроектировал и развернул базу данных, используя сервис Firebase для real-time мониторинга состояний системы (оплата, выдача товара и т.д.).'
                : 'Designed and deployed a real-time system with Firebase backend for tracking payments and item distribution.',
    },
];
