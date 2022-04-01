
 (function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.ui.add-new')
      .controller('add-newController', addNewController);
  
    /** @ngInject */
    function addNewController($scope, $filter, $state, editableOptions, editableThemes, addNewService) {
            
        var vm=this;
        vm.addNewReminder=addNewReminder;

        function addNewReminder(title,detalis,date) {
           var data={
                reminder:title,
                reminderDetalis:detalis,
                dateForReminder:date
            }
            if (data.reminder == null || data.reminderDetalis == null || data.dateForReminder == null) {
                alert("Please, fill in all fields!")
              }
              else {
                addNewService.add(data)
                  .then(function (response) {
                    if (response.data)
                      vm.msg = "Post Data Submitted Successfully!";
                    alert(vm.msg);
                  })
                  .catch(function (error) {
                    alert('Error');
                  })
                vm.title = '';
                vm.detalis = '';
                vm.date = '';
              }
        }
    }
  })();
  