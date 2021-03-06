# The SecurityModule
## Overview
The SecurityModule contains all code that manages login, registration, authentication token injection and route guards.

## Token Injection
When sending requests to the API that request or modify protected data, an authentication token proving the users' identity is required in the request headers. The [**SecurityInterceptor**](./authentication/security.interceptor.ts) class automatically injects the bearer token when it is stored locally. This ensures that logged in users are always recognized by the API as authorized to access their respective resources.

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
The AuthenticationModule provides 2 components:
- [**app-login**](./authentication/login/login.component.ts)
- [**app-register**](./authentication/register/register.component.ts)

The **app-login** component provides the functionality for users to log in to the application.

The **app-register** component provides the functionality for new users to register to the system.

### SecurityInterceptor
Apart from the above component, the AuthenticationModule also provides the SecurityInterceptor class, which is used to inject the authentication token into every request that is send to the server when the user is logged in.