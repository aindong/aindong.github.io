/**
 * Created by papabear on 4/26/2015.
 */
'use strict';

var app = angular.module('app', []);

app.controller('MainController', ['$scope', '$http', function ($scope, $http) {

    function getLocation() {
        navigator.geolocation.getCurrentPosition(foundLocation, noLocation);

        function foundLocation(position) {
            var lat = position.coords.latitude;
            var long = position.coords.longitude;
            console.log('lat ' + lat + ' long ' + long);
            var promise = $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?id=1682812&mode=json&units=metric&cnt=7');

            promise.then(function(res) {
                console.log(res.data);
                $scope.forecasts = res.data;
            });
        }

        function noLocation() {
            alert('Sorry I cant determine your location');
        }
    }

    getLocation();

}]);