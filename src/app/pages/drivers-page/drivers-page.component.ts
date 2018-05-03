import { Component, OnInit } from '@angular/core';
import {GeneralService} from '../../general.service';

@Component({
  selector: 'app-drivers-page',
  templateUrl: './drivers-page.component.html',
  styleUrls: ['./drivers-page.component.css']
})
export class DriversPageComponent implements OnInit {

  data: any;

  constructor(private generalService: GeneralService) {
   generalService.getGeneral().subscribe(data => {
     this.data = data;
   });
  }

  ngOnInit() {
  }

}
