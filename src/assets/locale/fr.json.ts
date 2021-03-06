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
        {key: "navbar_register", meaning: "Enregistrer"},
        {key: "navbar_android_app", meaning: "Application Androïd"},

        //footer
        {key: "footer_made_by", meaning: "Faite par "},
        {key: "footer_collab_with", meaning: " en collaboration avec "},

        //homepage
        {key: "home_description", meaning: "Pour le projet4.0, Vito nous a lancé le défi de reconnaître différentes plantes et leurs stades de croissance."},

        //registration
        {key: "register_title", meaning: "Enregistrer"},
        {key: "register_demo_warning", meaning: "À des fins de démonstration, de nouvaux utilisateurs seront automatiquement ajoutés à une organisation préexistante"},
        {key: "register_form_fn", meaning: "Prénom"},
        {key: "register_form_ln", meaning: "Nom de famille"},
        {key: "register_form_mail", meaning: "E-mail"},
        {key: "register_form_addr", meaning: "Adresse"},
        {key: "register_form_pass", meaning: "Mot de passe"},
        {key: "register_form_warn", meaning: "Vérifiez que vous avez correctement rempli tous les champs"},
        {key: "register_form_submit", meaning: "Enregistrer"},

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
        {key: "upload_form_submit", meaning: "Télécharge et analyse l'image"},
        {key: "form_error", meaning: "Sélectionner une image valide"},
        {key: "upload_form_submit_no_analysis", meaning: "Télécharge sans analyser"},

        //loginform
        {key: "login_title", meaning: "Connexion..."},
        {key: "login_form_mail_label", meaning: "Adresse e-mail"},
        {key: "login_form_password_label", meaning: "Mot de passe"},
        {key: "login_form_submit", meaning: "Connecter"},
        {key: "alt_register", meaning: "... ou inscription"},
        {key: "navigate_register", meaning: "Enregistrer"},

        //plot-detail
        {key: "return_previous", meaning: "Retour"},
        {key: "plot-title-plot-location", meaning: "Parcelle '§'"},
        {key: "sort-by-date", meaning: "Trier par date"},
        {key: "sort-low-high", meaning: "le plus ancien a premier"},
        {key: "sort-high-low", meaning: "le plus récent a premier"},
        {key: "button_analyse_all", meaning: "Analyse toute"},

        //plot-card
        {key: "image_status_hover_ana", meaning: "Cette image a été analysée"},
        {key: "image_status_hover_nana", meaning: "Cette image n'as pas été analysée"},
        {key: "delete_plant_confirmation", meaning: "Appuyez à nouveau pour confirmer"},
        {key: "delete_plant_cancel", meaning: "Annuler"},

        //dashboard
        {key: "dashboard_file_powerbi", meaning: "Ficher Power Bi"},

        //plant-detail
        {key: "pd_growthstage_naming", meaning: "Semaine:"},
        {key: "pd_species_naming", meaning: "Espèce:"},
        {key: "pd_accuracy_naming", meaning: "Confiance:"},
        {key: "pd_analyse_confirm", meaning: "Analyse"},
    ]
}
