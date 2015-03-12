angular.module('material-demo', ['ngMaterial'])
  .controller('AppCtrl', function($scope, $mdToast, $mdDialog) {
    $scope.showCustomToast = function() {
      $mdToast.show({
        controller: 'ToastCtrl',
        templateUrl: 'toast-template.html',
        hideDelay: 5000,
        position: 'top right'
      });
    };

    $scope.showAlert = function(ev) {
      $mdDialog.show(
        $mdDialog.alert()
          .title('FAB?')
          .content('Yes, I am a Floating Action Button')
          .ok('Go back')
          .targetEvent(ev)
      );
    };
  })
  .controller('ToastCtrl', function($scope, $mdToast) {
    $scope.closeToast = function() {
      $mdToast.hide();
    };
  });