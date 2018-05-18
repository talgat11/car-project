import {Component, Input, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  @Input() data: any;

  head = ['Name', 'Comment', 'Details'];
  modalTitle = ['#', 'Model', 'Type', 'Dongel\'\s ID', 'Date start', 'Date stop', 'Remove', 'Edit'];
  closeResult: string;
  modalDriver: object;
  editTitle = ['#', 'Model', 'Type', 'Dongel\'\s ID', 'Date start', 'Date stop'];
  dataChart: any;

  constructor(private modalService: NgbModal) {
    this.dataChart = {
      labels: ['1', '2', '3', '4', '5'],
      datasets: [
        {
          label: 'Average consumption [km/l]',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#4bc0c0'
        },
        {
          label: 'Total distance monitoring [km]',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#565656'
        }
      ]
    };
  }

  ngOnInit() {
  }

  open(content, item) {
    this.modalDriver = item;
    this.modalService.open(content, {backdrop: false, windowClass: 'custom-class'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.getDriver(item);
  }

  openEdit(content, item) {
    this.modalDriver = item;
    this.modalService.open(content, {backdrop: false, windowClass: 'custom-class'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.getDriver(item);
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  getDriver(item) {
    return this.data.valueOf(item);
  }

  removeItem (item) {
    this.data.splice(this.data.indexOf(item), 1);
    this.modalDriver = null;
  }
  createDriver (item) {
    this.data.push(
      {
      'name': 'John Doe ' + item,
      'comment': 'New',
      'status': 'Driver',
      'total': '123 [km]',
      'hours': '10 [hours]',
      'average': '45',
      'VIN': item,
      'model': 'Megan_RS',
      'type': 'ICE',
      'dongel': '6875',
      'start': '22.03.2014',
      'stop': '04.06.2016'
      }
    );
  }
  getDataChart(item) {
    return this.data.average;
  }

}
