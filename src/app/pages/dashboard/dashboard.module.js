/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'app/pages/dashboard/dashboard.html',
          title: 'Dashboard',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 0,
          },
        });
  }

})();
