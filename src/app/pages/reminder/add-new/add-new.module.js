(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.ui.add-new', [])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('ui.add-new', {
            url: '/add-new',
            templateUrl: 'app/pages/reminder/add-new/add-new.html',
            controller:'add-newController',
            controllerAs:'vm',
            title: 'Add new reminder',
            sidebarMeta: {
              order: 0,
            },
          });
    }
  
  })();