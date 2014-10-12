/// <reference path="../Scripts/ionic.bundle.min.js" />

angular.module('maky', ['ionic',
    'maky.controllers.home',
    'maky.controllers.project',
    'maky.controllers.todo',
    'maky.controllers.progress',
    'maky.controllers.done'])

.config(function ($urlRouterProvider, $stateProvider) {


    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: "app/View/home/page.html",
        controller: "HomeCtrl"

    })

    .state('project', {
        url: '/project',
        abstract: true,
        templateUrl: "app/View/project/project.html",
        controller: "ProjectCtrl"
    })

        .state('project.todo', {
            url: '/todo',
            views: {
                'todo@project': {
                    templateUrl: "app/View/todo/todo.html",
                    controller: "TodoCtrl"
                }
            }
        })


        .state('project.progress', {
            url: '/progress',
            views: {
                'progress@project': {
                    templateUrl: "app/View/progress/progress.html",
                    controller: "ProgressCtrl"
                }
            }
        })

    .state('project.done', {
        url: '/done',
        views: {
            'done@project': {
                templateUrl: "app/View/Done/done.html",
                controller: "DoneCtrl"
            }
        }
    })

    $urlRouterProvider.otherwise('/');

});

