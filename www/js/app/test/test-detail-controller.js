angular.module('test-detail-controller', [])

.controller('TestDetailCtrl', function($scope, $location, $stateParams) {

    // Recibo el parámetro que pasa la url,
    // el nombre tiene que ser igual al declarado en url: del state de navegacióm
    $scope.data = $stateParams.id;
});
