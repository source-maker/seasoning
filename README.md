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

It is highly recommended to copy/paste the following template into your server environment. 
Make sure to configure these variables appropriately for your project:

```
# Change this to your own server URL
NEXT_PUBLIC_BACKEND_DOMAIN=http://127.0.0.1:8888/

# location for client-side calls
NEXTAUTH_URL=http://127.0.0.1:3000

# secret key to be used with nextAuth jwt token
NEXTAUTH_SECRET=ReplaceWithAnyRandomString
```

Notes:

- `http://127.0.0.1:8888/` is the default base url for the Django backend boilerplate.


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

- **designsystems/:** This directory stores useful components organized by design system. This is useful to copy into your project's `src` directory to use for development. These components are typically only rendered and viewed from Storybook.

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


## How to Submit a Bug Report

If you find a bug, please follow the following steps:

1. Create a new issue
2. Provide a detailed description of the bug
3. Provide steps to reproduce the bug
4. Provide any relevant screenshots

# Layouts

## How Our Layouts Work
NextJS 13 introduces layouts with its new `app` directory, however, for production stability, we have chosen to stick with using the `pages` directory for the time being.

We have architectured layouts via higher order components (HOC).
Each layout file is structured in the following order:

1. `PageOptions`: Defined at the top of each page file, this Typescript interface enables developers to specify what properties can be passed from Next.js pages to modify the layout.

2. `Layout` Component: The Layout component is where the UI of the layout is defined. This is created using standard React components and JSX syntax.

3. `HOC` (Higher Order Component): This part of the file involves defining and exporting the HOC. The HOC applies the layout with the options provided to any Next.js page that wishes to use the layout. This function takes a component (Next.js page) as an argument and returns a new component with the layout applied.

(Note: The `DefaultLayout.tsx` is unique among other layout files because it does not utilize HOC, and simply wraps around a page as a fallback if no layout is specified by a page.)

# Development Guidelines

## Choosing a Design System

Selecting a design system is highly dependent on your team and project requirements, so Seasoning offers the flexibility to select the design system that best suits your needs.

By default, Seasoning comes equipped with the following:

- **Material UI (MUI)** - An opinionated design system based on Google's Material Design. It is ideal for quick demos, minimum viable products (MVPs), B2B applications, or projects where a unique UI design is not a high priority.

- **BaseUI + Tailwind** - A headless component approach that provides standards for accessibility while giving designers and developers complete control over the design. It is ideal for projects requiring customized UIs, Figma-driven projects, and unique component crafting. 

**Important:** It's crucial to note that while Seasoning offers the flexibility to choose between design systems, only one system should be selected for a given project. 

Utilizing multiple design systems can lead to conflicts and an increased application bundle size. 

Therefore, we highly your team to select the preferred design system early on in the development process, and then remove the other design systems from the project.

### Toggling A Design System
These design systems can be easily toggled so team's do not have to necessarily commit to a design system right away. 

This also allows Storybook to render the various design systems for quick development.

To toggle, you only need to set the appropriate boolean in the `./app.config.json` file:

```
{
  "enableMui": true,
  "enableTailwind": false 
}
```
**note** - when you enable or disable Tailwind, it will require the server to restart for changes to take effect.

### Design System Template Components

Seasoning comes with template components for each design system to enhance development speed.

These components are stored in the `./designsystems` directory, and can be previewed from within storybook.

All components in this directory are configured to be ignored by your editor to prevent accidental import of a similarly named component from other design systems.

**Important** If you remove any packages related to a design system, it is important to remove related design systems from this directory since they will no long render in Storybook. 

### Ignoring the `DesignSystems`` Directory

You may find it a nuisance to have to search and distinquish between components in your `src` directory vs the components in the `designsystems` directory.

As a resolution, you can configure VS Code to ignore this directory in file searches by setting the following in your `./.vscode/settings.json` file:

```
  "search.exclude": {
    "**/designsystems": true
  }
  ```

### How to Remove Material UI (MUI)
If your team has chosen to not use MUI, you may opt to remove it completely from the project.
To do so, please do the following:

1. Delete the `MuiProvider.tsx` file from the `providers` directory. Then remove the import of this provider at the top of the `_app.tsx` file.

2. Remove the if statements and var that relate to `enableMui` variable from the `_document.tsx` file.

3. Remove all `MUI` and `emotion` related packages from the `package.json` file. BUT make sure not to remove `@mui/base` if you are going with the BaseUI/Tailwind approach!

4. In the `.storybook` directory, remove the `with-mui-theme.decorator.js` file, the `initMuiThemes.ts` file, and all Mui related code in the `preview.js` file.

5. Remove the `./designsystems/mui` directory

### How to Remove BaseUI/Tailwind

If your team decides to use MUI, then you can safely remove BaseUI+Tailwind from the project. 
Here are the steps to do this:

1. Remove the BaseUI package from the project with `npm uninstall @mui/base`.

2. Remove the tailwind related packages with `npm uninstall tailwindcss postcss autoprefixer`.

3. Delete the `tailwind.config.js` file, `postcss.config.js` file, and the `tailwind-init.css` file. Make sure to remove the `tailwind-init.css` import from the top of `_app.tsx` file.

4. Remove the `"predev"` and `"prebuild"` scripts from the `package.json` file, and remove the `./scripts/generateTailwindCSS.js` file.

5. Delete any design systems that use these packages from the `designsystems` directory.

### Creating a Custom MUI Theme

MUI themes allow global styling via theme files that contain the extension `*.theme.ts`.<br />
These theme files essentially hold a large object that overrides MUI's default palette (colors), typography, spacing, components, and more. You can refer to the MUI documentation for configuration options:

https://mui.com/material-ui/customization/theming/

We have included several example themes to get you started.
They are stored in the `init/mui/themes` directory.


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

## Internationalization (i18n)

Seasoning supports multiple languages using the next-i18next library. Here's a simplified guide on how it works:

### Passing Translations to Pages

For each Next.js page, we need to pass the translations. 

To do this, we simply need to pass the `serverSideTranslations` function to either:
-  `getStaticProps`
- `getServerSideProps`

Here is an example of how this looks:

```jsx
// `getStaticProps` or `getServerSideProps` are typically at the bottom of the NextJS Page file.
export async function getStaticProps(context) {
  // Extract the locale identifier from the URL
  const { locale } = context;

  return {
    props: {
      // Pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  };
}
```

### Consuming Translations in Components
Once pages can access translations, any component rendered in the page can utilize the translations by importing the `useTranslation`` hook from `next-i18next``. Pass the name of the json file(s) for the translations you wish to consume:

```jsx
  // lets get translations from common.json and home.json
  const { t } = useTranslation(['common', 'home']);
```
You can then use the translations in your component:

```jsx
{t('common:app_name')}
{t('home:login')}
```

We also included a utility function `convertStringToJSX` for rendering strings with new lines or spaces:
```jsx
  {convertStringToJSX(t('app_description'))}
```

It is common to interpolate information into the translations. As long as it is strings, you can do so by wrapping variables with curly braces `{{variable}}` and then pass strings in the component render:


```json
{
  "welcome_message": "This is a personal account page for {{name}}.\nYou have a balance of {{balance}} in your account.",
}
```

```jsx
    t('welcome_message', {
      name: currentUser?.name,
      balance: `¥${currentUser?.money}`,
    })
```

## Package Management

By default, Seasoning enforces the use of `npm` for package management, restricting other managers from being used. This is to ensure that all developers are using the same package manager, and to avoid any potential issues with package lock files.

If your team would like to opt for another package manager, please update the engine lock requirements in the `package.json` file.

## strict Mode

Using React's default configuration, strict mode is enabled in development mode to detect potential problems in the application.
Since strict mode is enabled, `useEffect` and `useState` are executed multiple times in development mode, which may cause excess API calls.

This behavior is to be expected during development, and is not a problem in production mode.
Read the following link for more information on strict mode:

[Strict Mode](https://ja.reactjs.org/docs/strict-mode.html)

## Protecting Routes (RouteGuard)

Seasoning provides server side route guard protection at `./middleware.ts`.

We opted for auth protection on all routes, requiring developers to whitelist the paths that can be accessed publicly, without authentication.

You can modify the `whiteListConfig` array with the path names that you wish to whitelist.

If your app does not need route protection, you simply need to remove the `./middleware.ts` file.


# Storybook

Seasoning comes equipped with Storybook to centralize your project's components into a UI library/design system.

## Creating a Story

In general, you should create a story in parallel with the components themselves. 

For example:
```
/ButtonDirectory
  - Button.tsx
  - Button.stories.tsx
```

However, if the situation is unique and cannot be easily stored in parallel, such as stories for NextJS pages, you can store these stories in the `stories/` directory at the root of the project.


## Adding a Theme to Storybook

Storybook is similarly equipped to work with MUI, and works with all of the MUI themes in the project.
There is a dropdown in the toolbar that provides a convenient way your UI in different themes.

When you create a new MUI theme, you will need make sure Storybook can read it by making the following changes:

1. Import the theme object and add to the `storyThemes` array in the `.storybook/initMuiThemes.ts` file.

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

2. Next, you have to add the theme as a toolbar option in storybook by `.stories/preview.tsx` file:

```
  items: [
    ...
        { value: 'new Theme',  title: 'New Theme' },
    ...
      ],
```

Your theme should now be available in the storybook toolbar.

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
