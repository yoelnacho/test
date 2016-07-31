angular.module('api-controller', [])

.controller('ApiCtrl', function($scope, $http, $log) {
    var path = "https://restcountries.eu/rest/v1/"; //API path

    $scope.regions = [
        { name: 'europe' },
        { name: 'americas' },
        { name: 'asia' },
        { name: 'africa' }
    ];

    $scope.countries = [
        { name: 'argentina' },
        { name: 'brazil' },
        { name: 'uruguay' },
        { name: 'chile' }
    ];

    $scope.regionResults = [];
    $scope.countryResults = [];

    // Al cambiar la opcion del select ng-change ejecuta esta funcion
    $scope.updatedRegion = function(q){
        var region = q;

        $http({
            method: 'GET',
            url: path + 'region/' + region
        }).then(function successCallback(success) {

            $scope.regionResults = success;
            $log.debug("Consulta correcta... " + region);

            return region;

        }, function errorCallback(error) {
            $log.debug('Se produjo el error: ' + error);
        });
    };


    $scope.updatedCountry = function(q){
        var country = q;

        $http({
            method: 'GET',
            url: path + 'name/' + country
        }).then(function successCallback(success) {

            $scope.results = success;
            $log.debug("Consulta correcta... " + country);
            
            return $scope.results;

        }, function errorCallback(error) {
            $log.debug('Se produjo el error: ' + error);
        });
    }

});
