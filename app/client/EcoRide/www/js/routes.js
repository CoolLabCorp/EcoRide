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
        
      
    
      
        
    .state('chat', {
      url: '/chat/id/',
      templateUrl: 'templates/chat.html'
    })
        
      
    
      
        
    .state('menu.inbox', {
      url: '/chat',
      views: {
        'side-menu21': {
          templateUrl: 'templates/inbox.html'
        }
      }
    })
        
      
    
      
        
    .state('menu.needARide', {
      url: '/ride',
      views: {
        'side-menu21': {
          templateUrl: 'templates/needARide.html'
        }
      }
    })
        
      
    
      
    .state('menu', {
      url: '/side-menu21',
      abstract:true,
      templateUrl: 'templates/menu.html'
    })
      
    
      
        
    .state('menu.settings', {
      url: '/settings',
      views: {
        'side-menu21': {
          templateUrl: 'templates/settings.html'
        }
      }
    })
        
      
    
      
        
    .state('menu.offerARide', {
      url: '/ride',
      views: {
        'side-menu21': {
          templateUrl: 'templates/offerARide.html'
        }
      }
    })
        
      
    
      
        
    .state('menu.overview', {
      url: '/',
      views: {
        'side-menu21': {
          templateUrl: 'templates/overview.html'
        }
      }
    })
        
      
    
      
        
    .state('menu.routine', {
      url: '/page21',
      views: {
        'side-menu21': {
          templateUrl: 'templates/routine.html'
        }
      }
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  
  $urlRouterProvider.otherwise('/auth');
  

  

});