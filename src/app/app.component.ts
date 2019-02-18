import { Component, OnInit} from '@angular/core';
import { Make } from './model/Make';
import * as lodash from 'lodash';

import { CarshowService } from './services/carshow.service';
import { TransformService } from './services/transform.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor (private carShowService: CarshowService, private transformService : TransformService) {}

  title = 'Energy Australia Coding Test';

  subtitle = 'Cars participation in car shows';

  makes: Make[];

  error: String;

  ngOnInit() {
    this.getMakes();
  }

  getMakes() {
    this.carShowService.getCarShows().subscribe((response: any) => {
      this.makes = this.transformService.transform(response);
    },
    (response: any) => {
      this.error = 'Error : Couldn\'t get a response from the server';

    })
  }
 
}
