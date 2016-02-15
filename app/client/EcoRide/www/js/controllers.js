(function(){
  var app = angular.module('ecoride', []);

  function authenticate(type,$scope, $http){
    if(type == 0) {
      // Facebook
      $http.get('http://189.124.134.6:3000/auth/facebook');
    }else{
      // Others

    }
  }

  app.controller('auth',);

})();
