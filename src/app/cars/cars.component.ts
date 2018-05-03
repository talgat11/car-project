import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  @Input() data: any;

  head = ['VIN', 'Model', 'Dist. empt.', 'Type', 'Average', 'Total Distance', 'Ignition Status', 'Details'];
  modalTitle = ['Signal name', 'Value'];

  closeResult: string;
  modalCar: object;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
   open(content, item) {
    this.modalCar = item;
    this.modalService.open(content, {backdrop: false, windowClass: 'custom-class'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.getCar(item);
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

  getCar(item) {
    return this.data.valueOf(item);
  }

  filters() {

  }



}
