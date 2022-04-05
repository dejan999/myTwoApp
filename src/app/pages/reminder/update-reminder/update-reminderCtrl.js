
 (function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.ui.update-reminder')
      .controller('update-reminderController', updateReminderController);
  
    /** @ngInject */
    function updateReminderController(updateService,$state) {

        var vm = this;
        vm.updateReminder = updateReminder;

        updateService.more()
            .then(function (response) {
                response.data[0].dateForReminder = new Date(response.data[0].dateForReminder);
                vm.reminders = response.data;
                console.log(vm.reminders);
            })

        function updateReminder() {
            updateService.puting(vm.reminders[0])
                .then(function (response) {
                    if (response.data)
                        updateService.viewMethod()
                            .then(function (response) {
                                response.data[0].dateForReminder = new Date(response.data[0].dateForReminder);
                                vm.reminders = response.data;
                            })
                    vm.msg = "Reminder is updated!";
                    alert(vm.msg);
                    $state.go('ui.reminder-list');
                })
                .catch(function (error) {
                    alert('Error');
                })
        }


    }
  })();
  