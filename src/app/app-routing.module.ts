import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {CarTableComponent} from './car-table/car-table.component';
import {AuthGaurdService} from './services/auth-guard.service';
import {ClientsComponent} from './clients/clients.component';
import {CarDetailsComponent} from './car-details/car-details.component';

const routes: Routes = [
  {path: '', component: CarTableComponent, canActivate: [AuthGaurdService]},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGaurdService]},
  {path: 'clients', component: ClientsComponent, canActivate: [AuthGaurdService]},
  {path: 'car/:id', component: CarDetailsComponent },
  {path: 'cars', component: CarTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
