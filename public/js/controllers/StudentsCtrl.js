
angular.module('MinimApp').controller('StudentsCtrl',['$scope','$http','$routeParams' ,function($scope, $http, $routeParams){
    $scope.NewStudent = {};
    $scope.StuSearch = {};
    $scope.StudySearch = {};

    // when landing on the page, get all students
    $http.get('/students')
        .success(function(data) {
            $scope.students = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $scope.CreateStudent = function () {
        $http.post('/students', $scope.NewStudent)
            .success(function(data){
                $scope.NewStudent = {};
                $scope.students = data;
            })
            .error(function(data){
                console.log('Error:' + data);
            });
    };

    $scope.SearchNameStu = function () {
        console.log($scope.StuSearch.name);
        $http.get('/students/search/' + $scope.StuSearch.name)
            .success(function(data) {
                $scope.StudentFound = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.SearchStudies = function () {
        console.log($scope.StudySearch.studies);
        $http.get('/students/searchStudies/' + $scope.StudySearch.studies)
            .success(function(data) {
                $scope.StudentsFound = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.DeleteStudent = function (id) {
        $http.delete('/students/' + id)
            .success(function(data){
                $scope.students = data;
            })
            .error(function(data){
                console.log('Error:' + data);
            });
    };
}]);