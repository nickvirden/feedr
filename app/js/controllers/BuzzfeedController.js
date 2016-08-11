/* global require, tcma */

feedr
    .controller('BuzzfeedController', ['$scope', '$http', function ($scope, $http) {
                
        $http({
            method: 'GET',
            url: 'https://accesscontrolalloworiginall.herokuapp.com/http://www.buzzfeed.com/api/v2/feeds/news'
        }).then(function successCallback(response) {
            
            // Logs response data to the console
            console.log(response.data);
            
            // Creates an empty array to store the objects
            $scope.feed = [];
            
            for (index in response.data.buzzes) {
                $scope.feed.push(response.data.buzzes[index]);
            }
            
            console.log($scope.feed);
            
        }, function errorCallback(response) {
        
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            
            console.log('uh oh!');
            
        });

    }])

    .config(function ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl : 'views/buzzfeed.html'
            }
                );
    });