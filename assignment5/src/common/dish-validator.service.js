(function () {
  "use strict";

  angular.module("common")
  .service("DishValidator", DishValidator);

  DishValidator.$inject = ["$http"];

  function DishValidator($http) {
    var service = this;
    service.validate = function(shortname) {
      console.log("validating", shortname);
      // make this hit the JSON endpoint instead
      var promise = $http({
        method: "GET",
        url: "https://dmurray-coursera-course5.herokuapp.com/menu_items/" + shortname + ".json"
      });
      return promise;
    };
  };
})();
