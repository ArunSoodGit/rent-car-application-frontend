import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {CarTableComponent} from './car-table/car-table.component';
import {AuthGaurdService} from './services/auth-guard.service';
import {ClientsComponent} from './clients/clients.component';
import {CarDetailsComponent} from './car-details/car-details.component';
import {HomeComponent} from './home/home.component';
import {AvailableCarsComponent} from './available-cars/available-cars.component';
import {AllCarsComponent} from './all-cars/all-cars.component';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGaurdService]},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGaurdService]},
  {path: 'clients', component: ClientsComponent, canActivate: [AuthGaurdService]},
  {path: 'car/:id', component: CarDetailsComponent, canActivate: [AuthGaurdService] },
  {path: 'cars', component: CarTableComponent, canActivate: [AuthGaurdService] },
  {path: 'all-cars', component: AllCarsComponent, canActivate: [AuthGaurdService] },
  {path: 'available-cars', component: AvailableCarsComponent, canActivate: [AuthGaurdService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
