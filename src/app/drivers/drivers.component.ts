import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  @Input() data: any;

  drivers: Driver [];

  constructor() { }

  ngOnInit() {
  }

}
