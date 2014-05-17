/**
 * Created by admin on 16/5/14.
 */
(function(define) {
    "use strict";

    define(['splash/SplashController'], function(SplashController) {
        var moduleName = 'socialPet.SplashModule';

        angular
            .module(
                    moduleName, [])
            .controller('SplashController', SplashController);

        return moduleName;
    });

}(define));