angular.module('egydo', []).controller('tasklist', function ($scope) {
    var dirlist = this;
    dirlist.list = [{
        name: 'صلاة الصبح',
        time: 10
    }, {
        name: 'افطر',
        time: 12
    }, {
        name: 'اشرب شاى',
        time: 11
    }, {
        name: 'ميعاد النزول',
        time: 13
    }];
    dirlist.toggle = false;
    dirlist.addtask = function () {
        dirlist.list.push({
            name: dirlist.name,
            time: dirlist.time,
        });
        dirlist.name = '';
        dirlist.time = 0;
    };
    dirlist.remove = function (item) {
        dirlist.list.splice(dirlist.list.indexOf(item), 1)
    };
    dirlist.edit = function (item) {
        $scope.current = item
    };
    $scope.current = {};

})
