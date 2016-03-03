/**
 * Created by JuanManuel on 13/02/2016.
 */

angular.module('jmlp').controller('ExpedienteAcademicoController', function($scope, $location, $window){

    $scope.$parent.title = "Expediente Académico";

    $scope.notasExpediente = [
        {
            curso: "1",
            cursoAcademico: "2010/2011",
            cuatrimestre: 0,
            abreviatura: "FP",
            departamento: "LSI",
            asignatura: "Fundamentos de Programación",
            nota: null, //No me presenté en junio
            metodoAprobado: null,
            convocatoriaUtilizada: false,
            creditos: 12,
            tipoCreditos: "Troncal/Formación básica",
            numeroConvocatoria: 1
        },{
            curso: "1",
            cursoAcademico: "2010/2011",
            cuatrimestre: 0,
            abreviatura: "FP",
            departamento: "LSI",
            asignatura: "Fundamentos de Programación",
            nota: 3,
            metodoAprobado: null,
            convocatoriaUtilizada: true,
            creditos: 12,
            tipoCreditos: "Troncal/Formación básica",
            numeroConvocatoria: 2 
        },{
            curso: "1",
            cursoAcademico: "2011/2012",
            cuatrimestre: 0,
            abreviatura: "FP",
            departamento: "LSI",
            asignatura: "Fundamentos de Programación",
            nota: 9.6, //No me presenté en junio
            metodoAprobado: "Parciales",
            convocatoriaUtilizada: true,
            creditos: 12,
            tipoCreditos: "Troncal/Formación básica",
            numeroConvocatoria: 1
        },{
            curso: "1",
            cursoAcademico: "2010/2011",
            cuatrimestre: 1,
            abreviatura: "CED",
            departamento: "TE",
            asignatura: "Circuitos Electrónicos Digitales",
            nota: 5.5,
            metodoAprobado: "Parciales",
            convocatoriaUtilizada: true,
            creditos: 6,
            tipoCreditos: "Troncal/Formación básica",
            numeroConvocatoria: 1
        }
    ];

    $scope.abrirEnlace = function(enlace){
        $window.open(enlace, "_blank");
    };

    $scope.getConvocatoriasUtilizadas = function(asignatura){
        
        var res = 0;

        for(var i=0; i<$scope.notasExpediente.length;i++){

            var aux = $scope.notasExpediente[i];

            if(aux.asignatura == asignatura){

                if(aux.convocatoriaUtilizada){
                    res++;
                }
            }
        }

        return res;
    };

    $scope.getNotaMasReciente = function(asignatura){

        var res = 0;

        for(var i=0; i<$scope.notasExpediente.length;i++){

            var aux = $scope.notasExpediente[i];

            if(aux.asignatura == asignatura){

                if(res == 0){
                    res = aux.nota;
                }else{
                    res = res > aux.nota ? res: aux.nota;
                }
            }
        }

        return res;
    }

});