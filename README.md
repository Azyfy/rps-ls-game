# Rock Paper Scissors / Lizard Spock game

A rock paper scissors / lizard spock game. [Frontend mentor challenge](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH).

## Table of contents

- [Overview](#overview)
    - [Links](#links)
    - [Features](#features)
    - [Tools](#tools)
    - [Screenshot(s)](#screenshot)
- [Local use](#local-use)
    - [Instructions](#instructions)
        - [Available Scripts](#available-scripts)
        - [gh-pages Deploy Instructions](#gh-pages-deploy-instructions)

## Overview

### Links
- [Live](https://azzryel.github.io/rps-ls-game)

### Features
- Play rock paper scissors against the computer
- Switch to rock paper scissors lizard spock and back
- View rules

### Tools
- React
- Sass
- Webpack
- ESlint

### Screenshot

## Local use

### Instructions
The usual; clone the repo and install the dependencies (`npm install`)

#### Available Scripts
-  `npm start` runs the app at [http://localhost:3000](http://localhost:3000) in the development mode
- `npm run lint` linting
- `npm run build` builds the app (dev mode set)

#### gh-pages deploy instructions
When ready for production, change your mode and build script from development to production.
Change the path of the bundle.js script in you index file (based on where you want to put your build files).
Change the webpack config for your output, set publicPath to either `/` or `/<github-repo-name>/dist/`.
Move the build files and your index.html (needs to be in root dir) to a gh-pages branch on github.