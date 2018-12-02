(function() {
    "use strict";

    angular.module("services").factory("curriculumService", curriculumService);

    curriculumService.$inject = ["$q", "$http", "API"];
    function curriculumService($q, $http, API) {
        var CV = {
            formacionAcademica: [
                {
                    desde: "09/2010",
                    hasta: "09/2014",
                    descripcion:
                        "Grado en Ingeniería Informática - Ingeniería del Software por la Universidad de Sevilla (2010-2014)",
                    imagen: "/images/estudios_us.png"
                }
            ],
            idiomas: [
                {
                    nombre: "Inglés",
                    level: "B1",
                    descripcion:
                        "Acreditación de nivel B1 por el Instituto de idiomas de la Universidad de Sevilla.",
                    fecha: "2012",
                    imagen: "/images/estudios_us.png"
                }
            ]
        };

        return {
            getCV: getCVFn,
            getCVKnowledge: getCVKnowledgeFn,
            getCVPersonalProjects: getCVPersonalProjectsFn,
            getCVExtraTraining: getCVExtraTrainingFn,
            getCVProfessionalExperiences: getCVProfessionalExperiencesFn
        };

        ////////////////////

        function getCVFn() {
            return CV;
        }

        /**
         * Método que sirve para consultar el listado de conocimientos del CV.
         *
         * @author jualoppaz
         */
        function getCVKnowledgeFn(queryParameters) {
            var defered = $q.defer();
            var promise = defered.promise;

            $http
                .get(API.BASE_URL + API.CV + API.KNOWLEDGE, {
                    params: queryParameters
                })
                .then(function(data) {
                    defered.resolve(data.data);
                })
                .catch(function(err) {
                    defered.reject(err.data);
                });

            return promise;
        }

        /**
         * Método que sirve para consultar el listado de proyectos personales del CV.
         *
         * @author jualoppaz
         */
        function getCVPersonalProjectsFn() {
            var defered = $q.defer();
            var promise = defered.promise;

            $http
                .get(API.BASE_URL + API.CV + API.PERSONAL_PROJECTS)
                .then(function(data) {
                    defered.resolve(data.data);
                })
                .catch(function(err) {
                    defered.reject(err.data);
                });

            return promise;
        }

        /**
         * Método que sirve para consultar el listado de formaciones complementarias del CV.
         *
         * @author jualoppaz
         */
        function getCVExtraTrainingFn() {
            var defered = $q.defer();
            var promise = defered.promise;

            $http
                .get(API.BASE_URL + API.CV + API.EXTRA_TRAINING)
                .then(function(data) {
                    defered.resolve(data.data);
                })
                .catch(function(err) {
                    defered.reject(err.data);
                });

            return promise;
        }

        /**
         * Método que sirve para consultar el listado de experiencias profesionales del CV.
         *
         * @author jualoppaz
         */
        function getCVProfessionalExperiencesFn() {
            var defered = $q.defer();
            var promise = defered.promise;

            $http
                .get(API.BASE_URL + API.CV + API.PROFESSIONAL_EXPERIENCES)
                .then(function(data) {
                    defered.resolve(data.data);
                })
                .catch(function(err) {
                    defered.reject(err.data);
                });

            return promise;
        }
    }
})();
