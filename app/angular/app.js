(function() {
    "use strict";

    var configFile = "./config/config.json";

    angular.module("jmlp").run(function($rootScope) {
        $rootScope.$on("$stateChangeError", console.log.bind(console));
    });

    angular.element(document).ready(function() {
        $.get(configFile, function(data) {
            if (typeof data === "string") {
                data = JSON.parse(data);
            }

            angular.module("jmlp").constant("settings", data);

            angular.bootstrap(document, ["jmlp"]);
        });
    });
})();
