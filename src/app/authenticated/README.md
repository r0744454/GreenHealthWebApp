# The AuthenticatedModule
## Overview
The AuthenticatedModule contains all code pertaining to users that have authenticated and are logged in.

## Routing
In order to provide proper route guards and to keep the application modular, each child module provides it's own routing, which is then passed on to the RouterModule. These route definitions can be found in the child module's root folder as `[module name]-routing.module.ts`.

## Child Modules
The AuthenticatedModule provides 1 child module:
- UserModule

## UserModule
### Components
The UserModule provides 2 components:
- **app-analysis**
- **app-upload**

The **app-upload** component provides the functionality for users to upload an image.

The **app-analysis** component allows the user to view the analysis from an image.

### Component Interaction
When uploading and then analyzing an image, the data is temporarily cached in the AnalysisService, which is injected into both app-upload and app-analysis.