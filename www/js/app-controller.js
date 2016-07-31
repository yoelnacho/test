angular.module('app-controller', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicHistory, $timeout, $log) {

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/modal/login.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.closeLogin = function() {
        $scope.modal.hide().then(function() {
            $ionicHistory.removeBackView();
        });
    };

    // Open the login modal
    $scope.login = function() {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {

        $log.debug('Check login...');

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
            $scope.closeLogin();
            $log.debug('Done!');
        }, 1000);
    };
});
