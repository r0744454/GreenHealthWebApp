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
        {key: "lang_en", meaning: "English"},
        {key: "lang_nl", meaning: "Nederlands"},
        {key: "lang_fr", meaning: "Français"},
        {key: "navbar_name", meaning: "Welkom §"},
        {key: "navbar_home", meaning: "Home"},
        {key: "navbar_plots", meaning: "Plots"},
        {key: "navbar_upload", meaning: "Uploaden"},
        {key: "navbar_login", meaning: "Inloggen"},
        {key: "navbar_logout", meaning: "Uitloggen"},

        //plot-overview
        {key: "enter_name_valid", meaning: "Geef een geldige naam op"},
        {key: "plotname", meaning: "Plotnaam"},
        {key: "create_plot_submit", meaning: "Maak nieuwe plot"},
        {key: "default_plot_form", meaning: "Verander standaardplot"},
        {key: "default_plot_save", meaning: "Slaag wijzigingen op"},
    ]
}