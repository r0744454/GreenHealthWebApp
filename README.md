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