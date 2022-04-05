/**
 * @author k.danovsky
 * created on 12.01.2016
 */
 (function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.status', [
      'BlurAdmin.pages.status.statusBars'
    ])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('rm', {
            url: '/rm',
            template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
            abstract: true,
            title: 'Status of reminders',
            sidebarMeta: {
              icon: 'ion-android-laptop',
              order: 200,
            },
          });
    }
  
  })();
  