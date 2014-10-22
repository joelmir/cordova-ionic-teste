angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Relatório 01', id: 1, description: 'Relatório teste 01' },
    { title: 'Relatório 02', id: 2, description: 'Relatório teste 02' },
    { title: 'Relatório 03', id: 3, description: 'Relatório teste 03' },
    { title: 'Relatório 04', id: 4, description: 'Relatório teste 04' },
    { title: 'Relatório 05', id: 5, description: 'Relatório teste 05' },
    { title: 'Relatório 06', id: 6, description: 'Relatório teste 06' }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
