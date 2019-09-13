(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://dmurray-coursera-course5.herokuapp.com')
.constant('ImagePath', 'https://www.davidchuschinabistro.com/images/')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
