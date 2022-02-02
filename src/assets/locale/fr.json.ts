interface Entry {
    key: string,
    meaning: string
}

interface Locale {
    locale: string,
    localeName: string,
    dict: Entry[]
}

export const localeFr: Locale = {
    locale: "fr",
    localeName: "Français",
    dict: [
        {key: "", meaning: ""}
    ]
}