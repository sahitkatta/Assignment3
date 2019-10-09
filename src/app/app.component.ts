import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import { Login } from './models/Login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '';
  constructor(private loginService: LoginService) {

   }
  user: Login;
  ngOnInit() {
    this.user = {
      username: 'admin',
      password: 'admin',
      role: ''
    };
    this.loginService.authenticate(this.user).subscribe((data) => {
      // this.user = data;
      console.log(data);
    });
  }
}
