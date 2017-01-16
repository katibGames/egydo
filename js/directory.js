angular.module('egydo', []).controller('tasklist', function ($scope) {
    $scope.list = [{
        name: 'صلاة الصبح'
        , time: 10
        }, {
        name: 'افطر'
        , time: 12
        }, {
        name: 'اشرب شاى'
        , time: 11
        }, {
        name: 'ميعاد النزول'
        , time: 13
        }];
    $scope.addtask = function () {
        $scope.list.push({
            name: $scope.name
            , time: $scope.time
        , });
        $scope.name = '';
        $scope.time = 0;
    };
    $scope.remove = function (item) {
        $scope.list.splice($scope.list.indexOf(item),1)
    };
    $scope.edit = function (item) {
        $scope.current = item
    };
    $scope.current = {} ;
     
})