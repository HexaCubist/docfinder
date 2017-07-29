var app = angular.module("TrailGen", ["ngRoute"]);



app.controller('HomeController', function($scope) {
    $scope.pageClass = "page-welcome";
    $scope.walklength = "60";
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
    // .otherwise({
    //     redirectoTo: '/welcome'
    // })
});
