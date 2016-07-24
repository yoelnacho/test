angular.module('test-controller', [])

.controller('TestCtrl', function($scope, $location, $anchorScroll) {
    // title
    $scope.title = "Angular test";

    // Listado
    $scope.items = [
        { id: 1, name: 'uno'},
        { id: 2, name: 'dos'},
        { id: 3, name: 'tres'},
        { id: 4, name: 'cuatro'},
        { id: 5, name: 'cinco'},
        { id: 6, name: 'seis'},
        { id: 7, name: 'siete'},
        { id: 8, name: 'ocho'},
        { id: 9, name: 'nueve'},
        { id: 10, name: 'diez'},
        { id: 11, name: 'once'},
        { id: 12, name: 'doce'},
        { id: 13, name: 'trece'},
        { id: 14, name: 'catorce'},
        { id: 15, name: 'quince'},
        { id: 16, name: 'dieciseis'},
        { id: 17, name: 'diecisiete'}
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
