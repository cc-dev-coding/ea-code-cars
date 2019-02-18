import { Component, OnInit, Input } from '@angular/core';
import { Model } from '../../model/Model';
import * as lodash from 'lodash';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  @Input() model: Model;

  constructor() { }

  ngOnInit() {
    this.model.shows = lodash.orderBy (this.model.shows, ['name'], ['asc']);
  }

}
