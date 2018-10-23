(function() {
    "use strict";

    angular
        .module("routes")
        .config(config)
        .run(run);

    config.$inject = ["$stateProvider", "$urlRouterProvider", "$authProvider"];
    function config($stateProvider, $urlRouterProvider, $authProvider) {
        //configure routes.
        $stateProvider
            .state("home", {
                url: "/",
                views: {
                    "main@": {
                        controller: "HomeController as home",
                        templateUrl: "templates/home.html"
                    }
                }
            })
            .state("curriculum", {
                url: "/curriculum",
                views: {
                    "main@": {
                        controller: "CurriculumController as curriculum",
                        templateUrl: "templates/curriculum.html"
                    }
                }
            })
            .state("expediente-academico", {
                url: "/expediente-academico",
                views: {
                    "main@": {
                        controller:
                            "ExpedienteAcademicoController as expedienteAcademico",
                        templateUrl: "templates/expedienteAcademico.html"
                    }
                }
            })
            .state("login", {
                url: "/login",
                views: {
                    "main@": {
                        controller: "LoginController as login",
                        templateUrl: "templates/login.html"
                    }
                }
            })
            .state("admin", {
                url: "/admin",
                views: {
                    "main@": {
                        controller: "AdminHomeController as admin",
                        templateUrl: "templates/admin/home.html"
                    }
                },
                resolve: {
                    logado: loginRealizado
                }
            });

        $urlRouterProvider.otherwise("/");

        //$locationProvider.html5Mode(true);

        $authProvider.loginUrl = "/api/login";
        $authProvider.signupUrl = "/api/signup";
        $authProvider.tokenName = "token";
        $authProvider.tokenPrefix = "jmlp";

        function loginRealizado($auth, $q, $location) {
            var defered = $q.defer();

            if ($auth.isAuthenticated()) {
                defered.resolve($auth.isAuthenticated());
            } else {
                //defered.reject($auth.isAuthenticated());
                $location.path("/");
            }

            return defered.promise;
        }
    }

    function run($transitions) {
        $transitions.onSuccess({}, function() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        });
    }
})();
