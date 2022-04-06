/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
 (function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.user', [])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('user', {
            url: '/user',
            title: 'Profile',
            templateUrl: 'app/pages/user/user.html',
            controller: 'userCtrl',
            sidebarMeta: {
                icon: 'ion-android-home',
                order: 0,
              },
          });
    }
  
  })();
  