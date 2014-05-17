/**
 * Created by admin on 16/5/14.
 */
(function (define) {
    "use strict";

    define(['socialpet/RouterManager',
            'splash/SplashModule'
            ],
        function (RouterManager, SplashModule) {
            var app, appName = "socialPet";
            app = angular
                    .module(
                        appName,
                        [
                            "ngRoute",
                            SplashModule
                        ])
                    .config(RouterManager);
            angular.bootstrap( document.getElementsByTagName("body")[0], [ appName ]);
            return app;
        });
}(define));