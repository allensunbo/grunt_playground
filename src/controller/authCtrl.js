(function(angular) {
    console.log('init AuthCtrl'); // jshint ignore:line
    var app = angular.module('ControllerModule');
    app.controller('AuthCtrl', ['$scope', 'LogService', '$rootScope',
        function($scope, LogService, $rootScope) {
            var vm = this;
            vm.loggedIn = false;
            vm.user = vm.user || {};
            vm.user.name = 'axioma';
            vm.register = function(user) {
                vm.registerUser = user;
                LogService.log('info', 'register:' + JSON.stringify(user));
            };
            vm.login = function(user) {
                vm.loginUser = user;
                LogService.log('info', 'login:' + JSON.stringify(user));
                $rootScope.$broadcast('LOGIN_EVENT', {
                    'user': vm.loginUser
                });
                vm.loggedIn = true;
            };
            vm.logout = function(user) {
                LogService.log('info', 'logout:' + JSON.stringify(user));
                $rootScope.$broadcast('LOGOUT_EVENT', {
                    'user': vm.loginUser
                });
                vm.loginUser = null;
                vm.loggedIn = false;
            };

        }
    ]);

})(window.angular);
