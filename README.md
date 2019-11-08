# [openexo design system](https://www.openexo.com/) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)]() [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/exolever/exo-design-system/pulls) [![Build Status](https://travis-ci.org/exolever/exo-design-system.svg?branch=master)](https://travis-ci.org/exolever/exo-design-system) [![Known Vulnerabilities](https://snyk.io/test/github/exolever/exo-design-system/badge.svg)](https://snyk.io/test/github/exolever/exo-design-system)

#### The goal of Openexo design system
Our goal is create a library for building reusable components to build faster, more autonomously and keep the consistency in the whole platform.

* **Design:** Create interactive UIs.
* **IT:** Build UI components to manage their own state, then compose them to make complex UIs.

#### Available features
| Feature          |  Docs  |
|------------------|-------------------------------------------------------- |
| Button           | [Docs](https://exolever.github.io/exo-design-system/components/buttons)    |
| Avatars          | [Docs](https://exolever.github.io/exo-design-system/components/avatars)    |
| Alerts           | [Docs](https://exolever.github.io/exo-design-system/components/alerts)     |

#### Contributing
If you'd like to contribute, you can create an [issue](https://github.com/exolever/exo-design-system/issues) or contribute with a [Pull request](https://github.com/exolever/exo-design-system/pulls)

## Development

#### Getting started
- Run `npm run build:lib` to generate the UI library.
- Run `npm start` to serve the demo app in a dev server.
- Navigate to `http://localhost:4200/`.
- The app will automatically reload if you change any of the source files.

#### Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use
`ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### Build
- Run `npm run build` to build the demo project.
The build artifacts will be stored in the `dist/dev-demo` directory.
- Run `npm run build:lib` to build the library project.
The build artifacts will be stored in the `dist/dev` directory.

#### Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Testing
#### Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Style guide
We follow the tslint-airbnb and codelyzer, you can see in tslint.json
```
{
  "extends": ["tslint-config-airbnb"],
  "rulesDirectory": [
    "node_modules/codelyzer"
  ]
}
```
To run the lint you should run `npm run lint`.

We have prettier to enforces a consistent style, you should run `npm run format:check`.

## Publish & Versions

##### Publish:
To publish you need log in to npm and belong to OpenExO organization.
- Open your terminal
- npm login
- write your credentials

##### New version:

In your MVFs branch the naming will be:

version(same than master) plus -dev.year-month-day-hour-minutes

So for example, if you create a new branch from master with the version 1.0.0, your dev version will be 1.0.0-dev202001201330 (2020-01-20-13-30)
When your PR be approved, you will update the version in master to the following version (depend if is a minor, major...) 1.0.1 and push the new version and the branch master.

