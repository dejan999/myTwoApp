(function () {
    'use strict';
    angular
        .module('BlurAdmin.pages.tables')
        .factory('tableService', function ($http,$stateParams) {
            return {
                view: view,
                more: more,
                delete: deleteReminder,
                add: add,
                puting:puting,
                viewMethod:viewMethod
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
            function more(id) {
                return $http({
                    method: 'GET',
                    url: 'http://localhost:3000/reminders',
                    params: { id: id }
                    
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
            function add(data) {
                return $http({
                    method:'post',
                    url:'http://localhost:3000/reminders',data
                })
                .then(function (response) {
                    return response;
                })
            }
            function puting(data) {
                return $http({
                    method:'put',
                    url:'http://localhost:3000/reminders/' + data.id, data
                })
                .then(function (response) {
                    return response;
                })
            }
            function viewMethod() {
                return $http({
                    method:'get',
                    url:'http://localhost:3000/reminders'
                })
                .then(function (response) {
                    return response;
                })
            }
        })
})();
