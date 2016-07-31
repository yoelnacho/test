angular.module('test-controller', [])

.controller('TestCtrl', function($scope, $location, $anchorScroll) {
    // title
    $scope.title = "Angular test";

    // Listado
    $scope.items = [
        { id: 1, name: 'uno', description: 'Descripción 1'},
        { id: 2, name: 'dos', description: 'Descripción 2'},
        { id: 3, name: 'tres', description: 'Descripción 3'},
        { id: 4, name: 'cuatro', description: 'Descripción 4'},
        { id: 5, name: 'cinco', description: 'Descripción 5'},
        { id: 6, name: 'seis', description: 'Descripción 6'},
        { id: 7, name: 'siete', description: 'Descripción 7'},
        { id: 8, name: 'ocho', description: 'Descripción 8'},
        { id: 9, name: 'nueve', description: 'Descripción 9'},
        { id: 10, name: 'diez', description: 'Descripción 10'},
        { id: 11, name: 'once', description: 'Descripción 11'},
        { id: 12, name: 'doce', description: 'Descripción 12'},
        { id: 13, name: 'trece', description: 'Descripción 13'},
        { id: 14, name: 'catorce', description: 'Descripción 14'},
        { id: 15, name: 'quince', description: 'Descripción 15'},
        { id: 16, name: 'dieciseis', description: 'Descripción 16'},
        { id: 17, name: 'diecisiete', description: 'Descripción 17'}
    ];

    $scope.goto = function(e) {
        console.log(e);
        // set the location.hash to the id of
        // the element you wish to scroll to.
        $location.path(e);

        // call $anchorScroll()
        //$anchorScroll();
    };
});
