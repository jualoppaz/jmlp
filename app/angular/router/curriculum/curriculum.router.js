(function() {
    "use strict";

    angular.module("routes").config(config);

    config.$inject = ["$stateProvider"];
    function config($stateProvider) {
        $stateProvider
            .state("curriculum", {
                url: "/curriculum",
                views: {
                    "main@": {
                        controller: "CurriculumController as curriculum",
                        templateUrl:
                            "app/angular/views/curriculum/curriculum.html"
                    }
                },
                parent: "layout"
            })
            .state("curriculum.academic-record", {
                url: "/expediente-academico",
                views: {
                    "main@": {
                        controller:
                            "AcademicRecordController as academicRecord",
                        templateUrl:
                            "app/angular/views/curriculum/academic-record/academicRecord.html"
                    }
                }
            });
    }
})();
