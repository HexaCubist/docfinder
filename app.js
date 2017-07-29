var app = angular.module("TrailGen", ["ngRoute"]);



app.controller('HomeController', function($scope) {
    $scope.pageClass = "page-welcome";
    $scope.walklength = "60";
});

app.controller('ResultsController', function($scope) {
    $scope.pageClass = "page-results";
});


app.config(function($routeProvider, $locationProvider) {
    // $locationProvider.html5Mode({
    //     enabled: true,
    //     requireBase: false
    // });
    $routeProvider
    .when("/", {
        templateUrl : "views/home.html",
        controller: 'HomeController'
    })
    .when("/results", {
        templateUrl : "views/results.html",
        controller: 'ResultsController'
    })
    // .otherwise({
    //     redirectoTo: '/welcome'
    // })
});
