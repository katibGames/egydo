angular.module('egydo', ['ngStorage','ngAnimate']).controller('task', [
    '$scope',
    '$localStorage',
    '$http',
    function($scope, $localStorage,$http) {       
        var dirlist = this;   
        dirlist.today = new Date();
        dirlist.list = [];
        dirlist.note = [];
        dirlist.toggle = false;
        dirlist.addtask = function() {
            dirlist.list.push({name: dirlist.name, time: dirlist.time, type: dirlist.type});
            dirlist.name = '';
            dirlist.time = '';
            dirlist.type = '';
            $localStorage.list = dirlist.list;
        };
        dirlist.addnote = function() {
            dirlist.note.push({name: dirlist.name, time: dirlist.time, type: dirlist.type});
            dirlist.name = '';
            dirlist.time = '';
            dirlist.type = '';
            $localStorage.note = dirlist.note;
        };
        dirlist.left = function() {
        return 100 - dirlist.note.length;
    };

        $http.get("prayertimedata.js")
    .then(function (response) {dirlist.prayer = records.data.records;});
    
        dirlist.remove = function(item) {
            dirlist.list.splice(dirlist.list.indexOf(item), 1)
        };
         dirlist.removenote = function(item) {
            dirlist.note.splice(dirlist.note.indexOf(item), 1)
        };
        dirlist.load = function() {
            for (var i = 0; i < $localStorage.list.length; i++) {
                if ($localStorage.list[i].name === "") {
                    return false;

                };
            }
            return true;

        };
        /* dirlist.saveData = function () {
            $localStorage.list = dirlist.list;
        };*/
        dirlist.loadData = function() {
            dirlist.list = $localStorage.list;
        };
         

    }])
module.controller('MyCtrl', function($cordovaStatusbar,$cordovaSplashscreen) {
  $cordovaStatusbar.overlaysWebView(true);
  $cordovaSplashscreen.show();
  // styles: Default : 0, LightContent: 1, BlackTranslucent: 2, BlackOpaque: 3
  // $cordovaStatusbar.style(1);

  // supported names: black, darkGray, lightGray, white, gray, red, green,
  // blue, cyan, yellow, magenta, orange, purple, brown
  $cordovaStatusbar.styleColor('black');

  $cordovaStatusbar.styleHex('#311B92');

   $cordovaStatusbar.hide();

   $cordovaStatusbar.show();

   var isVisible = $cordovaStatusbar.isVisible();

});
