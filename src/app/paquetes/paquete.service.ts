import { Injectable } from '@angular/core';
import { Paquete } from './paquete';
//import { PAQUETES } from './paquetes.json';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class PaqueteService {
  private urlEndPoint: string = 'http://s692755340.onlinehome.mx:8780/noohwi/packages?id_user=6ddc2c4b-093a-4120-91d2-f089be51690c&token=f39f37bc-5c3a-4daa-a93a-ff8d0e4ac1e6';

  constructor(private http: HttpClient) { }
  getPaquete(): Observable<Paquete[]> {
    //return of(PAQUETES);
    //return this.http.get<Paquete[]>(this.urlEndPoint);
    return this.http.get(this.urlEndPoint).pipe(
      map(response => {
        return response['data'].packages as Paquete[];
      })
    );

  }
}
