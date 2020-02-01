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
                    },
                    professionalExperiencesResolve: function(
                        curriculumService
                    ) {
                        return curriculumService.getCVProfessionalExperiences();
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
                },
                resolve: {
                    academicRecordResolve: function(academicRecordService){
                        return {
                            academicCourses: [
                                {
                                    course: "2010/2011",
                                    data: {
                                        firstQuarter: academicRecordService.getSubjectMarksByAcademicCourseAndQuarter("2010/2011", 1),
                                        secondQuarter: academicRecordService.getSubjectMarksByAcademicCourseAndQuarter("2010/2011", 2),
                                        allYear: academicRecordService.getSubjectMarksByAcademicCourseAndQuarter("2010/2011", null)
                                    }
                                },{
                                    course: "2011/2012",
                                    data: {
                                        firstQuarter: academicRecordService.getSubjectMarksByAcademicCourseAndQuarter("2011/2012", 1),
                                        secondQuarter: academicRecordService.getSubjectMarksByAcademicCourseAndQuarter("2011/2012", 2),
                                        allYear: academicRecordService.getSubjectMarksByAcademicCourseAndQuarter("2011/2012", null)
                                    }
                                }, {
                                    course: "2012/2013",
                                    data: {
                                        firstQuarter: academicRecordService.getSubjectMarksByAcademicCourseAndQuarter("2012/2013", 1),
                                        secondQuarter: academicRecordService.getSubjectMarksByAcademicCourseAndQuarter("2012/2013", 2),
                                        allYear: academicRecordService.getSubjectMarksByAcademicCourseAndQuarter("2012/2013", null)
                                    }
                                },{
                                    course: "2013/2014",
                                    data: {
                                        firstQuarter: academicRecordService.getSubjectMarksByAcademicCourseAndQuarter("2013/2014", 1),
                                        secondQuarter: academicRecordService.getSubjectMarksByAcademicCourseAndQuarter("2013/2014", 2),
                                        allYear: academicRecordService.getSubjectMarksByAcademicCourseAndQuarter("2013/2014", null)
                                    }
                                },
                            ],
                            "degreeCourses": [
                                {
                                    course: "1",
                                    data: {
                                        firstQuarter: academicRecordService.getSubjectMarksByDegreeCourseAndQuarter("1", 1),
                                        secondQuarter: academicRecordService.getSubjectMarksByDegreeCourseAndQuarter("1", 2),
                                        allYear: academicRecordService.getSubjectMarksByDegreeCourseAndQuarter("1", null)
                                    }
                                },{
                                    course: "2",
                                    data: {
                                        firstQuarter: academicRecordService.getSubjectMarksByDegreeCourseAndQuarter("2", 1),
                                        secondQuarter: academicRecordService.getSubjectMarksByDegreeCourseAndQuarter("2", 2),
                                        allYear: academicRecordService.getSubjectMarksByDegreeCourseAndQuarter("2", null)
                                    }
                                }, {
                                    course: "3",
                                    data: {
                                        firstQuarter: academicRecordService.getSubjectMarksByDegreeCourseAndQuarter("3", 1),
                                        secondQuarter: academicRecordService.getSubjectMarksByDegreeCourseAndQuarter("3", 2),
                                        allYear: academicRecordService.getSubjectMarksByDegreeCourseAndQuarter("3", null)
                                    }
                                }, {
                                    course: "4",
                                    data: {
                                        firstQuarter: academicRecordService.getSubjectMarksByDegreeCourseAndQuarter("4", 1),
                                        secondQuarter: academicRecordService.getSubjectMarksByDegreeCourseAndQuarter("4", 2),
                                        allYear: academicRecordService.getSubjectMarksByDegreeCourseAndQuarter("4", null)
                                    }
                                },
                            ]
                        };
                    },
                    averageByAcademicCourseAndSubjectResolve: function(academicRecordService){
                        return academicRecordService.getAverageByAcademicCourseAndSubject();
                    },
                    averageByAcademicCourseAndCreditResolve: function(academicRecordService){
                        return academicRecordService.getAverageByAcademicCourseAndCredit();
                    },
                    averageByDegreeCourseAndSubjectResolve: function(academicRecordService){
                        return academicRecordService.getAverageByDegreeCourseAndSubject();
                    },
                    averageByDegreeCourseAndCreditResolve: function(academicRecordService){
                        return academicRecordService.getAverageByDegreeCourseAndCredit();
                    },
                    degreeAverageBySubjectResolve: function(academicRecordService){
                        return academicRecordService.getDegreeAverageBySubject();
                    },
                    degreeAverageByCreditResolve: function(academicRecordService){
                        return academicRecordService.getDegreeAverageByCredit();
                    }
                }
            });
    }
})();
