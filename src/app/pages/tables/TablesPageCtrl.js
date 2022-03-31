/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.tables')
    .controller('TablesPageCtrl', TablesPageCtrl);

  /** @ngInject */
  function TablesPageCtrl($scope, $filter, $state, editableOptions, editableThemes, tableService) {

    var vm = this;

    print();
    vm.moreInfo = moreInfo;
    vm.back = back;
    vm.removeReminder = removeReminder;
    vm.addReminder = addReminder;
    vm.addNewReminder = addNewReminder;
    vm.editReminder=editReminder;



    function print() {
      tableService.viewMethod()
        .then(function (response) {
          vm.reminders = response.data;
          console.log(vm.reminders);
          vm.back();
        })
        .catch(function (error) {
          alert('Error');
        })
    }

    function moreInfo(reminder) {
      var id = reminder.id;
      console.log(id);
      tableService.more(id)
        .then(function (response) {
          vm.reminder = response.data;
          console.log(vm.reminder);
          vm.showaTable = false;
          vm.showPanel = true;
        })
        .catch(function (error) {
          alert('Error');
        })

    }

    function back() {
      vm.showaTable = true;
      vm.showPanel = false;
      vm.showNewReminder = false;
      vm.showEditReminder=false;
    }

    function removeReminder(id) {
      console.log(id);
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

    function addReminder() {
      vm.showaTable = false;
      vm.showPanel = false;
      vm.showNewReminder = true;

      

      
    }
    function addNewReminder(title, detalis, date) {
      var data = {
        reminder: title,
        reminderDetalis: detalis,
        dateForReminder: date
      }
      if (data.reminder == null || data.reminderDetalis == null || data.dateForReminder == null) {
        alert("Please, fill in all fields!")
      }
      else {
        tableService.add(data)
          .then(function (response) {

            if (response.data)
              vm.msg = "Post Data Submitted Successfully!";
            alert(vm.msg);
            
            print();
          }).catch(function (error) {
            alert('Error');
          })

        vm.title = '';
        vm.detalis = '';
        vm.date = '';
      }
    }

    function editReminder(reminder) {
      console.log(reminder);
      vm.showaTable = false;
      vm.showPanel = false;
      vm.showNewReminder = false;
      vm.showEditReminder = true;

    }
    // editableOptions.theme = 'bs3';
    // editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>';
    // editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';


  }

})();
