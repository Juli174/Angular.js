var module = angular.module('test', []);
module.controller('DemoCtrl', ["$scope", function($scope){
	$scope.name="world";
	console.log("hello");
}]);
//module.controller('DemoCtrl', function($scope){
	//$scope.name="world";
//});