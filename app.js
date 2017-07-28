var app = angular.module("TrailGen", ["ngRoute"]);
app.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $routeProvider
    .when("/welcome", {
        templateUrl : "views/home.html"
    })
    .otherwise({
        redirectoTo: '/welcome'
    })
});
