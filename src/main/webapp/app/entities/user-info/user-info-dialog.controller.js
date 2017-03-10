(function() {
    'use strict';

    angular
        .module('voilaVoixApp')
        .controller('UserInfoDialogController', UserInfoDialogController);

    UserInfoDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', '$q', 'entity', 'UserInfo', 'User', 'Subscription'];

    function UserInfoDialogController ($timeout, $scope, $stateParams, $uibModalInstance, $q, entity, UserInfo, User, Subscription) {
        var vm = this;

        vm.userInfo = entity;
        vm.clear = clear;
        vm.save = save;
        vm.users = User.query();
        vm.subscriptions = Subscription.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.userInfo.id !== null) {
                UserInfo.update(vm.userInfo, onSaveSuccess, onSaveError);
            } else {
                UserInfo.save(vm.userInfo, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('voilaVoixApp:userInfoUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
