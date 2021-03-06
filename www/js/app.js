// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
    'ionic',
    'app-controller',
    'home-controller',
    'test-controller',
    'test-detail-controller',
    'api-controller'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
        ionic.Platform.fullScreen();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'js/app/home/home.html',
          controller: 'HomeCtrl'
        }
      }
  })

  .state('app.test', {
    url: '/test',
    views: {
      'menuContent': {
        templateUrl: 'js/app/test/test.html',
        controller: 'TestCtrl'
      }
    }
  })

  .state('app.detail', {
    url: '/test/:id',
    views: {
      'menuContent': {
        templateUrl: 'js/app/test/test-detail.html',
        controller: 'TestDetailCtrl'
      }
    }
  })

  .state('app.api', {
    url: '/api',
    views: {
      'menuContent': {
        templateUrl: 'js/app/api/api.html',
        controller: 'ApiCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/test');
});
