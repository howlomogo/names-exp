var app = angular.module('myApp', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/home.html', // Home Page
        controller: 'MainCtrl'
      }).
      when('/home', {
        templateUrl: 'views/home.html', // Home Page
        controller: 'MainCtrl'
      }).
      when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      }).
      otherwise({
        redirectTo: '/404',
        templateUrl: 'views/404.html',
        controller: 'MainCtrl'
      });
  }]);

app.controller('MainCtrl', function($scope) {
  $scope.testdata = [
  {first_name: "Tom", last_name: "Green", gender: "m"},
  {first_name: "Katie", last_name: "Black", gender: "f"},
  {first_name: "John", last_name: "Cena", gender: "m"},
  {first_name: "Jane", last_name: "Doe", gender: "f"},
  {first_name: "Sally", last_name: "Jones", gender: "f"}
  ];
});

app.controller('ProfileCtrl', function($scope) {

});