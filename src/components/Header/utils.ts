export type HeaderBlockType = Record<string, { title: string; link: string }>;

export const HeaderBlocks: HeaderBlockType = {
    about_me: {
        title: 'Обо мне',
        link: '#about-me'
    },
    experience: {
        title: 'Опыт работы',
        link: '#experience'
    },
    education: {
        title: 'Образование',
        link: '#education'
    },
    skills: {
        title: 'Навыки',
        link: '#skills'
    },
    additional: {
        title: 'Дополнительно',
        link: '#additional'
    },
    contacts: {
        title: 'Контакты',
        link: '#contacts'
    }
}