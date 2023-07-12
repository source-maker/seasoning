const fs = require('fs');
const config = require('../app.config.json');

const tailwindEnabled = config.enableTailwind;

const cssContent = tailwindEnabled
  ? `@tailwind base;
@tailwind components;
@tailwind utilities;`
  : `/* Tailwind is disabled. */`;

fs.writeFileSync('./src/styles/tailwind-init.css', cssContent);
