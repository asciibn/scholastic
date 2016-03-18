'use strict';

/**
 * @ngdoc function
 * @name scholasticApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the scholasticApp
 */
angular.module('scholasticApp')
  .controller('MainCtrl',function ($scope, $http) {


    function loadData(){
      $http({method:'GET', url:'scripts/json/products.json'}).then(function getResults(results){
        $scope.products = results.data;
        //console.log($scope.products);
      }, function noResults(response){
        console.log(response);
      });
    }

    $scope.formItemSubmit = function(){
        $scope.products.push({'name':$scope.productName, 'description':$scope.productDescription, 'category':'newItem', 'price':$scope.productPrice, 'id':$scope.products.length++});
        $scope.searchItemField = $scope.productName;
        $scope.productName = '';
        $scope.productDescription = '';
        $scope.productPrice = '';
    };

  loadData();
  });
