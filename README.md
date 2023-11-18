# Web boilerplate: [Repo-Link](https://github.com/Arup-Upopadhyay/React-Node-Boilerplate)

[![NPM version][npm-image]][npm-url] [![License: MIT][mit-badge]][mit-link] [![Node.js CI][git-action-one]][git-action-icon]

## Features

Boilerplate for Dockerised, React App coupled with CircleCI load-balanced with nginx.

- Repo supports only React, and Express in a Mono-repo setup based on Lerna + Yarn workspace environment.
- Repo supports building docker images of WebApps and Nginx, and orchestration with docker-compose
- Rest is all ✨Magic ✨

## TechStack

![nodejs-icon] ![webpack-icon] ![docker-icon] ![react-icon] ![nginx_icon]

## Installation

Application Setup requires [Node.js](https://nodejs.org/) v16+ to run.

Install the dependencies and devDependencies and start the server.

```sh
yarn global add lerna
git clonegit@github.com:Arup-Upopadhyay/React-Node-Boilerplate.git <folder-name>
cd <folder-name>
yarn
```

**For generating web build**:

```sh
yarn run build
```

**For starting the application**:

```sh
yarn run start
```

**For building docker images**:

```sh
yarn run docker-build
```

**For running the App using docker-compose**:

Run and hit localhost:8081 or localhost:8080

```sh
docker-compose up
```

## License

MIT

**Maintained by the [Arup Upopadhyay]**

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format it nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
[arup upopadhyay]: https://www.linkedin.com/in/arupupopadhyay/
[npm-url]: https://npmjs.org/package/eslint-plugin-react
[git-action-icon]: https://github.com/Arup-Upopadhyay/Web-CircleCI-Boilerplate/actions/workflows/main.yml
[npm-image]: https://img.shields.io/npm/v/eslint-plugin-react.svg
[git-action-one]: https://github.com/Arup-Upopadhyay/Web-CircleCI-Boilerplate/actions/workflows/main.yml/badge.svg?branch=main&event=push
[mit-badge]: https://img.shields.io/badge/License-MIT-green.svg
[mit-link]: https://opensource.org/licenses/MIT
[nodejs-icon]: https://img.shields.io/badge/nodejs-latest-aabbcc?labelColor=2c7391&style=plastic&logo=Node.js
[webpack-icon]: https://img.shields.io/badge/docker-latest-aabbcc?labelColor=2c7391&style=plastic&logo=webpack
[docker-icon]: https://img.shields.io/badge/docker-latest-aabbcc?labelColor=2c7391&style=plastic&logo=docker
[react-icon]: https://img.shields.io/badge/react-latest-aabbcc?labelColor=2c7391&style=plastic&logo=react
[nginx_icon]: https://img.shields.io/badge/nginx-latest-aabbcc?labelColor=2c7391&style=plastic&logo=nginx
