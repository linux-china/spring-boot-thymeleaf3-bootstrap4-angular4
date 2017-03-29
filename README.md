Spring Boot Kotlin Application with Thymeleaf 3, BootStrap 4 and Angular 4
==========================================================================


### Technology Stack

* Spring Boot 1.5.2
* Thymeleaf 3
* BootStrap 4 Alpha6 with JQuery 3.1.1
* Angularjs 4
* Kotlin 1.1

### Environment Setup

```bash
$ brew install nodejs
$ brew install golang
$ brew install go
$ brew install git
$ npm install -g @angular/cli
```

### Development

* install modules: cd src/main/frontend & npm install
* mvn -DskipTests clean package

### AngularJS App Template

```bash
cd src/main
ng new --skip-install=true frontend
```

### Vocabulary

* Component: Application Building Blocks
* Routing: Drive Application Design
* Services: Encapsulate(封装) Application Logic
* Modules: Compartmentalize(划分) Concerns
* Styling: Angular Material2 Module
* Directives and Pipes: Templates on Steroids

### Commands

* generate component: ng g component menu
* generate service: ng g service account

### Features

* ng proxy to spring boot application
* frontend-maven-plugin to help build angular app

### Reference

* A Maven plugin that downloads/installs Node and NPM locally, runs NPM install, Grunt, Gulp and/or Karma： https://github.com/eirslett/frontend-maven-plugin
