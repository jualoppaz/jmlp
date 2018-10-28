(function() {
    "use strict";

    angular
        .module("jmlp")
        .controller("CurriculumController", CurriculumController);

    CurriculumController.$inject = [
        "$scope",
        "$location",
        "$window",
        "curriculumService"
    ];
    function CurriculumController(
        $scope,
        $location,
        $window,
        curriculumService
    ) {
        $scope.$parent.title = "Currículum";

        var vm = this;

        vm.curriculum = curriculumService.getCV();

        vm.descargarCurriculum = function() {
            $window.open("/Curriculum.pdf", "_blank");
        };

        vm.host = function() {
            var host = $location.host();

            if (host == "localhost" || host == "127.0.0.1") {
                host += ":" + $location.port();
            }

            return host;
        };
    }
})();
