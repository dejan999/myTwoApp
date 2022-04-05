(function () {
    'use strict';
    angular
        .module('BlurAdmin.pages.ui.update-reminder')
        .factory('updateService', function ($http,$stateParams) {
            return {
                more: more,
                puting:puting,
                viewMethod:viewMethod
            }

            function more(id) {
                return $http({
                    method: 'GET',
                    url: 'http://localhost:3000/reminders',
                    params: { id: $stateParams.id }
                    
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
