import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {AuthGaurdService} from './services/auth-guard.service';
import {AllCustomersComponent} from './all-customers/all-customers.component';
import {CarDetailsComponent} from './Cars/car-details/car-details.component';
import {AllCarsComponent} from './Cars/all-cars/all-cars.component';
import {RentalComponent} from './rental/rental.component';
import {AgreementComponent} from './agreement/agreement.component';
import {NewRentalComponent} from './new-rental/new-rental.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGaurdService]},
  {path: 'customers', component: AllCustomersComponent, canActivate: [AuthGaurdService]},
  {path: 'car/:id', component: CarDetailsComponent, canActivate: [AuthGaurdService] },
  {path: 'cars', component: AllCarsComponent, canActivate: [AuthGaurdService] },
  {path: 'agreement', component: AgreementComponent, canActivate: [AuthGaurdService] },
  {path: 'rental/:id', component: NewRentalComponent, canActivate: [AuthGaurdService] },
  {path: 'rentals', component: RentalComponent, canActivate: [AuthGaurdService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
