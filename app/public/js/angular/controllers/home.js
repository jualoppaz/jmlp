angular.module('jmlp').controller('HomeController', function ($scope, $http) {

    $scope.$parent.title = "Bienvenido";

    /*
    $scope.temas = [
        {
            tecnologia: "AngularJS",
            src: "/img/tema_angularjs.png"
        },{
            tecnologia: "Node.js",
            src: "/img/tema_nodejs.png"
        }
    ];
    */

    $scope.temas = [];

    $http.get('/api/temas')
        .success(function(data){

            console.log(data);

            $scope.temas = data;
        })
        .error(function(data){
            console.log(data);
        });

});