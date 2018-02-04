'use strict';

eventsApp.directive('mySample', function ($compile) {
    return {
        resrict: 'E',
        template: "<input type='text' ng-model='sampleData' /> {{sampleData}}<br />"
    };
});