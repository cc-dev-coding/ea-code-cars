import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Energy Australia Coding Test';

  subtitle = 'Cars participation in car shows';




  makes = [
    {
      'name': 'make2',
      'models': [
        {
          'name': 'model3',
          'shows': [
            { 'name': 'show 4' },
            { 'name': 'show 2' }
          ]
        },
        {
          'name': 'model2',
          'shows': [
            { 'name': 'show 3' },
            { 'name': 'show 2' }
          ]
        }
      ]
    },
    {
      'name': 'make1',
      'models': [
        {
          'name': 'model2',
          'shows': [
            { 'name': 'show 1' },
            { 'name': 'show 2' }
          ]
        },
        {
          'name': 'model1',
          'shows': [
            { 'name': 'show 3' },
            { 'name': 'show 2' }
          ]
        }
      ]
    }
  ];
}
