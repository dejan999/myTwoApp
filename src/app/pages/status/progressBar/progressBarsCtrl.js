
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.status')
      .controller('progressController', progressController);
  
    /** @ngInject */
    function progressController() {
        
        var vm=this;
        var pr;

        vm.pr=89/4;
        vm.procent=procent;

        function procent() {
            return{
                'width':vm.pr+'%'
            }
        }
    }
  
  })();
  