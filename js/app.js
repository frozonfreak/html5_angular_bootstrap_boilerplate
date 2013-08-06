var smApp = angular.module('smApp',['ui.date','ui.bootstrap','ui.keypress']);

//Routing
smApp.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'appController',
                templateUrl: 'partials/home.html'
            })
        .otherwise({ redirectTo: '/' });
});

//Handle all HTTP calls to server
smApp.factory('appSession', function($http){
    return {
       	updateNewTask: function(name, detail, deadLine) {
        	return $http.post('server/updateTask.php',{
        		type		: 'newTask',
        		taskName	: name,
        		taskDetail 	: detail,
        		deadLine 	: deadLine
        	});
        }
    }
});
//controller
smApp.controller('appController', function($scope, appSession){

	$scope.taskList = [];
	$scope.task;
	$scope.taskDetail;
	$scope.deadLine;
	$scope.alerts = [];
	$scope.searchText;
	

  	//Initializer
	init();
	function init(){
		
		//appSession.updateNewTask().success($scope.updateTasks).error($scope.displayError);
	};
	
});