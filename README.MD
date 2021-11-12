# [easylogger](https://www.npmjs.com/package/easylogger.js)

# Information

> This project is a simple logger where you can customize and be declarative with it. Also here you can save all logs in a folder, this folder will be automatic organized to use for testing, show errors and more.

## Prerequisites

This project requires NodeJS and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Start with downloading the npm package

```sh
$ npm i easylogger
```

## Usage

- Start with downloading the npm package

- Then you can import it

```js
import logger from "easylogger";
```

## Config

Easy log has a basic configuration to be more customizable for the user

```js
  options: {
    showInConsole: true,
    path: "./logs",
    useDate: true,
  },
};
```

For example you want to change the path where the logs save so you only have to type this

```js
  import logger from "easylogger";

  logger.options.path: "./mycustom";
```

And the same for the others config

## Contributing

Is necessary to use this [PREFIXES](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'feat: add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request and wait

## Authors

- **German Fernandez** - _Initial work_ - [Germancitoz](https://github.com/Germancitoz)

See also the list of [contributors](https://github.com/Germancitoz/easylogger/contributors) who participated in this project.
