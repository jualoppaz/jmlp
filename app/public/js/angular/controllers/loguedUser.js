// Controlador Base. Por eso es el único que tiene dependencias

angular.module('jmlp').controller('LoguedUserController', function($scope, UserService, $http, $window, $auth){

    $scope.title = "";

    $scope.usuarioEstaLogueado = false;

    $scope.usuarioLogueado = {};

    function getUser(){
        UserService.solicitarUsuario()
            .success(function(data){
                $scope.usuarioEstaLogueado = true;
                $scope.usuarioLogueado = data;
            })
            .error(function(data){
                if(data == "not-loguedin-user"){
                    $scope.usuarioEstaLogueado = false;
                }
            });
    }

    $scope.redirigirTrasLogout = function(){
        $window.location.reload();
    };

    $scope.isAuthenticated = function(){
        return $auth.isAuthenticated();
    };

    $scope.getPayload = function(){
        return $auth.getPayload();
    };

});

