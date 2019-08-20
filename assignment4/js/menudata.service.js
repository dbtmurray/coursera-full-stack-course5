(function () {
  'use strict';
  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http'];
  function MenuDataService($http) {
    var service = this;
    service.getAllCategories = function() {
      console.log("in getAllCategories");
      var promise = $http({
        method: 'GET',
        url: "https://davids-restaurant.herokuapp.com/categories.json"
      });
      var nextPromise = promise.then(function(response) {
        return response.data;
      })
      .catch(function(error) {
        console.log("error in getAllCategories");
        console.log(error);
      });
      return nextPromise;
    };

    service.getItemsForCategory = function(shortName) {
      console.log("in getItemsForCategory, shortName: " + shortName);
      var promise = $http({
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
        params: {category: shortName}
      });
      var nextPromise = promise.then(function(response) {
        console.log("got response for category query");
        console.log(response);
        return response.data;
      })
      .catch(function(error) {
        console.log("error in getItemsForCategory");
        console.log(error);
      });
      return nextPromise;
    };
  };
})();



