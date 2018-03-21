import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers: [UserService]
})
export class HeaderComponent implements OnInit, DoCheck{
  public title: String;
  public token: string;
  public identity: string;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ){
    this.title = "NOOHWI CYCLING 2018";
  }

  ngDoCheck(){
    this.identity = this._userService.getIdentity();
  }

  ngOnInit(){
  }
  logOut() {
    localStorage.clear();
    this.identity = null;
    this._router.navigate(['/']);
  }
}
