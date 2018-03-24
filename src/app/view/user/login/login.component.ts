import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  HOST = 'http://api.acytest.com/v1';
  error = false;

  signIn(email, password) {
    const log = this.login(email, password).subscribe(result => {
      if (result) {
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        this.router.navigate([returnUrl || '/']);
      } else {
        this.error = true;
      }
    });
    this.error = true;

  }

  login(email, password) {
    const URL = this.HOST + '/login?email=' + email.value + '&password=' + password.value;
    return this.http.post(URL, '').
      map(response => {
        const result = response.json();
        if (result && result.token) {
          localStorage.setItem('token', result.token);
          return true;
        }
        return false;
      });
  }

  private handlerError(error: Response) {
    if (error.status === 401) {
      console.log(401);
    } else if (error.status === 400) {
      console.log(400);
    } else {
      console.log('error');
    }
  }

  constructor(
    private http: Http,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}
