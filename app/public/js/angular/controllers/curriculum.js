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
                descripcion: "Desarrollo del Frontend del Portal del Investigador de Universitas XXI - Investigación con AngularJS.",
                imagen: "/img/empresa_augeDigital.png",
                desde:"05/2016",
                hasta: "Actualidad",
                cargo: "Desarrollador",
                empresa: "AUGE Digital"
            },{
                descripcion: "Desarrollo de aplicaciones web con tecnologías tales como PHP, Magento o Laravel y maquetación web con Bootstrap.",
                imagen: "/img/empresa_innopro.png",
                desde:"01/2016",
                hasta: "03/2016",
                cargo: "Desarrollador",
                empresa: "Innopro Advanced"
            },{
                descripcion: "Realización de servicios relacionados con certificación de aplicaciones desarrolladas por otras empresas," +
                " así como realización de pruebas funcionales, automatización de pruebas con Selenium o revisiones de documentos técnicos.",
                imagen: "/img/empresa_sopra.png",
                desde:"12/2014",
                hasta: "12/2015",
                cargo: "Tester",
                empresa: "Sopra Steria"
            },{
                descripcion: "Realización de tareas relacionadas con bases de datos y maquetación web, siempre en torno a páginas web realizadas " +
                "con WordPress.",
                imagen: "/img/empresa_maravish.png",
                desde:"10/2014",
                hasta: "11/2014",
                cargo: "Técnico Programador",
                empresa: "Maravish Promotions"
            },{
                descripcion: "Prácticas no remuneradas de 150 horas como desarrollador con tecnologías Java2EE e interfaces de usuario con " +
                "Oracle ADF, JSF y JBossSeam.",
                imagen: "/img/empresa_guadaltel.png",
                desde:"02/2014",
                hasta: "05/2014",
                cargo: "Desarrollador",
                empresa: "Guadaltel"
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
                        nombre: "Pug (antes Jade)"
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
                        nombre: "Pug (antes Jade)"
                    },{
                        imagen: "img/tecnologia_bootstrap.png",
                        nombre: "Bootstrap"
                    }
                ],desde: "02/2015",
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
                        nombre: "Pug (antes Jade)"
                    },{
                        imagen: "img/tecnologia_bootstrap.png",
                        nombre: "Bootstrap"
                    },{
                        imagen: "img/tecnologia_fontAwesome.png",
                        nombre: "Font Awesome"
                    }
                ],desde: "10/2014",
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
                        nombre: "Pug (antes Jade)",
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
                        nombre: "Coffee Script",
                        imagen: "/img/tecnologia_coffeeScript.png",
                        nivel: "1"
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
                        nombre: "Express.js",
                        imagen: "/img/tecnologia_expressjs.png",
                        nivel: "3"
                    },{
                        nombre: "Mongoose",
                        imagen: "/img/tecnologia_mongoose.png",
                        nivel: "2"
                    },{
                        nombre: "Laravel",
                        imagen: "/img/tecnologia_laravel.png",
                        nivel: "1"
                    },{
                        nombre: "Spring",
                        imagen: "/img/tecnologia_spring.png",
                        nivel: "1"
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
                        nombre: "Pug (antes Jade)",
                        imagen: "/img/tecnologia_pug.png",
                        nivel: "3"
                    }
                ]
            },/*{
                tipo: "Gestores de contenido",
                lista: [
                    {
                        nombre: "WordPress",
                        imagen: "/img/tecnologia_wordPress.png",
                        nivel: "2"
                    }
                ]
            },*/{
                tipo: "Bases de datos",
                lista: [
                    {
                        nombre: "MySQL",
                        imagen: "/img/tecnologia_mysql.png",
                        nivel: "2"
                    },{
                        nombre: "Oracle",
                        imagen: "/img/tecnologia_oracle.png",
                        nivel: "2"
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
                        nombre: "Brunch",
                        imagen: "/img/tecnologia_brunch.png",
                        nivel: "1"
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
                    }
                ]
            },{
                tipo: "Sistemas operativos",
                lista: [
                    {
                        nombre: "Windows XP",
                        imagen: "/img/tecnologia_windowsxp.png",
                        nivel: "3"
                    },{
                        nombre: "Windows 7",
                        imagen: "/img/tecnologia_windows7.png",
                        nivel: "3"
                    },{
                        nombre: "Ubuntu",
                        imagen: "/img/tecnologia_ubuntu.png",
                        nivel: "2"
                    }
                ]
            },{
                tipo: "Entornos de desarrollo",
                lista: [
                    {
                        nombre: "Eclipse",
                        imagen: "/img/tecnologia_eclipse.png",
                        nivel: "3"
                    },{
                        nombre: "WebStorm",
                        imagen: "/img/tecnologia_webStorm.png",
                        nivel: "2"
                    },{
                        nombre: "PhpStorm",
                        imagen: "/img/tecnologia_phpStorm.png",
                        nivel: "1"
                    },{
                        nombre: "PyCharm",
                        imagen: "/img/tecnologia_pyCharm.png",
                        nivel: "1"
                    },{
                        nombre: "Visual Studio Code",
                        imagen: "/img/tecnologia_visualStudioCode.png",
                        nivel: "1"
                    },{
                        nombre: "Brackets",
                        imagen: "/img/tecnologia_brackets.png",
                        nivel: "1"
                    },{
                        nombre: "Sublime Text",
                        imagen: "/img/tecnologia_sublimeText.png",
                        nivel: "1"
                    },{
                        nombre: "Atom",
                        imagen: "/img/tecnologia_atom.png",
                        nivel: "1"
                    }
                ]
            },{
                tipo: "Otros",
                lista: [
                    {
                        nombre: "JSON",
                        imagen: "/img/tecnologia_json.png",
                        nivel: "3"
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

    /*$scope.abrirEnlace = function(enlace){
        $window.open(enlace, "_blank");
    };*/

    $scope.descargarCurriculum = function(){
        $window.open('/Curriculum.pdf', '_blank');
    };

    $scope.host = function(){

        var host = $location.host();

        if(host == "localhost"){
            host += ":" + $location.port();
        }

        return host;
    };
});