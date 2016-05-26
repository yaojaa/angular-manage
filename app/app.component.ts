

import {Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import {LoginFormComponent} from './login-form.component';

@Component({
    selector: 'my-app', 
    template: '<router-outlet></router-outlet>', 
    directives: [LoginFormComponent,LoginFormComponent],
	providers: [
	  ROUTER_PROVIDERS
	]
})


@RouteConfig([
{path:'/login',name:'login',component:LoginFormComponent, useAsDefault: true}
])


export class AppComponent{}
