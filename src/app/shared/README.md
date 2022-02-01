# The SharedModule
## Overview
The SharedModule contains all code that is shared between all the users and that is used by a lot of modules.

## Models
Part of the shared data are several model classes that are used throughout the application. There are currently 3 models provided by the SharedModule:
- [**Plant**](./models/Plant.ts)
- [**Result**](./models/Result.ts)
- [**User**](./models/User.ts)

## Components
The SharedModule provides 2 components:
- [**app-home**](./home/home.component.ts)
- [**app-navigation**](./navigation/navigation.component.ts)

The **app-home** component is the shared homepage for all users

The **app-navigation** component is responsible for the navigation bar on the top of the application

## Child Modules
The AuthenticatedModule provides 1 child module:
- [**ServicesModule**](./services/services.module.ts)

## ServicesModule
### Services
The UserModule provides 3 services:
- [**AnalysisService**](./services/analysis/analysis.service.ts)
- [**PlantService**](./services/plant/plant.service.ts)
- [**ResultService**](./services/result/result.service.ts)

The **AnalysisService** service provides the functionality for transference of image and plant data between components

The **PlantService** service provides the functionality for accessing the **Plant** data from the API.

The **ResultService** Service provides the functionality for accesing the **Result** data from the API.

### Component Interaction
When uploading and then analyzing an image, the data is temporarily cached in the AnalysisService, which is injected into both app-upload and app-analysis.