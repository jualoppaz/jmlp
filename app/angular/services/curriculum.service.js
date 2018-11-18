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
            formacionComplementaria: [
                {
                    descripcion: "Certificación ISTQB nivel Foundation",
                    fecha: "Noviembre de 2015",
                    imagen: "/images/formacionComplementaria_istqb.png",
                    certificado: "certificado_istqb.pdf"
                },
                {
                    descripcion:
                        "Curso de 12 horas sobre la herramienta HP LoadRunner",
                    fecha: "Octubre de 2015",
                    imagen: "/images/formacionComplementaria_hp_loadRunner.png",
                    certificado: "certificado_hploadrunner.pdf"
                }
            ],
            proyectos: [
                {
                    resumen:
                        "Desarrollo de la aplicación web CIDA: Continuous Integration Demo App",
                    descripcion:
                        "Desarrollo de una aplicación web realizada con AngularJS, la cual incluye una Integración " +
                        "Continua muy completa con la herramienta Brunch, de modo que sea pueda agilizar el desarrollo " +
                        "desde la compilación de assets hasta su despliegue optimizado en un sistema como Heroku.",
                    technologies: [
                        {
                            image: "/images/tecnologia_angularjs.png",
                            name: "AngularJS",
                            web: "https://angularjs.org"
                        },
                        {
                            image: "/images/tecnologia_brunch.png",
                            name: "Brunch",
                            web: "https://brunch.io"
                        },
                        {
                            image: "/images/tecnologia_sass.png",
                            name: "Sass",
                            web: "https://sass-lang.com"
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
                            image: "/images/tecnologia_nodejs.png",
                            name: "NodeJS",
                            web: "https://nodejs.org"
                        },
                        {
                            image: "/images/tecnologia_jshint.png",
                            name: "JSHint",
                            web: "https://jshint.com"
                        }
                    ],
                    desde: "02/2017",
                    hasta: "Actualidad",
                    imagen: "/images/tecnologia_brunch.png",
                    enlaces: [
                        {
                            tipo: "web",
                            nombre: "https://cida.herokuapp.com",
                            ruta: "https://cida.herokuapp.com"
                        },
                        {
                            tipo: "repositorio",
                            nombre: "https://github.com/jualoppaz/cida",
                            ruta: "https://github.com/jualoppaz/cida"
                        }
                    ]
                },
                {
                    resumen: "Desarrollo de mi página web personal",
                    descripcion:
                        "Desarrollo de mi página web personal para darme a conocer, donde se puede consultar mi currículum y " +
                        "mi expediente académico, entre otras cosas. Esta aplicación web no es igual que el resto, ya que ha sido " +
                        "realizada con la filosofía SPA (Single Page Application). Esto quiere decir que consta de una " +
                        "sola página con diferentes vistas, de modo que no se necesita recargar la página debido a que las vistas " +
                        "se encuentran en el cliente y no en el servidor.",
                    technologies: [
                        {
                            image: "/images/tecnologia_angularjs.png",
                            name: "AngularJS",
                            web: "https://angularjs.org"
                        },
                        {
                            image: "/images/tecnologia_nodejs.png",
                            name: "Node.js",
                            web: "https://nodejs.org"
                        },
                        {
                            image: "/images/tecnologia_pug.png",
                            name: "Pug",
                            web: "https://pugjs.org"
                        },
                        {
                            image: "/images/tecnologia_mongodb.png",
                            name: "MongoDB",
                            web: "https://www.mongodb.com"
                        },
                        {
                            image: "/images/tecnologia_bootstrap.png",
                            name: "Bootstrap",
                            web: "https://getbootstrap.com"
                        }
                    ],
                    desde: "03/2016",
                    hasta: "Actualidad",
                    imagen: "/images/yo_web4.jpg",
                    bordeImagen: "img-circle",
                    enlaces: [
                        {
                            tipo: "web",
                            nombre: "http://www.juanmanuellopezpazos.es",
                            ruta: "http://www.juanmanuellopezpazos.es"
                        }
                    ]
                },
                {
                    resumen:
                        "Desarrollo de la página web para la empresa Rayosol Toldos",
                    descripcion:
                        "Página web para la empresa Rayosol Toldos con el objetivo de mostrar los distintos modelos de toldos que fabrican e instalan," +
                        "así como facilitar a los usuarios una forma de contacto inmediata mediante el envío de emails desde la propia página.",
                    technologies: [
                        {
                            image: "/images/tecnologia_angularjs.png",
                            name: "AngularJS",
                            web: "https://angularjs.org"
                        },
                        {
                            image: "/images/tecnologia_nodejs.png",
                            name: "Node.js",
                            web: "https://nodejs.org"
                        },
                        {
                            image: "/images/tecnologia_pug.png",
                            name: "Pug",
                            web: "https://pugjs.org"
                        },
                        {
                            image: "/images/tecnologia_bootstrap.png",
                            name: "Bootstrap",
                            web: "https://getbootstrap.com"
                        }
                    ],
                    desde: "02/2015",
                    hasta: "06/2015",
                    imagen: "/images/proyecto_rayosol.png",
                    enlaces: [
                        {
                            tipo: "web",
                            nombre: "http://www.rayosoltoldos.com",
                            ruta: "http://www.rayosoltoldos.com"
                        }
                    ]
                },
                {
                    resumen:
                        "Desarrollo de la página web de Complementos Marta Pazos",
                    descripcion:
                        "Desarrollo de la página web de Complementos Marta Pazos la cual consta de: un amplio catálogo de productos," +
                        " panel de administración de todo tipo de contenidos de la web como noticias o detalles de los productos, comercio " +
                        "electrónico integrando la API REST de Paypal con el carrito de compras y un diseño totalmente personalizado acorde con el oficio.",
                    technologies: [
                        {
                            image: "/images/tecnologia_angularjs.png",
                            name: "AngularJS",
                            web: "https://angularjs.org"
                        },
                        {
                            image: "/images/tecnologia_nodejs.png",
                            name: "Node.js",
                            web: "https://nodejs.org"
                        },
                        {
                            image: "/images/tecnologia_mongodb.png",
                            name: "MongoDB",
                            web: "https://www.mongodb.com"
                        },
                        {
                            image: "/images/tecnologia_pug.png",
                            name: "Pug",
                            web: "https://pugjs.org"
                        },
                        {
                            image: "/images/tecnologia_bootstrap.png",
                            name: "Bootstrap",
                            web: "https://getbootstrap.com"
                        },
                        {
                            image: "/images/tecnologia_fontAwesome.png",
                            name: "Font Awesome",
                            web: "https://fontawesome.com"
                        }
                    ],
                    desde: "10/2014",
                    hasta: "01/2015",
                    imagen: "/images/proyecto_complementosMartaPazos.png",
                    enlaces: [
                        {
                            tipo: "web",
                            nombre: "http://www.complementosmartapazos.com",
                            ruta: "http://www.complementosmartapazos.com"
                        }
                    ]
                },
                {
                    resumen: "Desarrollo de la aplicación web Pronostigol",
                    descripcion:
                        "Aplicación web para consultar estadísticas relacionadas con los distintos sorteos de Loterías y Apuestas " +
                        "del Estado (LAE).",
                    technologies: [
                        {
                            image: "/images/tecnologia_angularjs.png",
                            name: "AngularJS",
                            web: "https://angularjs.org"
                        },
                        {
                            image: "/images/tecnologia_nodejs.png",
                            name: "Node.js",
                            web: "https://nodejs.org"
                        },
                        {
                            image: "/images/tecnologia_mongodb.png",
                            name: "MongoDB",
                            web: "https://www.mongodb.com"
                        },
                        {
                            image: "/images/tecnologia_pug.png",
                            name: "Pug",
                            web: "https://pugjs.org"
                        },
                        {
                            image: "/images/tecnologia_bootstrap.png",
                            name: "Bootstrap",
                            web: "https://getbootstrap.com"
                        },
                        {
                            image: "/images/tecnologia_fontAwesome.png",
                            name: "Font Awesome",
                            web: "https://fontawesome.com"
                        }
                    ],
                    desde: "05/2014",
                    hasta: "Actualidad",
                    imagen: "/images/proyecto_pronostigol.png",
                    enlaces: [
                        {
                            tipo: "repositorio",
                            nombre: "https://github.com/jualoppaz/pronostigol",
                            ruta: "https://github.com/jualoppaz/pronostigol"
                        },
                        {
                            tipo: "web",
                            nombre: "http://www.pronostigol.es",
                            ruta: "http://www.pronostigol.es"
                        }
                    ]
                },
                {
                    resumen: "Desarrollo de la aplicación web EatHub",
                    descripcion:
                        "Aplicación web para crear, compartir y personalizar recetas. Proyecto realizado durante la asignatura " +
                        "ISPP (Ingeniería del Software y Práctica Profesional) del cuarto curso del Grado en Ingniería Informática - Ingeniería " +
                        "del Software de la Universidad de Sevilla.",
                    desde: "02/2014",
                    hasta: "09/2014",
                    imagen: "/images/proyecto_eathub.png",
                    technologies: [
                        {
                            name: "Django",
                            image: "/images/tecnologia_django.png",
                            web: "https://www.djangoproject.com"
                        },
                        {
                            name: "MongoDB",
                            image: "/images/tecnologia_mongodb.png",
                            web: "https://www.mongodb.com"
                        },
                        {
                            name: "HTML5",
                            image: "/images/tecnologia_html5.png"
                        },
                        {
                            name: "Bootstrap",
                            image: "/images/tecnologia_bootstrap.png",
                            web: "https://getbootstrap.com"
                        }
                    ],
                    enlaces: [
                        {
                            tipo: "web",
                            nombre: "http://eat-hub.herokuapp.com",
                            ruta: "http://eat-hub.herokuapp.com"
                        },
                        {
                            tipo: "repositorio",
                            nombre: "https://github.com/EatHub",
                            ruta: "https://github.com/EatHub"
                        }
                    ]
                },
                {
                    resumen:
                        "Trabajo de Fin de Grado: Desarrollo de la página web de Caramelos La Gloria",
                    descripcion:
                        "Página web para la empresa Caramelos La Gloria con el objetivo de mostrar un amplio catálogo de " +
                        "productos, todo ello con un diseño innovador y atractivo para los usuarios. Este proyecto fue presentado como Trabajo " +
                        "de Fin de Grado en el Grado en Ingeniería Informática - Ingeniería del Software.",
                    desde: "12/2013",
                    hasta: "09/2014",
                    imagen: "/images/proyecto_lagloria.png",
                    technologies: [
                        {
                            name: "MongoDB",
                            image: "/images/tecnologia_mongodb.png",
                            web: "https://www.mongodb.com"
                        },
                        {
                            name: "Node.js",
                            image: "/images/tecnologia_nodejs.png",
                            web: "https://nodejs.org"
                        },
                        {
                            name: "AngularJS",
                            image: "/images/tecnologia_angularjs.png",
                            web: "https://angularjs.org"
                        },
                        {
                            name: "Pug",
                            image: "/images/tecnologia_pug.png",
                            web: "https://pugjs.org"
                        },
                        {
                            name: "Bootstrap",
                            image: "/images/tecnologia_bootstrap.png",
                            web: "https://getbootstrap.com"
                        },
                        {
                            name: "Font Awesome",
                            image: "/images/tecnologia_fontAwesome.png",
                            web: "https://fontawesome.com"
                        }
                    ],
                    enlaces: [
                        {
                            tipo: "web",
                            nombre: "http://carameloslagloria.herokuapp.com",
                            ruta: "http://carameloslagloria.herokuapp.com"
                        },
                        {
                            tipo: "repositorio",
                            nombre: "https://github.com/jualoppaz/lagloria",
                            ruta: "https://github.com/jualoppaz/lagloria"
                        },
                        {
                            tipo: "Memoria",
                            nombre: "Documentación del proyecto",
                            ruta: "/docs/memoria_tfg.pdf"
                        }
                    ]
                },
                {
                    resumen:
                        "Usuario activo en la comunidad de Desarolladores GitHub",
                    descripcion:
                        "En mi perfil de GitHub tengo publicados multitud de proyectos para tener copias de seguridad de los mismos y, " +
                        "además, para ayudar a otros usuarios con soluciones propuestas con distintas tecnologías.",
                    desde: "12/2013",
                    hasta: "Actualidad",
                    imagen: "/images/tecnologia_github.png",
                    enlaces: [
                        {
                            tipo: "repositorio",
                            nombre: "https://github.com/jualoppaz",
                            ruta: "https://github.com/jualoppaz"
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
            getCVKnowledge: getCVKnowledgeFn
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
    }
})();
