function myController($scope){

$scope.myProp = 'some thing';

$scope.test = function(e){
	$scope.myProp = "Updated!!!";
}

$scope.add = function(){
	$scope.items.push({name : $scope.myProp, fruit: $scope.selectedFruit});
}

$scope.dropDownItems = ['apple', 'banana', 'plum', 'cherry'];

$scope.items = [];

}