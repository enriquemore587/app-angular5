import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NOOHWI CYCLING 2018';
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
  ) {

  }
}
