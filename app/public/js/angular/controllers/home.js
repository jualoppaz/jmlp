angular.module('jmlp').controller('HomeController', function ($scope) {

    $scope.$parent.title = "Bienvenido";

    $scope.temas = [
        {
            tecnologia: "AngularJS",
            src: "/img/tema_angularjs.png"
        },{
            tecnologia: "Node.js",
            src: "/img/tema_nodejs.png"
        }
    ];

});