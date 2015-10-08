'use strict';

var angular = angular;

angular.module('app', ['ngRoute', 'main']).
config(function($routeProvider) {
	$routeProvider.when('/', { templateUrl: 'partials/home.html', controller: 'homeController' });
	$routeProvider.when('/projects', { templateUrl: 'partials/projects.html', controller: 'projectsController' });
	$routeProvider.when('/project/:name', { templateUrl: 'partials/single.html', controller: 'singleController' });
	$routeProvider.when('/about', { templateUrl: 'partials/about.html', controller: 'aboutController' });
	$routeProvider.otherwise({ redirectTo: '/' });
});

angular.module('main', []);
