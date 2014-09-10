/// <reference path="../Scripts/ionic.bundle.min.js" />

angular.module('maky', ['ionic', 'maky.controllers.project', 'maky.controllers.todo', 'maky.controllers.progress', 'maky-directives', 'maky.services'])

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

    $urlRouterProvider.otherwise('/');

});

