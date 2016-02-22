angular.module('app.controllers', ['ngMap'])
  
.controller('connectIt', function($scope,$state) {
    $scope.faceAuth = function() {
        /*$http({
          method: 'GET',
          url: 'http://localhost:3000/auth/facebook'
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
          }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
          });*/
          $state.go('app.overview');
    }
})
   
.controller('chat', function($scope) {

})
   
.controller('inbox', function($scope) {

})
   
.controller('needARide', function($scope) {
  
})
      
.controller('settings', function($scope) {

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
