import { Injectable } from '@angular/core';
// import { HttpClient, HttpParams } from '@angular/common/http';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseService implements CanActivate {
  apiurl:string = "http://localhost/kevin3/uas/src/api/";

  constructor(
    // private http: HttpClient,
    protected router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot) {
    if (route.data.role == "register") {
      this.router.navigate(['/login']);
      return false;
    }else{
      if(false){
        return false;
      }
    }
    return true;
  }

  test(){
    // console.log(this.http.get("/assets/test.php",  {responseType: 'text'}).subscribe(data => console.log(data)));
    if(true)
      this.router.navigate(['/']);
  }

  // login(name:string, pass:string):Observable<any> {
  //   let body = new HttpParams();
  //   body = body.set('username', name);
  //   body = body.set('password', pass);
  //   return this.http.post (this.apiurl + "login.php", body);
  // }
}
