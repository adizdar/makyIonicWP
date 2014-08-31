/// <reference path="../Scripts/ionic.bundle.min.js" />

angular.module('maky', ['ionic', 'maky.controllers.project', 'maky.controllers.todo', 'maky-directives', 'maky.services'])

.config(function ($urlRouterProvider, $stateProvider) {


    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: "app/View/home/page.html"

    })

    .state('project', {
        url: '/project',
        abstract: true,
        templateUrl: "app/View/project/project.html",
        controller: "ProjectCtrl"
    })


    //.state('project.todo', {
    //    url: '/todo',
    //    views: {
    //        '@project': {
    //            templateUrl: "app/View/todo/todo.html"
    //        }
    //    }
    //})

        .state('project.todo', {
            url: '/todo',
            views: {
                'todo@project': {
                    templateUrl: "app/View/todo/todo.html",
                    controller: "TodoCtrl"
                }
            }
        })

    $urlRouterProvider.otherwise('/');

});

