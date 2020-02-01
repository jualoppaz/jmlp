(function() {
    "use strict";

    angular
        .module("services")
        .factory("academicRecordService", academicRecordService);

    academicRecordService.$inject = ["$filter"];
    function academicRecordService($filter) {
        var academicCourses = [
            "2010/2011",
            "2011/2012",
            "2012/2013",
            "2013/2014"
        ];

        var degreeCourses = [
            "1",
            "2",
            "3",
            "4"
        ];

        return {
            getRecords: getRecordsFn,
            getAverageByAcademicCourseAndSubject: getAverageByAcademicCourseAndSubjectFn,
            getAverageByAcademicCourseAndCredit: getAverageByAcademicCourseAndCreditFn,
            //getAverageByDegreeCourseAndSubject: getAverageByDegreeCourseAndSubjectFn,
            //getAverageByDegreeCourseAndCredit: getAverageByDegreeCourseAndCreditFn,
            //getDegreeAverageBySubject: getDegreeAverageBySubject,
            getAcademicCourses: getAcademicCoursesFn
            getDegreeCourses: getDegreeCoursesFn
        };

        /////////////////

        /**
         * Método que sirve para consultar el listado de registros con notas de los exámenes, ya sean oficiales o no.
         *
         * @author jualoppaz
         */
        function getRecordsFn() {
            return angular.copy([
                {
                    curso: "1",
                    cursoAcademico: "2010/2011",
                    cuatrimestre: 1,
                    abreviatura: "FFI",
                    departamento: "FA1",
                    asignatura: "Fundamentos Físicos de la Informática",
                    nota: 5,
                    metodoAprobado: "Convocatoria",
                    convocatoriaUtilizada: true,
                    creditos: 6,
                    tipoCreditos: "Troncal/Formación básica",
                    numeroConvocatoria: 1
                },
                {
                    curso: "1",
                    cursoAcademico: "2010/2011",
                    cuatrimestre: null,
                    abreviatura: "FP",
                    departamento: "LSI",
                    asignatura: "Fundamentos de Programación",
                    nota: null, //No me presenté en junio
                    metodoAprobado: null,
                    convocatoriaUtilizada: false,
                    creditos: 12,
                    tipoCreditos: "Troncal/Formación básica",
                    numeroConvocatoria: 1
                },
                {
                    curso: "1",
                    cursoAcademico: "2010/2011",
                    cuatrimestre: null,
                    abreviatura: "FP",
                    departamento: "LSI",
                    asignatura: "Fundamentos de Programación",
                    nota: 3,
                    metodoAprobado: null,
                    convocatoriaUtilizada: true,
                    creditos: 12,
                    tipoCreditos: "Troncal/Formación básica",
                    numeroConvocatoria: 2
                },
                {
                    curso: "1",
                    cursoAcademico: "2011/2012",
                    cuatrimestre: null,
                    abreviatura: "FP",
                    departamento: "LSI",
                    asignatura: "Fundamentos de Programación",
                    nota: 9.6,
                    matriculaHonor: true,
                    metodoAprobado: "Parciales",
                    convocatoriaUtilizada: true,
                    creditos: 12,
                    tipoCreditos: "Troncal/Formación básica",
                    numeroConvocatoria: 1
                },
                {
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
                },
                {
                    curso: "1",
                    cursoAcademico: "2010/2011",
                    cuatrimestre: 1,
                    abreviatura: "CIN",
                    departamento: "MA1",
                    asignatura: "Cálculo Infinitesimal y Numérico",
                    nota: 5.9,
                    metodoAprobado: "Parciales",
                    convocatoriaUtilizada: true,
                    creditos: 6,
                    tipoCreditos: "Troncal/Formación básica",
                    numeroConvocatoria: 1
                },
                {
                    curso: "1",
                    cursoAcademico: "2010/2011",
                    cuatrimestre: 1,
                    abreviatura: "IMD",
                    departamento: "MA1",
                    asignatura: "Introducción a la Matemática Discreta",
                    nota: 6.5,
                    metodoAprobado: "Convocatoria",
                    convocatoriaUtilizada: true,
                    creditos: 6,
                    tipoCreditos: "Troncal/Formación básica",
                    numeroConvocatoria: 1
                },
                {
                    curso: "1",
                    cursoAcademico: "2010/2011",
                    cuatrimestre: 2,
                    abreviatura: "EC",
                    departamento: "TE",
                    asignatura: "Estructura de Computadores",
                    nota: 6.3,
                    metodoAprobado: "Parciales",
                    convocatoriaUtilizada: true,
                    creditos: 6,
                    tipoCreditos: "Troncal/Formación básica",
                    numeroConvocatoria: 1
                },
                {
                    curso: "1",
                    cursoAcademico: "2010/2011",
                    cuatrimestre: 2,
                    abreviatura: "E",
                    departamento: "EIO",
                    asignatura: "Estadística",
                    nota: 5.5,
                    metodoAprobado: "Parciales",
                    convocatoriaUtilizada: true,
                    creditos: 6,
                    tipoCreditos: "Troncal/Formación básica",
                    numeroConvocatoria: 1
                },
                {
                    curso: "1",
                    cursoAcademico: "2010/2011",
                    cuatrimestre: 2,
                    abreviatura: "ALN",
                    departamento: "MA1",
                    asignatura: "Álgebra Lineal y Numérica",
                    nota: 5.4,
                    metodoAprobado: "Parciales",
                    convocatoriaUtilizada: true,
                    creditos: 6,
                    tipoCreditos: "Troncal/Formación básica",
                    numeroConvocatoria: 1
                },
                {
                    curso: "1",
                    cursoAcademico: "2010/2011",
                    cuatrimestre: 2,
                    abreviatura: "AE",
                    departamento: "OIGE",
                    asignatura: "Administración de Empresas",
                    nota: 5.3,
                    metodoAprobado: "Parciales",
                    convocatoriaUtilizada: true,
                    creditos: 6,
                    tipoCreditos: "Troncal/Formación básica",
                    numeroConvocatoria: 1
                },
                {
                    curso: "2",
                    cursoAcademico: "2011/2012",
                    cuatrimestre: 1,
                    abreviatura: "LI",
                    departamento: "CCIA",
                    asignatura: "Lógica Informática",
                    nota: 8,
                    metodoAprobado: "Parciales",
                    convocatoriaUtilizada: true,
                    creditos: 6,
                    tipoCreditos: "Obligatorias",
                    numeroConvocatoria: 1
                },
                {
                    curso: "2",
                    cursoAcademico: "2011/2012",
                    cuatrimestre: 1,
                    abreviatura: "RC",
                    departamento: "TE",
                    asignatura: "Redes de Computadores",
                    nota: null,
                    metodoAprobado: null,
                    convocatoriaUtilizada: false,
                    creditos: 6,
                    tipoCreditos: "Obligatorias",
                    numeroConvocatoria: 1
                },
                {
                    curso: "2",
                    cursoAcademico: "2011/2012",
                    cuatrimestre: 1,
                    abreviatura: "RC",
                    departamento: "TE",
                    asignatura: "Redes de Computadores",
                    nota: 5.3,
                    metodoAprobado: "Convocatoria",
                    convocatoriaUtilizada: true,
                    creditos: 6,
                    tipoCreditos: "Obligatorias",
                    numeroConvocatoria: 2
                },
                {
                    curso: "2",
                    cursoAcademico: "2011/2012",
                    cuatrimestre: 1,
                    abreviatura: "SO",
                    departamento: "LSI",
                    asignatura: "Sistemas Operativos",
                    nota: 7,
                    metodoAprobado: "Convocatoria",
                    convocatoriaUtilizada: true,
                    creditos: 6,
                    tipoCreditos: "Obligatorias",
                    numeroConvocatoria: 1
                },
                {
                    curso: "2",
                    cursoAcademico: "2011/2012",
                    cuatrimestre: 2,
                    abreviatura: "AC",
                    departamento: "ATC",
                    asignatura: "Arquitectura de Computadores",
                    nota: null,
                    metodoAprobado: null,
                    convocatoriaUtilizada: true,
                    creditos: 6,
                    tipoCreditos: "Obligatorias",
                    numeroConvocatoria: 1
                },
                {
                    curso: "2",
                    cursoAcademico: "2011/2012",
                    cuatrimestre: 2,
                    abreviatura: "AC",
                    departamento: "ATC",
                    asignatura: "Arquitectura de Computadores",
                    nota: 5.5,
                    metodoAprobado: "Convocatoria",
                    convocatoriaUtilizada: true,
                    creditos: 6,
                    tipoCreditos: "Obligatorias",
                    numeroConvocatoria: 2
                },
                {
                    curso: "2",
                    cursoAcademico: "2011/2012",
                    cuatrimestre: 2,
                    abreviatura: "AISS",
                    departamento: "LSI",
                    asignatura:
                        "Arquitectura e Integración de Sistemas Software",
                    nota: 7.1,
                    metodoAprobado: "Parciales",
                    convocatoriaUtilizada: true,
                    creditos: 6,
                    tipoCreditos: "Obligatorias",
                    numeroConvocatoria: 1
                },
                {
                    curso: "2",
                    cursoAcademico: "2011/2012",
                    cuatrimestre: 2,
                    abreviatura: "MD",
                    departamento: "MA1",
                    asignatura: "Matemática Discreta",
                    nota: 7.7,
                    metodoAprobado: "Parciales",
                    convocatoriaUtilizada: true,
                    creditos: 6,
                    tipoCreditos: "Obligatorias",
                    numeroConvocatoria: 1
                },
                {
                    curso: "2",
                    cursoAcademico: "2011/2012",
                    cuatrimestre: null,
                    abreviatura: "ADDA",
                    departamento: "LSI",
                    asignatura: "Análisis y Diseño de Datos y Algoritmos",
                    nota: 6.4,
                    metodoAprobado: "Parciales",
                    convocatoriaUtilizada: true,
                    creditos: 12,
                    tipoCreditos: "Obligatorias",
                    numeroConvocatoria: 1
                },
                {
                    curso: "2",
                    cursoAcademico: "2011/2012",
                    cuatrimestre: null,
                    abreviatura: "IISSI",
                    departamento: "LSI",
                    asignatura:
                        "Inroducción a la Ingeniería del Software y Sistemas de la Información",
                    nota: 5.5,
                    metodoAprobado: "Parciales",
                    convocatoriaUtilizada: true,
                    creditos: 12,
                    tipoCreditos: "Obligatorias",
                    numeroConvocatoria: 1
                },
                {
                    curso: "3",
                    cursoAcademico: "2012/2013",
                    cuatrimestre: 1,
                    abreviatura: "IR",
                    departamento: "LSI",
                    asignatura: "Ingeniería de Requisitos",
                    nota: 7,
                    metodoAprobado: "Parciales",
                    convocatoriaUtilizada: true,
                    creditos: 6,
                    tipoCreditos: "Obligatorias",
                    numeroConvocatoria: 1
                },
                {
                    curso: "3",
                    cursoAcademico: "2012/2013",
                    cuatrimestre: 1,
                    abreviatura: "MSN",
                    departamento: "MA1",
                    asignatura: "Modelado y Simulación Numérica",
                    nota: 7.5,
                    metodoAprobado: "Parciales",
                    convocatoriaUtilizada: true,
                    creditos: 6,
                    tipoCreditos: "Obligatorias",
                    numeroConvocatoria: 1
                },
                {
                    curso: "3",
                    cursoAcademico: "2012/2013",
                    cuatrimestre: 1,
                    abreviatura: "PSM",
                    departamento: "TE",
                    asignatura: "Procesamiento de Señales Multimedia",
                    nota: null,
                    metodoAprobado: null,
                    convocatoriaUtilizada: true,
                    creditos: 6,
                    tipoCreditos: "Obligatorias",
                    numeroConvocatoria: 1
                },
                {
                    curso: "3",
                    cursoAcademico: "2012/2013",
                    cuatrimestre: 1,
                    abreviatura: "PSM",
                    departamento: "TE",
                    asignatura: "Procesamiento de Señales Multimedia",
                    nota: 6.2,
                    metodoAprobado: "Convocatoria",
                    convocatoriaUtilizada: true,
                    creditos: 6,
                    tipoCreditos: "Obligatorias",
                    numeroConvocatoria: 2
                },
                {
                    curso: "3",
                    cursoAcademico: "2012/2013",
                    cuatrimestre: 2,
                    abreviatura: "ASR",
                    departamento: "TE",
                    asignatura: "Arquitectura y Servicios de Redes",
                    nota: null,
                    metodoAprobado: null,
                    convocatoriaUtilizada: true,
                    creditos: 6,
                    tipoCreditos: "Obligatorias",
                    numeroConvocatoria: 1
                },
                {
                    curso: "3",
                    cursoAcademico: "2012/2013",
                    cuatrimestre: 2,
                    abreviatura: "ASR",
                    departamento: "TE",
                    asignatura: "Arquitectura y Servicios de Redes",
                    nota: 5.2,
                    metodoAprobado: "Convocatoria",
                    convocatoriaUtilizada: true,
                    creditos: 6,
                    tipoCreditos: "Obligatorias",
                    numeroConvocatoria: 2
                },
                {
                    curso: "3",
                    cursoAcademico: "2012/2013",
                    cuatrimestre: 2,
                    abreviatura: "IA",
                    departamento: "CCIA",
                    asignatura: "Inteligencia Artificial",
                    nota: null,
                    metodoAprobado: null,
                    convocatoriaUtilizada: true,
                    creditos: 6,
                    tipoCreditos: "Obligatorias",
                    numeroConvocatoria: 1
                },
                {
                    curso: "3",
                    cursoAcademico: "2012/2013",
                    cuatrimestre: 2,
                    abreviatura: "IA",
                    departamento: "CCIA",
                    asignatura: "Inteligencia Artificial",
                    nota: 5.9,
                    metodoAprobado: "Convocatoria",
                    convocatoriaUtilizada: true,
                    creditos: 6,
                    tipoCreditos: "Obligatorias",
                    numeroConvocatoria: 2
                },
                {
                    curso: "3",
                    cursoAcademico: "2012/2013",
                    cuatrimestre: 2,
                    abreviatura: "MVG",
                    departamento: "MA1",
                    asignatura: "Modelado y Visualización Gráfica",
                    nota: 10,
                    matriculaHonor: true,
                    metodoAprobado: "Parciales",
                    convocatoriaUtilizada: true,
                    creditos: 6,
                    tipoCreditos: "Obligatorias",
                    numeroConvocatoria: 2
                },
                {
                    curso: "3",
                    cursoAcademico: "2012/2013",
                    cuatrimestre: null,
                    abreviatura: "DP",
                    departamento: "LSI",
                    asignatura: "Diseño y Pruebas",
                    nota: 4,
                    metodoAprobado: null,
                    convocatoriaUtilizada: true,
                    creditos: 12,
                    tipoCreditos: "Obligatorias",
                    numeroConvocatoria: 1
                },
                {
                    curso: "3",
                    cursoAcademico: "2012/2013",
                    cuatrimestre: null,
                    abreviatura: "DP",
                    departamento: "LSI",
                    asignatura: "Diseño y Pruebas",
                    nota: 6,
                    metodoAprobado: "Convocatoria",
                    convocatoriaUtilizada: true,
                    creditos: 12,
                    tipoCreditos: "Obligatorias",
                    numeroConvocatoria: 2
                },
                {
                    curso: "3",
                    cursoAcademico: "2012/2013",
                    cuatrimestre: null,
                    abreviatura: "PSG",
                    departamento: "LSI",
                    asignatura: "Proceso Software y Gestión",
                    nota: 6.5,
                    metodoAprobado: "Parciales",
                    convocatoriaUtilizada: true,
                    creditos: 12,
                    tipoCreditos: "Obligatorias",
                    numeroConvocatoria: 1
                },
                {
                    curso: "4",
                    cursoAcademico: "2013/2014",
                    cuatrimestre: 1,
                    abreviatura: "AII",
                    departamento: "LSI",
                    asignatura: "Acceso Inteligente a la Información",
                    nota: 6.5,
                    metodoAprobado: "Parciales",
                    convocatoriaUtilizada: true,
                    creditos: 6,
                    tipoCreditos: "Obligatorias",
                    numeroConvocatoria: 1
                },
                {
                    curso: "4",
                    cursoAcademico: "2013/2014",
                    cuatrimestre: 1,
                    abreviatura: "C",
                    departamento: "MA1",
                    asignatura: "Criptografía",
                    nota: 7.1,
                    metodoAprobado: "Parciales",
                    convocatoriaUtilizada: true,
                    creditos: 6,
                    tipoCreditos: "Obligatorias",
                    numeroConvocatoria: 1
                },
                {
                    curso: "4",
                    cursoAcademico: "2013/2014",
                    cuatrimestre: 1,
                    abreviatura: "EGC",
                    departamento: "LSI",
                    asignatura: "Evolución y Gestión de la Configuración",
                    nota: 9.4,
                    metodoAprobado: "Parciales",
                    convocatoriaUtilizada: true,
                    creditos: 6,
                    tipoCreditos: "Obligatorias",
                    numeroConvocatoria: 1
                },
                {
                    curso: "4",
                    cursoAcademico: "2013/2014",
                    cuatrimestre: 1,
                    abreviatura: "PGPI",
                    departamento: "LSI",
                    asignatura:
                        "Planificación y Gestión de Proyectos Informáticos",
                    nota: 7,
                    metodoAprobado: "Parciales",
                    convocatoriaUtilizada: true,
                    creditos: 6,
                    tipoCreditos: "Obligatorias",
                    numeroConvocatoria: 1
                },
                {
                    curso: "4",
                    cursoAcademico: "2013/2014",
                    cuatrimestre: 2,
                    abreviatura: "CBD",
                    departamento: "LSI",
                    asignatura: "Complementos de Bases de Datos",
                    nota: 8.1,
                    metodoAprobado: "Convocatoria",
                    convocatoriaUtilizada: true,
                    creditos: 6,
                    tipoCreditos: "Obligatorias",
                    numeroConvocatoria: 1
                },
                {
                    curso: "4",
                    cursoAcademico: "2013/2014",
                    cuatrimestre: 2,
                    abreviatura: "ISPP",
                    departamento: "LSI",
                    asignatura:
                        "Ingeniería del Software y Práctica Profesional",
                    nota: 10,
                    metodoAprobado: "Convocatoria",
                    convocatoriaUtilizada: true,
                    creditos: 6,
                    tipoCreditos: "Obligatorias",
                    numeroConvocatoria: 1
                },
                {
                    curso: "4",
                    cursoAcademico: "2013/2014",
                    cuatrimestre: 2,
                    abreviatura: "PE",
                    departamento: "-",
                    asignatura: "Prácticas Externas",
                    nota: "APTO",
                    metodoAprobado: "Parciales",
                    convocatoriaUtilizada: true,
                    creditos: 6,
                    tipoCreditos: "Obligatorias",
                    numeroConvocatoria: 1
                },
                {
                    curso: "4",
                    cursoAcademico: "2013/2014",
                    cuatrimestre: 2,
                    abreviatura: "SSII",
                    departamento: "LSI",
                    asignatura:
                        "Seguridad en Sistemas Informáticos y en Internet",
                    nota: 5.5,
                    metodoAprobado: "Parciales",
                    convocatoriaUtilizada: true,
                    creditos: 6,
                    tipoCreditos: "Obligatorias",
                    numeroConvocatoria: 1
                },
                {
                    curso: "4",
                    cursoAcademico: "2013/2014",
                    cuatrimestre: null,
                    abreviatura: "TFG",
                    departamento: "LSI",
                    asignatura: "Trabajo de Fin de Grado",
                    nota: null,
                    metodoAprobado: null,
                    convocatoriaUtilizada: false,
                    creditos: 12,
                    tipoCreditos: "Obligatorias",
                    numeroConvocatoria: 1
                },
                {
                    curso: "4",
                    cursoAcademico: "2013/2014",
                    cuatrimestre: null,
                    abreviatura: "TFG",
                    departamento: "LSI",
                    asignatura: "Trabajo de Fin de Grado",
                    nota: 7.5,
                    metodoAprobado: "Convocatoria",
                    convocatoriaUtilizada: true,
                    creditos: 12,
                    tipoCreditos: "Obligatorias",
                    numeroConvocatoria: 2
                }
            ]);
        }

        /**
         * Método que sirve para obtener la nota media de cada curso académico según las asignaturas.
         *
         * @author jualoppaz
         */
        function getAverageByAcademicCourseAndSubjectFn() {
            const res = [];
            getAcademicCoursesFn().forEach(function(academicCourse) {
                let uniqueCourseSubjects = [];

                let courseSubjects = $filter("filter")(getRecordsFn(), function(
                    element
                ) {
                    return element.cursoAcademico === academicCourse;
                });

                courseSubjects.forEach(function(courseSubject) {
                    if (
                        !uniqueCourseSubjects.some(function(uniqueSubject) {
                            return (
                                uniqueSubject.asignatura ===
                                courseSubject.asignatura
                            );
                        })
                    ) {
                        if (!isNaN(courseSubject.nota)) {
                            uniqueCourseSubjects.push(courseSubject);
                        }
                        return;
                    }

                    const uniqueSubject = uniqueCourseSubjects.find(function(
                        subject
                    ) {
                        return subject.asignatura === courseSubject.asignatura;
                    });

                    if (
                        uniqueSubject.numeroConvocatoria <
                        courseSubject.numeroConvocatoria
                    ) {
                        const index = uniqueCourseSubjects.indexOf(
                            uniqueSubject
                        );
                        uniqueCourseSubjects[index] = courseSubject;
                    }
                });

                const marks = uniqueCourseSubjects.map(function(element) {
                    return element.nota;
                });

                let sum = 0;
                for (let i = 0; i < marks.length; i++) {
                    sum += marks[i];
                }

                const average = Math.round((sum / marks.length) * 100) / 100;

                res.push({
                    cursoAcademico: academicCourse,
                    nota: average
                });
            });

            return res;
        }

        /**
         * Método que sirve para obtener la nota media de cada curso académico según los créditos de las asignaturas.
         *
         * @author jualoppaz
         */
        function getAverageByAcademicCourseAndCreditFn() {
            const res = [];
            getAcademicCoursesFn().forEach(function(academicCourse) {
                let uniqueCourseSubjects = [];

                let courseSubjects = $filter("filter")(getRecordsFn(), function(
                    element
                ) {
                    return element.cursoAcademico === academicCourse;
                });

                courseSubjects.forEach(function(courseSubject) {
                    if (
                        !uniqueCourseSubjects.some(function(uniqueSubject) {
                            return (
                                uniqueSubject.asignatura ===
                                courseSubject.asignatura
                            );
                        })
                    ) {
                        if (!isNaN(courseSubject.nota)) {
                            uniqueCourseSubjects.push(courseSubject);
                        }
                        return;
                    }

                    const uniqueSubject = uniqueCourseSubjects.find(function(
                        subject
                    ) {
                        return subject.asignatura === courseSubject.asignatura;
                    });

                    if (
                        uniqueSubject.numeroConvocatoria <
                        courseSubject.numeroConvocatoria
                    ) {
                        const index = uniqueCourseSubjects.indexOf(
                            uniqueSubject
                        );
                        uniqueCourseSubjects[index] = courseSubject;
                    }
                });

                let sum = 0;
                let totalCredits = 0;
                for (let i = 0; i < uniqueCourseSubjects.length; i++) {
                    sum += uniqueCourseSubjects[i].nota * uniqueCourseSubjects[i].creditos;
                    totalCredits += uniqueCourseSubjects[i].creditos;
                }

                const average = Math.round((sum / totalCredits) * 100) / 100;

                res.push({
                    cursoAcademico: academicCourse,
                    nota: average
                });
            });

            return res;
        }

        /**
         * Método que devuelve el listado de cursos académicos del grado.
         *
         * @author jualoppaz
         */
        function getAcademicCoursesFn() {
            return angular.copy(academicCourses);
        }

        /**
         * Método que devuelve el listado de cursos del grado.
         *
         * @author jualoppaz
         */
        function getDegreeCoursesFn() {
            return angular.copy(degreeCourses);
        }
    }
})();
