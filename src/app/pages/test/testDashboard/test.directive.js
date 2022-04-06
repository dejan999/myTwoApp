/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
 (function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.test')
        .directive('test', test);
  
    /** @ngInject */
    function test() {
      return {
        restrict: 'E',
        controller: 'testCtrl',
        controllerAs:'vm',
        templateUrl: 'app/pages/test/testDashboard/testD.html'
      };
    }
  })();