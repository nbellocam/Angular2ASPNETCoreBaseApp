import {bootstrap}  from "angular2/platform/browser";
import {AppComponent} from "./app.component";
import {HTTP_PROVIDERS} from "angular2/http";
import {ROUTER_PROVIDERS} from 'angular2/router'

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);