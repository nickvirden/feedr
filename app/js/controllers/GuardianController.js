/* global require, tcma */

feedr
    .controller('GuardianController', ['$scope', '$http', function ($scope, $http) {
        
        'use strict';
        
        $http({
            method: 'GET',
            url: 'https://accesscontrolalloworiginall.herokuapp.com/http://content.guardianapis.com/search?q=debate%20AND%20economy&api-key=eb1cba19-66aa-45fe-bd67-8ddc236b09fe'
        }).then(function successCallback(response) {
            
            // Logs response data to the console
            console.log(response.data);
            
            // Creates an empty array to store the objects
            $scope.feed = [];
            
            for (var index in response.data.response.results) {
                
                console.log(response.data.response.results[index])
                $scope.feed.push(response.data.response.results[index]);
            }
            
            console.log($scope.feed);
            
        }, function errorCallback(response) {
        
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            
            console.log('uh oh!');
            
        });

    }])

    .config(function ($routeProvider) {

        "use strict";

        $routeProvider
            .when('/guardian', {
                templateUrl : 'views/guardian.html'
            }
                );
    });