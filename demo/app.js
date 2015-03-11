angular.module('material-demo', ['ngMaterial'])
  .controller('AppCtrl', function($scope, $mdToast, $mdDialog) {
    $scope.toastPosition = {
      bottom: false,
      top: true,
      left: false,
      right: true
    };
    $scope.getToastPosition = function() {
      return Object.keys($scope.toastPosition)
        .filter(function(pos) { return $scope.toastPosition[pos]; })
        .join(' ');
    };
    $scope.showCustomToast = function() {
      $mdToast.show({
        controller: 'ToastCtrl',
        templateUrl: 'toast-template.html',
        hideDelay: 6000,
        position: $scope.getToastPosition()
      });
    };
    $scope.showActionToast = function() {
      var toast = $mdToast.simple()
        .content('Action Toast!')
        .action('OK')
        .highlightAction(false)
        .position($scope.getToastPosition());
      $mdToast.show(toast).then(function() {
        alert('You clicked \'OK\'.');
      });
    };

    $scope.showAlert = function(ev) {
      $mdDialog.show(
        $mdDialog.alert()
          .title('FAB')
          .content('Hey, I am a Floating Action Bar')
          .ok('Got it!')
          .targetEvent(ev)
      );
    };
  })
  .controller('ToastCtrl', function($scope, $mdToast) {
    $scope.closeToast = function() {
      $mdToast.hide();
    };
  });