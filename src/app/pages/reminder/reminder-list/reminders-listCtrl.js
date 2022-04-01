
 (function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.ui.reminder-list')
      .controller('listController', listController);
  
    /** @ngInject */
    function listController($scope, $filter, $state, editableOptions, editableThemes, tableService) {
            
    var vm = this;
    var pageNext = 1;
    var maxLimit;
    var newLimit;

    print();
    vm.next = next;
    vm.previous = previous;
    vm.addReminder=addReminder;
    vm.removeReminder=removeReminder;

    function print() {
      tableService.view(pageNext)
        .then(function (response) {
          vm.reminders = response.data;
          maxLimit = response.headers('X-Total-Count');
          newLimit = Math.ceil(maxLimit / 14);
          // vm.showaTable=true;
          console.log(newLimit);
          console.log(vm.reminders);
        })
        .catch(function (error) {
          alert('Error');
        })


    }

    function next() {
      if (pageNext < newLimit) {
        pageNext++;
      }
      print();
    }

    function previous() {
      if (pageNext > 1) {
        pageNext--;
      }
      print();
    }

    function addReminder() {
      $state.go('ui.add-new');
    }

    function removeReminder(id) {
      var userval = confirm("Do you like to delite this reminder?!")

      if (userval == true) {
        tableService.delete(id)
          .then(function (response) {

            if (response.data)

              print()
            vm.msg = "Reminder is deleted!";
            alert(vm.msg);

          })
          .catch(function (response) {

            vm.msg = "Something is wrong";
            alert(vm.msg);
            vm.statusval = response.status;
            vm.statustext = response.statusText;
            vm.headers = response.headers();
          })

      }
    }
    }
  })();
  