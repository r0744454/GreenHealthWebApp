# The SharedModule
## Overview
The SharedModule contains all code that is shared between all the users and that is used by a lot of modules.

## Models
Part of the shared data are several model classes that are used throughout the application. There are currently 6 models provided by the SharedModule:
- [**Plant**](./models/Plant.ts)
- [**Result**](./models/Result.ts)
- [**User**](./models/User.ts)
- [**Organisation**](./models/Organisation.ts)
- [**Plot**](./models/Plot.ts)
- [**Season**](./models/Season.ts)

## Components
The SharedModule provides 3 components:
- [**app-home**](./home/home.component.ts)
- [**app-navigation**](./navigation/navigation.component.ts)
- [**app-footer**](./footer/footer.component.ts)

The **app-home** component is the shared homepage for all users

The **app-navigation** component is responsible for the navigation bar on the top of the application

The **app-footer** component is the footer at the bottom of the site that is shared between all pages.

## Child Modules
The AuthenticatedModule provides 1 child module:
- [**ServicesModule**](./services/services.module.ts)

## ServicesModule
### Services
The UserModule provides 5 services:
- [**AnalysisService**](./services/analysis/analysis.service.ts)
- [**PlantService**](./services/plant/plant.service.ts)
- [**ResultService**](./services/result/result.service.ts)
- [**PlotService**](./services/plot/plot.service.ts)
- [**TranslationService**](./services/translation/translation.service.ts)

The **AnalysisService** service provides the functionality for transference of image and plant data between components

The **PlantService** service provides the functionality for accessing the **Plant** data with the API.

The **ResultService** service provides the functionality for accesing the **Result** data with the API.

The **PlotService** service provides the functionality for accessing the **Plot** data with the API.

The **TranslationService** service provides translation functionality for all components.

### Component Interaction
When uploading and then analyzing an image, the data is temporarily cached in the AnalysisService, which is injected into both app-upload and app-analysis.

### Translations
The translation service allows components to call a function to get the localisation associated with a certain key.

The translations for each locale are located in `src/assets/locale` and are described in the [**locale definition file**](src/assets/locale/locale.json.ts). There are currently 3 localisation files provided; English, Dutch and French. These files provide a list of keys and their meaning in that language.

It is possible to pass custom strings to be inserted into a localised string. The service expects an array of values that should be inserted into the string. The service expects the locations where the custom data is inserted to be marked in the translations with the `§` character.

For example, calling
```
translationService.gt("hello_key", ["world"]);
```
With this in the localisation:
```
{ key: "hello_key", meaning: "Hello §!" }
```
Will result in the string `Hello world!`.