(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.ui.reminder-list', [])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('ui.reminder-list', {
            url: '/reminder-list/{id:string}',
            templateUrl: 'app/pages/reminder/reminder-list/reminder-list.html',
            controller:'listController',
            controllerAs:'vm',
            title: 'Reminders List',
            sidebarMeta: {
              order: 0,
            },
          });
    }
  
  })();