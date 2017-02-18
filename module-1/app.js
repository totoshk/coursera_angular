(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){

	$scope.lunchList = "";
	$scope.msg = "";
	$scope.showMessage = function (){

		if(calculateLengthOfArr($scope.lunchList) >3){
			$scope.msg = "Too much!";
		}else if(calculateLengthOfArr($scope.lunchList) >=1 && calculateLengthOfArr($scope.lunchList) <=3){
			$scope.msg = "Enjoy!";
		}else if(calculateLengthOfArr($scope.lunchList) == 0){
			$scope.msg = "Please enter data first";
		}
	};

	function calculateLengthOfArr(str){
		var len = 0;
		if(str != ""){
			len = str.split(",").length;
		};
		return len;
	};

}

})();