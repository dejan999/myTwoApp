(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.reminders', [
      'BlurAdmin.pages.ui.reminder-list',
      'BlurAdmin.pages.ui.add-new'
    //   'BlurAdmin.pages.ui.detalis',
    ])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('ui', {
            url: '/ui',
            template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
            abstract: true,
            title: 'Reminders',
            sidebarMeta: {
              icon: 'ion-android-laptop',
              order: 200,
            },
          });
    }
  
  })();