import { Component, OnInit } from '@angular/core';
import { Paquete } from './paquete';
import { PaqueteService } from './paquete.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrls: ['./paquetes.component.css']
})
export class PaquetesComponent implements OnInit {
  paquetes: Paquete[];

  constructor(
    private paqueteService: PaqueteService
  ) { }

  ngOnInit() {
    this.paqueteService.getPaquete().subscribe(
      paquetes => {
        this.paquetes = paquetes;
        swal('Paquetes', `lista de paquetes`, 'success');
      }
    );
  }

}
