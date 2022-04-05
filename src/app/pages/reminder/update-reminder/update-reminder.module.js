(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.ui.update-reminder', [])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('ui.update-reminder', {
            url: '/update-reminder/{id:string}',
            templateUrl: 'app/pages/reminder/update-reminder/update-reminder.html',
            controller:'update-reminderController',
            controllerAs:'vm',
            title: 'Update reminder',
            
          });
    }
  
  })();