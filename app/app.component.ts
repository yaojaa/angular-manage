import {Component} from '@angular/core';
import {LoginFormComponent} from './login-form.component';

@Component({
    selector: 'my-app', 
    template: '<login-form></login-form><router-outlet></router-outlet>', 
    directives: [LoginFormComponent]
})


@RouteCoufig([
{path:'/crisis-center',name:'CrisisCenter',component:CrisisListComponent},   
{path:'/heroes',name:'Heros',component:HeroListComponent},   
{path:'/hero/:id',name:'HeroDetail',component:HeroDetailComponent}   
])


export class AppComponent{}
