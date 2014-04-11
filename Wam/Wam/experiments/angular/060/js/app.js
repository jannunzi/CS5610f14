var wam = angular.module("wam", ["ngRoute"]);

wam.config(["$routeProvider",
    function ($routeProvider) {
        $routeProvider.
        when("/", {
            templateUrl: "partials/login.html",
            controller: "Profile"
        }).
        when("/login", {
            templateUrl: "partials/login.html",
            controller: "Login"
        }).
        when("/profile/:username", {
            templateUrl: "partials/profile.html",
            controller: "Profile"
        }).
        when("/applications/:username", {
            templateUrl: "partials/applications.html",
            controller: "Applications"
        }).
        when("/applicationDetails/:id", {
            templateUrl: "partials/applicationDetails.html",
            controller: "ApplicationDetails"
        }).
        otherwise({
            redirectTo: "/"
        });
    }
]);

wam.controller("Login", ["$scope", function ($scope) {
    console.log("Login");
}]);

wam.controller("Profile", function ($scope, $routeParams) {
    $scope.currentUser = data.users[$routeParams.username];
    console.log("Profile " + $routeParams.username);
});

wam.controller("Applications", function ($scope, $routeParams) {
    console.log($routeParams.username);
    $scope.applications = data.users[$routeParams.username].applications;
});

wam.controller("ApplicationDetails", function ($scope, $routeParams) {
    $scope.applications = {
        appId_1: {
            name: "Keynote",
            pages: [
                {}
            ]
        },
        appId_2: {
            name: "Pages"
        }
    };
    var id = "appId_" + $routeParams.id;
    $scope.currentApplication = $scope.applications[id];
    console.log($scope.currentApplication);
});

var data = {
    users: {
        user2: {
            id: "user2",
            firstName: "Charlie",
            lastName: "Garcia",
            applications: {
                app1: {
                    id: "app1",
                    name: "Application 3",
                    price: 123.32,
                    pages: {
                        page1: {
                            id: "page1",
                            name: "Page 1",
                            date: "2014-12-23",
                            widgets: {
                                widget1: {
                                    id: "widget1",
                                    name: "Widget 1"
                                },
                                widget2: {
                                    id: "widget2",
                                    name: "Widget 2"
                                }
                            }
                        },
                        page2: {
                            id: "page2",
                            name: "Page 2",
                            date: "2013-12-23",
                            widgets: {
                                widget1: {
                                    id: "widget1",
                                    name: "Widget 3"
                                },
                                widget2: {
                                    id: "widget2",
                                    name: "Widget 4"
                                }
                            }
                        }
                    }
                },
                app2: {
                    id: "app2",
                    name: "Application 4",
                    price: 234.43,
                    pages: {
                        page3: {
                            id: "page3",
                            name: "Page 1",
                            date: "2014-12-23",
                            widgets: {
                                widget1: {
                                    id: "widget1",
                                    name: "Widget 1"
                                },
                                widget2: {
                                    id: "widget2",
                                    name: "Widget 2"
                                }
                            }
                        },
                        page4: {
                            id: "page4",
                            name: "Page 2",
                            date: "2013-12-23",
                            widgets: {
                                widget1: {
                                    id: "widget1",
                                    name: "Widget 3"
                                },
                                widget2: {
                                    id: "widget2",
                                    name: "Widget 4"
                                }
                            }
                        }
                    }
                }
            }
        },
        user1: {
            id: "user1",
            firstName: "Alice",
            lastName: "Wonderland",
            applications: {
                app1: {
                    id: "app1",
                    name: "Application 1",
                    price: 123.32,
                    pages: {
                        page1: {
                            id: "page1",
                            name: "Page 1",
                            date: "2014-12-23",
                            widgets: {
                                widget1: {
                                    id: "widget1",
                                    name: "Widget 1"
                                },
                                widget2: {
                                    id: "widget2",
                                    name: "Widget 2"
                                }
                            }
                        },
                        page2: {
                            id: "page2",
                            name: "Page 2",
                            date: "2013-12-23",
                            widgets: {
                                widget1: {
                                    id: "widget1",
                                    name: "Widget 3"
                                },
                                widget2: {
                                    id: "widget2",
                                    name: "Widget 4"
                                }
                            }
                        }
                    }
                },
                app2: {
                    id: "app2",
                    name: "Application 2",
                    price: 234.43,
                    pages: {
                        page3: {
                            id: "page3",
                            name: "Page 1",
                            date: "2014-12-23",
                            widgets: {
                                widget1: {
                                    id: "widget1",
                                    name: "Widget 1"
                                },
                                widget2: {
                                    id: "widget2",
                                    name: "Widget 2"
                                }
                            }
                        },
                        page4: {
                            id: "page4",
                            name: "Page 2",
                            date: "2013-12-23",
                            widgets: {
                                widget1: {
                                    id: "widget1",
                                    name: "Widget 3"
                                },
                                widget2: {
                                    id: "widget2",
                                    name: "Widget 4"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
