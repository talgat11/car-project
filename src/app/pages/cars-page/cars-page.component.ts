import {Component, Input, OnInit} from '@angular/core';
import {GeneralService} from '../../general.service';

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.css']
})
export class CarsPageComponent implements OnInit {

  data: any;

  constructor(private generalService: GeneralService) {
   generalService.getGeneral().subscribe(data => {
     this.data = data;
   });
  }

  onEvent(event) {
    console.log(event);
    this.data.cars.push({
      'VIN': '',
      'model': '',
      'dist': 0,
      'type': '',
      'average': '',
      'total': '',
      'status': '',
      'details': '',
      'heading': '',
      'distance_empty': '',
      'speed': '',
      'wheel_speed': '',
      'image': 'assets/white_car.png',
      'locker': 'assets/close.png',
      'country': 'Switzerland',
      'town': 'Fribourg'
    });
  }

  ngOnInit() {
  }

}
