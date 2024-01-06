const path = require('path');

const buildEslintCommand = (filenames) =>
  `eslint --fix ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

const buildPrettierCommand = (filenames) =>
  `prettier --write ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

const buildStylelintCommand = (filenames) =>
  `stylelint --ignore-path .gitignore ${filenames.join(' ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx}': [
    buildEslintCommand,
    buildPrettierCommand,
    buildStylelintCommand,
  ],
};
