import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarsPageComponent} from './pages/cars-page/cars-page.component';
import {DriversPageComponent} from './pages/drivers-page/drivers-page.component';
import {DongelsPageComponent} from './pages/dongels-page/dongels-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/cars', pathMatch: 'full'},
  { path: 'cars', component: CarsPageComponent},
  { path: 'drivers', component: DriversPageComponent},
  { path: 'dongels', component: DongelsPageComponent}
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  })
export class AppRoutingModule { }


