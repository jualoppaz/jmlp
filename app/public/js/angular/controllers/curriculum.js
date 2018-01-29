/**
 * Created by JuanManuel on 13/02/2016.
 */

angular.module('jmlp').controller('CurriculumController', function($scope, $location, $window){

    $scope.$parent.title = "Currículum";

    $scope.curriculum = {
        formacionAcademica: [
            {
                desde: "09/2010",
                hasta: "09/2014",
                descripcion: "Grado en Ingeniería Informática - Ingeniería del Software por la Universidad de Sevilla (2010-2014)",
                imagen: "/img/estudios_us.png"
            }
        ],
        experienciaProfesional: [
            {
                descripcion: "",
                imagen: "/img/empresa_siag.png",
                desde: "10/2016",
                hasta: "Actualidad",
                cargo: "Consultor",
                empresa: "SIAG Consulting",
                clientes: [
                    {
                        nombre: "GMV",
                        imagen: "/img/empresa_gmv.png",
                        desde: "10/2016",
                        hasta: "Actualidad",
                        descripcion: "Colaboración con GMV para participar en el desarrollo de diversos proyectos como Desarrollador Web.",
                        proyectos: [
                            {
                                nombre: "Dipippo",
                                desde: "10/2017",
                                hasta: "Actualidad",
                                cargo: "Desarrollador Web",
                                tecnologias: [
                                    {
                                        imagen: "img/tecnologia_laravel.png",
                                        nombre: "Laravel"
                                    },{
                                        imagen: "img/tecnologia_lumen.png",
                                        nombre: "Lumen"
                                    },{
                                        imagen: "img/tecnologia_mysql.png",
                                        nombre: "MySQL"
                                    },{
                                        imagen: "img/tecnologia_sass.png",
                                        nombre: "Sass"
                                    },{
                                        imagen: "img/tecnologia_laravel-mix.png",
                                        nombre: "Laravel-mix"
                                    },{
                                        imagen: "img/tecnologia_swagger.png",
                                        nombre: "Swagger"
                                    },{
                                        imagen: "img/tecnologia_composer.png",
                                        nombre: "Composer"
                                    },{
                                        imagen: "img/tecnologia_npm.png",
                                        nombre: "NPM"
                                    },{
                                        imagen: "img/tecnologia_angular.png",
                                        nombre: "Angular"
                                    },{
                                        imagen: "img/tecnologia_git.png",
                                        nombre: "Git"
                                    },{
                                        imagen: "img/tecnologia_sourceTree.png",
                                        nombre: "SourceTree (+ Git Flow)"
                                    }
                                ],
                                funciones: [
                                    {
                                        nombre: "Diseño y Desarrollo de APIs Rest con Laravel/Lumen"
                                    },{
                                        nombre: "Maquetación CSS con Sass a través de laravel-mix"
                                    },{
                                        nombre: "Documentación de APIs Rest con Swagger"
                                    },{
                                        nombre: "Instalación y configuración de entorno de desarrollo"
                                    }, {
                                        nombre: "Gestión de código mediante Git, haciendo uso de la metodología Git Flow"
                                    },{
                                        nombre: "Análisis de Requisitos"
                                    },{
                                        nombre: "Planificación y estimación de tareas"
                                    },{
                                        nombre: "Participación en diseño y modelado"
                                    }
                                ]
                            },{
                                nombre: "FARO Evidencias",
                                desde: "07/2017",
                                hasta: "10/2017",
                                cargo: "Desarrollador Web",
                                tecnologias: [
                                    {
                                        imagen: "img/tecnologia_java.png",
                                        nombre: "Java"
                                    },{
                                        imagen: "/img/tecnologia_jsf.png",
                                        nombre: "JavaServer Faces (JSF)"
                                    },{
                                        imagen: "/img/tecnologia_primeFaces.png",
                                        nombre: "PrimeFaces"
                                    },{
                                        imagen: "/img/tecnologia_maven.png",
                                        nombre: "Maven"
                                    },{
                                        imagen: "/img/tecnologia_postgresql.png",
                                        nombre: "PostgreSQL"
                                    },{
                                        imagen: "/img/tecnologia_hibernate.png",
                                        nombre: "Hibernate"
                                    },{
                                        imagen: "/img/tecnologia_liquibase.jpg",
                                        nombre: "Liquibase"
                                    },{
                                        imagen: "/img/tecnologia_css3.png",
                                        nombre: "CSS3"
                                    },{
                                        imagen: "/img/tecnologia_javascript.png",
                                        nombre: "JavaScript"
                                    },{
                                        imagen: "/img/tecnologia_jquery.png",
                                        nombre: "jQuery"
                                    }
                                ],
                                funciones: [
                                    {
                                        nombre: "Maquetación CSS"
                                    },{
                                        nombre: "Corrección de defectos en Backend"
                                    },{
                                        nombre: "Corrección de defectos en Frontend"
                                    },{
                                        nombre: "Análisis de Requisitos"
                                    },{
                                        nombre: "Planificación y Estimación de tareas"
                                    }
                                ]
                            },{
                                nombre: "Cambio TRM",
                                desde: "12/2016",
                                hasta: "07/2017",
                                cargo: "Desarrollador Web",
                                tecnologias: [
                                    {
                                        imagen: "img/tecnologia_php.png",
                                        nombre: "PHP"
                                    },{
                                        imagen: "/img/tecnologia_mysql.png",
                                        nombre: "MySQL"
                                    },{
                                        imagen: "/img/tecnologia_liquibase.jpg",
                                        nombre: "Liquibase"
                                    },{
                                        imagen: "/img/tecnologia_symfony.png",
                                        nombre: "Symfony"
                                    },{
                                        imagen: "/img/tecnologia_doctrine.png",
                                        nombre: "Doctrine"
                                    },{
                                        imagen: "img/tecnologia_css3.png",
                                        nombre: "CSS3"
                                    },{
                                        imagen: "img/tecnologia_sass.png",
                                        nombre: "Sass"
                                    },{
                                        imagen: "img/tecnologia_bootstrap.png",
                                        nombre: "Bootstrap"
                                    },{
                                        imagen: "img/tecnologia_fontAwesome.png",
                                        nombre: "Font Awesome"
                                    },{
                                        imagen: "img/tecnologia_javascript.png",
                                        nombre: "JavaScript"
                                    },{
                                        imagen: "img/tecnologia_jquery.png",
                                        nombre: "jQuery"
                                    }
                                ],
                                funciones: [
                                    {
                                        nombre: "Desarrollo de WebServices en PHP con NuSOAP"
                                    },{
                                        nombre: "Maquetación CSS con Bootstrap"
                                    },{
                                        nombre: "Corrección de defectos en Backend"
                                    },{
                                        nombre: "Corrección de defectos en Frontend"
                                    },{
                                        nombre: "Análisis de Requisitos"
                                    },{
                                        nombre: "Planificación y Estimación de tareas"
                                    }
                                ]
                            },{
                                nombre: "FARO Evidencias",
                                desde: "10/2016",
                                hasta: "12/2016",
                                cargo: "Desarrollador Web",
                                tecnologias: [
                                    {
                                        imagen: "img/tecnologia_java.png",
                                        nombre: "Java"
                                    },{
                                        imagen: "/img/tecnologia_jsf.png",
                                        nombre: "JavaServer Faces (JSF)"
                                    },{
                                        imagen: "/img/tecnologia_primeFaces.png",
                                        nombre: "PrimeFaces"
                                    },{
                                        imagen: "/img/tecnologia_maven.png",
                                        nombre: "Maven"
                                    },{
                                        imagen: "/img/tecnologia_postgresql.png",
                                        nombre: "PostgreSQL"
                                    },{
                                        imagen: "/img/tecnologia_hibernate.png",
                                        nombre: "Hibernate"
                                    },{
                                        imagen: "/img/tecnologia_liquibase.jpg",
                                        nombre: "Liquibase"
                                    },{
                                        imagen: "/img/tecnologia_css3.png",
                                        nombre: "CSS3"
                                    },{
                                        imagen: "/img/tecnologia_javascript.png",
                                        nombre: "JavaScript"
                                    },{
                                        imagen: "/img/tecnologia_jquery.png",
                                        nombre: "jQuery"
                                    }
                                ],
                                funciones: [
                                    {
                                        nombre: "Maquetación CSS"
                                    },{
                                        nombre: "Corrección de defectos en Backend"
                                    },{
                                        nombre: "Corrección de defectos en Frontend"
                                    },{
                                        nombre: "Diseño de Google Site para el BBVA"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },{
                descripcion: "Incorporación a plantilla tras 2 meses de buen trabajo previo como Desarrollador Web con AngularJS",
                imagen: "/img/empresa_augeDigital.png",
                desde:"07/2016",
                hasta: "10/2016",
                cargo: "Desarrollador Web",
                empresa: "AUGE Digital",
                proyectos: [
                    {
                        nombre: "Portal del Investigador de Universitas XXI - Investigación",
                        descripcion: "Desarrollo del Frontend del Portal del Investigador de Universitas XXI - Investigación con AngularJS.",
                        desde: "05/2016",
                        hasta: "07/2016",
                        cargo: "Desarrollador Web",
                        tecnologias: [
                            {
                                imagen: "/img/tecnologia_angularjs.png",
                                nombre: "AngularJS"
                            },{
                                imagen: "/img/tecnologia_javascript.png",
                                nombre: "JavaScript"
                            },{
                                imagen: "/img/tecnologia_jquery.png",
                                nombre: "jQuery"
                            },{
                                imagen: "/img/tecnologia_bootstrap.png",
                                nombre: "Bootstrap"
                            },{
                                imagen: "/img/tecnologia_brunch.png",
                                nombre: "Brunch"
                            },{
                                imagen: "/img/tecnologia_bower.png",
                                nombre: "Bower"
                            },{
                                imagen: "/img/tecnologia_npm.png",
                                nombre: "NPM"
                            }
                        ],
                        funciones: [
                            {
                                nombre: "Maquetación CSS con Bootstrap"
                            },{
                                nombre: "Desarrollo web con AngularJS"
                            },{
                                nombre: "Desarrollo de servicios con AngularJS para consumir API de terceros"
                            },{
                                nombre: "Análisis y Diseño de soluciones"
                            },{
                                nombre: "Documentación de código"
                            }
                        ]
                    }
                ]
            },{
                imagen: "/img/empresa_aertis.png",
                desde:"05/2016",
                hasta: "07/2016",
                cargo: "Consultor",
                empresa: "Aertis",
                clientes: [
                    {
                        nombre: "AUGE Digital",
                        imagen: "/img/empresa_augeDigital.png",
                        desde: "05/2016",
                        hasta: "07/2016",
                        descripcion: "Participación en un proyecto de Desarrollo Web con AngularJS por parte de AUGE Digital.",
                        proyectos: [
                            {
                                nombre: "Portal del Investigador de Universitas XXI - Investigación",
                                desde: "05/2016",
                                hasta: "07/2016",
                                cargo: "Desarrollador Web",
                                tecnologias: [
                                    {
                                        imagen: "/img/tecnologia_angularjs.png",
                                        nombre: "AngularJS"
                                    },{
                                        imagen: "/img/tecnologia_javascript.png",
                                        nombre: "JavaScript"
                                    },{
                                        imagen: "/img/tecnologia_jquery.png",
                                        nombre: "jQuery"
                                    },{
                                        imagen: "/img/tecnologia_bootstrap.png",
                                        nombre: "Bootstrap"
                                    },{
                                        imagen: "/img/tecnologia_npm.png",
                                        nombre: "NPM"
                                    }
                                ],
                                funciones: [
                                    {
                                        nombre: "Maquetación CSS con Bootstrap"
                                    },{
                                        nombre: "Desarrollo web con AngularJS"
                                    },{
                                        nombre: "Desarrollo de servicios con AngularJS para consumir API de terceros"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },{
                descripcion: "Desarrollo de aplicaciones web con tecnologías tales como PHP o Laravel y maquetación web con Bootstrap.",
                imagen: "/img/empresa_innopro.png",
                desde:"01/2016",
                hasta: "03/2016",
                cargo: "Desarrollador",
                empresa: "Innopro Advanced",
                proyectos: [
                    {
                        nombre: "Certificaciones TIC",
                        descripcion: "Aplicación web realizada con PHP para Media Interactiva",
                        desde: "01/2016",
                        hasta: "03/2016",
                        cargo: "Desarrollador Web",
                        tecnologias: [
                            {
                                imagen: "/img/tecnologia_php.png",
                                nombre: "PHP"
                            },{
                                imagen: "/img/tecnologia_laravel.png",
                                nombre: "Laravel"
                            },{
                                imagen: "/img/tecnologia_javascript.png",
                                nombre: "JavaScript"
                            },{
                                imagen: "/img/tecnologia_bootstrap.png",
                                nombre: "Bootstrap"
                            }
                        ],
                        funciones: [
                            {
                                nombre: "Desarrollo web con PHP"
                            },{
                                nombre: "Modificación de componentes en Laravel"
                            },{
                                nombre: "Maquetación CSS con Bootstrap"
                            },{
                                nombre: "Animación de contenidos con JavaScript"
                            }
                        ]
                    }
                ]
            },{
                descripcion: "Realización de servicios relacionados con certificación de aplicaciones desarrolladas " +
                "por otras empresas, así como realización de pruebas funcionales, automatización de pruebas con " +
                "Selenium o revisiones de documentos técnicos.",
                imagen: "/img/empresa_sopra.png",
                desde:"12/2014",
                hasta: "12/2015",
                cargo: "Tester",
                empresa: "Sopra Steria",
                proyectos: [
                    {
                        nombre: "Gestión de Calidad sobre aplicaciones para la CMAOT",
                        descripcion: "Aseguramiento de la calidad sobre multitud de aplicaciones web realizadas para " +
                            "la Consejería de Medio Ambiente y Ordenación del Territorio",
                        desde: "12/2014",
                        hasta: "12/2015",
                        cargo: "Tester",
                        tecnologias: [
                            {
                                imagen: "/img/tecnologia_spiraTeam.png",
                                nombre: "SpiraTeam"
                            },{
                                nombre: "Jenkins",
                                imagen: "/img/tecnologia_jenkins.png"
                            },{
                                nombre: "jMeter",
                                imagen: "/img/tecnologia_jmeter.png"
                            },{
                                nombre: "HP LoadRunner",
                                imagen: "/img/tecnologia_hpLoadRunner.png"
                            },{
                                nombre: "SoapUI",
                                imagen: "/img/tecnologia_soapui.png"
                            },{
                                nombre: "Selenium Webdriver",
                                imagen: "/img/tecnologia_selenium.png"
                            },{
                                nombre: "Mantis",
                                imagen: "/img/tecnologia_mantis.png"
                            }
                        ],
                        funciones: [
                            {
                                nombre: "Realización de pruebas funcionales manuales"
                            },{
                                nombre: "Realización de pruebas funcionales automatizadas con Selenium"
                            }, {
                                nombre: "Realización de pruebas de rendimiento con jMeter"
                            },{
                                nombre: "Reporte de incidencias en Mantis"
                            },{
                                nombre: "Soporte técnico a usuarios y desarrolladores"
                            },{
                                nombre: "Soporte y revisión de tareas de otros compañeros"
                            }
                        ]
                    }
                ]
            },{
                descripcion: "Prácticas no remuneradas de 150 horas como desarrollador con tecnologías Java2EE e interfaces de usuario con " +
                "Oracle ADF, JSF y JBossSeam.",
                imagen: "/img/empresa_guadaltel.png",
                desde:"02/2014",
                hasta: "05/2014",
                cargo: "Desarrollador",
                empresa: "Guadaltel",
                proyectos: [
                    {
                        nombre: "Proyecto Interno de Investigación",
                        desde: "02/2014",
                        hasta: "05/2014",
                        cargo: "Desarrollador",
                        tecnologias: [
                            {
                                imagen: "/img/tecnologia_java.png",
                                nombre: "Java"
                            },{
                                nombre: "Maven",
                                imagen: "/img/tecnologia_maven.png"
                            },{
                                nombre: "JSF",
                                imagen: "/img/tecnologia_jsf.png"
                            },{
                                nombre: "Hibernate",
                                imagen: "/img/tecnologia_hibernate.png"
                            }
                        ],
                        funciones: [
                            {
                                nombre: "Desarrollo de Vistas y Controladores para interfaces de usuario"
                            },{
                                nombre: "Investigación para desarrollo de PDFs autorrellenables"
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
            },{
                descripcion: "Curso de 12 horas sobre la herramienta HP LoadRunner",
                fecha: "Octubre de 2015",
                imagen: "img/formacionComplementaria_hp_loadRunner.png",
                certificado: "certificado_hploadrunner.pdf"
            }
        ],
        proyectos: [
            {
                resumen: "Desarrollo de la aplicación web CIDA: Continuous Integration Demo App",
                descripcion: "Desarrollo de una aplicación web realizada con AngularJS, la cual incluye una Integración " +
                    "Continua muy completa con la herramienta Brunch, de modo que sea pueda agilizar el desarrollo " +
                    "desde la compilación de assets hasta su despliegue optimizado en un sistema como Heroku.",
                tecnologias: [
                    {
                        imagen: "img/tecnologia_angularjs.png",
                        nombre: "AngularJS"
                    },{
                        imagen: "img/tecnologia_brunch.png",
                        nombre: "Brunch"
                    },{
                        imagen: "img/tecnologia_sass.png",
                        nombre: "Sass"
                    },{
                        imagen: "img/tecnologia_npm.png",
                        nombre: "NPM"
                    },{
                        imagen: "img/tecnologia_bower.png",
                        nombre: "Bower"
                    },{
                        imagen: "img/tecnologia_nodejs.png",
                        nombre: "NodeJS"
                    },{
                        imagen: "img/tecnologia_jshint.png",
                        nombre: "JSHint"
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
                    },{
                        tipo: "repositorio",
                        nombre: "https://github.com/jualoppaz/cida",
                        ruta: "https://github.com/jualoppaz/cida"
                    }
                ]
            },{
                resumen: "Desarrollo de mi página web personal",
                descripcion: "Desarrollo de mi página web personal para darme a conocer, donde se puede consultar mi currículum y " +
                    "mi expediente académico, entre otras cosas. Esta aplicación web no es igual que el resto, ya que ha sido " +
                    "realizada con la filosofía SPA (Single Page Application). Esto quiere decir que consta de una " +
                    "sola página con diferentes vistas, de modo que no se necesita recargar la página debido a que las vistas " +
                    "se encuentran en el cliente y no en el servidor.",
                tecnologias: [
                    {
                        imagen: "img/tecnologia_angularjs.png",
                        nombre: "AngularJS"
                    },{
                        imagen: "img/tecnologia_nodejs.png",
                        nombre: "Node.js"
                    },{
                        imagen: "img/tecnologia_pug.png",
                        nombre: "Pug"
                    },{
                        imagen: "img/tecnologia_mongodb.png",
                        nombre: "MongoDB"
                    },{
                        imagen: "img/tecnologia_bootstrap.png",
                        nombre: "Bootstrap"
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
            },{
                resumen: "Desarrollo de la página web para la empresa Rayosol Toldos",
                descripcion: "Página web para la empresa Rayosol Toldos con el objetivo de mostrar los distintos modelos de toldos que fabrican e instalan," +
                "así como facilitar a los usuarios una forma de contacto inmediata mediante el envío de emails desde la propia página.",
                tecnologias: [
                    {
                        imagen: "img/tecnologia_angularjs.png",
                        nombre: "AngularJS"
                    },{
                        imagen: "img/tecnologia_nodejs.png",
                        nombre: "Node.js"
                    },{
                        imagen: "img/tecnologia_pug.png",
                        nombre: "Pug"
                    },{
                        imagen: "img/tecnologia_bootstrap.png",
                        nombre: "Bootstrap"
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
            },{
                resumen: "Desarrollo de la página web de Complementos Marta Pazos",
                descripcion: "Desarrollo de la página web de Complementos Marta Pazos la cual consta de: un amplio catálogo de productos," +
                " panel de administración de todo tipo de contenidos de la web como noticias o detalles de los productos, comercio " +
                "electrónico integrando la API REST de Paypal con el carrito de compras y un diseño totalmente personalizado acorde con el oficio.",
                tecnologias: [
                    {
                        imagen: "img/tecnologia_angularjs.png",
                        nombre: "AngularJS"
                    },{
                        imagen: "img/tecnologia_nodejs.png",
                        nombre: "Node.js"
                    },{
                        imagen: "img/tecnologia_mongodb.png",
                        nombre: "MongoDB"
                    },{
                        imagen: "img/tecnologia_pug.png",
                        nombre: "Pug"
                    },{
                        imagen: "img/tecnologia_bootstrap.png",
                        nombre: "Bootstrap"
                    },{
                        imagen: "img/tecnologia_fontAwesome.png",
                        nombre: "Font Awesome"
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
            },{
                resumen: "Desarrollo de la aplicación web Pronostigol",
                descripcion: "Aplicación web para consultar estadísticas relacionadas con los distintos sorteos de Loterías y Apuestas " +
                "del Estado (LAE).",
                tecnologias: [
                    {
                        imagen: "img/tecnologia_angularjs.png",
                        nombre: "AngularJS"
                    },{
                        imagen: "img/tecnologia_nodejs.png",
                        nombre: "Node.js"
                    },{
                        imagen: "img/tecnologia_mongodb.png",
                        nombre: "MongoDB"
                    },{
                        imagen: "img/tecnologia_pug.png",
                        nombre: "Pug"
                    },{
                        imagen: "img/tecnologia_bootstrap.png",
                        nombre: "Bootstrap"
                    },{
                        imagen: "img/tecnologia_fontAwesome.png",
                        nombre: "Font Awesome"
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
                    },{
                        tipo: "web",
                        nombre: "http://www.pronostigol.es",
                        ruta: "http://www.pronostigol.es"
                    }
                ]
            },{
                resumen: "Desarrollo de la aplicación web EatHub",
                descripcion: "Aplicación web para crear, compartir y personalizar recetas. Proyecto realizado durante la asignatura " +
                "ISPP (Ingeniería del Software y Práctica Profesional) del cuarto curso del Grado en Ingniería Informática - Ingeniería " +
                "del Software de la Universidad de Sevilla.",
                desde: "02/2014",
                hasta: "09/2014",
                imagen: "/img/proyecto_eathub.png",
                tecnologias: [
                    {
                        nombre: "Django",
                        imagen: "img/tecnologia_django.png"
                    },{
                        nombre: "MongoDB",
                        imagen: "img/tecnologia_mongodb.png"
                    },{
                        nombre: "HTML5",
                        imagen: "img/tecnologia_html5.png"
                    },{
                        nombre: "Bootstrap",
                        imagen: "img/tecnologia_bootstrap.png"
                    }
                ],
                enlaces: [
                    {
                        tipo: "web",
                        nombre: "http://eat-hub.herokuapp.com",
                        ruta: "http://eat-hub.herokuapp.com"
                    },{
                        tipo: "repositorio",
                        nombre: "https://github.com/EatHub",
                        ruta: "https://github.com/EatHub"
                    }
                ]
            },{
                resumen: "Trabajo de Fin de Grado: Desarrollo de la página web de Caramelos La Gloria",
                descripcion: "Página web para la empresa Caramelos La Gloria con el objetivo de mostrar un amplio catálogo de " +
                "productos, todo ello con un diseño innovador y atractivo para los usuarios. Este proyecto fue presentado como Trabajo " +
                "de Fin de Grado en el Grado en Ingeniería Informática - Ingeniería del Software.",
                desde: "12/2013",
                hasta: "09/2014",
                imagen: "/img/proyecto_lagloria.png",
                tecnologias: [
                    {
                        nombre: "MongoDB",
                        imagen: "img/tecnologia_mongodb.png"
                    },{
                        nombre: "Node.js",
                        imagen: "img/tecnologia_nodejs.png"
                    },{
                        nombre: "AngularJS",
                        imagen: "img/tecnologia_angularjs.png"
                    },{
                        nombre: "Pug",
                        imagen: "img/tecnologia_pug.png"
                    },{
                        nombre: "Bootstrap",
                        imagen: "img/tecnologia_bootstrap.png"
                    },{
                        nombre: "Font Awesome",
                        imagen: "img/tecnologia_fontAwesome.png"
                    }
                ],
                enlaces: [
                    {
                        tipo: "web",
                        nombre: "http://carameloslagloria.herokuapp.com",
                        ruta: "http://carameloslagloria.herokuapp.com"
                    },{
                        tipo: "repositorio",
                        nombre: "https://github.com/jualoppaz/lagloria",
                        ruta: "https://github.com/jualoppaz/lagloria"
                    },{
                        tipo: "Memoria",
                        nombre: "Documentación del proyecto",
                        ruta: "/docs/memoria_tfg.pdf"
                    }
                ]
            },{
                resumen: "Usuario activo en la comunidad de Desarolladores GitHub",
                descripcion: "En mi perfil de GitHub tengo publicados multitud de proyectos para tener copias de seguridad de los mismos y, " +
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
                        nombre: "Java",
                        imagen: "/img/tecnologia_java.png",
                        nivel: "3"
                    },{
                        nombre: "Python",
                        imagen: "/img/tecnologia_python.png",
                        nivel: "1"
                    },{
                        nombre: "HTML5",
                        imagen: "/img/tecnologia_html5.png",
                        nivel: "3"
                    },{
                        nombre: "JavaScript",
                        imagen: "/img/tecnologia_javascript.png",
                        nivel: "3"
                    },{
                        nombre: "Node.js",
                        imagen: "/img/tecnologia_nodejs.png",
                        nivel: "3"
                    },{
                        nombre: "PHP",
                        imagen: "/img/tecnologia_php.png",
                        nivel: "3"
                    }
                ]
            },{
                tipo: "Frameworks",
                lista: [
                    {
                        nombre: "jQuery",
                        imagen: "/img/tecnologia_jquery.png",
                        nivel: "3"
                    },{
                        nombre: "AngularJS",
                        imagen: "/img/tecnologia_angularjs.png",
                        nivel: "3"
                    },{
                        nombre: "Angular",
                        imagen: "/img/tecnologia_angular.png",
                        nivel: "1"
                    },{
                        nombre: "Express.js",
                        imagen: "/img/tecnologia_expressjs.png",
                        nivel: "3"
                    },{
                        nombre: "Mongoose",
                        imagen: "/img/tecnologia_mongoose.png",
                        nivel: "2"
                    },{
                        nombre: "Symfony",
                        imagen: "/img/tecnologia_symfony.png",
                        nivel: "2"
                    },{
                        nombre: "Laravel",
                        imagen: "/img/tecnologia_laravel.png",
                        nivel: "3"
                    },{
                        nombre: "Lumen",
                        imagen: "/img/tecnologia_lumen.png",
                        nivel: "3"
                    },{
                        nombre: "Spring",
                        imagen: "/img/tecnologia_spring.png",
                        nivel: "1"
                    },{
                        nombre: "Doctrine",
                        imagen: "/img/tecnologia_doctrine.png",
                        nivel: "2"
                    },{
                        nombre: "Hibernate",
                        imagen: "/img/tecnologia_hibernate.png",
                        nivel: "1"
                    },{
                        nombre: "Selenium Webdriver",
                        imagen: "/img/tecnologia_selenium.png",
                        nivel: "3"
                    },{
                        nombre: "Django",
                        imagen: "/img/tecnologia_django.png",
                        nivel: "1"
                    },{
                        nombre: "Vue.js",
                        imagen: "/img/tecnologia_vuejs.png",
                        nivel: "1"
                    },{
                        nombre: "JavaServer Faces (jsf)",
                        imagen: "/img/tecnologia_jsf.png",
                        nivel: "1"
                    },{
                        nombre: "PrimeFaces",
                        imagen: "/img/tecnologia_primeFaces.png",
                        nivel: "1"
                    },{
                        nombre: "Swagger",
                        imagen: "/img/tecnologia_swagger.png",
                        nivel: "3"
                    }
                ]
            },{
                tipo: "Diseño web",
                lista: [
                    {
                        nombre: "CSS3",
                        imagen: "/img/tecnologia_css3.png",
                        nivel: "2"
                    },{
                        nombre: "Sass",
                        imagen: "/img/tecnologia_sass.png",
                        nivel: "2"
                    },{
                        nombre: "Bootstrap",
                        imagen: "/img/tecnologia_bootstrap.png",
                        nivel: "3"
                    },{
                        nombre: "Font Awesome",
                        imagen: "/img/tecnologia_fontAwesome.png",
                        nivel: "3"
                    }
                ]
            },{
                tipo: "Motores de Plantillas",
                lista: [
                    {
                        nombre: "Pug",
                        imagen: "/img/tecnologia_pug.png",
                        nivel: "3"
                    }
                ]
            },{
                tipo: "Bases de datos",
                lista: [
                    {
                        nombre: "MySQL",
                        imagen: "/img/tecnologia_mysql.png",
                        nivel: "2"
                    },{
                        nombre: "PostgreSQL",
                        imagen: "/img/tecnologia_postgresql.png",
                        nivel: "1"
                    },{
                        nombre: "Oracle",
                        imagen: "/img/tecnologia_oracle.png",
                        nivel: "1"
                    },{
                        nombre: "MongoDB",
                        imagen: "/img/tecnologia_mongodb.png",
                        nivel: "3"
                    }
                ]
            },{
                tipo: "Sistemas de control de versiones",
                lista: [
                    {
                        nombre: "Git",
                        imagen: "/img/tecnologia_git.png",
                        nivel: "2"
                    },{
                        nombre: "Subversion",
                        imagen: "/img/tecnologia_subversion.png",
                        nivel: "2"
                    }
                ]
            },{
                tipo: "Herramientas de Gestión de Proyectos",
                lista: [
                    {
                        nombre: "Jira",
                        imagen: "/img/tecnologia_jira.png",
                        nivel: "3"
                    },{
                        nombre: "Redmine",
                        imagen: "/img/tecnologia_redmine.png",
                        nivel: "3"
                    },{
                        nombre: "Mantis",
                        imagen: "/img/tecnologia_mantis.png",
                        nivel: "3"
                    },{
                        nombre: "SpiraTeam",
                        imagen: "/img/tecnologia_spiraTeam.png",
                        nivel: "3"
                    }
                ]
            },{
                tipo: "Herramientas de Gestión de la Configuración",
                lista: [
                    {
                        nombre: "NPM",
                        imagen: "/img/tecnologia_npm.png",
                        nivel: "2"
                    },{
                        nombre: "Bower",
                        imagen: "/img/tecnologia_bower.png",
                        nivel: "2"
                    },{
                        nombre: "Composer",
                        imagen: "/img/tecnologia_composer.png",
                        nivel: "1"
                    },{
                        imagen: "/img/tecnologia_maven.png",
                        nombre: "Maven",
                        nivel: "1"
                    },{
                        nombre: "Brunch",
                        imagen: "/img/tecnologia_brunch.png",
                        nivel: "2"
                    },{
                        nombre: "Laravel-mix",
                        imagen: "/img/tecnologia_laravel-mix.png",
                        nivel: "2"
                    },{
                        nombre: "Jenkins",
                        imagen: "/img/tecnologia_jenkins.png",
                        nivel: "1"
                    },{
                        nombre: "jMeter",
                        imagen: "/img/tecnologia_jmeter.png",
                        nivel: "1"
                    },{
                        nombre: "HP LoadRunner",
                        imagen: "/img/tecnologia_hpLoadRunner.png",
                        nivel: "1"
                    },{
                        nombre: "SoapUI",
                        imagen: "/img/tecnologia_soapui.png",
                        nivel: "1"
                    },{
                        nombre: "Source Tree (+ Git Flow)",
                        imagen: "/img/tecnologia_sourceTree.png",
                        nivel: "2"
                    },{
                        nombre: "JSHint",
                        imagen: "/img/tecnologia_jshint.png",
                        nivel: "1"
                    },{
                        nombre: "TestNG",
                        imagen: "/img/tecnologia_testng.png",
                        nivel: "1"
                    }
                ]
            }
        ],
        idiomas: [
            {
                nombre: "Inglés",
                nivel: "B1",
                descripcion: "Acreditación de nivel B1 por el Instituto de idiomas de la Universidad de Sevilla.",
                fecha: "2012",
                imagen: "/img/estudios_us.png"
            }
        ]
    };

    $scope.descargarCurriculum = function(){
        $window.open('/Curriculum.pdf', '_blank');
    };

    $scope.host = function(){

        var host = $location.host();

        if(host == "localhost" || host == "127.0.0.1"){
            host += ":" + $location.port();
        }

        return host;
    };
});