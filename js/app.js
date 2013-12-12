var ampsApp = angular.module('ampsApp',['ui.bootstrap','ui.router']);

ampsApp.config(function($stateProvider, $urlRouterProvider) {

  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "partials/home.html",
      controller: 'appController',
    })
    .state('404', {
      url: "/404",
      templateUrl: "404.html",
      controller: 'app404Controller',
    })
    // For any unmatched url, redirect to /state1
     $urlRouterProvider.otherwise("/404");

});
//controller
ampsApp.controller('appController', function($scope){
  
	$scope.alerts = [];
	$scope.searchText;
	
  	//Initializer
	init();
	function init(){
		
		
	};
	
});
ampsApp.controller('app404Controller', function($scope){

});
angular.module('ampsApp').run(function($http, $rootScope, $location) {

//Active menu
 $rootScope.isActive = function (viewLocation) {
        console.log($location.path());
        return viewLocation === $location.path();
 };

});