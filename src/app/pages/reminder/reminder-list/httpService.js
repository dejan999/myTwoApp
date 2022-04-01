(function () {
    'use strict';
    angular
        .module('BlurAdmin.pages.ui.reminder-list')
        .factory('tableService', function ($http,$stateParams) {
            return {
                view: view,
                delete: deleteReminder,
            }



            function view(pageNext) {
                return $http({
                    method: 'GET',
                    url: 'http://localhost:3000/reminders?_page=' + pageNext + '&_limit=14'
                })
                    .then(function (response) {
                        return response;
                    })
            }

            function deleteReminder(id) {
                return $http({
                    method:'delete',
                    url:'http://localhost:3000/reminders/' + id
                })
                .then(function(response){
                    return response;
                })
            }
            
        })
})();
