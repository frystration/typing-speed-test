interface ILanguage {
    value: string;
    name: string;
}

export const languages: ILanguage[] = [
    { value: 'en', name: 'English' },
    { value: 'ru', name: 'Русский' },
    { value: 'test', name: 'Тест' }
];

export enum Language {
    EN = "en",
    RU = "ru",
    MOCK = "test",
}

export type LanguageValue = typeof languages[number]['value'];