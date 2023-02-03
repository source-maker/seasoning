<!-- PROJECT SHIELD LINKS -->
<div align="center">

[![Contributors][contributors-shield]][contributors-url] [![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url] [![Issues][issues-shield]][issues-url]

</div>

<!-- PROJECT LOGO -->
<div align="center">
  <h1 align="center">Seasoning NextJS Boilerplate</h1>

  <strong align="center">
A NextJS boilerplate for jumpstarting your project using a standardized workflow using reliable and tested technology.
<br/><br/>
<a href="https://playground.broth.ninja/">Live Demo</a>・
<a href="http://127.0.0.1:6006/?path=/docs/introduction--page">Online Documentation</a>・
   <a href="https://github.com/source-maker/nextjs-boilerplate/issues">Request Feature</a>・
   <a href="https://github.com/source-maker/nextjs-boilerplate/issues">Report Bug</a>
  </strong>
</div>
<hr />

<!-- ABOUT THE PROJECT -->

# Concept

Broth is boilerplate that provide a production-ready foundation for applications due to the focus of cherry picking OSS projects that ensure long term stability.
It comes equipped with numerous, premade components and features that are ready to be customized and used in your project.

## Flexibile Architecture

Flexible scalability is achieved by developing backend and frontend separately, integrating them together via API endpoints. This allows for the backend to be developed in any language and the frontend to be developed in any framework. The boilerplate is designed to be used with NextJS, a React framework for production-grade apps, while the backend is developed in Django, a Python-based backend framework for web applications.

## Standardized Workflow

Our boilerplate is designed to be used with a standardized workflow that is easy to learn and use.<br />The workflow is based on the following principles:

1. Design - Designers customize the UI to match the client's brand and product via Figma.
2. Develop - The designs are then delivered to the engineers for implementation of the features.
3. Test - The engineers test the features to ensure they are working as intended.
4. Deploy - The engineers deploy the features to the production environment.

## Reliable and Tested Technology

We have chosen various OSS projects to build on top of this framework that have proven to be stable and secure, powered by a large community of contributors.
This ensures that the features are reliable and secure.

### Libraries Included:

- [NextJS](https://getbootstrap.com) - React framework for production-grade apps
- [DJango](https://www.djangoproject.com/) - Python-based backend framework for web applications.
- [MUI](https://mui.com/) - Google's open-source design language known as Material Design, a design system composed of guidelines, components, and tools created by over 2500 contributors around the world.
- [Storybook](https://storybook.js.org/) - UI component development environment
- [React Hook Form](https://react-hook-form.com/) - React-centric Form Library
- [YUP](https://github.com/jquense/yup) - Form validation via object schemas
- [Sentry](https://docs.sentry.io/platforms/javascript/guides/nextjs/) - automatic reporting of errors and exceptions
- [Prettier](https://prettier.io/) - An opinionated code formatter

## Live Demo

We provide a growing list of common pages and components that serve as great starting points for any project.<br />You can preview these pages and components in a live preview [here](https://broth-nextjs-boilerplate.vercel.app/).

# Starting a New Project

## System Requirements

Node.js 12.22.0 or later
TODO 運用環境と合わせる

## How to Get Started

Clone the repo and install the necessary packages through the command:

```
npm i
```

Create the following `.env.local` file for storing sensitive keys and credentials:

```
touch .env.local
```

you can copy/paste the following template for your `.env.local` file. Make sure to update it appropriately for your project and environment:

```
ENV=local

# Change this to your own server URL
NEXT_PUBLIC_BACKEND_DOMAIN=http://127.0.0.1:8888/

# location for client-side calls
NEXTAUTH_URL=http://127.0.0.1:3000

# secret key to be used with nextAuth jwt token
NEXTAUTH_SECRET=ReplaceWithAnyRandomString
```

Note: `http://127.0.0.1:8888/` is the default base url for the Django backend boilerplate.

## Starting The Local Servers

There are two main entry points provided by this boilerplate:

### NextJS Local Server

This is the starting point for the main application being developed .
An example app consisting of example pages and components is included as a convenient starting point for your project.

To start the NextJS server, run `npm run dev`,
Accessible by default at `0.0.0.0:3000` or `http://localhost:3000`

### Storybook Local Server

This is the starting point for the Storybook showcase environment.
The stories in this environment are from the example app, and are used to showcase the components and features in a convenient way.

To start the Storybook server, run `npm run storybook`.
Accessible by default at `0.0.0.0:6006` or `http://localhost:6006`

### Important Notes

- <b>Watch for Conflicting Ports</b> - If another service on your computer is using either of these ports, the command may start with a different port. If you have trouble accessing any of the local servers, please refer to your terminal for the correct url address.
- <b>Stories</b> - Stories are tied to the example app, so if you delete the example app, you will need to delete the stories as well.

# File Structure

The following describes how the directories and files are organized within this framework:

- <b>.storybook/</b> - configures the storybook showcase environment, initializing libraries such as MUI and React Hook Form to work in stories.

- <b>components/</b> - stores atomic level components, the basic building blocks for your app. Separated by their core functionality. (eg: button, radio, textfield, etc). These components typically should not have any effect on other parts in your codebase.

- <b>features/</b> - stores molecule/organism level components, separated by their specific feature or purpose in the project. (eg: authorization, transactions, products, etc). Allowed to consume services and have side effects throughout the codebase (eg: use contextAPI, hooks, API requests, etc.)

- <b>lib/</b> - stores code related to the initialization and configuration of third party packages and libraries.

- <b>pages/</b> - NextJS directory that is used for file-based routing. Please refer to NextJS documentation to learn more.

  - <b>pages/api</b> - server side code for creating API endpoints. Please refer to NextJS documentation to learn more.

  - <b>pages/showcase</b> - a collection of example pages for achieving various common functionality. Useful to refer to when beginning a new project.

- <b>public/</b> - stores publicly accessible files, typically static images, for quick serving to clients on request.

- <b>services/</b> - stores code that assists with the operations and logistics of the application. Organized into the following categories:

  - <b>services/context</b> - contains wrapper components to provide state management via ContextAPI.

  - <b>services/helpers</b> - contains reusable functions to assist throughout the project. Some common functions have been included for convenience. (eg: arrayHelpers, fileHelpers, dateHelpers, etc).

  - <b>services/hooks</b> - contains custom React hooks for reusable state logic.

  - <b>services/repositories</b> - a directory for defining API requests.

  - <b>services/schemas</b> - Stores schema code for form validation.

  - <b>services/types</b> - Contains any Typescript interfaces, types, and enums.

- <b>stories</b> - contains stories developed for consumption by the storybook server to generate previews of the components.

- <b>styles/</b> - contains global css styles, MUI theme configuration files, and initialization of the MUi theme for the NextJS project.

# How to Contribute

We welcome contributions from the community! We are especially interested in contributions to include in our showcase of common pages and components.
If you would like to contribute to this project, please follow the following steps:

## How to Submit a Feature Request

1. Create a new issue
2. Provide a detailed description of the feature to build. We may ask for clarification if needed.
3. Develop the page/component. If new, please include a matching storybook story so it is added into our storybook showcase
4. Provide any relevant screenshots and links to access the feature

## How to Create a Storybook Story

1. Create a new story file in the `stories/` directory
2. Import the component to be previewed
3. Create a story for the component

## How to Submit a Bug Report

If you find a bug, please follow the following steps:

1. Create a new issue
2. Provide a detailed description of the bug
3. Provide steps to reproduce the bug
4. Provide any relevant screenshots

# Development Guidelines

## Creating a Custom Theme

All of the showcase pages and components in this boilerplate are based on minimally styled MUI components.<br />This allows global styling via theme files that contain the extension `*.theme.ts`, stored in the `styles/themes/` directory.<br />
These theme files essentially hold a large object that overrides MUI's default palette (colors), typography, spacing, components, and more. You can refer to the MUI documentation for configuration options:

https://mui.com/material-ui/customization/theming/

We have included several example themes to get you started.

### Adding a Theme to Storybook

Storybook is designed to load all of the themes in the `styles/themes/` directory, and allow you to switch between them in the toolbar at the top of the page. This is a convenient way to preview your changes to a theme.

When you create a new theme, you will need to make two changes:

1. Import the theme object and add to the `storyThemes` array in the `styles/themes/initStoryThemes.tsx` file.

```
export const storyThemes = {
...

  YourTheme: {
    value: 'new',
    title: 'New Theme',
    theme: createTheme(newTheme as ThemeOptions, ja),
  },

...
};
```

2. Next, you have to make the theme as toolbar option in storybook by `.stories/preview.tsx` file:

```
  items: [
    ...
        { value: 'new Theme',  title: 'New Theme' },
    ...
      ],
```

Your theme should now be available in the storybook toolbar.

## Atomic Design Influence

The file organization structure for this boilerplate was inspired by the Atomic design methodology. However, it was slightly modified to better match NextJS (React) conventions and terminology.

- `components/` directory contains what would be atomic elements
- `features/` directory contains the molecules/organisms
- `pages/` contains the final pages that put everything together to be rendered to the client

## File Naming Conventions

- All folder names should be lowercase.
- In the `pages/` directory, folder names should be lower case, while file names should be snake-case (ie: example-file.tsx).
- When dealing with React components, such as files in the `components/` or `features/` directories, file names should be Camel-cased (ie: FileName.tsx). It is important to end the file names with `.tsx`.
- Common typescript/javascript files, such as files stored in the `helpers/`, `lib/`, should be Cap-cased (ie: exampleHelpers.ts) and end with `.ts`.
- MUI theme files are named with the following file extension: `*.theme.ts`
- Storybook stories follow a similiar convention with the file extension: `*.stories.tsx`

## Creating Commits

For consistency among the team, please follow the following guidelines when creating commits:<br />
[conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

## How to Lint Your Code

Linting comes pre-configured in Broth via Prettier.
It is advised for your team to have it configured in their coding environments to check code for potential errors and warnings.
Run this command to check your code for any errors or warnings before creating Pull Requests:

```
npm run lint
```

If you are using VS Code, we recommend to install the `Prettier - Code formatter` plugin to enforce the styles set in the configuration file.

If you would like to change the style conventions globally, you can do so by configuring the `.prettierrc.json` file.

## OpenAPI Typescript Generator

Broth comes equipped with the ability to automatically generate Typescript types, as well as an easy-to-use TS client for consuming endpoints given an OpenAPI url (v3 compatible).

This is useful if you aspire to contract-first development, and keeps your frontend in sync with Broth's complimentary Django based backend boilerplate API via Swagger/OpenAPI.

The TS client is built with Typescript, providing you with all the type safety benefits it has to offer.

To generate the types, edit the "swagger" script with your openAPI url in the `package.json` file. <br />By default, the file is configured to use the default url endpoint for Broth's Django Boilerplate framework:

```
    "swagger": "openapi --input http://localhost:8888/swagger/ --output ./lib/swagger/ --client axios --name SwaggerClient",
```

Once executed, the types will be generated. Endpoints can be accessed by importing the swaggerClient from `/lib/swaggerClient.ts`. The provided methods will be based on your OpenAPI specifications.

<b>Important:</b> You cannot make any changes to files inside the `lib/swagger` directory because they will be overwritten the next time the swagger command is executed.

## strict Mode

Using React's default configuration, strict mode is enabled in development mode to detect potential problems in the application.
Since strict mode is enabled, `useEffect` and `useState` are executed multiple times in development mode, which may cause excess API calls.

This behavior is to be expected during development, and is not a problem in production mode.
Read the following link for more information on strict mode:

[Strict Mode](https://ja.reactjs.org/docs/strict-mode.html)

<!-- LICENSE -->

# License

This project is licensed under the terms of the [3-Clause BSD License](./LICENSE).

<!-- CONTACT -->

# Contact

- SourceMaker - broth@source-maker.co.jp
- Jesse Alvarado - contact@jessealvarado.com

[contributors-shield]: https://img.shields.io/github/contributors/source-maker/nextjs-boilerplate.svg?style=for-the-badge
[contributors-url]: https://github.com/source-maker/nextjs-boilerplate/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/source-maker/nextjs-boilerplate.svg?style=for-the-badge
[forks-url]: https://github.com/source-maker/nextjs-boilerplate/network/members
[stars-shield]: https://img.shields.io/github/stars/source-maker/nextjs-boilerplate.svg?style=for-the-badge
[stars-url]: https://github.com/source-maker/nextjs-boilerplate/stargazers
[issues-shield]: https://img.shields.io/github/issues/source-maker/nextjs-boilerplate.svg?style=for-the-badge
[issues-url]: https://github.com/source-maker/nextjs-boilerplate/issues
[license-shield]: https://img.shields.io/github/license/source-maker/nextjs-boilerplate.svg?style=for-the-badge
[license-url]: https://github.com/source-maker/source-maker/nextjs-boilerplate/blob/master/LICENSE.txt
[screenshot]: preview.png
