var app = angular.module("TrailGen", ["ngRoute"]);



app.controller('HomeController', function($scope) {
    $scope.pageClass = "page-welcome";
    $scope.walklength = "60";
    $scope.Speed = "3.2";
    $scope.Weight = "70";
    $scope.Calories = "70";
    $scope.$watch("Calories", function() {
        $scope.walklength = CaloriesToTimeCal($scope.Speed, $scope.Calories, $scope.Weight);
    });
    $scope.$watch("Weight", function() {
        $scope.walklength = CaloriesToTimeCal($scope.Speed, $scope.Calories, $scope.Weight);
    });
    $scope.$watch("Speed", function() {
        $scope.walklength = CaloriesToTimeCal($scope.Speed, $scope.Calories, $scope.Weight);
    });
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
