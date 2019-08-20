(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

    // Home page
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.template.html'
    })
    .state('categories', {
      url: '/categories',
      templateUrl: 'templates/categories.template.html',
      controller: 'CategoriesController as ctrl',
      resolve: {
        categories: ['MenuDataService', function(MenuDataService) {
          console.log("resolving categories...");
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('items', {
      url: '/items/{shortName}',
      templateUrl: 'templates/items.template.html',
      controller: 'ItemsController as ctrl',
      resolve: {
        items: ['$stateParams', 'MenuDataService',
          function($stateParams, MenuDataService) {
            console.log("getting details for " + $stateParams.shortName);
            return MenuDataService.getItemsForCategory($stateParams.shortName);
          }]
      }
    });
  };

})();

