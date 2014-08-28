/// <reference path="../Scripts/ionic.bundle.min.js" />

var makyApp = angular.module('maky', ['ionic', 'maky.controllers', 'maky-directives'])

.config(function ($urlRouterProvider, $stateProvider) {


    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: "app/View/home/page.html"

    })

    .state('project', {
        url: '/project',
        templateUrl: "app/View/project/project.html",
        controller: "ProjectCtrl"
    })

    .state('project.todo', {
        url: '/todo',
        views: {
            '@project': {
                templateUrl: "app/View/todo/todo.html"
            }
        }
    })

    $urlRouterProvider.otherwise('/');

});

