'use strict';

eventsApp.controller('MainMenuController',
    function MainMenuController($scope, $location) {
        $scope.createEvent = function() {            
            $location.url('/NewEvent');
        };

        $scope.redirectToHome = function() {            
            $location.url('/');
        };
    }
);