angular.module('jmlp').controller('LogoutController', function($auth, $location){

    console.log("Realizamos el logout.");

    $auth.logout()
        .then(function(data){
            $location.path('/');
        })
        .catch(function(data){

        });

});