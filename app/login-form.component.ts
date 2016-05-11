import {Component} from '@angular/core';
import {NgForm}    from '@angular/common';
import {Http, Response,Headers, RequestOptions} from '@angular/http';


@Component({
    selector: 'login-form',
    templateUrl: 'templates/login.html'
})


export class LoginFormComponent  {

	 data: Object;
  loading: boolean;


  constructor(public http: Http) {
  }

powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

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
        alert('登录成功！！')
      }); 
  }

}
