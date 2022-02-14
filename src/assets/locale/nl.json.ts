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
        {key: "navbar_plots", meaning: "Percelen"},
        {key: "navbar_upload", meaning: "Uploaden"},
        {key: "navbar_login", meaning: "Inloggen"},
        {key: "navbar_logout", meaning: "Uitloggen"},
        {key: "navbar_dashboard", meaning: "Dashboard"},
        {key: "navbar_register", meaning: "Registreer"},
        {key: "navbar_android_app", meaning: "Android Applicatie"},

        //footer
        {key: "footer_made_by", meaning: "Gemaakt door "},
        {key: "footer_collab_with", meaning: " in samenwerking met "},

        //homepage
        {key: "home_description", meaning: "Voor project4.0 hebben we de opdracht gekregen van Vito om verschillende planten hun groeistadia te herkennen."},

        //registration
        {key: "register_title", meaning: "Registreer"},
        {key: "register_demo_warning", meaning: "Voor demonstratiedoeleinden zullen nieuwe gebruikers automatisch worden toegevoegd aan een bestaande organisatie"},
        {key: "register_form_fn", meaning: "Voornaam"},
        {key: "register_form_ln", meaning: "Achternaam"},
        {key: "register_form_mail", meaning: "Email"},
        {key: "register_form_addr", meaning: "Adres"},
        {key: "register_form_pass", meaning: "Wachtwoord"},
        {key: "register_form_warn", meaning: "Kijk na dat je alle velden correct hebt ingevuld"},
        {key: "register_form_submit", meaning: "Registreer"},

        //plot-overview
        {key: "enter_name_valid", meaning: "Geef een geldige naam op"},
        {key: "plotname", meaning: "Plotnaam"},
        {key: "create_plot_submit", meaning: "Maak nieuw perceel"},
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
        {key: "upload_form_plot_label", meaning: "Perceel"},
        {key: "upload_form_submit", meaning: "Upload en analyseer afbeelding"},
        {key: "upload_form_error", meaning: "Selecteer een geldige afbeelding"},
        {key: "upload_form_submit_no_analysis", meaning: "Upload zonder analyse"},

        //loginform
        {key: "login_title", meaning: "Log in..."},
        {key: "login_form_mail_label", meaning: "E-mailadres"},
        {key: "login_form_password_label", meaning: "Wachtwoord"},
        {key: "login_form_submit", meaning: "Log in"},
        {key: "alt_register", meaning: "... of registreer"},
        {key: "navigate_register", meaning: "Registreer"},

        //plot-detail
        {key: "return_previous", meaning: "Terug"},
        {key: "plot-title-plot-location", meaning: "Perceel '§'"},
        {key: "sort-by-date", meaning: "Sorteer op datum"},
        {key: "sort-low-high", meaning: "oudste eerst"},
        {key: "sort-high-low", meaning: "nieuwste eerst"},
        {key: "button_analyse_all", meaning: "Analyseer alles"},

        //plot-card
        {key: "image_status_hover_ana", meaning: "Deze afbeelding is geanalyseerd"},
        {key: "image_status_hover_nana", meaning: "Deze afbeelding is nog niet geanalyseerd"},
        {key: "delete_plant_confirmation", meaning: "Druk nog eens om te bevestigen"},
        {key: "delete_plant_cancel", meaning: "Annuleren"},

        //dashboard
        {key: "dashboard_file_powerbi", meaning: "Power Bi bestand"},

        //plant-detail
        {key: "pd_growthstage_naming", meaning: "Week:"},
        {key: "pd_species_naming", meaning: "Soort:"},
        {key: "pd_accuracy_naming", meaning: "Zekerheid:"},
        {key: "pd_analyse_confirm", meaning: "Analyseer"}
    ]
}