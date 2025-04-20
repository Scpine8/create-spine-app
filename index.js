#!/usr/bin/env node

import prompts from 'prompts';
import { execSync } from 'child_process';

async function main() {
  const response = await prompts({
    type: 'text',
    name: 'projectName',
    message: 'What is your project name?',
  });

  const { projectName } = response;

  console.log(`Creating project: ${projectName}`);

  // Scaffold with Vite
  execSync(`npm create vite@latest ${projectName} -- --template react-ts`, { stdio: 'inherit' });

  const dependencies = `tailwindcss postcss prettier autoprefixer`;

  // Install your favorite dependencies
  execSync(`cd ${projectName} && npm install ${dependencies}`, { stdio: 'inherit' });

  // Optionally copy your preset config files
  // fs.copyFileSync('path/to/your/tailwind.config.js', `${projectName}/tailwind.config.js`);
}

main();