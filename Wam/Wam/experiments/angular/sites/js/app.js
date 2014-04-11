
var app = angular.module("sites", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.
    when("/", {
        templateUrl: "partials/sites.html",
        controller: "SitesController"
    }).
    when("/sites", {
        templateUrl: "partials/sites.html",
        controller: "SitesController"
    }).
    when("/sites/:siteId/towers", {
        templateUrl: "partials/towers.html",
        controller: "TowersController"
    }).
    when("/sites/:siteId/towers/:towerId/equipments", {
        templateUrl: "partials/equipments.html",
        controller: "EquipmentsController"
    }).
    otherwise({
        redirectTo: "/"
    })
}]);

app.controller("SitesController", function ($scope) {
    $scope.addSite = function () {
        var newSite = {
            id: $scope.newSiteName,
            name: $scope.newSiteName,
            description: $scope.newSiteDescription
        };
        $scope.sites[$scope.newSiteName] = newSite;
    };
    $scope.deleteSite = function (site) {
        app.deleteSite($scope.sites, site);
    };
    $scope.sites = sites;
});

app.controller("TowersController", function ($scope, $routeParams) {
    $scope.deleteSite = function (site) {
        app.deleteSite($scope.sites, site);
    }
    $scope.sites = sites;
    $scope.site = sites[$routeParams.siteId];
    $scope.towers = $scope.site.towers;
});

app.controller("EquipmentsController", function ($scope, $routeParams) {
    $scope.site = sites[$routeParams.siteId];
    $scope.towers = $scope.site.towers;
    $scope.tower = $scope.towers[$routeParams.towerId];
    $scope.equipments = $scope.tower.equipments;
});

app.deleteSite = function(sites, site) {
    delete sites[site.id];
}