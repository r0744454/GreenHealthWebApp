# Green Health AI Platform UI

This is the web app for the Green Health AI Platform. The app allow users to upload an image of a plant and to analyze the properties of that plant.

## Development Setup Guide

To get started with the project the following tools have to be installed:

- Node.js
- npm
- Angular CLI

### Windows Installation (Chocolatey)

```
choco install -y nodejs

npm i -g @angular/cli
```

### Linux Installation (Debian)
```
apt install nodejs

apt install npm

npm i -g @angular/cli
```

### Project Setup

Next, clone the project from the github with `git clone` and go into the project folder. Then install the project dependencies with `npm install`.  
  
Finally, use `ng serve` or `npm start` to start the local development server. (default `localhost:4200`)

## CI/CD and Azure Deployment
The automated building and deployment of the web app to Azure happens with the help of Github Actions. This action file can be found in `.github/workflows`.

When a pull request is merged with the main branch, the web app is build and then deployed to an Azure web app.

## API Connection

The connection string used to communicate with the API is saved in the `src/Globals.ts` file as `apiUrl`. If the API is ever changed to a new domain, this string will have to be changed.

# Project Structure
## Modularity

This project has been developed with the principles of Angular modularity in mind. Modularity is a principle wherein code with related functionality is grouped together. There are several modules containing different aspects of the application.  
More info on these modules and their child modules can be found in the README in each of the corresponding directories inside the `src` folder.

### SharedModule
The SharedModule contains all code that is shared between all the users. This includes API services and modules such as the navbar, styles, etc.

### SecurityModule
The SecurityModule contains all code related to user login, registration, authentication and route guards.

### AuthenticatedModule
The AuthenticatedModule contains all code related to users that are authenticated and logged in, such as the analyze and overview page.

## Styles

This project makes use of the bootstrap framework for styling and layout. The default bootstrap classes are expanded upon with custom colors and icons that are provided in the `src/_variables.scss` file.  
Furthermore, every component has it's own `.scss` style sheet from which it can source it's own unique styling.

### Colours
The two newly added colours are the style colours provided by Vito, which are defined by `$vito-green` and `$vito-dark`. These are defined by the colour codes `0x81bb26` and `0x323031` respectively.

### Fonts
The web application makes use of the custom font `Proxima Nova` for all text, as well as the custom icon font from Vito.

### Icons
The custom icons from Vito have been made available as css classes in 5 different sizes and three variations (normal, black and inverted). These icons can be used by adding `vicon-[black/inverted]-[sm/md/lg/xl/xxl]` to a HTML element. (`vicon-black-xl` for example). When using the icon inline in text it is recommended to use a `<span>` tag.