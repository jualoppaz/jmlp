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

    function run($transitions) {
        $transitions.onSuccess({}, function() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        });
    }
})();
