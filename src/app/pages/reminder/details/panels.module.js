/**
 * @author v.lugovsky
 * created on 23.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.ui.panels', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('uiPanels', {
          url: '/panels/{id:string}',
          templateUrl: 'app/pages/ui/panels/panels.html',
          controller: 'NotificationsPageCtrl',
          controllerAs:'vm',
          title: 'Panels',
          sidebarMeta: {
            order: 1100,
          },
        });
  }

})();
