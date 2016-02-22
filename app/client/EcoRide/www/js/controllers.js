angular.module('app.controllers', ['ngMap','LocalStorageModule'])
  
.controller('connectIt', function($scope,$http,$state) {
    $scope.faceAuth = function() {
        $http({
          method: 'GET',
          url: 'https://ecoride1.herokuapp.com/auth/facebook'
        }).then(function successCallback(response) {
            console.log(JSON.stringify(response));
          }, function errorCallback(response) {
            console.log(JSON.stringify(response));
            // or server returns response with an error status.
          });
          $state.go('app.overview');
    }
})
   
.controller('chat', function($scope) {

})
   
.controller('inbox', function($scope) {
  // setInterval(); puxar os dados do inbox.

})
   
.controller('needARide', function($scope) {
  
})
      
.controller('settings', function($scope,localStorageService) {
  $scope.user = {
    slots: ( localStorageService.get('user.slots') ? localStorageService.get('user.slots') : 0 ),
    type: ( localStorageService.get('user.type') ? localStorageService.get('user.type') : 0 ),
    color: ( localStorageService.get('user.color') ? localStorageService.get('user.color') : null ),
    plate: ( localStorageService.get('user.plate') ? localStorageService.get('user.plate') : null ),
    extra: ( localStorageService.get('user.extra') ? localStorageService.get('user.extra') : null ),
    notify:  ( localStorageService.get('user.notify') ? localStorageService.get('user.notify') : false ) 
 };
  $scope.update = function(val) {
    switch(val) {
      case 'slots':
        localStorageService.set('user.slots', $scope.user.slots);
        break;
      case 'type':
        localStorageService.set('user.type', $scope.user.type);
        break;
      case 'color':
        localStorageService.set('user.color', $scope.user.color);
        break;
      case 'plate':
        localStorageService.set('user.plate', $scope.user.plate);
        break;
      case 'extra':
        localStorageService.set('user.extra', $scope.user.extra);
        break;
      case 'notify':
        localStorageService.set('user.notify', $scope.user.notify);
        break;
    }
    //setTimeout(); Passar os dados do que foi atualizado para a api
  };
})
   
.controller('offerARide', function($scope) {

})
   
.controller('overview', function($scope,NgMap) {
  $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyDg4bHx98E3I3vXYmRBVcSqIzSfimCv5EU";
  NgMap.getMap().then(function(map){
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
  })
})
   
.controller('routineCtrl', function($scope) {

})
