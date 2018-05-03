import { Component, OnInit } from '@angular/core';
import {GeneralService} from '../../general.service';

@Component({
  selector: 'app-dongels-page',
  templateUrl: './dongels-page.component.html',
  styleUrls: ['./dongels-page.component.css']
})
export class DongelsPageComponent implements OnInit {

  data: any;

  constructor(private generalService: GeneralService) {
   generalService.getGeneral().subscribe(data => {
     this.data = data;
   });
  }

  ngOnInit() {
  }

}
