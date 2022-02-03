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
        //languages
        {key: "lang_en", meaning: "English"},
        {key: "lang_nl", meaning: "Nederlands"},
        {key: "lang_fr", meaning: "Français"},

        //generals
        {key: "and", meaning: " and "},

        //navbar
        {key: "navbar_name", meaning: "Welcome §"},
        {key: "navbar_home", meaning: "Home"},
        {key: "navbar_plots", meaning: "Plots"},
        {key: "navbar_upload", meaning: "Upload"},
        {key: "navbar_login", meaning: "Login"},
        {key: "navbar_logout", meaning: "Logout"},
        {key: "navbar_dashboard", meaning: "Dashboard"},
        
        //footer
        {key: "footer_made_by", meaning: "Made by "},
        {key: "footer_collab_with", meaning: " in collaboration with "},

        //homepage
        {key: "home_description", meaning: "For project4.0 we received the challenge from Vito to recognize different plants and their growthstages."},


        //plot-overview
        {key: "enter_name_valid", meaning: "Please enter a valid name"},
        {key: "plotname", meaning: "Plotname"},
        {key: "create_plot_submit", meaning: "Create new plot"},
        {key: "default_plot_form", meaning: "Change default plot"},
        {key: "default_plot_save", meaning: "Save changes"},

        //plot-card
        {key: "plotcard_detail_link", meaning: "Details"},

        //analysis
        {key: "prediction_growthstage", meaning: "Prediction: Week §"},
        {key: "growthstage_naming", meaning: "week §"},
        {key: "prediction_species", meaning: "Species: §"},
        {key: "model_confidence", meaning: "Confidence: §"},
        {key: "p_growthstage_correction", meaning: "Correct the prediction:"},
        {key: "p_species_correction", meaning: "Correct the species:"},
        {key: "correction_save", meaning: "Save correction"},
        {key: "analysis_done", meaning: "Continue"},

        //species
        {key: "species_mais", meaning: "corn"},
        {key: "species_fles", meaning: "bottle"},

        //upload
        {key: "upload_title", meaning: "Analyse an image..."},
        {key: "upload_form_image_label", meaning: "Take a photo or select an image"},
        {key: "upload_form_plot_label", meaning: "Plot"},
        {key: "upload_form_submit", meaning: "Upload and analyse"},
        {key: "form_error", meaning: "Please select a valid image"},
        {key: "upload_form_submit_no_analysis", meaning: "Upload without analysis"},

        //loginform
        {key: "login_title", meaning: "Login..."},
        {key: "login_form_mail_label", meaning: "Email address"},
        {key: "login_form_password_label", meaning: "Password"},
        {key: "login_form_submit", meaning: "Login"},
        {key: "alt_register", meaning: "... or register"},
        {key: "navigate_register", meaning: "Register"},

        //plot-detail
        {key: "return_previous", meaning: "Back"},
        {key: "plot-title-plot-location", meaning: "Plot '§'"},
        {key: "sort-by-date", meaning: "Sort by date"},
        {key: "sort-low-high", meaning: "oldest first"},
        {key: "sort-high-low", meaning: "newest first"},
    ]
}