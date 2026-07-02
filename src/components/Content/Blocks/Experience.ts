import type { ContentBlock } from '../types'

export const experienceContent = (locale: string = 'ru'): ContentBlock[] => [
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
							main: locale === 'ru' ? 'Апрель 2025 — Июль 2026 (1 год 2 месяца)' : 'April 2025 — July 2026 (1 year 2 months)',
						}
					},
					{
						type: 'paragraph',
						text: 'Middle Frontend Developer',
						className: 'italic',
					},
					{
            type: 'paragraph',
            text: locale === 'ru' ? 
                'Основные обязанности:'
                :
                'Main responsibilities:'
          },
					{
						type: 'list',
						dotList: true,
						items: [
							locale === 'ru' ? 'разработка нового функционала для существующего приложения (создание новых элементов формы, страниц, разделов, виджетов)' : 'development of new functionality for an existing application (creation of new form elements, pages, sections, widgets)',
							locale === 'ru' ? 'доработка имеющегося функционала приложения (рефакторинг и актуализация кода, работа с админкой)' : 'improvement of the existing application functionality (refactoring and updating of code, working with the administration)',
							locale === 'ru' ? 'разработка эндпоинтов для Backend и тестирование в Postman' : 'development of endpoints for Backend and testing in Postman',
							locale === 'ru' ? 'взаимодействие с командой дизайнеров, разработчиков Backend, Data science, аналитики и тестирования' : 'interaction with the design, Backend development, Data science, analytics, and testing teams',
							locale === 'ru' ? 'проведение code review' : 'code review',
							locale === 'ru' ? 'разработка и взаимодействие с ИИ-агентами' : 'development and interaction with AI agents',
						],
					},
				]
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
							main: locale === 'ru' ? 'Декабрь 2024 — Март 2025 (4 месяца)' : 'December 2024 — March 2025 (4 months)',
						}
					},
					{
						type: 'paragraph',
						text: 'FullStack Developer',
						className: 'italic',
					},
					{
            type: 'paragraph',
            text: locale === 'ru' ? 
                'Основные обязанности:'
                :
                'Main responsibilities:'
          },
					{
						type: 'list',
						dotList: true,
						items: [
							locale === 'ru' ? 'разработка нового функционала для существующего приложения (создание переиспользуемых форм)' : 'development of new functionality for an existing application (creation of reusable forms)',
							locale === 'ru' ? 'работа с серверной частью, написание GraphQL-запросов и создание эндпоинтов' : 'work with the server side, writing GraphQL queries and creating endpoints',
						],
					},
				]
			},
			{
				type: 'sub-group',
				direction: 'column',
				className: 'flex items-start gap-unset mb-6',
				content: [
					{
						type: 'heading',
						text: locale === 'ru' ? 'Фин Промоут Системс' : 'Fin Promote Systems',
						caption: {
							main: locale === 'ru' ? 'Май 2024 — Ноябрь 2024 (7 месяцев)' : 'May 2024 — November 2024 (7 months)',
						}
					},
					{
						type: 'paragraph',
						text: 'Junior+ Frontend Developer',
						className: 'italic',
					},
					{
            type: 'paragraph',
            text: locale === 'ru' ? 
                'Основные обязанности:'
                :
                'Main responsibilities:'
          },
					{
						type: 'list',
						dotList: true,
						items: [
							locale === 'ru' ? 'разработка лендингов по макетам Figma (изменение/добавление функционала, создание новых страниц)' : 'development of landing pages by Figma templates (changing/adding functionality, creating new page forms)',
							locale === 'ru' ? 'написание и доработка своей библиотеки' : 'writing and improving my own library',
						],
					},
				]
			},
			{
				type: 'sub-group',
				direction: 'column',
				className: 'flex items-start gap-unset mb-6',
				content: [
					{
						type: 'heading',
						text: locale === 'ru' ? 'Научно-производственная фирма Микран, ЗАО' : 'Mikran, Scientific and Production Company',
						caption: {
							main: locale === 'ru' ? 'Август 2022 — Март 2024 (1 год 8 месяцев)' : 'August 2022 — March 2024 (1 year 8 months)',
						}
					},
					{
						type: 'paragraph',
						text: 'Junior Frontend developer',
						className: 'italic',
					},
					{
            type: 'paragraph',
            text: locale === 'ru' ? 
                'Основные обязанности:'
                :
                'Main responsibilities:'
          },
					{
						type: 'list',
						dotList: true,
						items: [
							locale === 'ru' ? 'самостоятельное UI/UX-проектирование и оптимизация пользовательских интерфейсов (в роли единственного Frontend-разработчика)' : 'self-designed and optimized UI/UX interfaces (as the only Frontend developer)',
							locale === 'ru' ? 'интеграция Frontend с Backend, взаимодействие с тестировщиками, аналитиками, дизайнерами' : 'integration of Frontend with Backend, interaction with testers, analysts, designers',
							locale === 'ru' ? 'поддержка кода и обновление базы на новый стек' : 'support of the code and updating the database to the new stack',
						],
					},
				]
			},
			{
				type: 'sub-group',
				direction: 'column',
				className: 'flex items-start gap-unset',
				content: [
					{
						type: 'heading',
						text: locale === 'ru' ? 'Центральный банк Российской Федерации' : 'Central Bank of the Russian Federation',
						caption: {
							main: locale === 'ru' ? 'Март 2022 — Июнь 2022 (4 месяца)' : 'March 2022 — June 2022 (4 months)',
						}
					},
					{
						type: 'paragraph',
						text: 'Intern Frontend developer ',
						className: 'italic',
					},
					{
            type: 'paragraph',
            text: locale === 'ru' ? 
                'Проектная работа. Оптимизация работы и улучшение производительности банковских приложений, добавление нового функционала. Разработка программного обеспечения для анализа кредитных организаций.'
                :
                'Project work. Optimization of the work and improvement of the performance of banking applications, adding new functionality. Development of software for the analysis of credit organizations.'
          },
				]
			}
		]
	}
];