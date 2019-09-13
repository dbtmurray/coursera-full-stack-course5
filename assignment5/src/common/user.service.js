(function () {
  "use strict";

  angular.module("common")
  .service("UserService", UserService);

  function UserService() {
    var service = this;
    service.signedup = false;

    service.update = function(ctrl) {
      service.firstname = ctrl.firstname;
      service.lastname = ctrl.lastname;
      service.phone = ctrl.phone;
      service.email = ctrl.email;
      service.favourite = ctrl.favourite;
      service.signedup = true;
      console.log("Updated user");
    };
  };
})();
