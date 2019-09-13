(function () {
  "use strict";

  angular.module('public')
  .controller('InfoController', InfoController);

  InfoController.$inject = ["UserService", "MenuService", "ImagePath"];

  function InfoController(UserService, MenuService, ImagePath) {
    var $ctrl = this;
    $ctrl.signedup = UserService.signedup;
    $ctrl.firstname = UserService.firstname;
    $ctrl.lastname = UserService.lastname;
    $ctrl.phone = UserService.phone;
    $ctrl.email = UserService.email;
    $ctrl.dishShortname = UserService.favourite;
    $ctrl.dishName = "";
    $ctrl.dishImageUrl = ImagePath + UserService.favourite + ".jpg";
    $ctrl.description = "";

    MenuService.getMenuItem(UserService.favourite)
    .then(function(response) {
      $ctrl.dishName = response.name;
      $ctrl.description = response.description;
    });




  };
})();
