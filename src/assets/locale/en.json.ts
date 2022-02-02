interface Entry {
    key: string,
    meaning: string
}

interface Locale {
    locale: string,
    localeName: string,
    dict: Entry[]
}

export const localeEn: Locale = {
    locale: "en",
    localeName: "english",
    dict: [
        {key: "enter_name_valid", meaning: "Please enter a valid name"},
        {key: "plotname", meaning: "Plotname"}
    ]
}