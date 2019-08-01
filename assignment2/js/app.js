(function() {
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(service) {
    var already = this;
    already.getItems = function() {
      return service.getBoughtItems();
    };
  };

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(service) {
    var tobuy = this;
    tobuy.getItems = function() {
      return service.getToBuyItems();
    };

    tobuy.buy = function(index) {
      service.buy(index);
    };
  };

  function ShoppingListCheckOffService() {
    var service = this;
    var boughtItems = [];
    var toBuyItems = [
      {name: "cookies", quantity: 10},
      {name: "crisps", quantity: 4},
      {name: "milk", quantity: 1},
      {name: "sausages", quantity: 16},
      {name: "steaks", quantity: 2},
      {name: "shampoo", quantity: 1},
      {name: "butter", quantity: 4}
    ];

    service.getBoughtItems = function() {
      return boughtItems;
    }

    service.getToBuyItems = function() {
      return toBuyItems;
    }

    service.buy = function(index) {
      boughtItems.push(toBuyItems[index]);
      toBuyItems.splice(index, 1);
    };


  };

})();
