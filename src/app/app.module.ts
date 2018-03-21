import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WeekendRidesComponent } from './weekend-rides/weekend-rides.component';
import { PaquetesComponent } from './paquetes/paquetes.component';
import { FormsModule } from '@angular/forms';

// http services
import { HttpClientModule } from '@angular/common/http';

//services
import { PaqueteService } from './paquetes/paquete.service';

// rutas
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {path: '', redirectTo: '/paquetes', pathMatch: 'full'},
  {path: 'weekends', component: WeekendRidesComponent},
  {path: 'paquetes', component: PaquetesComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WeekendRidesComponent,
    PaquetesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [PaqueteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
