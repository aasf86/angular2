System.register(['angular2/platform/browser', '././app.component', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, router_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            //import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
            /*
            var BOOTSTRAP_PROVIDERS = [];
            BOOTSTRAP_PROVIDERS.push(provide(LocationStrategy, {useClass: HashLocationStrategy}));
            BOOTSTRAP_PROVIDERS.push(ROUTER_PROVIDERS);
            
            bootstrap(AppComponent,BOOTSTRAP_PROVIDERS);
            
            */
            browser_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=boot.js.map