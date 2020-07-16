var myApp=angular.module('myApp',[]);

myApp.controller('myAppController',['$scope', function($scope){

    $scope.removeItem = function(item){
        var removedItem=$scope.items.indexOf(item);
        $scope.items.splice(removedItem, 1);
    }

   
  $scope.items =[
      {
          name:"Glass",
          color:"green",
          price:5,
          available:true
      },
      {
          name:"Crystal",
          color:"yellow",
          price:30,
          available:true

      },
      {
          name:"Sofa",
          color:"black",
          price:100,
          available:true

      }
  ];

}]);
