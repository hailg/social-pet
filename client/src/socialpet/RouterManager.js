/**
 * Created by admin on 16/5/14.
 */
(function(define) {
    "use strict";

    define([
            'splash/SplashController'
        ],
        function(SplashController) {
            var RouteManager = function($routeProvider) {
                $routeProvider
                    .when('/splash', {
                        templateUrl: '/assets/views/splash.tpl.html',
                        controller: 'SplashController'
                    })
                    .otherwise({
                        redirectTo: '/splash'
                    })
            };
            return ['$routeProvider', RouteManager];
        });
}(define));