'use strict';

angular.module('app', ['ngRoute', 'main']).
config(function ($routeProvider, $sceDelegateProvider) {
    $routeProvider.when('/projects', { templateUrl: 'partials/projects.html' });
    $routeProvider.when('/project/:name', { templateUrl: 'partials/single.html', controller: 'WorkoutController' });
    $routeProvider.when('/about', { templateUrl: 'partials/about.html' });
    $routeProvider.otherwise({ redirectTo: '/start' });
});

angular.module('main', []);