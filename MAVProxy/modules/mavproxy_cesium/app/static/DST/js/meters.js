(function(angular) {
  'use strict';
angular.module('includeExample', [])
  .config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('|[').endSymbol(']|')
    })
  .controller('ExampleController', ['$scope', function($scope) {
    $scope.bags =12;
  }]);
})(window.angular);
