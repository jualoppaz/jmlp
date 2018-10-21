/**
 * Created by JuanManuel on 13/02/2016.
 */

angular
    .module("jmlp")
    .controller("CurriculumController", function($scope, $location, $window) {
        $scope.$parent.title = "Currículum";

        var vm = this;

        vm.curriculum = {
            formacionAcademica: [
                {
                    desde: "09/2010",
                    hasta: "09/2014",
                    descripcion:
                        "Grado en Ingeniería Informática - Ingeniería del Software por la Universidad de Sevilla (2010-2014)",
                    imagen: "/img/estudios_us.png"
                }
            ],
            experienciaProfesional: [
                {
                    descripcion: "",
                    imagen: "/img/empresa_profile.png",
                    desde: "07/2018",
                    hasta: "Actualidad",
                    puesto: "Desarrollador Web",
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
                                    image: "img/tecnologia_angularjs.png",
                                    name: "AngularJS",
                                    web: "https://angularjs.org"
                                },
                                {
                                    image: "img/tecnologia_sass.png",
                                    name: "Sass",
                                    web: "https://sass-lang.com"
                                },
                                {
                                    image: "img/tecnologia_bootstrap.png",
                                    name: "Bootstrap",
                                    web: "https://getbootstrap.com"
                                },
                                {
                                    image: "img/tecnologia_npm.png",
                                    name: "NPM",
                                    web: "https://www.npmjs.com"
                                },
                                {
                                    image: "img/tecnologia_bower.png",
                                    name: "Bower",
                                    web: "https://bower.io"
                                },
                                {
                                    image: "img/tecnologia_git.png",
                                    name: "Git",
                                    web: "https://git-scm.com"
                                },
                                {
                                    image: "img/tecnologia_sourceTree.png",
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
                    imagen: "/img/empresa_siag.png",
                    desde: "10/2016",
                    hasta: "07/2018",
                    puesto: "Consultor",
                    name: "SIAG Consulting",
                    web: "https://siagconsulting.es",
                    clientes: [
                        {
                            nombre: "GMV",
                            web: "https://www.gmv.com/es",
                            imagen: "/img/empresa_gmv.png",
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
                                            image: "img/tecnologia_laravel.png",
                                            name: "Laravel",
                                            web: "https://laravel.com"
                                        },
                                        {
                                            image: "img/tecnologia_mysql.png",
                                            name: "MySQL",
                                            web: "https://www.mysql.com"
                                        },
                                        {
                                            image: "img/tecnologia_sass.png",
                                            name: "Sass",
                                            web: "https://sass-lang.com"
                                        },
                                        {
                                            image: "img/tecnologia_swagger.png",
                                            name: "Swagger",
                                            web: "https://swagger.io"
                                        },
                                        {
                                            image:
                                                "img/tecnologia_composer.png",
                                            name: "Composer",
                                            web: "https://getcomposer.org"
                                        },
                                        {
                                            image: "img/tecnologia_npm.png",
                                            name: "NPM",
                                            web: "https://www.npmjs.com"
                                        },
                                        {
                                            image: "img/tecnologia_angular.png",
                                            name: "Angular 5",
                                            web: "https://angular.io"
                                        },
                                        {
                                            image: "img/tecnologia_git.png",
                                            name: "Git",
                                            web: "https://git-scm.com"
                                        },
                                        {
                                            image:
                                                "img/tecnologia_sourceTree.png",
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
                                            image: "img/tecnologia_laravel.png",
                                            name: "Laravel",
                                            web: "https://laravel.com"
                                        },
                                        {
                                            image: "img/tecnologia_lumen.png",
                                            name: "Lumen",
                                            web: "https://lumen.laravel.com"
                                        },
                                        {
                                            image: "img/tecnologia_mysql.png",
                                            name: "MySQL",
                                            web: "https://www.mysql.com"
                                        },
                                        {
                                            image: "img/tecnologia_sass.png",
                                            name: "Sass",
                                            web: "https://sass-lang.com"
                                        },
                                        {
                                            image:
                                                "img/tecnologia_laravel-mix.png",
                                            name: "Laravel-mix"
                                        },
                                        {
                                            image: "img/tecnologia_swagger.png",
                                            name: "Swagger",
                                            web: "https://swagger.io"
                                        },
                                        {
                                            image:
                                                "img/tecnologia_composer.png",
                                            name: "Composer",
                                            web: "https://getcomposer.org"
                                        },
                                        {
                                            image: "img/tecnologia_npm.png",
                                            name: "NPM",
                                            web: "https://www.npmjs.com"
                                        },
                                        {
                                            image: "img/tecnologia_angular.png",
                                            name: "Angular",
                                            web: "https://angular.io"
                                        },
                                        {
                                            image: "img/tecnologia_git.png",
                                            name: "Git",
                                            web: "https://git-scm.com"
                                        },
                                        {
                                            image:
                                                "img/tecnologia_sourceTree.png",
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
                                            image: "img/tecnologia_java.png",
                                            name: "Java",
                                            web: "https://www.java.com"
                                        },
                                        {
                                            image: "/img/tecnologia_jsf.png",
                                            name: "JavaServer Faces (JSF)"
                                        },
                                        {
                                            image:
                                                "/img/tecnologia_primeFaces.png",
                                            name: "PrimeFaces",
                                            web: "https://www.primefaces.org"
                                        },
                                        {
                                            image: "/img/tecnologia_maven.png",
                                            name: "Maven",
                                            web: "https://maven.apache.org"
                                        },
                                        {
                                            image:
                                                "/img/tecnologia_postgresql.png",
                                            name: "PostgreSQL",
                                            web: "https://www.postgresql.org"
                                        },
                                        {
                                            image:
                                                "/img/tecnologia_hibernate.png",
                                            name: "Hibernate",
                                            web: "http://hibernate.org"
                                        },
                                        {
                                            image:
                                                "/img/tecnologia_liquibase.jpg",
                                            name: "Liquibase",
                                            web: "https://www.liquibase.org"
                                        },
                                        {
                                            image: "/img/tecnologia_css3.png",
                                            name: "CSS3"
                                        },
                                        {
                                            image:
                                                "/img/tecnologia_javascript.png",
                                            name: "JavaScript"
                                        },
                                        {
                                            image: "/img/tecnologia_jquery.png",
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
                                            image: "img/tecnologia_php.png",
                                            name: "PHP",
                                            web: "http://php.net"
                                        },
                                        {
                                            image: "/img/tecnologia_mysql.png",
                                            name: "MySQL",
                                            web: "https://www.mysql.com"
                                        },
                                        {
                                            image:
                                                "/img/tecnologia_liquibase.jpg",
                                            name: "Liquibase",
                                            web: "https://www.liquibase.org"
                                        },
                                        {
                                            image:
                                                "/img/tecnologia_symfony.png",
                                            name: "Symfony",
                                            web: "https://symfony.es"
                                        },
                                        {
                                            image:
                                                "/img/tecnologia_doctrine.png",
                                            name: "Doctrine",
                                            web:
                                                "https://www.doctrine-project.org"
                                        },
                                        {
                                            image: "img/tecnologia_css3.png",
                                            name: "CSS3"
                                        },
                                        {
                                            image: "img/tecnologia_sass.png",
                                            name: "Sass",
                                            web: "https://sass-lang.com"
                                        },
                                        {
                                            image:
                                                "img/tecnologia_bootstrap.png",
                                            name: "Bootstrap",
                                            web: "https://getbootstrap.com"
                                        },
                                        {
                                            image:
                                                "img/tecnologia_fontAwesome.png",
                                            name: "Font Awesome",
                                            web: "https://fontawesome.com"
                                        },
                                        {
                                            image:
                                                "img/tecnologia_javascript.png",
                                            name: "JavaScript"
                                        },
                                        {
                                            image: "img/tecnologia_jquery.png",
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
                                            image: "img/tecnologia_java.png",
                                            name: "Java",
                                            web: "https://www.java.com"
                                        },
                                        {
                                            image: "/img/tecnologia_jsf.png",
                                            name: "JavaServer Faces (JSF)"
                                        },
                                        {
                                            image:
                                                "/img/tecnologia_primeFaces.png",
                                            name: "PrimeFaces",
                                            web: "https://www.primefaces.org"
                                        },
                                        {
                                            image: "/img/tecnologia_maven.png",
                                            name: "Maven",
                                            web: "https://maven.apache.org"
                                        },
                                        {
                                            image:
                                                "/img/tecnologia_postgresql.png",
                                            name: "PostgreSQL",
                                            web: "https://www.postgresql.org"
                                        },
                                        {
                                            image:
                                                "/img/tecnologia_hibernate.png",
                                            name: "Hibernate",
                                            web: "http://hibernate.org"
                                        },
                                        {
                                            image:
                                                "/img/tecnologia_liquibase.jpg",
                                            name: "Liquibase",
                                            web: "https://www.liquibase.org"
                                        },
                                        {
                                            image: "/img/tecnologia_css3.png",
                                            name: "CSS3"
                                        },
                                        {
                                            image:
                                                "/img/tecnologia_javascript.png",
                                            name: "JavaScript"
                                        },
                                        {
                                            image: "/img/tecnologia_jquery.png",
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
                    imagen: "/img/empresa_augeDigital.png",
                    desde: "07/2016",
                    hasta: "10/2016",
                    puesto: "Desarrollador Web",
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
                                    image: "/img/tecnologia_angularjs.png",
                                    name: "AngularJS",
                                    web: "https://angularjs.org"
                                },
                                {
                                    image: "/img/tecnologia_javascript.png",
                                    name: "JavaScript"
                                },
                                {
                                    image: "/img/tecnologia_jquery.png",
                                    name: "jQuery",
                                    web: "https://jquery.com"
                                },
                                {
                                    image: "/img/tecnologia_bootstrap.png",
                                    name: "Bootstrap",
                                    web: "https://getbootstrap.com"
                                },
                                {
                                    image: "/img/tecnologia_brunch.png",
                                    name: "Brunch",
                                    web: "https://brunch.io"
                                },
                                {
                                    image: "/img/tecnologia_bower.png",
                                    name: "Bower",
                                    web: "https://bower.io"
                                },
                                {
                                    image: "/img/tecnologia_npm.png",
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
                    imagen: "/img/empresa_aertis.png",
                    desde: "05/2016",
                    hasta: "07/2016",
                    puesto: "Consultor",
                    name: "Aertis",
                    web: "http://www.aertis.es",
                    clientes: [
                        {
                            nombre: "AUGE Digital",
                            imagen: "/img/empresa_augeDigital.png",
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
                                                "/img/tecnologia_angularjs.png",
                                            name: "AngularJS",
                                            web: "https://angularjs.org"
                                        },
                                        {
                                            image:
                                                "/img/tecnologia_javascript.png",
                                            name: "JavaScript"
                                        },
                                        {
                                            image: "/img/tecnologia_jquery.png",
                                            name: "jQuery",
                                            web: "https://jquery.com"
                                        },
                                        {
                                            image:
                                                "/img/tecnologia_bootstrap.png",
                                            name: "Bootstrap",
                                            web: "https://getbootstrap.com"
                                        },
                                        {
                                            image: "/img/tecnologia_npm.png",
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
                    imagen: "/img/empresa_innopro.png",
                    desde: "01/2016",
                    hasta: "03/2016",
                    puesto: "Desarrollador",
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
                                    image: "/img/tecnologia_php.png",
                                    name: "PHP",
                                    web: "http://php.net"
                                },
                                {
                                    image: "/img/tecnologia_laravel.png",
                                    name: "Laravel",
                                    web: "https://laravel.com"
                                },
                                {
                                    image: "/img/tecnologia_javascript.png",
                                    name: "JavaScript"
                                },
                                {
                                    image: "/img/tecnologia_bootstrap.png",
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
                    imagen: "/img/empresa_sopra.png",
                    desde: "12/2014",
                    hasta: "12/2015",
                    puesto: "Tester",
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
                                    image: "/img/tecnologia_spiraTeam.png",
                                    name: "SpiraTeam",
                                    web: "https://www.inflectra.com/SpiraTeam"
                                },
                                {
                                    name: "Jenkins",
                                    image: "/img/tecnologia_jenkins.png",
                                    web: "https://jenkins.io"
                                },
                                {
                                    name: "jMeter",
                                    image: "/img/tecnologia_jmeter.png",
                                    web: "https://jmeter.apache.org"
                                },
                                {
                                    name: "HP LoadRunner",
                                    image: "/img/tecnologia_hpLoadRunner.png"
                                },
                                {
                                    name: "SoapUI",
                                    image: "/img/tecnologia_soapui.png",
                                    web: "https://www.soapui.org"
                                },
                                {
                                    name: "Selenium Webdriver",
                                    image: "/img/tecnologia_selenium.png",
                                    web:
                                        "https://www.seleniumhq.org/projects/webdriver"
                                },
                                {
                                    name: "Mantis",
                                    image: "/img/tecnologia_mantis.png",
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
                    imagen: "/img/empresa_guadaltel.png",
                    desde: "02/2014",
                    hasta: "05/2014",
                    puesto: "Desarrollador",
                    name: "Guadaltel",
                    web: "https://www.guadaltel.com",
                    proyectos: [
                        {
                            nombre: "Proyecto Interno de Investigación",
                            desde: "02/2014",
                            hasta: "05/2014",
                            puesto: "Desarrollador",
                            technologies: [
                                {
                                    image: "/img/tecnologia_java.png",
                                    name: "Java",
                                    web: "https://www.java.com"
                                },
                                {
                                    name: "Maven",
                                    image: "/img/tecnologia_maven.png",
                                    web: "https://maven.apache.org"
                                },
                                {
                                    name: "JSF",
                                    image: "/img/tecnologia_jsf.png"
                                },
                                {
                                    name: "Hibernate",
                                    image: "/img/tecnologia_hibernate.png",
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
                    imagen: "img/formacionComplementaria_istqb.png",
                    certificado: "certificado_istqb.pdf"
                },
                {
                    descripcion:
                        "Curso de 12 horas sobre la herramienta HP LoadRunner",
                    fecha: "Octubre de 2015",
                    imagen: "img/formacionComplementaria_hp_loadRunner.png",
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
                            image: "img/tecnologia_angularjs.png",
                            name: "AngularJS",
                            web: "https://angularjs.org"
                        },
                        {
                            image: "img/tecnologia_brunch.png",
                            name: "Brunch",
                            web: "https://brunch.io"
                        },
                        {
                            image: "img/tecnologia_sass.png",
                            name: "Sass",
                            web: "https://sass-lang.com"
                        },
                        {
                            image: "img/tecnologia_npm.png",
                            name: "NPM",
                            web: "https://www.npmjs.com"
                        },
                        {
                            image: "img/tecnologia_bower.png",
                            name: "Bower",
                            web: "https://bower.io"
                        },
                        {
                            image: "img/tecnologia_nodejs.png",
                            name: "NodeJS",
                            web: "https://nodejs.org"
                        },
                        {
                            image: "img/tecnologia_jshint.png",
                            name: "JSHint",
                            web: "https://jshint.com"
                        }
                    ],
                    desde: "02/2017",
                    hasta: "Actualidad",
                    imagen: "img/tecnologia_brunch.png",
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
                            image: "img/tecnologia_angularjs.png",
                            name: "AngularJS",
                            web: "https://angularjs.org"
                        },
                        {
                            image: "img/tecnologia_nodejs.png",
                            name: "Node.js",
                            web: "https://nodejs.org"
                        },
                        {
                            image: "img/tecnologia_pug.png",
                            name: "Pug",
                            web: "https://pugjs.org"
                        },
                        {
                            image: "img/tecnologia_mongodb.png",
                            name: "MongoDB",
                            web: "https://www.mongodb.com"
                        },
                        {
                            image: "img/tecnologia_bootstrap.png",
                            name: "Bootstrap",
                            web: "https://getbootstrap.com"
                        }
                    ],
                    desde: "03/2016",
                    hasta: "Actualidad",
                    imagen: "/img/yo_web4.jpg",
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
                            image: "img/tecnologia_angularjs.png",
                            name: "AngularJS",
                            web: "https://angularjs.org"
                        },
                        {
                            image: "img/tecnologia_nodejs.png",
                            name: "Node.js",
                            web: "https://nodejs.org"
                        },
                        {
                            image: "img/tecnologia_pug.png",
                            name: "Pug",
                            web: "https://pugjs.org"
                        },
                        {
                            image: "img/tecnologia_bootstrap.png",
                            name: "Bootstrap",
                            web: "https://getbootstrap.com"
                        }
                    ],
                    desde: "02/2015",
                    hasta: "06/2015",
                    imagen: "/img/proyecto_rayosol.png",
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
                            image: "img/tecnologia_angularjs.png",
                            name: "AngularJS",
                            web: "https://angularjs.org"
                        },
                        {
                            image: "img/tecnologia_nodejs.png",
                            name: "Node.js",
                            web: "https://nodejs.org"
                        },
                        {
                            image: "img/tecnologia_mongodb.png",
                            name: "MongoDB",
                            web: "https://www.mongodb.com"
                        },
                        {
                            image: "img/tecnologia_pug.png",
                            name: "Pug",
                            web: "https://pugjs.org"
                        },
                        {
                            image: "img/tecnologia_bootstrap.png",
                            name: "Bootstrap",
                            web: "https://getbootstrap.com"
                        },
                        {
                            image: "img/tecnologia_fontAwesome.png",
                            name: "Font Awesome",
                            web: "https://fontawesome.com"
                        }
                    ],
                    desde: "10/2014",
                    hasta: "01/2015",
                    imagen: "/img/proyecto_complementosMartaPazos.png",
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
                            image: "img/tecnologia_angularjs.png",
                            name: "AngularJS",
                            web: "https://angularjs.org"
                        },
                        {
                            image: "img/tecnologia_nodejs.png",
                            name: "Node.js",
                            web: "https://nodejs.org"
                        },
                        {
                            image: "img/tecnologia_mongodb.png",
                            name: "MongoDB",
                            web: "https://www.mongodb.com"
                        },
                        {
                            image: "img/tecnologia_pug.png",
                            name: "Pug",
                            web: "https://pugjs.org"
                        },
                        {
                            image: "img/tecnologia_bootstrap.png",
                            name: "Bootstrap",
                            web: "https://getbootstrap.com"
                        },
                        {
                            image: "img/tecnologia_fontAwesome.png",
                            name: "Font Awesome",
                            web: "https://fontawesome.com"
                        }
                    ],
                    desde: "05/2014",
                    hasta: "Actualidad",
                    imagen: "/img/proyecto_pronostigol.png",
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
                    imagen: "/img/proyecto_eathub.png",
                    technologies: [
                        {
                            name: "Django",
                            image: "img/tecnologia_django.png",
                            web: "https://www.djangoproject.com"
                        },
                        {
                            name: "MongoDB",
                            image: "img/tecnologia_mongodb.png",
                            web: "https://www.mongodb.com"
                        },
                        {
                            name: "HTML5",
                            image: "img/tecnologia_html5.png"
                        },
                        {
                            name: "Bootstrap",
                            image: "img/tecnologia_bootstrap.png",
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
                    imagen: "/img/proyecto_lagloria.png",
                    technologies: [
                        {
                            name: "MongoDB",
                            image: "img/tecnologia_mongodb.png",
                            web: "https://www.mongodb.com"
                        },
                        {
                            name: "Node.js",
                            image: "img/tecnologia_nodejs.png",
                            web: "https://nodejs.org"
                        },
                        {
                            name: "AngularJS",
                            image: "img/tecnologia_angularjs.png",
                            web: "https://angularjs.org"
                        },
                        {
                            name: "Pug",
                            image: "img/tecnologia_pug.png",
                            web: "https://pugjs.org"
                        },
                        {
                            name: "Bootstrap",
                            image: "img/tecnologia_bootstrap.png",
                            web: "https://getbootstrap.com"
                        },
                        {
                            name: "Font Awesome",
                            image: "img/tecnologia_fontAwesome.png",
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
                    imagen: "/img/tecnologia_github.png",
                    enlaces: [
                        {
                            tipo: "repositorio",
                            nombre: "https://github.com/jualoppaz",
                            ruta: "https://github.com/jualoppaz"
                        }
                    ]
                }
            ],
            conocimientos: [
                {
                    tipo: "Lenguajes de programación",
                    lista: [
                        {
                            name: "Java",
                            image: "/img/tecnologia_java.png",
                            level: "3",
                            web: "https://www.java.com"
                        },
                        {
                            name: "Python",
                            image: "/img/tecnologia_python.png",
                            level: "1",
                            web: "https://www.python.org"
                        },
                        {
                            name: "HTML5",
                            image: "/img/tecnologia_html5.png",
                            level: "3"
                        },
                        {
                            name: "JavaScript",
                            image: "/img/tecnologia_javascript.png",
                            level: "3"
                        },
                        {
                            name: "Node.js",
                            image: "/img/tecnologia_nodejs.png",
                            level: "3",
                            web: "https://nodejs.org"
                        },
                        {
                            name: "PHP",
                            image: "/img/tecnologia_php.png",
                            level: "3",
                            web: "http://php.net"
                        }
                    ]
                },
                {
                    tipo: "Frameworks",
                    lista: [
                        {
                            name: "jQuery",
                            image: "/img/tecnologia_jquery.png",
                            level: "3",
                            web: "https://jquery.com"
                        },
                        {
                            name: "AngularJS",
                            image: "/img/tecnologia_angularjs.png",
                            level: "3",
                            web: "https://angularjs.org"
                        },
                        {
                            name: "Angular",
                            image: "/img/tecnologia_angular.png",
                            level: "2",
                            web: "https://angular.io"
                        },
                        {
                            name: "Express.js",
                            image: "/img/tecnologia_expressjs.png",
                            level: "3",
                            web: "https://expressjs.com"
                        },
                        {
                            name: "Mongoose",
                            image: "/img/tecnologia_mongoose.png",
                            level: "2",
                            web: "https://mongoosejs.com"
                        },
                        {
                            name: "Symfony",
                            image: "/img/tecnologia_symfony.png",
                            level: "2",
                            web: "https://symfony.es"
                        },
                        {
                            name: "Laravel",
                            image: "/img/tecnologia_laravel.png",
                            level: "3",
                            web: "https://laravel.com"
                        },
                        {
                            name: "Lumen",
                            image: "/img/tecnologia_lumen.png",
                            level: "3",
                            web: "https://lumen.laravel.com"
                        },
                        {
                            name: "Spring",
                            image: "/img/tecnologia_spring.png",
                            level: "1",
                            web: "https://spring.io"
                        },
                        {
                            name: "Doctrine",
                            image: "/img/tecnologia_doctrine.png",
                            level: "2",
                            web: "https://www.doctrine-project.org"
                        },
                        {
                            name: "Hibernate",
                            image: "/img/tecnologia_hibernate.png",
                            level: "1",
                            web: "http://hibernate.org"
                        },
                        {
                            name: "Selenium Webdriver",
                            image: "/img/tecnologia_selenium.png",
                            level: "3",
                            web: "https://www.seleniumhq.org/projects/webdriver"
                        },
                        {
                            name: "Django",
                            image: "/img/tecnologia_django.png",
                            level: "1",
                            web: "https://www.djangoproject.com"
                        },
                        {
                            name: "Vue.js",
                            image: "/img/tecnologia_vuejs.png",
                            level: "1",
                            web: "https://vuejs.org"
                        },
                        {
                            name: "JavaServer Faces (jsf)",
                            image: "/img/tecnologia_jsf.png",
                            level: "1"
                        },
                        {
                            name: "PrimeFaces",
                            image: "/img/tecnologia_primeFaces.png",
                            level: "1",
                            web: "https://www.primefaces.org"
                        },
                        {
                            name: "Swagger",
                            image: "/img/tecnologia_swagger.png",
                            level: "3",
                            web: "https://swagger.io"
                        }
                    ]
                },
                {
                    tipo: "Diseño web",
                    lista: [
                        {
                            name: "CSS3",
                            image: "/img/tecnologia_css3.png",
                            level: "2"
                        },
                        {
                            name: "Sass",
                            image: "/img/tecnologia_sass.png",
                            level: "2",
                            web: "https://sass-lang.com"
                        },
                        {
                            name: "Bootstrap",
                            image: "/img/tecnologia_bootstrap.png",
                            level: "3",
                            web: "https://getbootstrap.com"
                        },
                        {
                            name: "Font Awesome",
                            image: "/img/tecnologia_fontAwesome.png",
                            level: "3",
                            web: "https://fontawesome.com"
                        }
                    ]
                },
                {
                    tipo: "Motores de Plantillas",
                    lista: [
                        {
                            name: "Pug",
                            image: "/img/tecnologia_pug.png",
                            level: "3",
                            web: "https://pugjs.org"
                        }
                    ]
                },
                {
                    tipo: "Bases de datos",
                    lista: [
                        {
                            name: "MySQL",
                            image: "/img/tecnologia_mysql.png",
                            level: "2",
                            web: "https://www.mysql.com"
                        },
                        {
                            name: "PostgreSQL",
                            image: "/img/tecnologia_postgresql.png",
                            level: "1",
                            web: "https://www.postgresql.org"
                        },
                        {
                            name: "Oracle",
                            image: "/img/tecnologia_oracle.png",
                            level: "1",
                            web: "https://www.oracle.com/es/database"
                        },
                        {
                            name: "MongoDB",
                            image: "/img/tecnologia_mongodb.png",
                            level: "3",
                            web: "https://www.mongodb.com/es"
                        }
                    ]
                },
                {
                    tipo: "Sistemas de control de versiones",
                    lista: [
                        {
                            name: "Git",
                            image: "/img/tecnologia_git.png",
                            level: "2",
                            web: "https://git-scm.com"
                        },
                        {
                            name: "Subversion",
                            image: "/img/tecnologia_subversion.png",
                            level: "2",
                            web: "https://subversion.apache.org"
                        }
                    ]
                },
                {
                    tipo: "Herramientas de Gestión de Proyectos",
                    lista: [
                        {
                            name: "Jira",
                            image: "/img/tecnologia_jira.png",
                            level: "3",
                            web: "https://es.atlassian.com/software/jira"
                        },
                        {
                            name: "Redmine",
                            image: "/img/tecnologia_redmine.png",
                            level: "3",
                            web: "https://www.redmine.org"
                        },
                        {
                            name: "Mantis",
                            image: "/img/tecnologia_mantis.png",
                            level: "3",
                            web: "https://www.mantisbt.org"
                        },
                        {
                            name: "SpiraTeam",
                            image: "/img/tecnologia_spiraTeam.png",
                            level: "3",
                            web: "https://www.inflectra.com/SpiraTeam"
                        }
                    ]
                },
                {
                    tipo: "Herramientas de Gestión de la Configuración",
                    lista: [
                        {
                            name: "NPM",
                            image: "/img/tecnologia_npm.png",
                            level: "2",
                            web: "https://www.npmjs.com"
                        },
                        {
                            name: "Bower",
                            image: "/img/tecnologia_bower.png",
                            level: "2",
                            web: "https://bower.io"
                        },
                        {
                            name: "Composer",
                            image: "/img/tecnologia_composer.png",
                            level: "1",
                            web: "https://getcomposer.org"
                        },
                        {
                            name: "Maven",
                            image: "/img/tecnologia_maven.png",
                            level: "1",
                            web: "https://maven.apache.org"
                        },
                        {
                            name: "Brunch",
                            image: "/img/tecnologia_brunch.png",
                            level: "2",
                            web: "https://brunch.io"
                        },
                        {
                            name: "Laravel-mix",
                            image: "/img/tecnologia_laravel-mix.png",
                            level: "2"
                        },
                        {
                            name: "Jenkins",
                            image: "/img/tecnologia_jenkins.png",
                            level: "1",
                            web: "https://jenkins.io"
                        },
                        {
                            name: "jMeter",
                            image: "/img/tecnologia_jmeter.png",
                            level: "1",
                            web: "https://jmeter.apache.org"
                        },
                        {
                            name: "HP LoadRunner",
                            image: "/img/tecnologia_hpLoadRunner.png",
                            level: "1"
                        },
                        {
                            name: "SoapUI",
                            image: "/img/tecnologia_soapui.png",
                            level: "1",
                            web: "https://www.soapui.org"
                        },
                        {
                            name: "Source Tree (+ Git Flow)",
                            image: "/img/tecnologia_sourceTree.png",
                            level: "2",
                            web: "https://www.sourcetreeapp.com"
                        },
                        {
                            name: "JSHint",
                            image: "/img/tecnologia_jshint.png",
                            level: "1",
                            web: "https://jshint.com"
                        },
                        {
                            name: "TestNG",
                            image: "/img/tecnologia_testng.png",
                            level: "1",
                            web: "https://testng.org"
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
                    imagen: "/img/estudios_us.png"
                }
            ]
        };

        vm.descargarCurriculum = function() {
            $window.open("/Curriculum.pdf", "_blank");
        };

        vm.host = function() {
            var host = $location.host();

            if (host == "localhost" || host == "127.0.0.1") {
                host += ":" + $location.port();
            }

            return host;
        };
    });
