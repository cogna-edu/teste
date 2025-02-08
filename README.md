# react-ts-template
A helpful template to start a new project using typescript, react and nextjs

# Dependencies
Yarn v1.22.17 - To intall [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)  
Node v16.13.0 - To install [Node](https://nodejs.org/en/)  
NPM v8.1.0

With yarn installed, run ```yarn install``` to setup the project's dependencies

# How to run the app

Use ```yarn dev``` to start the app in your developer environment

# USeful commands

Use ```yarn lint``` to run ESLint

Use ```yarn test``` to run unit tests

# Production running

Use ```yarn build``` to transpile

Use ```yarn start``` to start app in production environment

# Sonarqube
- Run ```docker-compose up -d``` to up a sonarqube container;
- Access ```http://localhost:3000``` and configure a new project;
- Configure ```sonar.properties``` with sonar credentials;  
  
# Configure IDE

## Vscode
Add in ```settings.json``` to enable a prettier formatter on save and the tab size.

```json
{
  "window.zoomLevel": 1,
  "editor.fontSize": 16,
  "terminal.integrated.fontSize": 14,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  },
}
```
