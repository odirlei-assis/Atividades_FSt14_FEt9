import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  userModel = new User();

  receberDados(){
    this.loginService.login(this.userModel).subscribe({
      next: (response) => { 
        console.log(response.body.user.nome)
        localStorage.setItem("nomeUsuario", response.body.use.nome)
        this.router.navigateByUrl("/")
      }
    })
  }

}
