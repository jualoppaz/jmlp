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
                parent: "layout",
                resolve: {
                    programmingLanguagesResolve: function(
                        curriculumService,
                        KNOWLEDGE_TYPE
                    ) {
                        return curriculumService.getCVKnowledge({
                            type: KNOWLEDGE_TYPE.PROGRAMMING_LANGUAGE
                        });
                    },
                    frameworksResolve: function(
                        curriculumService,
                        KNOWLEDGE_TYPE
                    ) {
                        return curriculumService.getCVKnowledge({
                            type: KNOWLEDGE_TYPE.FRAMEWORK
                        });
                    },
                    webDesignResolve: function(
                        curriculumService,
                        KNOWLEDGE_TYPE
                    ) {
                        return curriculumService.getCVKnowledge({
                            type: KNOWLEDGE_TYPE.WEB_DESIGN
                        });
                    },
                    templateEngineResolve: function(
                        curriculumService,
                        KNOWLEDGE_TYPE
                    ) {
                        return curriculumService.getCVKnowledge({
                            type: KNOWLEDGE_TYPE.TEMPLATE_ENGINE
                        });
                    },
                    databasesResolve: function(
                        curriculumService,
                        KNOWLEDGE_TYPE
                    ) {
                        return curriculumService.getCVKnowledge({
                            type: KNOWLEDGE_TYPE.DATABASE
                        });
                    },
                    versionControlSystemsResolve: function(
                        curriculumService,
                        KNOWLEDGE_TYPE
                    ) {
                        return curriculumService.getCVKnowledge({
                            type: KNOWLEDGE_TYPE.VERSION_CONTROL_SYSTEM
                        });
                    },
                    projectManagementToolsResolve: function(
                        curriculumService,
                        KNOWLEDGE_TYPE
                    ) {
                        return curriculumService.getCVKnowledge({
                            type: KNOWLEDGE_TYPE.PROJECT_MANAGEMENT_TOOL
                        });
                    },
                    configurationManagementToolsResolve: function(
                        curriculumService,
                        KNOWLEDGE_TYPE
                    ) {
                        return curriculumService.getCVKnowledge({
                            type: KNOWLEDGE_TYPE.CONFIGURATION_MANAGEMENT_TOOL
                        });
                    },
                    personalProjectsResolve: function(curriculumService) {
                        return curriculumService.getCVPersonalProjects();
                    },
                    extraTrainingResolve: function(curriculumService) {
                        return curriculumService.getCVExtraTraining();
                    }
                }
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
