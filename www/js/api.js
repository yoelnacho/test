angular.module('api-controller', [])

.controller('ApiCtrl', function($scope, $http) {
    var path = "https://restcountries.eu/rest/v1/region/"; //API path

    // Listado de regiones que muestra el select
    $scope.countries = ['europe','americas','asia','africa'];

    // Al cambiar la opcion del select ng-change ejecuta esta funcion
    $scope.updatedCountry = function(){

        $http.get( path + $scope.region )
            // Si la petición fue correcta
            .success(function(countryList){
                console.log(coutryList);
            });
    }

});
