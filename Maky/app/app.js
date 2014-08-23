/// <reference path="../Scripts/ionic.bundle.min.js" />

angular.module('maky', ['ionic'])

.config(function ($urlRouterProvider, $stateProvider) {

    $stateProvider
    //works with ion-nav-view
    //.state('home', {
    //    url: '/',
    //    templateUrl: "app/View/home/page.html"

    //})

    $stateProvider
    .state('home', {
        url: '/',

        views: {
            'default': {
                templateUrl: "app/View/home/page.html"
            },
            'header': {
                templateUrl: "app/View/header/headerHome.html"
            }
        }
    })



    $urlRouterProvider.otherwise('/');

});

