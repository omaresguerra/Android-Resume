// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

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

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.education', {
      url: '/education',
      views: {
        'menuContent': {
          templateUrl: 'templates/education.html'
        }
      }
    })

  .state('app.training', {
      url: '/training',
      views: {
        'menuContent': {
          templateUrl: 'templates/training.html'
        }
      }
    })

.state('app.certificate', {
      url: '/certificate',
      views: {
        'menuContent': {
          templateUrl: 'templates/certificate.html'
        }
      }
    })

.state('app.note', {
      url: '/note',
      views: {
        'menuContent': {
          templateUrl: 'templates/note.html'
        }
      }
    })

  .state('app.johnomar', {
      url: '/johnomar',
      views: {
        'menuContent': {
          templateUrl: 'templates/johnomar.html',
          controller: 'DictCtrl'
        }
      }
    })

  .state('app.dict', {
      url: '/dict/:dictId',
      views: {
        'menuContent': {
          templateUrl: 'templates/dict.html',
          controller: 'DictionaryCtrl'
        }
      }
    });

  // .state('app.single', {
  //   url: '/playlists/:playlistId',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/playlist.html',
  //       controller: 'DictCtrl'
  //     }
  //   }
  // });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/johnomar');
});
