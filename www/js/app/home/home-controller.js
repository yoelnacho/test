angular.module('home-controller', [])

.controller('HomeCtrl', function(
    $scope,
    $ionicModal,
    $ionicHistory,
    $timeout,
    $log,
    $ionicLoading,
    $ionicBackdrop) {

    // Title
    $scope.title = "Home";

    // Backdrop
    $scope.showBackdrop = function() {
        $ionicBackdrop.retain();

        $timeout(function() {
            $ionicBackdrop.release();
        }, 3000);
   };

   $scope.showLoading = function() {
      $ionicLoading.show({
        //  template: 'Loading...'
         template: '<ion-spinner icon="dots"></ion-spinner>'
      });

      $timeout(function() {
          $ionicLoading.hide();
      }, 5000);
   };

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
