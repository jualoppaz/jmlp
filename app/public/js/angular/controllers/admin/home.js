angular.module('jmlp').controller('AdminHomeController', function ($scope) {

    $scope.$parent.title = "Bienvenido Admin";

    $scope.isAuthenticated = function(){

        //console.log("¿Estamos autenticados? - Admin");
        return $scope.$parent.isAuthenticated();
    };

    var _isAuthenticated = function(){
        return $scope.$parent.isAuthenticated();
    };

    $scope.getPayload = function(){
        return $scope.$parent.getPayload();
    };

});