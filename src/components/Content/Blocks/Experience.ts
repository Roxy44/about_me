import { useIsMobile } from '../../../utils';
import type { ContentBlock } from '../types';


export const experienceContent = (locale: string = 'ru'): ContentBlock[] => {
	const isMobile = useIsMobile();

	return [
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
								locale === 'ru'
									? 'разработка нового функционала для существующего приложения: элементы форм (3+), страницы (10+), разделы (2–3), виджеты (3)'
									: 'development of new functionality for an existing application: form elements (3+), pages (10+), sections (2–3), widgets (3)',
								locale === 'ru'
									? 'доработка имеющегося функционала приложения (рефакторинг и актуализация кода, работа с админкой)'
									: 'refinement of existing functionality (refactoring, code updates, admin panel)',
								locale === 'ru'
									? 'разработка API routes / BFF (Next.js) и проверка контрактов в Postman'
									: 'development of API routes / BFF (Next.js) and contract checks in Postman',
								locale === 'ru'
									? 'взаимодействие с командой дизайнеров (1), разработчиков Backend (2), Data science (3+), аналитики и тестирования (3)'
									: 'collaboration with Design (1), Backend (2), Data Science (3+), Analytics and QA (3)',
								locale === 'ru'
									? 'со временем стал core-разработчиком frontend-части основного продукта после перераспределения ресурсов команды: самостоятельно доводил фичи, багфиксы и доработки продукта'
									: 'became the core frontend developer of the main product after team reallocation: independently delivered features, bug fixes, and product improvements',
								locale === 'ru'
									? 'взял на себя процесс выгрузки в продакшен и стабилизировал процесс релизов'
									: 'took ownership of production deployments and stabilized the release process',
								locale === 'ru' ? 'проведение code review' : 'code reviews',
								locale === 'ru'
									? 'интеграция ИИ-агентов во frontend продукта (UI и сценарии работы агентов в приложении)'
									: 'integrated AI agents into the product frontend (UI and in-app agent workflows)',
								locale === 'ru' ? 'ведение технической документации' : 'technical documentation',
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
								main: locale === 'ru' ? 'Май 2024 — Март 2025' : 'May 2024 — March 2025',
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
								locale === 'ru'
									? 'разработка нового функционала для существующего приложения (создание переиспользуемых форм и компонентов форм)'
									: 'development of new functionality for an existing application (creation of reusable forms and form components)',
								locale === 'ru'
									? 'разработка лендингов по макетам Figma (изменение/добавление функционала, создание новых страниц)'
									: 'development of landing pages based on Figma layouts (modification/addition of functionality, creation of new pages)',
								locale === 'ru'
									? 'работа с серверной частью: GraphQL-запросы и работа с API'
									: 'work with the server side: GraphQL queries and API integration',
								locale === 'ru'
									? 'написание и доработка внутренней библиотеки (виджета)'
									: 'development and maintenance of an internal library (widget)',
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
							text: locale === 'ru' ? (isMobile ? 'НПФ Микран' : 'Научно-производственная фирма Микран') : (isMobile ? 'Mikran' : 'Mikran, Scientific and Production Company, LLC'),
							caption: {
								main: locale === 'ru' ? 'Август 2022 — Март 2024' : 'August 2022 — March 2024',
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
								locale === 'ru' ? 'самостоятельное UI/UX-проектирование и оптимизация пользовательских интерфейсов (в роли единственного Frontend-разработчика)' : 'independent UI/UX design and optimization of user interfaces (as the only Frontend developer)',
								locale === 'ru' ? 'интеграция Frontend с Backend, взаимодействие с тестировщиками, аналитиками, дизайнерами' : 'integration of Frontend with Backend, interaction with testers, analysts, designers',
								locale === 'ru' ? 'поддержка старого кода и переход на новый стек' : 'support of the old code and transition to the new stack',
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
								main: locale === 'ru' ? 'Март 2022 — Июнь 2022' : 'March 2022 — June 2022',
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
								'Project work. Optimizing the work and improving the performance of banking applications, adding new functionality. Development of software for the analysis of credit institutions.'
						},
					]
				}
			]
		}
	];
};
