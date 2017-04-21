(function(angular) {
  'use strict';
angular.module('BubX', [])
  .config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('|[').endSymbol(']|')
    })


})(window.angular);