'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngSanitize', 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/NewEvent',
            {
                templateUrl: 'templates/NewEvent.html',
                controller: 'EditEventController'
            });
        $routeProvider.when('/events',
            {
                templateUrl: 'templates/EventList.html',
                controller: 'EventListController'
            });
            $routeProvider.when('/event/:eventId',
            {
                templateUrl: 'templates/EventDetails.html',
                controller: 'EventController'
            });
    });