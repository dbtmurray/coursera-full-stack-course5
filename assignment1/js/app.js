(function() {

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunch = "";
    $scope.message = "";

    $scope.checkIfTooMuch = function() {
      nonEmpty = $scope.lunch.split(",").filter(function(el) 
        {return el.trim().length;}).length;

      if ($scope.lunch === "") {
        $scope.message = "Please enter some data first";
      } else if (nonEmpty > 3) {
        $scope.message = "Too much!";
      } else {
        $scope.message = "Enjoy!";
      };
    };
  };

})();
