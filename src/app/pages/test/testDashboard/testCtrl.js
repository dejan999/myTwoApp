/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
 (function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.test')
        .controller('testCtrl', testCtrl);
  
    /** @ngInject */
    function testCtrl() {
        var vm=this;

        vm.click=click;

        function click() {
            alert('Hi');
        }
       
    }
  })();