# The AuthenticatedModule
## Overview
The AuthenticatedModule contains all code pertaining to users that have authenticated and are logged in.

## Routing
In order to provide proper route guards and to keep the application modular, each child module provides it's own routing, which is then passed on to the RouterModule. These route definitions can be found in the child module's root folder as `[module name]-routing.module.ts`.

## Child Modules
The AuthenticatedModule provides 1 child module:
- [**UserModule**](./user/user.module.ts)

## UserModule
### Components
The UserModule provides 7 components:
- [**app-analysis**](./user/analysis/analysis.component.ts)
- [**app-upload**](./user/upload/upload.component.ts)
- [**app-dashboard**](./user/dashboard/dashboard.component.ts)
- [**app-plot-overview**](./user/plot-overview/plot-overview.component.ts)
  - [**app-plot-card**](./user/plot-card/plot-card.component.ts)
- [**app-plot-detail**](./user/plot-detail/plot-detail.component.ts)
  - [**app-plant-card**](./user/plant-card/plant-card.component.ts)


The **app-upload** component provides the functionality for users to upload an image.

The **app-analysis** component allows the user to view the analysis from an image.

The **app-dashboard** component shows the analysis that has taken place on the data.

The **app-plot-overview** component shows a list of all available plots. It uses **app-plot-card** to list the plots.

The **app-plot-detail** component shows all the plants in a certain plot. It uses **app-plant-card** to list all the plants. This also allows the deletion of all plants.

### Component Interaction
When uploading and then analyzing an image, the data is temporarily cached in the AnalysisService, which is injected into both app-upload and app-analysis.