angular.module('home-controller', [])

.controller('HomeCtrl', function($scope, $ionicModal, $ionicHistory, $timeout, $log) {
    // Title
    $scope.title = "Home";

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/modal/register.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.testModel = modal;
    });

    // Open the login modal
    $scope.openModal = function() {
      $scope.testModel.show();
    };

    $scope.closeModal = function() {
      $scope.testModel.hide().then(function() {
        $ionicHistory.removeBackView();
      });
    };

    // Perform the login action when the user submits the login form
    $scope.doRegister = function() {

        $log.debug('Check register...');

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
            $scope.closeModal();
            $log.debug('Done!');
        }, 1000);
    };

});
