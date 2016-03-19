import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { SampleComponent, AnotherSampleComponent } from './sample.components';

@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular 2 App</h1>

        <nav class="btn-group" role="group" aria-label="...">
            <a href="" [routerLink]="['Sample']" class="btn btn-default">Sample</a>
            <a href="" [routerLink]="['AnotherSample']" class="btn btn-default">Another Sample</a>
        </nav>
        
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/sample', name: 'Sample', component: SampleComponent, useAsDefault: true },
    { path: '/another-sample', name: 'AnotherSample', component: AnotherSampleComponent },
    { path: '/**', redirectTo: ['Sample'] }
])
export class AppComponent { }