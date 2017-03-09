'use strict';

(function () {

var navtargets = {
    topbar : [
        { path: '/', label: "Home", templateUrl: 'partials/home.html' },
        { path: '/videos', label: "Videos", templateUrl: 'partials/videos.html' },
        { path: '/games', label: "Games", templateUrl: 'partials/games.html' }
    ]
};

// Keep everything in one module, for now.
angular.module('XiaoBaoApp', [
    'ui.bootstrap',                                                                     
    'ngRoute',                                                                          
    'angular-flexslider',
    'ngResource',                                                                       
    'ngAnimate',                                                                        
    'ngCookies',                                                                        
    'ngSanitize',   
]).
// http://stackoverflow.com/questions/18137662/why-cant-i-get-a-location-injected-into-in-my-config
config(['$routeProvider', function($routeProvider) {
    navtargets.topbar.forEach(function (item) {
        $routeProvider.when(item.path, {templateUrl: item.templateUrl /*, controller: 'xCtrl'*/});
    });
    $routeProvider.otherwise({redirectTo: '/'});
}])
.run(function ($rootScope, $location, $resource, $cookies, $interval) {
})
// http://justinklemm.com/angularjs-filter-ordering-objects-ngrepeat/
.filter('orderObjectBy', function() {
  return function(items, field, reverse) {
    var filtered = [];
    angular.forEach(items, function(item) {
      filtered.push(item);
    });
    filtered.sort(function (a, b) {
      return (a[field] > b[field] ? 1 : -1);
    });
    if(reverse) filtered.reverse();
    return filtered;
  };
})
.controller('PageController',
    ['$scope', '$sce', '$location',
    function (scope, sce, $location) {
    }])
.controller('NavController',
    ['$scope', '$sce',
    function (scope, sce) {
        scope.menuitems = navtargets;
    }])
.controller('SlideController', 
    ['$scope',
    function (scope) {

        var n = "img/";
        var pics = [
            { url : n + "1.jpg" },
            { url : n + "2.jpg" },
            { url : n + "3.jpg" },
            { url : n + "4.jpg" },
            { url : n + "5.jpg" },
            { url : n + "6.jpg" },
            { url : n + "7.jpg" },
            { url : n + "8.jpg" },
            { url : n + "9.jpg" },
            { url : n + "10.jpg" },
            { url : n + "11.jpg" },
            { url : n + "12.jpg" },
            { url : n + "13.jpg" },
            { url : n + "14.jpg" },
            { url : n + "15.jpg" },
            { url : n + "16.jpg" },
            { url : n + "17.jpg" },
            { url : n + "18.jpg" },
            { url : n + "19.jpg" },
            { url : n + "20.jpg" },
            { url : n + "21.jpg" },
            { url : n + "22.jpg" },
            { url : n + "23.jpg" },
            { url : n + "24.jpg" },
            { url : n + "25.jpg" },
        ];
        
        scope.pictures = pics;
    }])
})();
