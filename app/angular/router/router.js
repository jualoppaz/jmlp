(function() {
    "use strict";

    angular
        .module("routes")
        .config(config)
        .run(run);

    config.$inject = ["$stateProvider", "$urlRouterProvider"];
    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("layout", {
                url: "",
                abstract: true,
                views: {
                    header: {
                        templateUrl:
                            "app/angular/views/layouts/header/header.html",
                        controller: "HeaderController as header"
                    },
                    footer: {
                        templateUrl:
                            "app/angular/views/layouts/footer/footer.html",
                        controller: "FooterController as footer"
                    }
                },
                resolve: {}
            })
            .state("home", {
                url: "/",
                views: {
                    "main@": {
                        controller: "HomeController as home",
                        templateUrl: "app/angular/views/home.html"
                    }
                },
                parent: "layout"
            });

        $urlRouterProvider.otherwise("/");
    }

    run.$inject = ["$rootScope", "$transitions"];
    function run($rootScope, $transitions) {
        $transitions.onStart({}, onStart);
        function onStart() {
            $rootScope.loading = true;
        }

        $transitions.onSuccess({}, onSuccess);
        function onSuccess(transition) {
            document.body.scrollTop = document.documentElement.scrollTop = 0;

            $rootScope.currentState = transition.to().name;
            $rootScope.loading = false;
        }

        $transitions.onError({}, onError);
        function onError() {}
    }
})();
