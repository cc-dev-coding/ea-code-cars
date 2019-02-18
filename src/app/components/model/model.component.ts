import { Component, OnInit, Input } from '@angular/core';
import { Model } from '../../model/Model';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  @Input() model: Model;

  constructor() { }

  ngOnInit() {
  }

}
