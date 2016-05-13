import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from '././app.component';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {provide} from 'angular2/core';
//import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

/*
var BOOTSTRAP_PROVIDERS = [];
BOOTSTRAP_PROVIDERS.push(provide(LocationStrategy, {useClass: HashLocationStrategy}));
BOOTSTRAP_PROVIDERS.push(ROUTER_PROVIDERS);

bootstrap(AppComponent,BOOTSTRAP_PROVIDERS);

*/
bootstrap(AppComponent,[ROUTER_PROVIDERS]);