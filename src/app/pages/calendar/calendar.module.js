/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
 (function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.calendar', [])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('home', {
            url: '/home',
            templateUrl: 'app/pages/calendar/dashboard.html',
            title: 'Calendar with events',
            sidebarMeta: {
              icon: 'ion-android-home',
              order: 0,
            },
          });
    }
  
  })();
  