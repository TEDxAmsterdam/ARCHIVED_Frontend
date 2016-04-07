# TEDxAmsterdam Open Source Community

[![GitHub issues](https://img.shields.io/github/issues/TEDxAmsterdam/Frontend.svg)](https://github.com/TEDxAmsterdam/Frontend/issues) [![Build Status](https://travis-ci.org/TEDxAmsterdam/Frontend.svg?branch=master)](https://travis-ci.org/TEDxAmsterdam/Frontend) [![Join the chat at https://gitter.im/TEDxAmsterdam/Frontend](https://badges.gitter.im/TEDxAmsterdam/Frontend.svg)](https://gitter.im/TEDxAmsterdam/Frontend?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![GNU General Public License](https://img.shields.io/badge/license-GPL--3.0-blue.svg)](http://www.gnu.org/licenses/gpl-3.0.en.html)

## TEDxAmsterdam is going Open Source!

TEDxAmsterdam has shared a github to enable developers to build the front-end and back-end components for the new website.

We welcome all developers that share the spirit of open source development and would like to contribute to make TEDxAmsterdam the most awesome community built website ever.

Ideas worth spreading!

http://tedx.amsterdam/

## Docs

* [Implementation details](./docs/implementation-details.md)
* [Development](./docs/development.md)

## Installation

Clone the repository and run `npm install`:
```
git clone https://github.com/TEDxAmsterdam/Frontend.git && cd Frontend && npm install
```

## Vagrant Installation

* [Install Vagrant](https://www.vagrantup.com/downloads.html)
* Run `vagrant up` 
* After vagrant has started up run  `vagrant ssh`
* Go into the www folder by running `cd /var/www` and run `npm install && npm run build:server && npm start`
* Visit localhost:9000

[![Twitter](https://img.shields.io/twitter/url/https/github.com/TEDxAmsterdam/Frontend.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)
