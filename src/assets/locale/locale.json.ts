export interface localeFile {
    locale: string,
    file: string
}

export interface localeDefinition {
    localeVersion: string,
    defaultLocale: string,
    locales: localeFile[]
}

export const locales: localeDefinition = {
    localeVersion: "0.0.0",
    defaultLocale: "en",
    locales: [
        {locale: "en", file: "en.json.ts"},
        {locale: "nl", file: "nl.json.ts"},
        {locale: "fr", file: "fr.json.ts"}
    ]
}