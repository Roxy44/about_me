import type { ContentSection } from './types'
import { aboutMeContent } from './Blocks/AboutMe'
import { additionalContent } from './Blocks/Additional'
import { experienceContent } from './Blocks/Experience'
import { educationContent } from './Blocks/Education'
import { skillsContent } from './Blocks/Skills'
import { contactsContent } from './Blocks/Contacts'

export const ContentBlocks = (locale: string): Record<string, ContentSection> => ({
	personal_info: {
    link: 'about-me',
		content: aboutMeContent(locale),
  },
  experience: {
    title: 'Опыт работы',
    content: experienceContent(locale),
    link: 'experience',
  },
  education: {
    title: 'Образование',
    content: educationContent(locale),
    link: 'education',
  },
  skills: {
    title: 'Навыки',
    content: skillsContent(locale),
    link: 'skills',
  },
  additional: {
    title: 'Дополнительно',
    content: additionalContent(locale),
    link: 'additional',
  },
  contacts: {
    title: 'Контакты',
    content: contactsContent(),
    link: 'contacts',
  },
})
