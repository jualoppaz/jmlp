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
            experienciaProfesional: [
                {
                    descripcion: "",
                    imagen: "/images/empresa_profile.png",
                    desde: "07/2018",
                    hasta: "Actualidad",
                    name: "Profile Software Services",
                    web: "https://profile.es",
                    proyectos: [
                        {
                            nombre:
                                "Aplicación Web para el Portal de Contratación de Sanitas",
                            descripcion:
                                "Rediseño de aplicación web AngularJS para el Portal de Contratación de Sanitas.",
                            desde: "07/2018",
                            hasta: "Actualidad",
                            puesto: "Desarrollador Web",
                            technologies: [
                                {
                                    image: "/images/tecnologia_angularjs.png",
                                    name: "AngularJS",
                                    web: "https://angularjs.org"
                                },
                                {
                                    image: "/images/tecnologia_sass.png",
                                    name: "Sass",
                                    web: "https://sass-lang.com"
                                },
                                {
                                    image: "/images/tecnologia_bootstrap.png",
                                    name: "Bootstrap",
                                    web: "https://getbootstrap.com"
                                },
                                {
                                    image: "/images/tecnologia_npm.png",
                                    name: "NPM",
                                    web: "https://www.npmjs.com"
                                },
                                {
                                    image: "/images/tecnologia_bower.png",
                                    name: "Bower",
                                    web: "https://bower.io"
                                },
                                {
                                    image: "/images/tecnologia_git.png",
                                    name: "Git",
                                    web: "https://git-scm.com"
                                },
                                {
                                    image: "/images/tecnologia_sourceTree.png",
                                    name: "SourceTree (+ Git Flow)",
                                    web: "https://www.sourcetreeapp.com"
                                }
                            ],
                            funciones: [
                                {
                                    nombre:
                                        "Desarrollo de componentes y servicios de AngularJS"
                                },
                                {
                                    nombre:
                                        "Implementación de llamadas HTTP para consumir API REST propia con AngularJS"
                                },
                                {
                                    nombre: "Maquetación CSS con Sass"
                                },
                                {
                                    nombre:
                                        "Corrección de incidencias de Frontend"
                                },
                                {
                                    nombre:
                                        "Gestión de código mediante Git-Flow"
                                }
                            ]
                        }
                    ]
                },
                {
                    descripcion: "",
                    imagen: "/images/empresa_siag.png",
                    desde: "10/2016",
                    hasta: "07/2018",
                    name: "SIAG Consulting",
                    web: "https://siagconsulting.es",
                    clientes: [
                        {
                            nombre: "GMV",
                            web: "https://www.gmv.com/es",
                            imagen: "/images/empresa_gmv.png",
                            desde: "10/2016",
                            hasta: "07/2018",
                            descripcion:
                                "Colaboración con GMV para participar en el desarrollo de diversos proyectos como Desarrollador Web.",
                            proyectos: [
                                {
                                    nombre:
                                        "Aplicación Web para el Sector de Estudio de Mercado",
                                    descripcion:
                                        "Desarrollo de aplicación web para encuestar voluntarios para valorar productos lanzados por los clientes.",
                                    desde: "02/2018",
                                    hasta: "07/2018",
                                    puesto: "Desarrollador Web",
                                    technologies: [
                                        {
                                            image:
                                                "/images/tecnologia_laravel.png",
                                            name: "Laravel",
                                            web: "https://laravel.com"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_mysql.png",
                                            name: "MySQL",
                                            web: "https://www.mysql.com"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_sass.png",
                                            name: "Sass",
                                            web: "https://sass-lang.com"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_swagger.png",
                                            name: "Swagger",
                                            web: "https://swagger.io"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_composer.png",
                                            name: "Composer",
                                            web: "https://getcomposer.org"
                                        },
                                        {
                                            image: "/images/tecnologia_npm.png",
                                            name: "NPM",
                                            web: "https://www.npmjs.com"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_angular.png",
                                            name: "Angular 5",
                                            web: "https://angular.io"
                                        },
                                        {
                                            image: "/images/tecnologia_git.png",
                                            name: "Git",
                                            web: "https://git-scm.com"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_sourceTree.png",
                                            name: "SourceTree (+ Git Flow)",
                                            web: "https://www.sourcetreeapp.com"
                                        }
                                    ],
                                    funciones: [
                                        {
                                            nombre:
                                                "Diseño y Desarrollo de APIs Rest con Laravel"
                                        },
                                        {
                                            nombre:
                                                "Desarrollo de componentes y servicios de Angular"
                                        },
                                        {
                                            nombre: "Maquetación CSS con Sass"
                                        },
                                        {
                                            nombre:
                                                "Documentación de APIs Rest con Swagger"
                                        },
                                        {
                                            nombre:
                                                "Instalación y configuración de entorno de desarrollo"
                                        },
                                        {
                                            nombre:
                                                "Gestión de código mediante Git Flow"
                                        },
                                        {
                                            nombre: "Análisis de Requisitos"
                                        },
                                        {
                                            nombre:
                                                "Planificación y estimación de tareas"
                                        },
                                        {
                                            nombre:
                                                "Participación en diseño y modelado"
                                        }
                                    ]
                                },
                                {
                                    nombre:
                                        "Aplicación Web para el Sector Bancario",
                                    descripcion:
                                        "Desarrollo de aplicación web para fidelizar clientes para entidades bancarias.",
                                    desde: "10/2017",
                                    hasta: "02/2018",
                                    puesto: "Desarrollador Web",
                                    technologies: [
                                        {
                                            image:
                                                "/images/tecnologia_laravel.png",
                                            name: "Laravel",
                                            web: "https://laravel.com"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_lumen.png",
                                            name: "Lumen",
                                            web: "https://lumen.laravel.com"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_mysql.png",
                                            name: "MySQL",
                                            web: "https://www.mysql.com"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_sass.png",
                                            name: "Sass",
                                            web: "https://sass-lang.com"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_laravel-mix.png",
                                            name: "Laravel-mix"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_swagger.png",
                                            name: "Swagger",
                                            web: "https://swagger.io"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_composer.png",
                                            name: "Composer",
                                            web: "https://getcomposer.org"
                                        },
                                        {
                                            image: "/images/tecnologia_npm.png",
                                            name: "NPM",
                                            web: "https://www.npmjs.com"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_angular.png",
                                            name: "Angular",
                                            web: "https://angular.io"
                                        },
                                        {
                                            image: "/images/tecnologia_git.png",
                                            name: "Git",
                                            web: "https://git-scm.com"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_sourceTree.png",
                                            name: "SourceTree (+ Git Flow)",
                                            web: "https://www.sourcetreeapp.com"
                                        }
                                    ],
                                    funciones: [
                                        {
                                            nombre:
                                                "Diseño y Desarrollo de APIs Rest con Laravel/Lumen"
                                        },
                                        {
                                            nombre:
                                                "Maquetación CSS con Sass a través de laravel-mix"
                                        },
                                        {
                                            nombre:
                                                "Documentación de APIs Rest con Swagger"
                                        },
                                        {
                                            nombre:
                                                "Instalación y configuración de entorno de desarrollo"
                                        },
                                        {
                                            nombre:
                                                "Gestión de código mediante Git Flow"
                                        },
                                        {
                                            nombre: "Análisis de Requisitos"
                                        },
                                        {
                                            nombre:
                                                "Planificación y estimación de tareas"
                                        },
                                        {
                                            nombre:
                                                "Participación en diseño y modelado"
                                        }
                                    ]
                                },
                                {
                                    nombre:
                                        "Aplicación Web para el Sector Bancario",
                                    descripcion:
                                        "Desarrollo y mantenimiento de una aplicación web interna para una entidad bancaria.",
                                    desde: "07/2017",
                                    hasta: "10/2017",
                                    puesto: "Desarrollador Web",
                                    technologies: [
                                        {
                                            image:
                                                "/images/tecnologia_java.png",
                                            name: "Java",
                                            web: "https://www.java.com"
                                        },
                                        {
                                            image: "/images/tecnologia_jsf.png",
                                            name: "JavaServer Faces (JSF)"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_primeFaces.png",
                                            name: "PrimeFaces",
                                            web: "https://www.primefaces.org"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_maven.png",
                                            name: "Maven",
                                            web: "https://maven.apache.org"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_postgresql.png",
                                            name: "PostgreSQL",
                                            web: "https://www.postgresql.org"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_hibernate.png",
                                            name: "Hibernate",
                                            web: "http://hibernate.org"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_liquibase.jpg",
                                            name: "Liquibase",
                                            web: "https://www.liquibase.org"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_css3.png",
                                            name: "CSS3"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_javascript.png",
                                            name: "JavaScript"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_jquery.png",
                                            name: "jQuery",
                                            web: "https://jquery.com"
                                        }
                                    ],
                                    funciones: [
                                        {
                                            nombre: "Maquetación CSS"
                                        },
                                        {
                                            nombre:
                                                "Corrección de defectos en Backend"
                                        },
                                        {
                                            nombre:
                                                "Corrección de defectos en Frontend"
                                        },
                                        {
                                            nombre: "Análisis de Requisitos"
                                        },
                                        {
                                            nombre:
                                                "Planificación y Estimación de tareas"
                                        }
                                    ]
                                },
                                {
                                    nombre:
                                        "Aplicación Web para el Sector Transporte",
                                    descripcion:
                                        "Desarrollo y mantenimiento de una aplicación web interna para gestión de incidencias relacionadas con transportes y su equipamiento.",
                                    desde: "12/2016",
                                    hasta: "07/2017",
                                    puesto: "Desarrollador Web",
                                    technologies: [
                                        {
                                            image: "/images/tecnologia_php.png",
                                            name: "PHP",
                                            web: "http://php.net"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_mysql.png",
                                            name: "MySQL",
                                            web: "https://www.mysql.com"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_liquibase.jpg",
                                            name: "Liquibase",
                                            web: "https://www.liquibase.org"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_symfony.png",
                                            name: "Symfony",
                                            web: "https://symfony.es"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_doctrine.png",
                                            name: "Doctrine",
                                            web:
                                                "https://www.doctrine-project.org"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_css3.png",
                                            name: "CSS3"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_sass.png",
                                            name: "Sass",
                                            web: "https://sass-lang.com"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_bootstrap.png",
                                            name: "Bootstrap",
                                            web: "https://getbootstrap.com"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_fontAwesome.png",
                                            name: "Font Awesome",
                                            web: "https://fontawesome.com"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_javascript.png",
                                            name: "JavaScript"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_jquery.png",
                                            name: "jQuery",
                                            web: "https://jquery.com"
                                        }
                                    ],
                                    funciones: [
                                        {
                                            nombre:
                                                "Desarrollo de WebServices en PHP con NuSOAP"
                                        },
                                        {
                                            nombre:
                                                "Maquetación CSS con Bootstrap"
                                        },
                                        {
                                            nombre:
                                                "Corrección de defectos en Backend"
                                        },
                                        {
                                            nombre:
                                                "Corrección de defectos en Frontend"
                                        },
                                        {
                                            nombre: "Análisis de Requisitos"
                                        },
                                        {
                                            nombre:
                                                "Planificación y Estimación de tareas"
                                        }
                                    ]
                                },
                                {
                                    nombre:
                                        "Aplicación Web para el Sector Bancario",
                                    descripcion:
                                        "Desarrollo y mantenimiento de una aplicación web interna para una entidad bancaria.",
                                    desde: "10/2016",
                                    hasta: "12/2016",
                                    puesto: "Desarrollador Web",
                                    technologies: [
                                        {
                                            image:
                                                "/images/tecnologia_java.png",
                                            name: "Java",
                                            web: "https://www.java.com"
                                        },
                                        {
                                            image: "/images/tecnologia_jsf.png",
                                            name: "JavaServer Faces (JSF)"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_primeFaces.png",
                                            name: "PrimeFaces",
                                            web: "https://www.primefaces.org"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_maven.png",
                                            name: "Maven",
                                            web: "https://maven.apache.org"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_postgresql.png",
                                            name: "PostgreSQL",
                                            web: "https://www.postgresql.org"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_hibernate.png",
                                            name: "Hibernate",
                                            web: "http://hibernate.org"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_liquibase.jpg",
                                            name: "Liquibase",
                                            web: "https://www.liquibase.org"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_css3.png",
                                            name: "CSS3"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_javascript.png",
                                            name: "JavaScript"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_jquery.png",
                                            name: "jQuery",
                                            web: "https://jquery.com"
                                        }
                                    ],
                                    funciones: [
                                        {
                                            nombre: "Maquetación CSS"
                                        },
                                        {
                                            nombre:
                                                "Corrección de defectos en Backend"
                                        },
                                        {
                                            nombre:
                                                "Corrección de defectos en Frontend"
                                        },
                                        {
                                            nombre:
                                                "Diseño de Google Site para el BBVA"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    descripcion:
                        "Incorporación a plantilla tras 2 meses de buen trabajo previo como Desarrollador Web con AngularJS",
                    imagen: "/images/empresa_augeDigital.png",
                    desde: "07/2016",
                    hasta: "10/2016",
                    name: "AUGE Digital",
                    proyectos: [
                        {
                            nombre:
                                "Portal del Investigador de Universitas XXI - Investigación",
                            descripcion:
                                "Desarrollo del Frontend del Portal del Investigador de Universitas XXI - Investigación con AngularJS.",
                            desde: "05/2016",
                            hasta: "07/2016",
                            puesto: "Desarrollador Web",
                            technologies: [
                                {
                                    image: "/images/tecnologia_angularjs.png",
                                    name: "AngularJS",
                                    web: "https://angularjs.org"
                                },
                                {
                                    image: "/images/tecnologia_javascript.png",
                                    name: "JavaScript"
                                },
                                {
                                    image: "/images/tecnologia_jquery.png",
                                    name: "jQuery",
                                    web: "https://jquery.com"
                                },
                                {
                                    image: "/images/tecnologia_bootstrap.png",
                                    name: "Bootstrap",
                                    web: "https://getbootstrap.com"
                                },
                                {
                                    image: "/images/tecnologia_brunch.png",
                                    name: "Brunch",
                                    web: "https://brunch.io"
                                },
                                {
                                    image: "/images/tecnologia_bower.png",
                                    name: "Bower",
                                    web: "https://bower.io"
                                },
                                {
                                    image: "/images/tecnologia_npm.png",
                                    name: "NPM",
                                    web: "https://www.npmjs.com"
                                }
                            ],
                            funciones: [
                                {
                                    nombre: "Maquetación CSS con Bootstrap"
                                },
                                {
                                    nombre: "Desarrollo web con AngularJS"
                                },
                                {
                                    nombre:
                                        "Desarrollo de servicios con AngularJS para consumir API de terceros"
                                },
                                {
                                    nombre: "Análisis y Diseño de soluciones"
                                },
                                {
                                    nombre: "Documentación de código"
                                }
                            ]
                        }
                    ]
                },
                {
                    imagen: "/images/empresa_aertis.png",
                    desde: "05/2016",
                    hasta: "07/2016",
                    name: "Aertis",
                    web: "http://www.aertis.es",
                    clientes: [
                        {
                            nombre: "AUGE Digital",
                            imagen: "/images/empresa_augeDigital.png",
                            desde: "05/2016",
                            hasta: "07/2016",
                            descripcion:
                                "Participación en un proyecto de Desarrollo Web con AngularJS por parte de AUGE Digital.",
                            proyectos: [
                                {
                                    nombre:
                                        "Portal del Investigador de Universitas XXI - Investigación",
                                    desde: "05/2016",
                                    hasta: "07/2016",
                                    puesto: "Desarrollador Web",
                                    technologies: [
                                        {
                                            image:
                                                "/images/tecnologia_angularjs.png",
                                            name: "AngularJS",
                                            web: "https://angularjs.org"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_javascript.png",
                                            name: "JavaScript"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_jquery.png",
                                            name: "jQuery",
                                            web: "https://jquery.com"
                                        },
                                        {
                                            image:
                                                "/images/tecnologia_bootstrap.png",
                                            name: "Bootstrap",
                                            web: "https://getbootstrap.com"
                                        },
                                        {
                                            image: "/images/tecnologia_npm.png",
                                            name: "NPM",
                                            web: "https://www.npmjs.com"
                                        }
                                    ],
                                    funciones: [
                                        {
                                            nombre:
                                                "Maquetación CSS con Bootstrap"
                                        },
                                        {
                                            nombre:
                                                "Desarrollo web con AngularJS"
                                        },
                                        {
                                            nombre:
                                                "Desarrollo de servicios con AngularJS para consumir API de terceros"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    descripcion:
                        "Desarrollo de aplicaciones web con tecnologías tales como PHP o Laravel y maquetación web con Bootstrap.",
                    imagen: "/images/empresa_innopro.png",
                    desde: "01/2016",
                    hasta: "03/2016",
                    name: "Innopro Advanced",
                    proyectos: [
                        {
                            nombre: "Certificaciones TIC",
                            descripcion:
                                "Aplicación web realizada con PHP para Media Interactiva",
                            desde: "01/2016",
                            hasta: "03/2016",
                            puesto: "Desarrollador Web",
                            technologies: [
                                {
                                    image: "/images/tecnologia_php.png",
                                    name: "PHP",
                                    web: "http://php.net"
                                },
                                {
                                    image: "/images/tecnologia_laravel.png",
                                    name: "Laravel",
                                    web: "https://laravel.com"
                                },
                                {
                                    image: "/images/tecnologia_javascript.png",
                                    name: "JavaScript"
                                },
                                {
                                    image: "/images/tecnologia_bootstrap.png",
                                    name: "Bootstrap",
                                    web: "https://getbootstrap.com"
                                }
                            ],
                            funciones: [
                                {
                                    nombre: "Desarrollo web con PHP"
                                },
                                {
                                    nombre:
                                        "Modificación de componentes en Laravel"
                                },
                                {
                                    nombre: "Maquetación CSS con Bootstrap"
                                },
                                {
                                    nombre:
                                        "Animación de contenidos con JavaScript"
                                }
                            ]
                        }
                    ]
                },
                {
                    descripcion:
                        "Realización de servicios relacionados con certificación de aplicaciones desarrolladas " +
                        "por otras empresas, así como realización de pruebas funcionales, automatización de pruebas con " +
                        "Selenium o revisiones de documentos técnicos.",
                    imagen: "/images/empresa_sopra.png",
                    desde: "12/2014",
                    hasta: "12/2015",
                    name: "Sopra Steria",
                    web: "https://www.soprasteria.es/es",
                    proyectos: [
                        {
                            nombre:
                                "Gestión de Calidad sobre aplicaciones para la CMAOT",
                            descripcion:
                                "Aseguramiento de la calidad sobre multitud de aplicaciones web realizadas para " +
                                "la Consejería de Medio Ambiente y Ordenación del Territorio",
                            desde: "12/2014",
                            hasta: "12/2015",
                            puesto: "Tester",
                            technologies: [
                                {
                                    image: "/images/tecnologia_spiraTeam.png",
                                    name: "SpiraTeam",
                                    web: "https://www.inflectra.com/SpiraTeam"
                                },
                                {
                                    name: "Jenkins",
                                    image: "/images/tecnologia_jenkins.png",
                                    web: "https://jenkins.io"
                                },
                                {
                                    name: "jMeter",
                                    image: "/images/tecnologia_jmeter.png",
                                    web: "https://jmeter.apache.org"
                                },
                                {
                                    name: "HP LoadRunner",
                                    image: "/images/tecnologia_hpLoadRunner.png"
                                },
                                {
                                    name: "SoapUI",
                                    image: "/images/tecnologia_soapui.png",
                                    web: "https://www.soapui.org"
                                },
                                {
                                    name: "Selenium Webdriver",
                                    image: "/images/tecnologia_selenium.png",
                                    web:
                                        "https://www.seleniumhq.org/projects/webdriver"
                                },
                                {
                                    name: "Mantis",
                                    image: "/images/tecnologia_mantis.png",
                                    web: "https://www.mantisbt.org"
                                }
                            ],
                            funciones: [
                                {
                                    nombre:
                                        "Realización de pruebas funcionales manuales"
                                },
                                {
                                    nombre:
                                        "Realización de pruebas funcionales automatizadas con Selenium"
                                },
                                {
                                    nombre:
                                        "Realización de pruebas de rendimiento con jMeter"
                                },
                                {
                                    nombre: "Reporte de incidencias en Mantis"
                                },
                                {
                                    nombre:
                                        "Soporte técnico a usuarios y desarrolladores"
                                },
                                {
                                    nombre:
                                        "Soporte y revisión de tareas de otros compañeros"
                                }
                            ]
                        }
                    ]
                },
                {
                    descripcion:
                        "Prácticas no remuneradas de 150 horas como desarrollador con tecnologías Java2EE e interfaces de usuario con " +
                        "Oracle ADF, JSF y JBossSeam.",
                    imagen: "/images/empresa_guadaltel.png",
                    desde: "02/2014",
                    hasta: "05/2014",
                    name: "Guadaltel",
                    web: "https://www.guadaltel.com",
                    proyectos: [
                        {
                            nombre: "Proyecto Interno de Investigación",
                            desde: "02/2014",
                            hasta: "05/2014",
                            puesto: "Desarrollador Web",
                            technologies: [
                                {
                                    image: "/images/tecnologia_java.png",
                                    name: "Java",
                                    web: "https://www.java.com"
                                },
                                {
                                    name: "Maven",
                                    image: "/images/tecnologia_maven.png",
                                    web: "https://maven.apache.org"
                                },
                                {
                                    name: "JSF",
                                    image: "/images/tecnologia_jsf.png"
                                },
                                {
                                    name: "Hibernate",
                                    image: "/images/tecnologia_hibernate.png",
                                    web: "http://hibernate.org"
                                }
                            ],
                            funciones: [
                                {
                                    nombre:
                                        "Desarrollo de Vistas y Controladores para interfaces de usuario"
                                },
                                {
                                    nombre:
                                        "Investigación para desarrollo de PDFs autorrellenables"
                                }
                            ]
                        }
                    ]
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
            getCVExtraTraining: getCVExtraTrainingFn
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
    }
})();
