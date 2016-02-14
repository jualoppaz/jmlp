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
               descripcion: "Desarrollo de aplicaciones web con tecnologías tales como PHP, Magento o Laravel y maquetación web con Bootstrap.",
               imagen: "/img/empresa_innopro.png",
               desde:"01/2016",
               hasta: "Actualidad",
               cargo: "Desarrollador",
               empresa: "Innopro Advanced"
           },
           {
               descripcion: "Realización de servicio relacionados con certificación de aplicaciones desarrolladas por otras empresas," +
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
               imagen: "img/istqb.png"
           },{
               descripcion: "Curso de 12 horas sobre la herramienta HP LoadRunner",
               fecha: "Octubre de 2015",
               imagen: "img/hp_loadRunner.png"
           }
       ],
        proyectos: [
            {
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
                        imagen: "img/tecnologia_jade.png",
                        nombre: "Jade"
                    },{
                        imagen: "img/tecnologia_bootstrap.png",
                        nombre: "Bootstrap"
                    }
                ],
                desde: "05/2014",
                hasta: "Actualidad",
                repositorio: "",
                web: "http://www.pronostigol.es",
                imagen: "/img/proyecto_pronostigol.png"
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
                        imagen: "img/tecnologia_jade.png",
                        nombre: "Jade"
                    },{
                        imagen: "img/tecnologia_bootstrap.png",
                        nombre: "Bootstrap"
                    }
                ],desde: "02/2015",
                hasta: "06/2015",
                repositorio: "",
                web: "http://www.rayosoltoldos.com",
                imagen: "/img/proyecto_rayosol.png"
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
                        imagen: "img/tecnologia_jade.png",
                        nombre: "Jade"
                    },{
                        imagen: "img/tecnologia_bootstrap.png",
                        nombre: "Bootstrap"
                    }
                ],desde: "10/2014",
                hasta: "01/2015",
                repositorio: "",
                web: "http://www.complementosmartapazos.com",
                imagen: "/img/complementosMartaPazos.png"
            },{
                resumen: "Usuario activo en la comunidad de Desarolladores GitHub",
                descripcion: "En mi perfil de GitHub tengo publicados multitud de proyectos para tener copias de seguridad de los mismos y, " +
                "además, para ayudar a otros usuarios con soluciones propuestas con distintas tecnologías.",
                desde: "12/2013",
                hasta: "Actualidad",
                repositorio: "https://github.com/jualoppaz",
                imagen: "/img/tecnologia_github.png"
            }
        ],
        conocimientos: [
            {
                nombre: "AngularJS",
                imagen: "/img/tecnologia_angularjs.png",
                nivel: "3"
            },{
                nombre: "Continuar...",
                imagen: "",
                nivel: "2"
            },{
                nombre: "Continuar...",
                imagen: "",
                nivel: "1"
            },{
                nombre: "Continuar...",
                imagen: "",
                nivel: "1"
            },{
                nombre: "Continuar...",
                imagen: "",
                nivel: "3"
            },{
                nombre: "Continuar...",
                imagen: "",
                nivel: "1"
            }
        ]

    };

    $scope.abrirEnlace = function(enlace){
        $window.open(enlace, "_blank");
    }
});