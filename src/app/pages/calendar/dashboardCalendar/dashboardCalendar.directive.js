/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
 (function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.calendar')
        .directive('dashboardCalendar', dashboardCalendar);
  
    /** @ngInject */
    function dashboardCalendar() {
      return {
        restrict: 'E',
        controller: 'DashboardCalendarCtrl',
        templateUrl: 'app/pages/calendar/dashboardCalendar/dashboardCalendar.html'
      };
    }
  })();