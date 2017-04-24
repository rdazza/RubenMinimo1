

var MinimApp = angular.module('MinimApp', ['ngRoute']);

MinimApp.config(['$routeProvider', function($routeProvider){

    $routeProvider
        .when('/subjects', {
            templateUrl: './views/subjects.html',
            controller: 'SubjectsCtrl'
        })
        .otherwise({
            redirectTo: '/students'
        })
        .when('/students', {
            templateUrl: './views/students.html',
            controller: 'StudentsCtrl'
        })
        .otherwise({
            redirectTo: '/students'
        })
    .when('/subject/:id', {
        templateUrl: './views/subjectprofile.html',
        controller: 'SubjectCtrl'
    })
        .otherwise({
            redirectTo: '/students'
        })
    .when('/student/:id', {
        templateUrl: './views/studentprofile.html',
        controller: 'StudentCtrl'
    })
        .otherwise({
            redirectTo: '/students'
        });
}]);