'use strict';

tihcwlApp.controller('CreateWishListController',
  function CreateWishListController($scope, firebasePost) {
    $scope.bands = [{}];

    $scope.saveWishList = function(wishList){
      if ($scope.newWishListForm.$valid) {
        firebasePost.writeWishList(wishList)
        firebasePost.writeBandList(wishList)
      }
    };

    $scope.addBand = function(){
      $scope.bands.push({})
    };
  }
)
