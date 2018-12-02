(function() {
    "use strict";

    angular
        .module("constants")
        .constant("API", {
            BASE_URL: "/api",
            CV: "/cv",
            KNOWLEDGE: "/knowledge",
            PERSONAL_PROJECTS: "/personal-projects",
            EXTRA_TRAINING: "/extra-training",
            PROFESSIONAL_EXPERIENCES: "/professional-experiences"
        })
        .constant("KNOWLEDGE_TYPE", {
            CONFIGURATION_MANAGEMENT_TOOL: "configuration_management_tool",
            DATABASE: "database",
            FRAMEWORK: "framework",
            PROGRAMMING_LANGUAGE: "programming_language",
            PROJECT_MANAGEMENT_TOOL: "project_management_tool",
            TEMPLATE_ENGINE: "template_engine",
            VERSION_CONTROL_SYSTEM: "version_control_system",
            WEB_DESIGN: "web_design"
        })
        .constant("LINK_TYPE", {
            WEB: "web",
            REPOSITORY: "repository",
            TFG_DOCUMENTATION: "tfg_documentation"
        });
})();
