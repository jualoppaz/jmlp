(function() {
    "use strict";

    angular.module("routes", ["ui.router"]);
    angular.module("footer", []);
    angular.module("header", []);
    angular.module("home", []);
    angular.module("services", []);
    angular.module("curriculum", []);
    angular.module("models", []);
    angular.module("directives", []);
    angular.module("constants", []);

    angular.module("jmlp", [
        "services",
        "ui.bootstrap",
        "routes",
        "templates",
        "ngAnimate",
        "ngTouch",
        "home",
        "header",
        "footer",
        "curriculum",
        "models",
        "directives",
        "constants"
    ]);
})();
