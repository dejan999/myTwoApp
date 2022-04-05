/**
 * @author k.danovsky
 * created on 12.01.2016
 */
 (function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.status', [
    ])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('rm', {
            url: '/rm',
            templateUrl: 'app/pages/status/progressBar/progressBars.html',
            title: 'Progress Bars',
            controller:'progressController',
            controllerAs:'vm',
            sidebarMeta: {
              icon: 'ion-android-laptop',
              order: 200,
            },
          });
    }
  
  })();
  