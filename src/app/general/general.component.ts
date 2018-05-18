import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  lat = 46.793527;
  lng = 7.159088;

  constructor() { }

  ngOnInit() {
  }

}
