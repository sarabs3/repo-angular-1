import angular from 'angular';
import WelcomeController from './controllers/WelcomeController';
import $ocLazyLoad from 'oclazyload';
import homeController from './controllers/home';
import MainController from "./controllers/MainController";
const ngRoute = require('angular-route');


// app.js
import "@uirouter/angularjs";

import { appRouting } from "./app.routing";

  


const app = angular.module('demo', [ngRoute, $ocLazyLoad, "ui.router"])
.controller('WelcomeController', WelcomeController);
/* 
// routes
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/Book/:bookId', {
        templateUrl: './app/views/book.html',
        controller: 'BookController',
        
    })
    .when('/Book/:bookId/ch/:chapterId', {
        templateUrl: './app/views/chapter.html',
        controller: 'ChapterController',
        lazyLoad: ($transition$) => {
            const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");
        
            return require.ensure([], () => {
              // load whole module
              require("./controllers/ChapterController");
        
              $ocLazyLoad.load(module.default);
            }, "chapter.module");
          }
    })
    .when("/", {
        templateUrl : "../views/main.htm"
    })
    .when("/red", {
        templateUrl : "../views/red.htm",
        controller: 'RedController',
        lazyLoad: ($transition$) => {
            const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");
        
            return require.ensure([], () => {
              // load whole module
              var module3 = require("./controllers/RedController");
        
              $ocLazyLoad.load(module3.default);
            }, "RedController");
          }
    })
    .when("/green", {
        templateUrl : "../views/green.htm"
    })
    .when("/blue", {
        templateUrl : "../views/blue.htm"
    });

    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(true);
    }); */

    app.controller('home', homeController);
    app.controller('MainController', MainController)
    app.config(appRouting);
    //    app.controller('BookController', import(/* webpackChunkName: "BookController" */'./controllers/BookController').then(({default: BookController}) => {
    //     $ocLazyLoad.load(BookController);
    //    }))



  export default app;