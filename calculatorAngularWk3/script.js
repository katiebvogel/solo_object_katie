
angular.module('CalculatorApp', []);

angular.module('CalculatorApp').controller('MainController', function($scope){

$scope.resultWindow = [];

  $scope.handleClick = function(value){
    $scope.resultWindow.push(value);
    console.log($scope.resultWindow);
  };

$scope.clearScreen = function(value){
    $scope.resultWindow = '';
    $scope.finalAnswer= 0;
  };


$scope.getAnswer = function(result) {
    $scope.total;
    var numOne = $scope.resultWindow[0];
    var numTwo = $scope.resultWindow[2];
    $scope.operator = $scope.resultWindow[1];

            if ($scope.operator == '+') {
                $scope.total = numOne + numTwo;
            }
            if ($scope.operator == '-') {
                $scope.total= numOne - numTwo;
            }
            if ($scope.operator == '*') {
                $scope.total= numOne * numTwo;
            }
            if ($scope.operator == '/') {
                $scope.total= numOne / numTwo;
            }
            return $scope.total;
      };
    // $scope.finalAnswer = function() {
    //   var finalAnswer = $scope.$eval($scope.resultWindow);
    // }
});
