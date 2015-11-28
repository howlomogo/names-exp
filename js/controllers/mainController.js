angular.module('app').controller('MainCtrl', ['$scope', function($scope) {
  $scope.testdata = [
  {first_name: "Tom", last_name: "Green", gender: "m"},
  {first_name: "Katie", last_name: "Black", gender: "f"},
  {first_name: "John", last_name: "Cena", gender: "m"},
  {first_name: "Jane", last_name: "Doe", gender: "f"},
  {first_name: "Sally", last_name: "Jones", gender: "f"}
  ];

  // Make an input box th
  $scope.activeUser = {};
  $scope.blah = "GREEN";
}]);

