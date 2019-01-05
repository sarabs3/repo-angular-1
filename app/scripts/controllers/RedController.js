const RedController = function($scope, $routeParams) {
    $scope.name = 'RedController';
    $scope.params = $routeParams;
}
RedController.$inject = ['$scope', '$routeParams'];

const RedModule = angular.module('chapter.module', []);
RedModule.controller('RedController', RedController);

export default RedModule;
