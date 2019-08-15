(function() {
  angular.module('NarrowItDownApp', [])
  .service('MenuSearchService', MenuSearchService)
  .controller('NarrowItDownController', NarrowItDownController)
  .directive('foundItems', FoundItemsDirective);


  MenuSearchService.$inject = ['$http'];

  function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
      var promise = $http({
          url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      });
      var nextPromise = promise.then(function(response) {
        var foundItems = [];
        for(item of response.data["menu_items"]) {
          if (item.name.toLowerCase().search(searchTerm.toLowerCase()) != -1) {
            foundItems.push(item);
          };
        };
        return foundItems;
      });
      return nextPromise;
    };

  };

  NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];

  function NarrowItDownController($scope, service) {
    var ctrl = this;
    ctrl.found = [];
    ctrl.narrowDown = function() {
      if($scope.searchTerm === undefined || $scope.searchTerm == "") {
        ctrl.found = [];
        return;
      };
      service.getMatchedMenuItems($scope.searchTerm)
        .then(function(result) {
          ctrl.found = result;
        })
        .catch(function(error) {
          ctrl.found = [];
        });
    };

    ctrl.removeItem = function(index) {
      ctrl.found.splice(index, 1);
    };
  };

  function FoundItemsDirective() {
    var ddo = {
      templateUrl : 'founditems.html',
      scope : {
        items : '<',
        found : '=',
        remove : "&"
      },
    };
    return ddo;
  };

})();
