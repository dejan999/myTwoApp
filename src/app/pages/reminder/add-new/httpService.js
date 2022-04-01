(function () {
    'use strict';
    angular
        .module('BlurAdmin.pages.ui.add-new')
        .factory('addNewService', function ($http,$stateParams) {
            return {
                view: view,
                add: add,
                
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
            
            
            function add(data) {
                return $http({
                    method:'post',
                    url:'http://localhost:3000/reminders',data
                })
                .then(function (response) {
                    return response;
                })
            }
            
        })
})();
