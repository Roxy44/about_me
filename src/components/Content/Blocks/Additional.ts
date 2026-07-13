import type { ContentBlock } from '../types';

export const additionalContent: (locale: string) => ContentBlock[] = (locale: string = 'ru') => [
    {
        type: 'heading',
        text: locale === 'ru' ? 'Имею портфель самостоятельных проектов:' : 'I have a portfolio of personal projects:',
    },
    {
        type: 'project',
        title: locale === 'ru' ? 'Разработка мини-приложений на JS / TS' : 'Development of mini-applications in JS / TS',
        href: 'https://roxy44.github.io/Mini-Apps/',
        description:
            locale === 'ru'
                ? 'Использовал потенциал различных функций данного языка программирования (JavaScript).'
                : 'I used the potential of various functions of this programming language (JavaScript).',
    },
    {
        type: 'project',
        title:
            locale === 'ru'
                ? 'Разработка приложения администрирования работы вендинговых аппаратов'
                : 'Development of an application for the administration of vending machines',
        href: 'https://roxy44.github.io/VendingMachine',
        description:
            locale === 'ru'
                ? 'В рамках данного проекта была поднята база данных, которая содержала информацию для мониторинга и изменений (оплата, выдача товара и т.д.).'
                : 'As part of this project, a remote database was raised, which contained information for monitoring and changes (payment, delivery of goods, etc.).',
    },
    {
        type: 'paragraph',
        text:
            locale === 'ru'
                ? 'Знаю принципы построения архитектуры веб-приложений и имею развитый кругозор в направлении веб-технологий.'
                : 'I know the principles of building the architecture of web applications and have a developed outlook in the direction of web technologies.',
    },
];
