import { Component } from '@angular/core';
import { GeneralService} from './general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data: any;

  constructor(private generalService: GeneralService) {
   generalService.getGeneral().subscribe(data => {
     this.data = data;
   });
  }
}
