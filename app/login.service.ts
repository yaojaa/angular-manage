// import {HTTP_BINDINGS,Http,Response, Headers, RequestOptions } from '@angular/http';

// userlogin (name: string,password:string): Promise<Hero> {
//   let body = JSON.stringify({ name });
//   let headers = new Headers({ 'Content-Type': 'application/json' });
//   let options = new RequestOptions({ headers: headers });
//   return this.http.post(this.heroesUrl, body, options)
//              .toPromise()
//              .then(this.extractData)
//              .catch(this.handleError);
// }
// private extractData(res: Response) {
//   if (res.status < 200 || res.status >= 300) {
//     throw new Error('Bad response status: ' + res.status);
//   }
//   let body = res.json();
//   return body.data || { };
// }
// private handleError (error: any) {
//   // In a real world app, we might send the error to remote logging infrastructure
//   let errMsg = error.message || 'Server error';
//   console.error(errMsg); // log to console instead
//   return Promise.reject(errMsg);
// }