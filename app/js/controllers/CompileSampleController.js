'use strict';

eventsApp.controller('CompileSampleController',
    function CompileSampleController($scope, $compile, $parse) {

        var fn = $parse ('1 + 2');
        console.log(fn());

        var getter = $parse('event.name');

        var context1 = {event: {name: 'AngularJS Events App'}};
        var context2 = {event: {name: 'Hack a Hackathon'}};

        console.log(getter(context1));
        console.log(getter(context2));

        console.log(getter(context2, context1));

        var setter = getter.assign;
        setter(context2, 'Code Retreat');

        console.log(context2.event.name);

        $scope.appendDivToElement = function (markup) {
            return $compile(markup)($scope).appendTo(angular.element("#appendHere"));
        }

    }
);