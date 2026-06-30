import type { ContentBlock } from '../types'

export const aboutMeContent: (locale: string) => ContentBlock[] = (locale: string = 'ru') => [
	{
		type: 'paragraph',
		text: locale === 'ru' ? 'Имею профильное высшее образование и опыт работы frontend разработчиком 4 года. Обладаю высокой экспертизой в React, но также практикую применение других технологий.' : 'I have a specialized higher education and 4 years of experience as a frontend developer. I have a high expertise in React, but also practice the use of other technologies.',
	},
	{
		type: 'paragraph',
		text: locale === 'ru' ? 'Мой опыт коммерческой разработки при взаимодействии с backend составляет 3 года, где преимущественно использовались django + python / node / firebase.' : 'My experience in commercial development when interacting with backend is 3 years, where django + python / node / firebase were predominantly used.',
	},
	{
		type: 'paragraph',
		text: locale === 'ru' ? 'Работал в проектных командах по методологиям Agile, Scrum.' : 'Worked in project teams according to the Agile and Scrum methodologies.',
	},
	{
		type: 'heading',
		text: locale === 'ru' ? 'Имею портфель самостоятельных проектов:' : 'I have a portfolio of personal projects:',
	},
	{
			type: 'project',
			title: locale === 'ru' ? 'Разработка мини-приложений на JS / TS' : 'Development of mini-applications in JS / TS',
			href: 'https://roxy44.github.io/Mini-Apps/',
			description:
			locale === 'ru' ? 'Использовал потенциал различных функций данного языка программирования (JavaScript).' : 'I used the potential of various functions of this programming language (JavaScript).',
	},
	{
		type: 'project',
		title: locale === 'ru' ? 'Разработка приложения администрирования работы вендинговых аппаратов' : 'Development of an application for the administration of vending machines',
		href: 'https://roxy44.github.io/VendingMachine',
		description:
		locale === 'ru' ? 'В рамках данного проекта была поднята база данных, которая содержала информацию для мониторинга и изменений (оплата, выдача товара и т.д.).' : 'As part of this project, a remote database was raised, which contained information for monitoring and changes (payment, delivery of goods, etc.).',
	},
	{
		type: 'paragraph',
		text: locale === 'ru' ? 'Подробнее об этих и других проектах в моем портфолио' : 'Learn more about these and other projects in my portfolio',
	},
	{
		type: 'link',
		label: locale === 'ru' ? 'github.com/Roxy44' : 'github.com/Roxy44',
		href: 'https://github.com/Roxy44',
	},
	{
		type: 'paragraph',
		text: locale === 'ru' ? 'Знаю принципы построения архитектуры веб-приложений и имею развитый кругозор в направлении веб-технологий.' : 'I know the principles of building the architecture of web applications and have a developed outlook in the direction of web technologies.',
	},
	{
		type: 'heading',
		text: locale === 'ru' ? 'Своими основными профессиональными компетенциями считаю:' : 'I consider my main professional competencies to be:',
	},
	{
		type: 'list',
		items: [
			locale === 'ru' ? 'хорошие коммуникативные навыки' : 'good communication skills',
			locale === 'ru' ? 'создание качественных и понятных UI/UX пользовательских интерфейсов' : 'creation of high-quality and understandable UI/UX user interfaces',
			locale === 'ru' ? 'сбор и управление обратной связью от проектной команды и пользователей с целью внесения необходимых доработок, улучшений' : 'collection and management of feedback from the project team and users in order to promptly make the necessary improvements',
			locale === 'ru' ? 'полный цикл управления frontend разработкой в единственном лице — умение работать по целям, а не только реализовывать пул конкретных задач' : 'a full cycle of frontend development management in a single person — the ability to work on goals, and not just implement a pool of specific tasks',
		],
	},
]