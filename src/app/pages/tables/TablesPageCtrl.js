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
    var pageNext = 1;
    var maxLimit;
    var newLimit;

    print();
    vm.next = next;
    vm.previous = previous;
    vm.moreInfo = moreInfo;
    vm.back = back;
    vm.removeReminder = removeReminder;
    vm.addReminder = addReminder;
    vm.addNewReminder = addNewReminder;
    vm.editReminder = editReminder;
    vm.addEditReminder=addEditReminder;


    function print() {
      tableService.view(pageNext)
        .then(function (response) {
          vm.reminders = response.data;
          maxLimit = response.headers('X-Total-Count');
          newLimit = Math.ceil(maxLimit / 14);
          vm.showaTable=true;
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
      print();
      vm.showPanel = false;
      vm.showNewReminder = false;
      vm.showEditReminder = false;
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
      back();
    }

    function editReminder(reminder) {

      tableService.more(reminder.id)
        .then(function (response) {
          response.data[0].dateForReminder = new Date(response.data[0].dateForReminder);
          vm.reminders = response.data;
          console.log(vm.reminders);
        })

      vm.showaTable = false;
      vm.showPanel = false;
      vm.showNewReminder = false;
      vm.showEditReminder = true;

    }
    function addEditReminder(reminder) {
      tableService.puting(reminder)
                .then(function (response) {
                    if (response.data)
                        tableService.viewMethod()
                            .then(function (response) {
                                response.data[0].dateForReminder = new Date(response.data[0].dateForReminder);
                                vm.reminders = response.data;
                            })
                    vm.msg = "Reminder is updated!";
                    alert(vm.msg);
                    back();
                })
                .catch(function (error) {
                    alert('Error');
                })
    }
    
  }

})();
