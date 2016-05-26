import {Component} from '@angular/core';
import {NgForm}    from '@angular/common';
import { Router } from '@angular/router-deprecated';

import {Http, Response,Headers, RequestOptions} from '@angular/http';


@Component({
    selector: 'login-form',
    templateUrl: 'templates/login.html'
})


export class LoginFormComponent  {

	 data: Object;
   loading: boolean;


  constructor(public http: Http,public router: Router) {

  }

powers = ['Really Smart', 'Super Flexible','Super Hot', 'Weather Changer'];

model={
	name:'',
	pass:''
}
  submitted = false;
  onSubmit():void {
   this.submitted = true;
   this.http.get('http://jsonplaceholder.typicode.com/posts')
      .subscribe((res: Response) => {
      	console.log(res.json());
        this.data = res.json();
        this.submitted = false;
          // let link = ['HeroDetail', { id: hero.id }];
          //  this.router.navigate(link);
      }); 
  }

}
