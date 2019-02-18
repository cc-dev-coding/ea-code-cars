import { Component, OnInit, Input } from '@angular/core';
import { Make } from '../../model/Make';
import * as lodash from 'lodash';


@Component({
  selector: 'app-make',
  templateUrl: './make.component.html',
  styleUrls: ['./make.component.css']
})
export class MakeComponent implements OnInit {

  @Input() make: Make;

  constructor() { }

  ngOnInit() {
    this.make.models = lodash.orderBy(this.make.models, ['name'], ['asc']);
  }

}
