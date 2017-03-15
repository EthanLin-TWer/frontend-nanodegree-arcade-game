# frontend-nanodegree-arcade-game [![][Badges: Travis CI]][Links: Travis CI]

## What's This? 这是什么项目？

This is the first project of the Udacity Frontend(Advanced) Nanodegree Arcade Game, which is mainly used for teaching the students to write object-oriented JavaScript code. 这是 Udacity 前端进阶纳米学位的第一个项目：Arcade Game。项目主要是用于训练学生编写面向对象的 JavaScript 代码的能力。

## How to Run This? 如何运行项目？

One of the easiest way to get this project up and running is to serve the `index.html` file in the root to a specific local port through static servers so that you can visit. I used the `http-server` written in NodeJS but feel free to use any others as you like or are more familiar to. 运行项目一个最简单的方法，就是本地起一台静态服务器，并把根目录下的 `index.html` 暴露到本地的一个端口以供访问。这里我使用的是 NodeJS 写的一个 `http-server`，不过你可以使用其他任何你更喜欢或熟悉的服务器，它们的作用应是相同的。

Make sure you have `npm` or `yarn` installed globally in your machine. If not, please reference the following sections to install them. 首先请确保你本地安装了全局的 `npm` 或 `yarn`。如果没有，请参考下面内容进行安装。

Having npm/yarn installed globally and correctly, please run the following commands to start the game: 正确安装完 npm/yarn 之后，请运行下面的命令以启动游戏：

```bash
npm install -g http-server
cd frontend-nanodegree-arcade-game  # Make sure you run the following command in the project root 运行下面的命令前，请确保你已经在项目的根目录下
http-server -c-1 -o # -c-1 disables caches, -o will open the browser right after server started -c-1 会禁用缓存，-o 会在服务器启动后直接打开浏览器
```

### How to install NPM globally? 如何安装全局的 NPM

* Install through the archives: Go to the [Node.js official](https://nodejs.org/en/),download the latest archives, and install it by double click after downloaded 通过安装包安装：进行 [Node.js 的官网](https://nodejs.org/en/)，下载最新版本的安装包，下载完成后双击安装
* Install through nvm: Follow the instructions in the [nvm repo](https://github.com/creationix/nvm), or reference [this article](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-with-nvm-node-version-manager-on-a-vps) 通过 nvm 安装：请参考 [nvm 仓库](https://github.com/creationix/nvm) 的文档，或参考 [这篇文章](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-with-nvm-node-version-manager-on-a-vps)

### How to install yarn globally? 如何安装全局的 yarn

```bash
npm install -g yarn
```

This requires a globally installed npm. 这需要你先安装了一个全局的 npm。

## Reference 参考资料

* [Game Rubric/Specification][]
* [Startup Guide][]

[Game Rubric/Specification]: https://review.udacity.com/#!/projects/2696458597/rubric
[Startup Guide]: https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true
[Badges: Travis CI]: https://travis-ci.org/linesh-simplicity/frontend-nanodegree-arcade-game.svg?branch=master
[Links: Travis CI]: https://travis-ci.org/linesh-simplicity/frontend-nanodegree-arcade-game