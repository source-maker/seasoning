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
<a href="https://storybook.broth.ninja/">Online Documentation</a>・
   <a href="https://github.com/source-maker/seasoning/issues">Request Feature</a>・
   <a href="https://github.com/source-maker/seasoning/issues">Report Bug</a>
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
- [Prettier](https://prettier.io/) - An opinionated code formatter

## Live Demo

We provide a growing list of common pages and components that serve as great starting points for any project.<br />You can preview these pages and components in a live preview [here](https://playground.broth.ninja/).

# Starting a New Project

## System Requirements

Node.js 12.22.0 or later

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

# App Public Details
NEXT_PUBLIC_NAME=$npm_package_name
NEXT_PUBLIC_VERSION=$npm_package_version
```

Notes:

- `http://127.0.0.1:8888/` is the default base url for the Django backend boilerplate.
- The application name and version is set within `package.json` as dynamic environment variables, accessible with `process.env.NEXT_PUBLIC_NAME` and `process.env.NEXT_PUBLIC_VERSION`.

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

# Project File Structure

This document provides a description of how the directories and files are structured within this boilerplate project.<br />
The objective is to help you understand the organization of the project, making it easier to navigate and contribute to the codebase.

## Root Directory _(./)_

The root directory of the project contains several important subdirectories and files. Here's an overview:

- **.storybook/:** This directory configures the Storybook environment, initializing external libraries like MUI (Material UI) and React Hook Form. This setup allows the rendering of various components within the Storybook showcase.

- **public/:** This directory is used to store files that are publicly accessible, such as images. These files are available to be served to clients upon request.

- **showcase/:** This directory contains a collection of single-page components with minimal custom component dependencies. It is designed to accelerate the development of specific features in your project through example.

- **stories/:** This directory contains the Storybook story components. These components are used to display the Design System environment.

- **tests/:** This directory houses the End-to-End (E2E) and integration test files.

## src Directory _(./src/)_

The `src` directory contains the source code of the project, organized in several subdirectories:

- **components/:** This directory contains atomic level components which act as the foundational building blocks for your app. The components are segregated based on their core functionality (e.g., button, radio, textfield). Ideally, these components should not interact or interfere with other parts of your codebase.

- **features/:** This directory contains molecule/organism level components, categorized by their specific feature or purpose within the project (e.g., authorization, transactions, products). These components are allowed to consume services and can have side effects throughout the codebase (e.g., using ContextAPI, hooks, API requests).

- **init/:** This directory stores the code related to the initialization of the app, along with the setup for third-party packages and libraries.

- **pages/:** This is a special Next.js directory used for file-based routing. For more information, please refer to the Next.js documentation. Note that because the `app` directory is relatively new (from Next 13), we have opted to stay with the standard `pages` directory for production stability.

  - **pages/api:** This subdirectory contains server-side code for creating API endpoints. For further details, refer to the Next.js documentation.

- **layouts/:** This boilerplate supports multiple layouts to handle various users. This directory stores these various layouts to be consumed by the pages.

- **providers/:** This directory contains providers that wrap components and provide state management via the Context API.

- **helpers/:** This directory contains reusable functions that assist throughout the project. Some common helper functions, such as arrayHelpers, fileHelpers, and dateHelpers, are included for convenience.

- **hooks/:** This directory houses custom React hooks, which encapsulate reusable state logic.

- **schemas/:** This directory stores schema code used for form validation.

- **types/:** This directory contains TypeScript interfaces, types, and enums to enforce typing throughout the project.

- **styles/:** This directory contains global CSS styles in order to customize on top of the design system theme being used. Note that it is generally better to modify the design system theme whenever possible.

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

## Semantic Versioning

Seasoning automatically handles the version number of the project based on the commit messages. This is achieved by using the following Github action: [Git-Semantic-Version](https://github.com/marketplace/actions/git-semantic-version

Use the words `MAJOR` or `MINOR` in your commit message to bump the version number accordingly.

Patches are applied on each commit.

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

## Package Management

By default, Seasoning enforces the use of `npm` for package management, restricting other managers from being used. This is to ensure that all developers are using the same package manager, and to avoid any potential issues with package lock files.

If your team would like to opt for another package manager, please update the engine lock requirements in the `package.json` file.

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

[contributors-shield]: https://img.shields.io/github/contributors/source-maker/seasoning.svg?style=for-the-badge
[contributors-url]: https://github.com/source-maker/seasoning/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/source-maker/seasoning.svg?style=for-the-badge
[forks-url]: https://github.com/source-maker/seasoning/network/members
[stars-shield]: https://img.shields.io/github/stars/source-maker/seasoning.svg?style=for-the-badge
[stars-url]: https://github.com/source-maker/seasoning/stargazers
[issues-shield]: https://img.shields.io/github/issues/source-maker/seasoning.svg?style=for-the-badge
[issues-url]: https://github.com/source-maker/seasoning/issues
[license-shield]: https://img.shields.io/github/license/source-maker/seasoning.svg?style=for-the-badge
[license-url]: https://github.com/source-maker/source-maker/seasoning/blob/master/LICENSE.txt
[screenshot]: preview.png
