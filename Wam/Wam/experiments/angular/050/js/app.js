var sampleApp = angular.module('sampleApp', ['ngRoute']);

sampleApp.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/Page1', {
            templateUrl: 'partial/page1.html',
            controller: 'Page1Controller'
        }).
        when('/Page2', {
            templateUrl: 'partial/page2.html',
            controller: 'Page2Controller'
        }).
        when('/Page3', {
            templateUrl: 'partial/page3.html',
            controller: 'Page3Controller'
        }).
        when('/Page4', {
            templateUrl: 'partial/page4.html',
            controller: 'Page4Controller'
        }).
        otherwise({
            redirectTo: '/Page1'
        });
  }]);


sampleApp.controller('Page1Controller', function ($scope) {

    $scope.message = 'This is Page 1';

});

sampleApp.controller('Page2Controller', function ($scope) {

    $scope.message = 'This is Page 2';

});

sampleApp.controller('Page3Controller', function ($scope) {

    $scope.message = 'This is Page 3';

});

sampleApp.controller('Page4Controller', function ($scope) {

    $scope.message = 'This is Page 4';

});
