/// <reference path="../Scripts/ionic.bundle.min.js" />

angular.module('maky.controllers', []);
angular.module('maky', [
    'ionic',
    'maky.controllers',
    'maky.services'
])

.config(function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/');

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


});

