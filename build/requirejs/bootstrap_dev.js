/**
 *  Use aysnc script loader, configure the application module (for AngularJS)
 *  and initialize the application ( which configures routing )
 *
 *  @author Thomas Burleson
 */

 (function( window, head ) {
    "use strict";

    head.js(

      // Pre-load these for splash-screen progress bar...

      { require    : "./vendor/requirejs/require.js",                  size: "80196"   },
      { angular    : "./vendor/angular/angular.js",                    size: "551057"  },
      { ngRoute    : "./vendor/angular-route/angular-route.js",        size: "30052"   }
    )
    .ready("ALL", function() {

        require.config (
            {
            appDir  : '',
            baseUrl : './src',
            priority: 'angular',
            paths   :
            {
                // Configure alias to full paths
                'splash' : './socialpet/splash'

            },
            shim    :
            {

            }
        });


        require( [ "main" ], function( app )
        {
            // Application has bootstrapped and started...
        });


    });



}( window, head ));
