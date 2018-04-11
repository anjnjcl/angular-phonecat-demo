

var phonecatControllers = angular.module('phonecatControllers',[]);
// phonecatControllers.controller('PhoneListCtrl',['$scope','Phone',function($scope,Phone){
//     // $http.get('phones/phones.json').success(function(data){
//     //     $scope.phones = data;
//     // });
//     $scope.phones = Phone.query();
//     $scope.orderProp = 'age';
// }]);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone', function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

// phonecatControllers.controller('PhoneDetailCtrl',['$scope','$routeParams','Phone',function($scope,$routeParams,Phone){
//     $scope.phone =Phone.get({phoneId: $routeParams.phoneId},function(phone){
//         $scope.mainImageUrl = phone.images[0];
//     });
phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone', function($scope, $routeParams, Phone) {
    console.log($routeParams);
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });


    $scope.setImage = function(imageUrl){
        $scope.mainImageUrl = imageUrl;
    }
    $scope.hello =function(name){
        alert('Hello,'+ (name || 'world')+'!');
    }

}]);

// phonecatControllers.controller('PhoneDetailCtrl',['$scope','$routeParams','$http',function($scope,$routeParams,$http){
//     $scope.phoneId = $routeParams.phoneId;
//     $http.get('phones/'+$routeParams.phoneId+'.json').success(function(data){
//         $scope.phone = data;
//         $scope.mainImageUrl = data.images[0];
//     });

//     $scope.setImage = function(imageUrl){
//         $scope.mainImageUrl = imageUrl;
//     }
//     $scope.hello =function(name){
//         alert('Hello,'+ (name || 'world')+'!');
//     }

// }]);

