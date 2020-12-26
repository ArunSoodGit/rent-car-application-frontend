import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {AuthGaurdService} from './services/auth-guard.service';
import {AllCustomersComponent} from './customers/all-customers/all-customers.component';
import {CarDetailsComponent} from './Cars/car-details/car-details.component';
import {AllCarsComponent} from './Cars/all-cars/all-cars.component';
import {AllRentalsComponent} from './rentals/all-rentals/all-rentals.component';
import {AgreementComponent} from './agreement/agreement.component';
import {NewRentalComponent} from './rentals/new-rental/new-rental.component';
import {CustomerDetailsComponent} from './customers/customer-details/customer-details.component';
import {RentalDetailsComponent} from './rentals/rental-details/rental-details.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGaurdService]},
  {path: 'customers', component: AllCustomersComponent, canActivate: [AuthGaurdService]},
  {path: 'customers/:id', component: CustomerDetailsComponent, canActivate: [AuthGaurdService]},
  {path: 'cars/:id', component: CarDetailsComponent, canActivate: [AuthGaurdService] },
  {path: 'cars', component: AllCarsComponent, canActivate: [AuthGaurdService] },
  {path: 'agreement', component: AgreementComponent, canActivate: [AuthGaurdService] },
  {path: 'rentals/:id', component: RentalDetailsComponent, canActivate: [AuthGaurdService] },
  {path: 'rentals', component: AllRentalsComponent, canActivate: [AuthGaurdService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
