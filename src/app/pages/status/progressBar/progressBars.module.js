/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.status.statusBars', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('rm.progess', {
          url: '/progress',
          templateUrl: 'app/pages/status/progressBar/progressBars.html',
          title: 'Progress Bars',
          controller:'progressController',
          controllerAs:'vm',
          sidebarMeta: {
            order: 600,
          },
        });
  }

})();
