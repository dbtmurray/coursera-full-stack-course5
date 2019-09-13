(function () {
  "use strict";

  angular.module('public')
  .controller('SignupController', SignupController);

  SignupController.$inject = ["DishValidator", "UserService"];

  function SignupController(DishValidator, UserService) {
    var $ctrl = this;
    $ctrl.invalid = false;
    $ctrl.saved = false;

    $ctrl.submit = function(form) {
      console.log("form submitted!")
      console.log("email is", $ctrl.email);

      DishValidator.validate($ctrl.favourite)
      .then(function (response) {
        UserService.update($ctrl);
        $ctrl.saved = true;
        console.log("updated user: ", $ctrl.saved);
        $ctrl.invalid = false;
      })
      .catch(function (error) {
        $ctrl.invalid = true;
      });
    };
  };
})();
