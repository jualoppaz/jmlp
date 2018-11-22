(function() {
    "use strict";

    angular.module("home").controller("HomeController", HomeController);

    HomeController.$inject = ["$scope", "$http"];
    function HomeController($scope, $http) {
        $scope.$parent.title = "Bienvenido";

        $scope.temas = [];

        $http
            .get("/api/temas")
            .then(function(data) {
                $scope.temas = data.data;
            })
            .catch(function(data) {
                console.log(data);
            });
    }
})();
