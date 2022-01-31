# The SecurityModule
## Overview
The SecurityModule contains all code that manages login, registration, authentication token injection and route guards.

## Services
The SecurityModule provides the AuthService service. This service can be used to authenticate with the application backend, as well as other functions related to managing authentication and local security. The AuthService can be found in the [`auth.service.ts`](./auth.service.ts) file.

When authenticating the server expects an object with an email and password field, and responds with the user that just logged in, as well as an authentication token.
The server response is mapped to the [**AuthResponse**](./authResponse.ts) interface

## Route Guards
The route guard prevents unauthorized users from accessing components they are not allowed to. The guard functions check if the user has authenticated and is logged in before allowing access to certain pages. These protected pages are managed in the [`src/app/app-routing.module.ts`](../app-routing.module.ts) AppRoutingModule class.

## Child Modules
The SecurityModule provides 1 child module:
- [**AuthenticationModule**](./authentication/authentication.module.ts)

## AuthenticationModule
### Components
The AuthenticationModule provides 1 component:
- [**app-login**](./authentication/login/login.component.ts)

The **app-login** component provides the functionality for users to log in to the application.

### SecurityInterceptor
Apart from the above component, the AuthenticationModule also provides the SecurityInterceptor class, which is used to inject the authentication token into every request that is send to the server when the user is logged in.