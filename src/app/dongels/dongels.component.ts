import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dongels',
  templateUrl: './dongels.component.html',
  styleUrls: ['./dongels.component.css']
})
export class DongelsComponent implements OnInit {

  @Input() data: any;

  modalDongel: object;

  constructor() { }

  ngOnInit() {
  }

  getDongel(item) {
    return this.data.valueOf(item);
  }

}
