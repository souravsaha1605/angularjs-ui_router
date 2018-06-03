'use strict';


angular
    .module('myNewProjectApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngTouch',
        'ui.router'
    ])
    .config(function ($stateProvider, $locationProvider, $urlRouterProvider,$urlMatcherFactoryProvider) {
        $urlMatcherFactoryProvider.strictMode(false);
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'MainCtrl',
                controllerAs: 'main',
                templateUrl: 'home.html'
            })
            .state('chennai', {
                url: '/chennai',
                controller: 'Chennai',
                templateUrl: 'nested_one/chennai.html'
            })
            .state('otherwise', {
                abstract: true,
                templateUrl: '404.html'
            })
            .state('otherwise.404', {
                url: '*path',
                templateUrl: '404.html'
            });


        $locationProvider.html5Mode(true);
    }).config(function($provide) {
    $provide.decorator('$state', function($delegate, $stateParams) {
        $delegate.forceReload = function() {
            return $delegate.go($delegate.current, $stateParams, {
                reload: true,
                inherit: false,
                notify: true
            });
        };
        return $delegate;
    });
});
