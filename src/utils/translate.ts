export type Locale = 'ru' | 'en';

/** Russian source text -> English. Add new strings here as you build the page. */
const EN: Record<string, string> = {
    Язык: 'Language',
    Русский: 'Russian',
    Английский: 'English',
    'Обо мне': 'About me',
    Навыки: 'Skills',
    'Опыт работы': 'Experience',
    Образование: 'Education',
    Дополнительно: 'Additional Information',
    Контакты: 'Contacts',
    'Дмитрий Иванков': 'Dmitriy Ivankov',
    Развернуть: 'Expand',
    Свернуть: 'Collapse',
    'Скопировано!': 'Copied!',
};

export function translate(text: string, locale: Locale): string {
    if (locale === 'ru') return text;
    return EN[text] ?? text;
}
