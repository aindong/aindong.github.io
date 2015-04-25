/**
 * Created by papabear on 4/26/2015.
 */
'use strict';

/**
 * @type {module}
 */
var app = angular.module('app', []);

/**
 * MainController
 */
app.controller('MainController', ['$scope', '$http', function ($scope, $http) {

    // Get the location
    function getLocation() {
        navigator.geolocation.getCurrentPosition(foundLocation, noLocation);

        // When the location is successfully found
        function foundLocation(position) {
            var lat = position.coords.latitude;
            var long = position.coords.longitude;
            console.log('lat ' + lat + ' long ' + long);

            $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + lat + '&lon=' + long + '&mode=json&units=metric&cnt=7')
                .then(function(res) {
                    console.log(res.data);
                    $scope.forecasts = res.data;
                });
        }

        // If the gps failed to fetch the location
        function noLocation() {
            alert('Sorry I cant determine your location, Make sure you allow me to get your GEO Location');
        }
    }

    getLocation();

}]);