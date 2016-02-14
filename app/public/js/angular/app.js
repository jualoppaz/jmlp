angular.module('jmlp', ['ngRoute', 'services', 'ui.bootstrap'])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        //configure routes.
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'templates/home.html'
            })
            .when('/contacto', {
                controller: 'HomeController',
                templateUrl: 'templates/contacto.html'
            })
            .when('/curriculum', {
                controller: 'CurriculumController',
                templateUrl: 'templates/curriculum.html'
            })

            //this is the default route.
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);

    }]);
