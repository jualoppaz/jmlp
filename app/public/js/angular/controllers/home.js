angular.module('jmlp').controller('HomeController', function ($scope) {

    $scope.temas = [
        {
            tecnologia: "AngularJS",
            src: "/img/angularjs.png"
        },{
            tecnologia: "Node.js",
            src: "/img/nodejs.png"
        }
    ];

});