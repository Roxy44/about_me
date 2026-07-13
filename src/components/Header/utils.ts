import { IdCard, BriefcaseBusiness, GraduationCap, MessageSquareMore, Send, BookText } from 'lucide-react';

const iconsType = [IdCard, BriefcaseBusiness, GraduationCap, MessageSquareMore, BookText, Send];

export type HeaderBlockType = Record<string, { title: string; link: string; icon: (typeof iconsType)[number] }>;

export const HeaderBlocks: HeaderBlockType = {
    about_me: {
        title: 'Обо мне',
        link: '#about-me',
        icon: IdCard,
    },
    experience: {
        title: 'Опыт работы',
        link: '#experience',
        icon: BriefcaseBusiness,
    },
    education: {
        title: 'Образование',
        link: '#education',
        icon: GraduationCap,
    },
    skills: {
        title: 'Навыки',
        link: '#skills',
        icon: MessageSquareMore,
    },
    additional: {
        title: 'Дополнительно',
        link: '#additional',
        icon: BookText,
    },
    contacts: {
        title: 'Контакты',
        link: '#contacts',
        icon: Send,
    },
};
