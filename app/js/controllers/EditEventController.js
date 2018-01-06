'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope) {
        $scope.saveEvent = function (event, newEventForm) {
            console.log(newEventForm);
            if (newEventForm.$valid) {
                console.log('event ' + event.name + ' saved!');
            }
        };

        $scope.cancelEdit = function () {
            window.location = "/EventDetails.html";
        };
    }
);