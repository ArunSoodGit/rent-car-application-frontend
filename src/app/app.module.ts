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
import { CarTableComponent } from './car-table/car-table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ClientsComponent } from './clients/clients.component';
import { NewClientComponent } from './new-client/new-client.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { EditClientComponent } from './edit-client/edit-client.component';
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
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { CarDetailsComponent } from './car-details/car-details.component';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    CarTableComponent,
    ClientsComponent,
    NewClientComponent,
    ClientDetailsComponent,
    EditClientComponent,
    CarDetailsComponent,
    SidenavComponent
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

  ],
 providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
