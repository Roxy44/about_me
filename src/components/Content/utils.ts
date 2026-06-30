import type { ContentSection } from './types'
import { aboutMeContent } from './Blocks/AboutMe'


function getSimpleText(locale: string, ru: string, en: string): string {
  return locale === 'ru' ? ru : en
}

export const ContentBlocks = (locale: string): Record<string, ContentSection> => ({
	personal_info: {
		title: 'Обо мне',
    link: 'about-me',
		content: getSimpleText(locale, 'Навыки', 'Skills'),
  },
  about_me: {
    content: aboutMeContent(locale),
  },
  skills: {
    title: 'Навыки',
    content: getSimpleText(locale, 'Навыки', 'Skills'),
    link: 'skills',
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
})
