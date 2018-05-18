import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatDialogModule} from '@angular/material';
import {AgmCoreModule} from '@agm/core';
import {HttpClientModule} from '@angular/common/http';
import {GeneralService} from './general.service';
import {SliderModule} from 'primeng/slider';
import {FormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/primeng';
import {CheckboxModule} from 'primeng/primeng';
import {ScrollPanelModule} from 'primeng/primeng';
import { CarsfilterPipe} from './carsfilter.pipe';


import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { DriversComponent } from './drivers/drivers.component';
import { DongelsComponent } from './dongels/dongels.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GeneralComponent } from './general/general.component';
import { CaptionComponent } from './caption/caption.component';
import { AssignementsComponent } from './assignements/assignements.component';
import { AppRoutingModule } from './app-routing.module';
import { CarsPageComponent } from './pages/cars-page/cars-page.component';
import { DriversPageComponent } from './pages/drivers-page/drivers-page.component';
import { DongelsPageComponent } from './pages/dongels-page/dongels-page.component';
import { ChartModule} from 'primeng/primeng';
import {AgmSnazzyInfoWindowModule} from '@agm/snazzy-info-window';


@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    DriversComponent,
    DongelsComponent,
    NavbarComponent,
    GeneralComponent,
    CaptionComponent,
    AssignementsComponent,
    CarsPageComponent,
    DriversPageComponent,
    DongelsPageComponent,
    CarsfilterPipe
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    MatDialogModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyAKHtTtx2fqxZ_lY1ADZWTI-8jsUxZKQH8'}),
    AgmSnazzyInfoWindowModule,
    HttpClientModule,
    SliderModule,
    FormsModule,
    DropdownModule,
    CheckboxModule,
    ScrollPanelModule,
    AppRoutingModule,
    ChartModule,
  ],
  providers: [
    GeneralService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
