const { exec } = require('child_process'); // eslint-disable-line
const config = require('../app.config.json'); // eslint-disable-line

if (config.enableTailwind) {
  console.log('Installing Tailwind CSS...');
  exec(
    'npm cache clean --force && npm install tailwindcss@latest postcss@latest autoprefixer@latest --save-dev',
    (error, stdout, stderr) => {
      if (error) {
        console.log(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`Stderr: ${stderr}`);
        return;
      }
      console.log(`Stdout: ${stdout}`);
    }
  );
} else {
  console.log('Tailwind not enabled, skipping...');
  exec(
    'npm cache clean --force && npm uninstall tailwindcss postcss autoprefixer',
    (error, stdout, stderr) => {
      if (error) {
        console.log(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`Stderr: ${stderr}`);
        return;
      }
      console.log(`Stdout: ${stdout}`);

      exec('npm prune', (error, stdout, stderr) => {
        if (error) {
          console.log(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.log(`Stderr: ${stderr}`);
          return;
        }
        console.log(`Stdout: ${stdout}`);
      });
    }
  );
}
