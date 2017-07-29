var app = angular.module("TrailGen", ["ngRoute"]);



app.controller('HomeController', function($scope) {
    $scope.pageClass = "page-welcome";
    $scope.walklength = "60";
    $scope.Speed = "3.2";
    $scope.Weight = "70";
    $scope.Calories = "70";
    $scope.$watch("Calories", function() {
        if($($("input[name=Calories]")[0]).is(":focus")) {
            $scope.walklength = Math.round(CaloriesToTimeCal($scope.Speed, $scope.Calories, $scope.Weight));
        }
    });
    $scope.$watch("Weight", function() {
        $scope.walklength = Math.round(CaloriesToTimeCal($scope.Speed, $scope.Calories, $scope.Weight));
    });
    $scope.$watch("Speed", function() {
        $scope.walklength = Math.round(CaloriesToTimeCal($scope.Speed, $scope.Calories, $scope.Weight));
    });
    $scope.$watch("walklength", function() {
        if($($("input[name=walklength]")[0]).is(":focus")) {
            $scope.Calories = Math.round(TimeToCaloriesCal($scope.Speed, $scope.walklength, $scope.Weight));
        }
    });
});

app.controller('ResultsController', function($scope, $routeParams) {
    $scope.pageClass = "page-results";
    $scope.top10 = [];
    $scope.walklength = $routeParams.walklength;
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
    .when("/results/:walklength", {
        templateUrl : "views/results.html",
        controller: 'ResultsController'
    })
    // .otherwise({
    //     redirectoTo: '/welcome'
    // })
});
