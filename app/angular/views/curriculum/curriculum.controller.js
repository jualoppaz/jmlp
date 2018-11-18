(function() {
    "use strict";

    angular
        .module("curriculum")
        .controller("CurriculumController", CurriculumController);

    CurriculumController.$inject = [
        "$scope",
        "$location",
        "$window",
        "KNOWLEDGE_TYPE",
        "curriculumService",
        "programmingLanguagesResolve",
        "frameworksResolve",
        "webDesignResolve",
        "templateEngineResolve",
        "databasesResolve",
        "versionControlSystemsResolve",
        "projectManagementToolsResolve",
        "configurationManagementToolsResolve"
    ];
    function CurriculumController(
        $scope,
        $location,
        $window,
        KNOWLEDGE_TYPE,
        curriculumService,
        programmingLanguagesResolve,
        frameworksResolve,
        webDesignResolve,
        templateEngineResolve,
        databasesResolve,
        versionControlSystemsResolve,
        projectManagementToolsResolve,
        configurationManagementToolsResolve
    ) {
        $scope.$parent.title = "Currículum";

        var vm = this;

        // Functions
        vm.getKnowledgeTypeTitle = getKnowledgeTypeTitleFn;
        vm.descargarCurriculum = descargarCurriculumFn;
        vm.host = hostFn;

        activate();

        function activate() {
            vm.KNOWLEDGE_TYPE = KNOWLEDGE_TYPE;

            vm.curriculum = curriculumService.getCV();
            var conocimientos = [];
            conocimientos.push({
                tipo: KNOWLEDGE_TYPE.PROGRAMMING_LANGUAGE,
                lista: programmingLanguagesResolve
            });

            conocimientos.push({
                tipo: KNOWLEDGE_TYPE.FRAMEWORK,
                lista: frameworksResolve
            });

            conocimientos.push({
                tipo: KNOWLEDGE_TYPE.WEB_DESIGN,
                lista: webDesignResolve
            });

            conocimientos.push({
                tipo: KNOWLEDGE_TYPE.TEMPLATE_ENGINE,
                lista: templateEngineResolve
            });

            conocimientos.push({
                tipo: KNOWLEDGE_TYPE.DATABASE,
                lista: databasesResolve
            });

            conocimientos.push({
                tipo: KNOWLEDGE_TYPE.VERSION_CONTROL_SYSTEM,
                lista: versionControlSystemsResolve
            });

            conocimientos.push({
                tipo: KNOWLEDGE_TYPE.PROJECT_MANAGEMENT_TOOL,
                lista: projectManagementToolsResolve
            });

            conocimientos.push({
                tipo: KNOWLEDGE_TYPE.CONFIGURATION_MANAGEMENT_TOOL,
                lista: configurationManagementToolsResolve
            });

            vm.curriculum.conocimientos = conocimientos;

            vm.technologyTypeTitles = {};
            vm.technologyTypeTitles[KNOWLEDGE_TYPE.PROGRAMMING_LANGUAGE] =
                "Lenguajes de programación";
            vm.technologyTypeTitles[KNOWLEDGE_TYPE.FRAMEWORK] = "Frameworks";
            vm.technologyTypeTitles[KNOWLEDGE_TYPE.WEB_DESIGN] = "Diseño web";
            vm.technologyTypeTitles[KNOWLEDGE_TYPE.TEMPLATE_ENGINE] =
                "Motores de Plantillas";
            vm.technologyTypeTitles[KNOWLEDGE_TYPE.DATABASE] = "Bases de datos";
            vm.technologyTypeTitles[KNOWLEDGE_TYPE.VERSION_CONTROL_SYSTEM] =
                "Sistemas de control de versiones";
            vm.technologyTypeTitles[KNOWLEDGE_TYPE.PROJECT_MANAGEMENT_TOOL] =
                "Herramientas de Gestión de Proyectos";
            vm.technologyTypeTitles[
                KNOWLEDGE_TYPE.CONFIGURATION_MANAGEMENT_TOOL
            ] = "Herramiantas de Gestión de la Configuración";
        }

        function descargarCurriculumFn() {
            $window.open("/Curriculum.pdf", "_blank");
        }

        function hostFn() {
            var host = $location.host();

            if (host == "localhost" || host == "127.0.0.1") {
                host += ":" + $location.port();
            }

            return host;
        }

        /**
         * Método que sirve para obtener el título de un tipo de tecnología dado su código.
         *
         * @param {*} technology_type
         *
         * @author jualoppaz
         */
        function getKnowledgeTypeTitleFn(technology_type) {
            return vm.technologyTypeTitles[technology_type] || technology_type;
        }
    }
})();
