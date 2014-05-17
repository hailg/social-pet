/**
 * Created by admin on 16/5/14.
 */

(function(define) {
    "use strict";

    define([], function() {
        var SplashController = function ($scope) {
            $scope.max = 100;
            $scope.value = 50;
        };
        return ['$scope', SplashController];
    });
}(define));