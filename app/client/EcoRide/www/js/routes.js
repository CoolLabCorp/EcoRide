angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  
      
        
    .state('connectIt', {
      url: '/auth',
      templateUrl: 'templates/connectIt.html'
    })
        
        
      
    
      
        
    .state('app.inbox', {
      url: '/inbox',
      views: {
        'app': {
          templateUrl: 'templates/inbox.html'
        }
      }
    })


    .state('app.chat', {
      url: '/chat',
      views:{
        'app':{
          templateUrl: 'templates/chat.html'
        }
      }
    })

        
    .state('app.needARide', {
      url: '/ride/need/',
      views: {
        'app': {
          templateUrl: 'templates/needARide.html'
        }
      }
    })
        
      
    
      
    .state('app', {
      url: '/app',
      abstract:true,
      templateUrl: 'templates/app.html'
    })
      
    
      
        
    .state('app.settings', {
      url: '/settings',
      views: {
        'app': {
          templateUrl: 'templates/settings.html'
        }
      }
    })
        
      
    
      
        
    .state('app.offerARide', {
      url: '/ride/offer/',
      views: {
        'app': {
          templateUrl: 'templates/offerARide.html'
        }
      }
    })
        
      
    
      
        
    .state('app.overview', {
      url: '/home',
      views: {
        'app': {
          templateUrl: 'templates/overview.html'
        }
      }
    })
        
      
    
      
        
    .state('app.routine', {
      url: '/ride/routine',
      views: {
        'app': {
          templateUrl: 'templates/routine.html'
        }
      }
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  
  $urlRouterProvider.otherwise('/auth');
  

  

});