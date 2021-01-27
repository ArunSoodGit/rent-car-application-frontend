import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpInterceptorService} from './services/http-interceptor.service';
import {HeaderComponent} from './header/header.component';
import {FormsModule} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AllCustomersComponent } from './customers/all-customers/all-customers.component';
import { NewCustomerComponent } from './customers/new-customer/new-customer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { CarDetailsComponent } from './Cars/car-details/car-details.component';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { AllCarsComponent } from './Cars/all-cars/all-cars.component';

import {MatTabsModule} from '@angular/material/tabs';
import { AllRentalsComponent } from './rentals/all-rentals/all-rentals.component';
import { NewCarComponent } from './Cars/new-car/new-car.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMenuModule} from '@angular/material/menu';
import { EditCarComponent } from './Cars/edit-car/edit-car.component';
import { RemoveCarComponent } from './Cars/remove-car/remove-car.component';
import { NewRentalComponent } from './rentals/new-rental/new-rental.component';
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { RemoveCustomerComponent } from './customers/remove-customer/remove-customer.component';
import {MatListModule} from '@angular/material/list';
import { EditRentalComponent } from './rentals/edit-rental/edit-rental.component';
import { RentalDetailsComponent } from './rentals/rental-details/rental-details.component';
import { RemoveRentalComponent } from './rentals/remove-rental/remove-rental.component';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    AllCustomersComponent,
    NewCustomerComponent,
    CarDetailsComponent,
    SidenavComponent,
    HomeComponent,
    AllCarsComponent,
    AllRentalsComponent,
    NewCarComponent,
    EditCarComponent,
    RemoveCarComponent,
    NewRentalComponent,
    EditCustomerComponent,
    CustomerDetailsComponent,
    RemoveCustomerComponent,
    EditRentalComponent,
    RentalDetailsComponent,
    RemoveRentalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSortModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
    MatSidenavModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatListModule,

  ],
 providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
