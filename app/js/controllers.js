'use strict';

/* Controllers */
var module = angular.module('test', []);
module.controller('PhoneListCtrl', ["$scope", "$http", function($scope, $http){
	$http.get('phones/phones.json').success(function(data, status, headers, config){
		console.log('This is Data:', data, '\n\nThis is status', status, '\n\nThis is headers', headers, '\n\nThis is config', config);
		$scope.phones = data;
	}).error(function(){
		console.log('Error');
	});
	
	//варианты $http запросов
	//$http.get(url, [config]);
	//$http.post(url, data, [config]);
	//$http.put(url, data, [config]);
	//$http.patch(url, data, [config]);
	//$http.delete(url, [config]);
	//$http.head(url, [config]);
	//$http.json(url, [config]);
	
	$scope.title = "Phones";
	
	var date = new Date();
	$scope.today = date;
	
	$scope.doneAndFilter = function(phoneItems){
		return phoneItems.name && phoneItems.priority > 1 && phoneItems.status === true;
	}
	
	$scope.sortField = undefined;
	$scope.reverse = false;
	
	$scope.sort = function(fieldName){
		if($scope.sortField === fieldName){
			$scope.reverse = !$scope.reverse;
		} else{
			$scope.sortField = fieldName;
			$scope.reverse = false;
		}
	}
	
	$scope.isSortUp = function(fieldName){
		return $scope.sortField === fieldName && !$scope.reverse;
	};
	$scope.isSortDown = function(fieldName){
		return $scope.sortField === fieldName && $scope.reverse;
	};
}]);