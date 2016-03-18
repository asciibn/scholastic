'use strict';

/**
 * @ngdoc function
 * @name scholasticApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the scholasticApp
 */
angular.module('scholasticApp')
  .controller('MainCtrl',function ($scope) {

    $scope.products =[

        {
            'name': 'Soccerball',
            'description': 'FIFA approved size and weight',
            'category': 'Soccer',
            'price': 19.95,
            'id': '60d4f82c7f41b87e'
        },
        {
            'name': 'Corner Flags',
            'description': 'Give your playing field a personal touch',
            'category': 'Soccer',
            'price': 34.95,
            'id': '753b6488e4275863'
        },
        {
            'name': 'Stadium',
            'description': 'Flat packed 35,000 seat stadium',
            'category': 'Soccer',
            'price': 79500,
            'id': 'e8fe85eab1f9b913'
        },
        {
            'name': 'Thinking Cap',
            'description': 'Improve your brain efficiency by 75%',
            'category': 'Chess',
            'price': 16,
            'id': 'e8c4a582043c799b'
        },
        {
            'name': 'Human Chess Board',
            'description': 'A fun game for the family',
            'category': 'Chess',
            'price': 73,
            'id': 'c250633930fbc987'
        },
        {
            'name': 'Bling Bling King',
            'description': 'Gold plated diamond studded King',
            'category': 'Chess',
            'price': 1200,
            'id': '6ff650c49a356a61'
        }
    ];

/*
    function loadData(){
      $http({method:'GET', url:'scripts/json/products.json'}).then(function getResults(results){
        $scope.products = results.data;
        //console.log($scope.products);
      }, function noResults(response){
        console.log(response);
      });
    */

    $scope.formItemSubmit = function(){
        $scope.products.push({'name':$scope.productName, 'description':$scope.productDescription, 'category':'newItem', 'price':$scope.productPrice, 'id':$scope.products.length});
        $scope.searchItemField = $scope.productName;
        $scope.productName = '';
        $scope.productDescription = '';
        $scope.productPrice = '';
        //console.log($scope.products);
    };

    $scope.removeItem = function(e){
      //console.log(e.product);
      $scope.searchItemField = '';
      for(var i = 0; i < $scope.products.length; i++){
        if(e.product.id === $scope.products[i].id){
          //console.log($scope.products[i].id);
          $scope.products.splice(i, 1);
        }
      }

    //  console.log($scope.products);
    };

//  loadData();
  });
