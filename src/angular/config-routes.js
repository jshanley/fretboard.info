angular.module('fretboard')
  .config(['$routeProvider', '$locationProvider',  function($routeProvider, $locationProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html'
      })
      .when('/test', {
        templateUrl: 'views/test.html'
      })
      .otherwise({
        redirectTo: '/'
      })

    $locationProvider
      .html5Mode(true)

  }])
