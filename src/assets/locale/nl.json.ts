interface Entry {
    key: string,
    meaning: string
}

interface Locale {
    locale: string,
    localeName: string,
    dict: Entry[]
}

export const localeNl: Locale = {
    locale: "nl",
    localeName: "Nederlands",
    dict: [
        {key: "", meaning: ""}
    ]
}