'use strict';

/**
 * @ngdoc overview
 * @name scholasticApp
 * @description
 * # scholasticApp
 *
 * Main module of the application.
 */
angular
  .module('scholasticApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
