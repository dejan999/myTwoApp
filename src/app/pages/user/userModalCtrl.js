/**
 * @author a.demeshko
 * created on 21.01.2016
 */
 (function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.user')
      .controller('userModalCtrl', userModalCtrl);
  
    /** @ngInject */
    function userModalCtrl($scope, $uibModalInstance) {
      $scope.link = '';
      $scope.ok = function () {
        $uibModalInstance.close($scope.link);
      };
    }
  
  })();