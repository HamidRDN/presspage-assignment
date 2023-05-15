# PressPage Assignment Project
This project is implemented both as a vue and react application.

Both of the applications are using Vite as the runner and bundler.

Also, the project is using Cypress as the e2e testing framework.

## Applications Specifications
### Vue
It uses below technologies:
- Vue 3
- Pinia
- Vue Router
- Vuetify
- Ky
- Vitest

### React
It uses below technologies:
- React 18
- Tailwind CSS
- React Router v6
- Ky
- Tanstack Query
- Vitest

## Installation
This project requires node 18.16.0. Please install it from [here](https://nodejs.org/en/download/).
After that, please enable corepack by running `corepack enable` in your terminal.
Finally, install the dependencies using `yarn install` command.

## Running the project
The project is using yarn workspaces, and for running separate scripts are added to the root package json.
Before running, please make a copy of .env.sample file and rename it to .env and change the variables if needed.

### Vue
For running the vue application, please run `yarn dev:vue` in your terminal.

### React
For running the react application, please run `yarn dev:react` in your terminal.

## Testing
This project has both e2e and unit tests. 

### e2e tests
For running the e2e test, at first run a project (vue or react), and then run `yarn cypress:run` to run
the automated test or `yarn cupress:open` to open the cypress interactive runner.

## Unit tests
For running the unit tests, please run `yarn test:vue` or `yarn test:react` in your terminal.

## Linting
This project has eslint and prettier configured. For running the linting, please run `yarn lint:vue` or `yarn lint:react` in your terminal.

Also, for checking the typescript, please run `yarn typecheck:vue` or `yarn typecheck:react` in your terminal.

## Building
For building the project, please run `yarn build:vue` or `yarn build:react` in your terminal. After building, the output will be available in the `dist` folder of each project.

Also, by using `yarn preview:vue` or `yarn preview:react` the build of previous step can be previewed in the browser.

# Rooms to expand
As the requirement of the project was to keep the time below 8 hours, there are some rooms to expand:
- Adding more unit tests
- Adding more e2e tests
- Adding Docker to have isolated development environment
- Share the projects to use the same installation of vite
- Add CI/CD to run e2e and unit tests on each commit/PR
- Add zod to have better type checking
