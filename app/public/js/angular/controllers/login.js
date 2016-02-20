angular.module('jmlp').controller('LoginController', function ($scope, $auth, $location) {

    $scope.$parent.title = "Login";

    $scope.form = {};

    $scope.login = function(){

        //console.log("Procedemos a realizar el login.");

        $auth.setStorageType('sessionStorage');

        $auth.login({
            email: $scope.form.email,
            password: $scope.form.password
        })
        .then(function(){
            // Si se ha logueado correctamente, lo tratamos aquí.
            // Podemos también redirigirle a una ruta
            $location.path("/admin")
        })
        .catch(function(response){
            // Si ha habido errores llegamos a esta parte
            console.log(response);
        });
    };

});