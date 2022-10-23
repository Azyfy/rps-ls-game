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

### Screenshot(s)

![rps1](https://user-images.githubusercontent.com/25674257/197418875-dce9b89b-1a6a-413a-bfea-ab6137a92a76.png)

![rps2](https://user-images.githubusercontent.com/25674257/197418890-a8ce3927-1b15-48c4-8826-2c8c2c1501c0.png)

![rpsls1](https://user-images.githubusercontent.com/25674257/197418913-9e6a3ca5-347d-48d0-84d3-5a6a681786f4.png)

![rpsls2](https://user-images.githubusercontent.com/25674257/197418925-5c58d857-78d5-4f59-ad7d-e57f149d8556.png)

![rpsrules1](https://user-images.githubusercontent.com/25674257/197418936-3d2c7109-32a7-4af7-bc84-253c700e1cf8.png)

![rpslsrules](https://user-images.githubusercontent.com/25674257/197418940-eedef0b1-efe5-4b6e-acc6-07acca7c85b5.png)

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
