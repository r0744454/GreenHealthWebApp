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
        {key: "navbar_name", meaning: "Welcome §"},
        {key: "navbar_home", meaning: "Home"},
        {key: "navbar_plots", meaning: "Plots"},
        {key: "navbar_upload", meaning: "Upload"},
        {key: "navbar_login", meaning: "Login"},
        {key: "navbar_logout", meaning: "Logout"},
        {key: "lang_en", meaning: "English"},
        {key: "lang_nl", meaning: "Nederlands"},
        {key: "lang_fr", meaning: "Français"},

        //plot-overview
        {key: "enter_name_valid", meaning: "Please enter a valid name"},
        {key: "plotname", meaning: "Plotname"},
        {key: "create_plot_submit", meaning: "Create new plot"},
        {key: "default_plot_form", meaning: "Change default plot"},
        {key: "default_plot_save", meaning: "Save changes"},
    ]
}