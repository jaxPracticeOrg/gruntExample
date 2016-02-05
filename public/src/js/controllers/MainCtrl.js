angular.module('MainCtrl', [])
.controller('mainController', ['$scope', function($scope) {
    $scope.message = 'Proven - scope "{{message}}" in MainCtrl working';

//end    
}]);