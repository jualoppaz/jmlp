(function() {
    "use strict";

    angular
        .module("curriculum")
        .controller("AcademicRecordController", AcademicRecordController);

    AcademicRecordController.$inject = [
        "$scope",
        "$window",
        "$filter",
        "academicRecordService"
    ];
    function AcademicRecordController(
        $scope,
        $window,
        $filter,
        academicRecordService
    ) {
        $scope.$parent.title = "Expediente Académico";


        $scope.averageByAcademicCourseAndSubject = academicRecordService.getAverageByAcademicCourseAndSubject();
        $scope.averageByAcademicCourseAndCredit = academicRecordService.getAverageByAcademicCourseAndCredit();

        $scope.abrirEnlace = function(enlace) {
            $window.open(enlace, "_blank");
        };

        $scope.getLabelClassByMark = (mark) => {
            if((mark.nota >=5 && mark.nota <7) || mark.nota === 'APTO') return 'success';
            if(mark.nota <5) return 'fail';
            if (mark.nota >=7 && mark.nota <9) return 'primary';
            if(mark.nota >=9 && !mark.matriculaHonor) return 'warning';
            if (mark.matriculaHonor) return 'danger';
        };
    }
})();
