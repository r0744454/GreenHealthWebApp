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
        {locale: "en", file: "en.json"},
        {locale: "nl", file: "nl.json"},
        {locale: "fr", file: "fr.json"}
    ]
}