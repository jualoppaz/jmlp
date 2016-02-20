// Controlador Base. Por eso es el único que tiene dependencias

angular.module('jmlp').controller('LoguedUserController', function($scope, UserService, $http, $window, $auth){

    $scope.title = "";

    $scope.usuarioEstaLogueado = false;

    $scope.usuarioLogueado = {};

    //getUser();

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
    };

    /*$scope.cerrarSesion = function(){
        $http.get('/api/logout.js')
            .success(function(data){
                angular.element("#modalTitleLogout").text("Sesión cerrada correctamente");
                angular.element("#modalTextLogout").text("Vuelva pronto.");
                angular.element("#modal-logout.js").modal('show');

                $scope.usuarioEstaLogueado = false;

            })
            .error(function(data){
                console.log(data);
            });
    };*/

    $scope.redirigirTrasLogout = function(){
        $window.location.reload();
    };

    $scope.isAuthenticated = function(){

        //console.log("¿Estamos autenticados? - LoguedUser");

        return $auth.isAuthenticated();
    };

    $scope.getPayload = function(){
        return $auth.getPayload();
    };

});

