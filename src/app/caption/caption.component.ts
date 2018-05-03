import {Component, Input, OnInit} from '@angular/core';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-caption',
  templateUrl: './caption.component.html',
  styleUrls: ['./caption.component.css']
})

export class CaptionComponent implements OnInit {

  @Input() data: any;
    value: object;

    towns: SelectItem[];

    selectedTown: string;

    selectedCountry: string;

    countries: SelectItem[];

  emptyValues: number[] = [10, 200];
  fuelValues: number[] = [10, 19];
  electricValues: number[] = [10, 20];
  totalValues: number[] = [19000, 130000];
  speedValues: number[] = [30, 120];
  wheelValues: number[] = [1000, 12000];

  public isCollapsed = true;


  constructor() {
    this.countries = [
            {
                label: 'Germany', value: 'germany.png'
            },
            {
                label: 'USA', value: 'usa.png'
            },
            {
                label: 'Switzerland', value: 'swiss.png'
            },
            {
                label: 'UK', value: 'uk.png'
            },
            {
                label: 'France', value: 'france.png'
            },
            {
                label: 'Japan', value: 'japan.png'
            },
            {
                label: 'All countries', value: 'earth.jpg'
            }
        ];
    this.towns = [
        {label: 'New York', value: 'NY'},
        {label: 'Rome', value: 'RM'},
        {label: 'London', value: 'LDN'},
        {label: 'Istanbul', value: 'IST'},
        {label: 'Paris', value: 'PRS'},
        {label: 'All towns', value: 'ALL'}
    ];
  }

  filter() {
    console.log(this.emptyValues);
  }

  ngOnInit() {
  }

}
