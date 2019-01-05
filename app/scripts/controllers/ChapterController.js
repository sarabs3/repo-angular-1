const ChapterController = function($scope, $routeParams) {
    $scope.name = 'ChapterController';
    $scope.params = $routeParams;
}
ChapterController.$inject = ['$scope', '$routeParams'];

const chapterModule = angular.module('chapter.module', []);
chapterModule.controller('ChapterController', ChapterController);

export default chapterModule;