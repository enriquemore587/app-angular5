import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekend-rides',
  templateUrl: './weekend-rides.component.html',
  styleUrls: ['./weekend-rides.component.css']
})
export class WeekendRidesComponent implements OnInit {
  listaWeekends: string[] = ['WEEKEND 1', 'WEEKEND 2', 'WEEKEND 3'];
  habilitar: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  setHabilitar(): void {
    this.habilitar = (this.habilitar)?false:true;
  }
}
