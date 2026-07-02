import type { ContentSection } from './types'
import { aboutMeContent } from './Blocks/AboutMe'
import { additionalContent } from './Blocks/Additional'


function getSimpleText(locale: string, ru: string, en: string): string {
  return locale === 'ru' ? ru : en
}

export const ContentBlocks = (locale: string): Record<string, ContentSection> => ({
	personal_info: {
    link: 'about-me',
		content: aboutMeContent(locale),
  },
  experience: {
    title: 'Опыт работы',
    content: getSimpleText(locale, 'Опыт работы', 'Experience'),
    link: 'experience',
  },
  education: {
    title: 'Образование',
    content: getSimpleText(locale, 'Образование', 'Education'),
    link: 'education',
  },
  skills: {
    title: 'Навыки',
    content: getSimpleText(locale, 'Навыки', 'Skills'),
    link: 'skills',
  },
  additional: {
    title: 'Дополнительно',
    content: additionalContent(locale),
    link: 'additional',
  },
  contacts: {
    title: 'Контакты',
    content: getSimpleText(locale, 'Контакты', 'Contacts'),
    link: 'contacts',
  },
})
