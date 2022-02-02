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
        //languages
        {key: "lang_en", meaning: "English"},
        {key: "lang_nl", meaning: "Nederlands"},
        {key: "lang_fr", meaning: "Français"},

        //generals
        {key: "and", meaning: " et "},

        //navbar
        {key: "navbar_name", meaning: "Bonjour §"},
        {key: "navbar_home", meaning: "Maison"},
        {key: "navbar_plots", meaning: "Parcelles"},
        {key: "navbar_upload", meaning: "Télécharger"},
        {key: "navbar_login", meaning: "Connexion"},
        {key: "navbar_logout", meaning: "Déconnexion"},
        {key: "navbar_dashboard", meaning: "Tableau de bord"},
        
        //footer
        {key: "footer_made_by", meaning: "Faite par "},
        {key: "footer_collab_with", meaning: " en collaboration avec "},

        //homepage
        {key: "home_description", meaning: "For project4.0 we received the challenge from Vito to recognize different plants and their growthstages."},


        //plot-overview
        {key: "enter_name_valid", meaning: "Entrer un nom valide"},
        {key: "plotname", meaning: "Nom de la parcelle"},
        {key: "create_plot_submit", meaning: "Créer une nouvelle parcelle"},
        {key: "default_plot_form", meaning: "Modifier le tracé par défaut"},
        {key: "default_plot_save", meaning: "Sauvegarder les modifications"},

        //plot-card
        {key: "plotcard_detail_link", meaning: "Détails"},

        //analysis
        {key: "prediction_growthstage", meaning: "Prédiction: Semaine §"},
        {key: "growthstage_naming", meaning: "semaine §"},
        {key: "prediction_species", meaning: "Espèce: §"},
        {key: "model_confidence", meaning: "Confiance: §"},
        {key: "p_growthstage_correction", meaning: "Corrige la prédiction:"},
        {key: "p_species_correction", meaning: "Corrige les espèces:"},
        {key: "correction_save", meaning: "Sauvegarder la correction"},
        {key: "analysis_done", meaning: "Continuez"},

        //species
        {key: "species_mais", meaning: "maïs"},
        {key: "species_fles", meaning: "bouteille"},

        //upload
        {key: "upload_title", meaning: "Analyser une image..."},
        {key: "upload_form_image_label", meaning: "Prener une photo ou sélectionner une image"},
        {key: "upload_form_plot_label", meaning: "Parcelle"},
        {key: "upload_form_submit", meaning: "Analyse l'image"},
        {key: "form_error", meaning: "Sélectionner une image valide"},

        //loginform
        {key: "login_title", meaning: "Connexion..."},
        {key: "login_form_mail_label", meaning: "Adresse e-mail"},
        {key: "login_form_password_label", meaning: "Mot de passe"},
        {key: "login_form_submit", meaning: "Connecter"},
        {key: "alt_register", meaning: "... ou inscription"},
        {key: "navigate_register", meaning: "Enregistrer"},
    ]
}