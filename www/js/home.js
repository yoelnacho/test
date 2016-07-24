angular.module('home-controller', [])

.controller('HomeCtrl', function($scope, $ionicModal, $ionicHistory) {
    // Title
    $scope.title = "Home";

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/register.html', {
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

});
