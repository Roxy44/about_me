export type HeaderBlockType = Record<string, { title: string; link: string }>;

export const HeaderBlocks: HeaderBlockType = {
    about_me: {
        title: 'Обо мне',
        link: '#about-me'
    },
    skills: {
        title: 'Навыки',
        link: '#skills'
    },
    experience: {
        title: 'Опыт работы',
        link: '#experience'
    },
    education: {
        title: 'Образование',
        link: '#education'
    },
    contacts: {
        title: 'Контакты',
        link: '#contacts'
    }
}