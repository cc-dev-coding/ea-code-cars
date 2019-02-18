import { Component, OnInit, Input } from '@angular/core';
import { Show } from '../../model/Show';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  @Input() show: Show;

  constructor() { }

  ngOnInit() {
  }

}
