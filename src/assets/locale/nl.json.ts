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
        //languages
        {key: "lang_en", meaning: "English"},
        {key: "lang_nl", meaning: "Nederlands"},
        {key: "lang_fr", meaning: "Français"},

        //generals
        {key: "and", meaning: " en "},

        //navbar
        {key: "navbar_name", meaning: "Welkom §"},
        {key: "navbar_home", meaning: "Home"},
        {key: "navbar_plots", meaning: "Plots"},
        {key: "navbar_upload", meaning: "Uploaden"},
        {key: "navbar_login", meaning: "Inloggen"},
        {key: "navbar_logout", meaning: "Uitloggen"},
        {key: "navbar_dashboard", meaning: "Dashboard"},

        //footer
        {key: "footer_made_by", meaning: "Gemaakt door "},
        {key: "footer_collab_with", meaning: " in samenwerking met "},

        //homepage
        {key: "home_description", meaning: "Voor project4.0 hebben we de opdracht gekregen van Vito om verschillende planten hun groeistadia te herkennen."},

        //plot-overview
        {key: "enter_name_valid", meaning: "Geef een geldige naam op"},
        {key: "plotname", meaning: "Plotnaam"},
        {key: "create_plot_submit", meaning: "Maak nieuwe plot"},
        {key: "default_plot_form", meaning: "Verander standaardplot"},
        {key: "default_plot_save", meaning: "Slaag wijzigingen op"},

        //plot-card
        {key: "plotcard_detail_link", meaning: "Details"},

        //analysis
        {key: "prediction_growthstage", meaning: "Voorspelling: Week §"},
        {key: "growthstage_naming", meaning: "week §"},
        {key: "prediction_species", meaning: "Soort: §"},
        {key: "model_confidence", meaning: "Zekerheid: §"},
        {key: "p_growthstage_correction", meaning: "Verbeter de voorspelling:"},
        {key: "p_species_correction", meaning: "Verbeter de soort:"},
        {key: "correction_save", meaning: "Slaag verbetering op"},
        {key: "analysis_done", meaning: "Ga verder"},

        //species
        {key: "species_mais", meaning: "mais"},
        {key: "species_fles", meaning: "fles"},

        //upload
        {key: "upload_title", meaning: "Analyseer een afbeelding..."},
        {key: "upload_form_image_label", meaning: "Neem een foto of selecteer een afbeelding"},
        {key: "upload_form_plot_label", meaning: "Plot"},
        {key: "upload_form_submit", meaning: "Analyseer afbeelding"},
        {key: "upload_form_error", meaning: "Selecteer een geldige afbeelding"},

        //loginform
        {key: "login_title", meaning: "Log in..."},
        {key: "login_form_mail_label", meaning: "E-mailadres"},
        {key: "login_form_password_label", meaning: "Wachtwoord"},
        {key: "login_form_submit", meaning: "Log in"},
        {key: "alt_register", meaning: "... of registreer"},
        {key: "navigate_register", meaning: "Registreer"},
    ]
}