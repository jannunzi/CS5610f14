var app = angular.module("app", ["ngRoute"]);

app.config(["$routeProvider",
    function ($routeProvider) {
        $routeProvider.
        when("/pageA", {
            templateUrl: "partials/pageA.html",
            controller: "ControllerA"
        }).
        when("/pageB", {
            templateUrl: "partials/pageB.html",
            controller: "ControllerA"
        }).
        when("/pageC", {
            templateUrl: "partials/pageC.html",
            controller: "ControllerC"
        }).
        otherwise({
            redirect: "partials/pageA.html"
        });
}]);

app.controller("Controller1", ["$scope", function ($scope) {
    console.log("controller 1");
}]);

app.controller("Controller2", ["$scope", function ($scope) {
    console.log("controller 2");
}]);

app.controller("Controller3", ["$scope", function ($scope) {
    console.log("controller 3");
}]);
