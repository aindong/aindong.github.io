/**
 * Created by papabear on 4/26/2015.
 */
'use strict';

var app = angular.module('app', []);

app.controller('MainController', ['$scope', '$http', function ($scope, $http) {
    var promise = $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?id=1690039&mode=json&units=metric&cnt=7');

    promise.then(function(res) {
        //console.log(res.data);
        $scope.forecasts = res.data;
    });
}]);