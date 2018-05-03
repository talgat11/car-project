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

  ngOnInit() {
  }

}
