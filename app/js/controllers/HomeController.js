/* global require, tcma */

tcma
    .controller('HomeController', ['$scope', function ($scope) {
        
        'use strict';

    }])

    .config(function ($routeProvider) {

        "use strict";

        $routeProvider
            .when('/', {
                templateUrl : 'templates/home.html'
            }
                );
    });