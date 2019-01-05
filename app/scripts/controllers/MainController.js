const MainController = function($scope, $route, $routeParams, $location) {
    $scope.greet = 'Hello World!';
    $scope.$route = $route;
    $scope.$location = $location;
};
MainController.$inject = ['$scope', '$route', '$routeParams', '$location'];

export default MainController;