(function() {
    "use strict";

    angular
        .module("curriculum")
        .controller("AcademicRecordController", AcademicRecordController);

    AcademicRecordController.$inject = [
        "$scope",
        "$window",
        "academicRecordResolve",
        "averageByAcademicCourseAndSubjectResolve",
        "averageByAcademicCourseAndCreditResolve",
        "averageByDegreeCourseAndSubjectResolve",
        "averageByDegreeCourseAndCreditResolve",
        "degreeAverageBySubjectResolve",
        "degreeAverageByCreditResolve"
    ];
    function AcademicRecordController(
        $scope,
        $window,
        academicRecordResolve,
        averageByAcademicCourseAndSubjectResolve,
        averageByAcademicCourseAndCreditResolve,
        averageByDegreeCourseAndSubjectResolve,
        averageByDegreeCourseAndCreditResolve,
        degreeAverageBySubjectResolve,
        degreeAverageByCreditResolve
    ) {
        debugger;
        $scope.$parent.title = "Expediente Académico";

        $scope.academicCourses = academicRecordResolve.academicCourses;
        $scope.degreeCourses = academicRecordResolve.degreeCourses;

        $scope.averageByAcademicCourseAndSubject = averageByAcademicCourseAndSubjectResolve;
        $scope.averageByAcademicCourseAndCredit = averageByAcademicCourseAndCreditResolve;
        $scope.averageByDegreeCourseAndSubject = averageByDegreeCourseAndSubjectResolve;
        $scope.averageByDegreeCourseAndCredit = averageByDegreeCourseAndCreditResolve;
        $scope.degreeAverageBySubject = degreeAverageBySubjectResolve;
        $scope.degreeAverageByCredit = degreeAverageByCreditResolve;

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
