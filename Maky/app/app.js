/// <reference path="../Scripts/ionic.bundle.min.js" />

angular.module('maky', ['ionic'])

.config(function ($urlRouterProvider, $stateProvider) {


    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: "app/View/home/page.html"

    })

    .state('project', {
        url: '/project',
        templateUrl: "app/View/project/project.html"
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

