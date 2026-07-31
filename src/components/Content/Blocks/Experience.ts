import type { ContentBlock } from '../types';

export const experienceContent = (locale: string = 'ru', isMobile = false): ContentBlock[] => [
    {
        type: 'sub-group',
        direction: 'column',
        className: 'mt-4',
        isShort: true,
        content: [
            {
                type: 'sub-group',
                direction: 'column',
                className: 'flex items-start gap-unset mb-6',
                content: [
                    {
                        type: 'heading',
                        text: 'RedCat',
                        caption: {
                            main: locale === 'ru' ? 'Апрель 2025 — По настоящее время' : 'April 2025 — Present',
                        },
                    },
                    {
                        type: 'paragraph',
                        text: 'Middle Frontend Developer',
                        className: 'italic',
                    },
                    {
                        type: 'paragraph',
                        text: locale === 'ru' ? 'Достижения:' : 'Achievements & Key Responsibilities:',
                    },
                    {
                        type: 'list',
                        dotList: true,
                        items: [
                            locale === 'ru'
                                ? 'Внедрил AI-инструменты (Cursor, MCP-агенты для YouTrack и Figma) в workflow Frontend-разработки, сократив время выполнения типовых задач на 40%'
                                : 'Integrated AI tools (Cursor, MCP agents for YouTrack and Figma) into the Frontend workflow, reducing time spent on routine tasks by 40%',
                            locale === 'ru'
                                ? 'Разработал новый функционал для продукта с ежемесячной аудиторией более 10 тысяч уникальных пользователей: 3+ переиспользуемых элементов форм, 10+ страниц, 2+ раздела, 3 виджета'
                                : 'Developed new functionality for a product with 10k+ monthly unique users: 3+ reusable form elements, 10+ pages, 2+ sections, and 3 widgets',
                            locale === 'ru'
                                ? 'Улучшил и актуализировал существующий функционал (рефакторинг, работа с админ-панелью, оптимизация запросов), уменьшив время загрузки основных страниц более чем в 3 раза'
                                : 'Improved existing functionality (refactoring, admin panel enhancements, requests optimization), reducing core pages load times by over 3x',
                            locale === 'ru'
                                ? 'Разработал API routes / BFF (Next.js) и проверял контракты в Postman'
                                : 'Built API routes / BFF layers using Next.js and tested API contracts in Postman',
                            locale === 'ru'
                                ? 'Со временем стал core-разработчиком Frontend-части основного продукта после перераспределения ресурсов команды: самостоятельно доводил все фичи, багфиксы и доработки по продукту до релиза'
                                : 'Became the core Frontend developer for the main product following team re-allocation; independently led all features, bug fixes, and improvements through to release',
                            locale === 'ru'
                                ? 'Взял ответственность за процесс выгрузки в production и стабилизировал процесс релизов Frontend, в результате чего количество ошибок после регрессионного тестирования стало минимальным'
                                : 'Took full ownership of the production release process, stabilizing releases and minimizing post-regression test bugs',
                            locale === 'ru'
                                ? 'Взаимодействовал с дизайнером, разработчиками Backend (2), Data science (3+), аналитиками (2) и тестировщиками (3)'
                                : 'Collaborated in a cross-functional team: 1 designer, 2 backend developers, 3+ data scientists, 2 analysts, and 3 QA engineers',
                            locale === 'ru'
                                ? 'Проводил code review для младших разработчиков'
                                : 'Conducted code reviews for junior developers',
                            locale === 'ru'
                                ? 'Вёл и актуализировал документацию проекта'
                                : 'Maintained up-to-date project documentation',
                        ],
                    },
                ],
            },
            {
                type: 'sub-group',
                direction: 'column',
                className: 'flex items-start gap-unset mb-6',
                content: [
                    {
                        type: 'heading',
                        text: 'Milk & Cartoons',
                        caption: {
                            main: locale === 'ru' ? 'Май 2024 — Март 2025' : 'May 2024 — March 2025',
                        },
                    },
                    {
                        type: 'paragraph',
                        text: 'Junior+ Frontend Developer',
                        className: 'italic',
                    },
                    {
                        type: 'paragraph',
                        text: locale === 'ru' ? 'Достижения:' : 'Achievements & Key Responsibilities:',
                    },
                    {
                        type: 'list',
                        dotList: true,
                        items: [
                            locale === 'ru'
                                ? 'Разработал новый функционал существующего приложения: переиспользуемый виджет / библиотека и 4+ элементов форм'
                                : 'Developed new product features, including a reusable UI widget/library and 4+ form elements',
                            locale === 'ru'
                                ? 'Свёрстал и доработал более 5 лэндингов по макетам Figma'
                                : 'Built and refined 5+ landing pages based on Figma designs',
                            locale === 'ru'
                                ? 'Разработал несколько BFF-эндпоинтов на базе GraphQL и интеграций с Shopify API'
                                : 'Implemented multiple BFF endpoints using GraphQL and integrated Shopify APIs',
                            locale === 'ru' ? 'Настроил клиентскую валидацию' : 'Set up client-side data validation',
                        ],
                    },
                ],
            },
            {
                type: 'sub-group',
                direction: 'column',
                className: 'flex items-start gap-unset mb-6',
                content: [
                    {
                        type: 'heading',
                        text:
                            locale === 'ru'
                                ? isMobile
                                    ? 'НПФ Микран'
                                    : 'Научно-производственная фирма Микран'
                                : isMobile
                                  ? 'Mikran'
                                  : 'Mikran, Scientific and Production Company',
                        caption: {
                            main: locale === 'ru' ? 'Август 2022 — Март 2024' : 'August 2022 — March 2024',
                        },
                    },
                    {
                        type: 'paragraph',
                        text: 'Junior Frontend Developer',
                        className: 'italic',
                    },
                    {
                        type: 'paragraph',
                        text:
                            locale === 'ru'
                                ? 'Проект 1. Система мониторинга показателей абонентских терминалов (заказчик — ПАО «Газпром»)'
                                : 'Project 1: Real-time Subscriber Terminal Monitoring System (Client: PJSC Gazprom)',
                    },
                    {
                        type: 'paragraph',
                        text:
                            locale === 'ru'
                                ? 'Система мониторинга в режиме реального времени с использованием различных протоколов передачи данных для отслеживания основных показателей терминалов, оснащённая программой оповещения о критичных изменениях.'
                                : 'A real-time monitoring system utilizing various data transfer protocols to track terminal indicators, equipped with an alert system for critical events.',
                    },
                    {
                        type: 'paragraph',
                        text: locale === 'ru' ? 'Достижения:' : 'Achievements:',
                    },
                    {
                        type: 'list',
                        dotList: true,
                        items: [
                            locale === 'ru'
                                ? 'Перевёл legacy-код на новый стек (с JavaScript на TypeScript)'
                                : 'Migrated legacy codebase to a modern stack (JavaScript to TypeScript)',
                            locale === 'ru'
                                ? 'Разработал базовую архитектуру бэкенда на Python'
                                : 'Designed the initial backend architecture using Python',
                            locale === 'ru' ? 'Провёл интеграцию Frontend с Backend' : 'Integrated Frontend with Backend APIs',
                            locale === 'ru'
                                ? 'Реализовал в плановые сроки более 10 разделов: авторизация, аналитика, выгрузка/загрузка данных, управление пользователями, журнал событий, настройки терминалов'
                                : 'Delivered 10+ core sections on schedule: Authorization, Analytics, Import/Export, User Management, Event Logs, and Terminal Settings',
                            locale === 'ru' ? 'Поддерживал техническую документацию' : 'Maintained technical documentation',
                        ],
                    },
                    {
                        type: 'paragraph',
                        text:
                            locale === 'ru'
                                ? 'Проект 2. Внутреннее программное обеспечение для проектного планирования'
                                : 'Project 2: Internal Project Planning & Resource Management Tool',
                        className: 'mt-4',
                    },
                    {
                        type: 'paragraph',
                        text:
                            locale === 'ru'
                                ? "Решение для распределения merge request'ов и нагрузки на команду до 10 человек."
                                : 'A custom tool for managing merge requests and workload distribution for a team of up to 10 engineers.',
                    },
                    {
                        type: 'paragraph',
                        text: locale === 'ru' ? 'Достижения:' : 'Achievements:',
                    },
                    {
                        type: 'list',
                        dotList: true,
                        items: [
                            locale === 'ru'
                                ? 'Самостоятельно спроектировал и оптимизировал UI/UX (в роли единственного Frontend-разработчика)'
                                : 'Independently designed and optimized UI/UX as the sole Frontend Developer on the project',
                            locale === 'ru'
                                ? 'За 5 месяцев после запуска проекта выровнял нагрузку и прозрачность дедлайнов'
                                : 'Balanced team workload and improved deadline visibility within 5 months of rollout',
                        ],
                    },
                ],
            },
            {
                type: 'sub-group',
                direction: 'column',
                className: 'flex items-start gap-unset',
                content: [
                    {
                        type: 'heading',
                        text:
                            locale === 'ru'
                                ? 'Центральный банк Российской Федерации'
                                : 'The Central Bank of the Russian Federation',
                        caption: {
                            main: locale === 'ru' ? 'Март 2022 — Июнь 2022' : 'March 2022 — June 2022',
                        },
                    },
                    {
                        type: 'paragraph',
                        text: 'Intern Frontend Developer',
                        className: 'italic',
                    },
                    {
                        type: 'paragraph',
                        text:
                            locale === 'ru'
                                ? 'Проектная работа. Оптимизация работы и улучшение производительности банковских приложений, добавление нового функционала. Разработка программного обеспечения для анализа кредитных организаций.'
                                : 'Project work. Optimizing the work and improving the performance of banking applications, adding new functionality. Development of software for the analysis of credit institutions.',
                    },
                ],
            },
        ],
    },
];
