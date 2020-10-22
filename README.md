
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]


<p align="center">

  <h3 align="center">cra-redux-node-nginx-lets-encrypt-with-docker-compose</h3>

  <p align="center">
    Create React App, Redux, NodeJS, NGINX, and Let's Encrypt Boilerplate with Docker Compose
    <br />
    <a href="https://github.com/feux07/cra-redux-node-nginx-lets-encrypt-with-docker-compose/issues">Report Bug</a>
    ·
    <a href="https://github.com/feux07/cra-redux-node-nginx-lets-encrypt-with-docker-compose/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

- [Table of Contents](#table-of-contents)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation & Usage](#installation--usage)
- [Docs](#docs)
- [License](#license)
- [Contact](#contact)


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* NodeJS version >= 12.18.2
* Docker version >= 19.03.08 

### Installation & Usage
 
1. Clone the repo

```sh
git clone https://github.com/feux07/cra-redux-node-nginx-lets-encrypt-with-docker-compose.git
```


2. Rename folder name with your project name

```sh
mv cra-redux-node-nginx-lets-encrypt-with-docker-compose your-project-name
```

3. Go to the project directory

```sh
cd your-project-name
```

4. Remove .git folder

```sh
rm -rf .git
```

5. Generate React app

```sh
npx create-react-app client --template redux
```

6. Rename .env-sample with .env

```sh
mv .env-sample .env
```

7. Edit .env file with your parameters

```sh
NODE_ENV=production
INLINE_RUNTIME_CHUNK=false
WEB_APP=WEB
VIRTUAL_HOST=sample.website.com
VIRTUAL_NETWORK=nginx-proxy
VIRTUAL_PORT=8080
LETSENCRYPT_HOST=sample.website.com
LETSENCRYPT_EMAIL=sample@website.com
VOLUME_PATH=./volumes
```

8. Run with Docker Compose

```sh
docker-compose up -d
```

## Docs

* [docker-letsencrypt-nginx-proxy-companion Wiki](https://github.com/nginx-proxy/docker-letsencrypt-nginx-proxy-companion/wiki)


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.


<!-- CONTACT -->
## Contact

[Website](https://fethierdincuzun.com)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/feux07/cra-redux-node-nginx-lets-encrypt-with-docker-compose.svg?style=flat-square
[contributors-url]: https://github.com/feux07/cra-redux-node-nginx-lets-encrypt-with-docker-compose/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/feux07/cra-redux-node-nginx-lets-encrypt-with-docker-compose.svg?style=flat-square
[forks-url]: https://github.com/feux07/cra-redux-node-nginx-lets-encrypt-with-docker-compose/network/members
[stars-shield]: https://img.shields.io/github/stars/feux07/cra-redux-node-nginx-lets-encrypt-with-docker-compose.svg?style=flat-square
[stars-url]: https://github.com/feux07/cra-redux-node-nginx-lets-encrypt-with-docker-compose/stargazers
[issues-shield]: https://img.shields.io/github/issues/feux07/cra-redux-node-nginx-lets-encrypt-with-docker-compose.svg?style=flat-square
[issues-url]: https://github.com/feux07/cra-redux-node-nginx-lets-encrypt-with-docker-compose/issues
[license-shield]: https://img.shields.io/github/license/feux07/cra-redux-node-nginx-lets-encrypt-with-docker-compose.svg?style=flat-square
[license-url]: https://github.com/feux07/cra-redux-node-nginx-lets-encrypt-with-docker-compose/blob/master/LICENSE
