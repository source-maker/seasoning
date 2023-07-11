const fs = require('fs'); // eslint-disable-line
const config = require('../app.config.json'); // eslint-disable-line

const tailwindEnabled = config.enableTailwind;

const cssContent = tailwindEnabled
  ? `@tailwind base;
@tailwind components;
@tailwind utilities;`
  : `
/* Tailwind is disabled. */
`;

fs.writeFileSync('./src/styles/tailwind-init.css', cssContent);
