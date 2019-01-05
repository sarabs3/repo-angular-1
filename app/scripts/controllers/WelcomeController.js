const WelcomeController = $scope => {
    $scope.greeting = 'Welcome Webpack!';
};

WelcomeController.$inject = ['$scope'];

export default WelcomeController;