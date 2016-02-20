angular.module('jmlp', ['ngRoute', 'services', 'ui.bootstrap', 'satellizer'])
    .config(['$routeProvider', '$locationProvider', '$authProvider', function ($routeProvider, $locationProvider, $authProvider) {

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
            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'templates/login.html'
            })
            .when('/admin', {
                controller: 'AdminHomeController',
                templateUrl: 'templates/admin/home.html',
                resolve: {
                    logado: loginRealizado
                }
            })
            .when('/logout', {
                controller: 'LogoutController',
                template: null
            })

            //this is the default route.
            .otherwise({
                controller: 'NotFoundController',
                templateUrl: 'templates/notFound.html'
            });

        $locationProvider.html5Mode(true);

        $authProvider.loginUrl = "/api/login";
        $authProvider.signupUrl = "/api/signup";
        $authProvider.tokenName = "token";
        $authProvider.tokenPrefix = "jmlp";

        function loginRealizado($auth, $q, $location){
            var defered = $q.defer();

            if($auth.isAuthenticated()){
                defered.resolve($auth.isAuthenticated());
            }else{
                //defered.reject($auth.isAuthenticated());
                $location.path('/');
            }

            return defered.promise;
        }

    }]);