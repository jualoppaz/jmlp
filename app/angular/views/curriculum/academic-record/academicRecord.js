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

        $scope.notasExpediente = academicRecordService.getRecords();

        $scope.notasExpediente = $filter("orderBy")(
            $scope.notasExpediente,
            "abreviatura",
            false
        );

        $scope.abrirEnlace = function(enlace) {
            $window.open(enlace, "_blank");
        };

        $scope.getConvocatoriasUtilizadasEnCursoAcademico = function(
            asignatura,
            cursoAcademico
        ) {
            return $scope.notasExpediente.filter(function(aux) {
                return (
                    aux.asignatura === asignatura &&
                    aux.cursoAcademico === cursoAcademico &&
                    aux.convocatoriaUtilizada
                );
            }).length;
        };

        $scope.getNotaMasRecienteDelCursoAcademico = function(
            cursoAcademico,
            asignatura
        ) {
            var res = 0;

            for (var i = 0; i < $scope.notasExpediente.length; i++) {
                var aux = $scope.notasExpediente[i];

                if (
                    aux.asignatura === asignatura &&
                    aux.cursoAcademico === cursoAcademico
                ) {
                    if (res === 0) {
                        if (!isNaN(aux.nota)) {
                            res = aux.nota;
                        }
                    } else {
                        res = res > aux.nota ? res : aux.nota;
                    }
                }
            }

            return res;
        };

        $scope.getCursosAcademicos = function() {
            var res = [];

            for (var i = 0; i < $scope.notasExpediente.length; i++) {
                var existe = false;
                for (var j = 0; j < $scope.notasExpediente.length; j++) {
                    if (res[j] === $scope.notasExpediente[i].cursoAcademico) {
                        existe = true;
                        break;
                    }
                }

                if (!existe) {
                    res[res.length] = $scope.notasExpediente[i].cursoAcademico;
                }
            }

            res.sort();

            return res;
        };

        $scope.esUltimaConvocatoriaDelCursoAcademico = function(
            asignatura,
            cursoAcademico,
            numeroConvocatoria
        ) {
            var notasOrdenadas = $filter("orderBy")(
                $scope.notasExpediente,
                "-numeroConvocatoria"
            );

            var res = false;

            for (var i = 0; i < notasOrdenadas.length; i++) {
                var nota = notasOrdenadas[i];

                if (
                    nota.asignatura === asignatura &&
                    nota.cursoAcademico === cursoAcademico
                ) {
                    if (nota.numeroConvocatoria === numeroConvocatoria) {
                        res = true;
                    } else {
                        break;
                    }
                }
            }

            return res;
        };

        $scope.esUltimaNotaDeLaAsignatura = function(asignatura, nota) {
            var notasOrdenadas = $filter("orderBy")(
                $scope.notasExpediente,
                "cursoAcademico",
                true
            );

            var res = false;

            for (var i = 0; i < notasOrdenadas.length; i++) {
                var n = notasOrdenadas[i];

                if (n.asignatura === asignatura) {
                    if (n.nota === nota) {
                        res = true;
                    } else {
                        break;
                    }
                }
            }

            return res;
        };

        $scope.getCursos = function() {
            var res = ["1", "2", "3", "4"];
            return res;
        };

        $scope.getConvocatoriasUtilizadasEnCurso = function(asignatura, curso) {
            return $scope.notasExpediente.filter(function(aux) {
                return (
                    aux.asignatura === asignatura &&
                    aux.curso === curso &&
                    aux.convocatoriaUtilizada
                );
            }).length;
        };
    }
})();
