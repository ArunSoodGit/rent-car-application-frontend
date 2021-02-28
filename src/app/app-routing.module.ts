import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {AuthGaurdService} from './services/auth-guard.service';
import {AllCustomersComponent} from './customers/all-customers/all-customers.component';
import {CarDetailsComponent} from './cars/car-details/car-details.component';
import {AllCarsComponent} from './cars/all-cars/all-cars.component';
import {AllRentalsComponent} from './rentals/all-rentals/all-rentals.component';

import {CustomerDetailsComponent} from './customers/customer-details/customer-details.component';
import {RentalDetailsComponent} from './rentals/rental-details/rental-details.component';
import {EditCarComponent} from './cars/edit-car/edit-car.component';
import {EditCustomerComponent} from './customers/edit-customer/edit-customer.component';
import {EditRentalComponent} from './rentals/edit-rental/edit-rental.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGaurdService]},
  {path: 'customers', component: AllCustomersComponent, canActivate: [AuthGaurdService]},
  {path: 'customers/:id', component: CustomerDetailsComponent, canActivate: [AuthGaurdService]},
  {path: 'cars/:id', component: CarDetailsComponent, canActivate: [AuthGaurdService] },
  {path: 'cars', component: AllCarsComponent, canActivate: [AuthGaurdService] },
  {path: 'rentals/:id', component: RentalDetailsComponent, canActivate: [AuthGaurdService] },
  {path: 'rentals', component: AllRentalsComponent, canActivate: [AuthGaurdService] },
  {path: 'editCar', component: EditCarComponent, canActivate: [AuthGaurdService] },
  {path: 'editCustomer', component: EditCustomerComponent, canActivate: [AuthGaurdService] },
  {path: 'editRental', component: EditRentalComponent, canActivate: [AuthGaurdService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
