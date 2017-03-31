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
* reference resource in template page. Add following code in you thymeleaf pages:

```html
<script type="text/javascript" src="inline.bundle.js"></script>
<script type="text/javascript" src="polyfills.bundle.js"></script>
<script type="text/javascript" src="styles.bundle.js"></script>
<script type="text/javascript" src="vendor.bundle.js"></script>
<script type="text/javascript" src="main.bundle.js"></script>
</body>
```

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
* generate class: ng g class account

### Code Structure
Domain Driven Design is good architecture to arrange code:

```
assets
  demo.jpg
app
  types.ts
  components
     menu
        menu.component.ts
        menu.component.html
        menu.component.css
     app.module.ts
  domain
     model
       account.ts: entity, vo 
       account.repository.ts: repository
     service:
       account-service.ts
     specification
       account-spec.ts
     infrastructure
       cache.service.ts
  app.module.ts
```
some idea:

* entity, value object are all interface in TS
* repository and service are the class in TS

### TypeScript

* variable and parameter null check: let name: string|null

### Features

* ng proxy to spring boot application
* frontend-maven-plugin to help build angular app

### Reference

* A Maven plugin that downloads/installs Node and NPM locally, runs NPM install, Grunt, Gulp and/or Karma： https://github.com/eirslett/frontend-maven-plugin
* http://www.angulartypescript.com/
* Debug angular in webstorm:  https://blog.jetbrains.com/webstorm/2017/01/debugging-angular-apps/
* TypeScript Chinese Document: https://tslang.cn/docs/tutorial.html