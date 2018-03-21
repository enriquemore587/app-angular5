import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LoginReques } from '../models/login/LoginReques';
import { GLOBAL } from '../services/global';
import { UserService } from '../services/user.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  public title: string = 'ACCESO';

  public user: LoginReques;
  public token;
  public status: number = -1;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {
    this.user = new LoginReques();
  }

  ngOnInit() {
    console.log(this._userService.getIdentity());
    console.log(this._userService.getToken());
  }

  onSubmit(){
    this._userService.login(this.user).subscribe(
      response =>{
        this.status = response.status;
        if (response.status == 0) {
          swal('LOGIN', `Weelcome`, 'success');
          localStorage.setItem('identity', JSON.stringify(response.data));
          localStorage.setItem('token', JSON.stringify(response.data.token));
          this._router.navigate(['/']);
        }else{
          swal('LOGIN', `Usuario y/o Contraseña Inválida`, 'info');
          console.log(response);
        }
      },
      error => {
        swal('LOGIN', `NO LOGGEADO`, 'error');
        console.error(error);
      }
    );
  }

}
