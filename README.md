# Node Boilerplate

Starter for bare-bones NodeJS projects with Typescript.

## Quick Start

1. Install [jq](https://stedolan.github.io/jq/): `$ brew install jq`
2. Install dependencies: `$ npm i`
3. Generate a module: `$ npm run generate`
4. Test: `$ npm test`
5. Create a .env file with environment vars. They will be pre-loaded when you do `$ npm start`.
6. Build and run: `$ npm start`

## Things to keep in mind

- `$ npm start` pipes output to [jq](https://stedolan.github.io/jq/), so use the `logger` util in **/src/utils/logger** instead of `console.log`.
