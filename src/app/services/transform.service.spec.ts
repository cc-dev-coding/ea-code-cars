import { TestBed, inject } from '@angular/core/testing';

import { TransformService } from './transform.service';
import { Show } from '../model/Show';
import { Model } from '../model/Model';
import { Make } from '../model/Make';

describe('TransformService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransformService]
    });
  });

  it('should be created', inject([TransformService], (service: TransformService) => {
    expect(service).toBeTruthy();
  }));

  it('should convert model', inject([TransformService], (service: TransformService) => {
    const result = service.transform(getBackendModel());
    const expected = getExpectdModel();
    expect(result).toEqual(expected);
  }));

  function getBackendModel(){
    let model = [
      {
        'name': 'show1',
        'cars': [
          {
            'make': 'make1',
            'model': 'model1'
          },
          {
            'make': 'make1',
            'model': 'model2'
          },
          {
            'make': 'make2',
            'model': 'model3'
          }
        ]
      },
      {
        'name': 'show2',
        'cars': [
          {
            'make': 'make1',
            'model': 'model1'
          },
          {
            'make': 'make1',
            'model': 'model4'
          },
          {
            'make': 'make2',
            'model': 'model3'
          }
        ]
      }
    ];
    return model;
  }

  function getExpectdModel(): Make[] {
    const show1 = new Show('show1');
    const show2 = new Show('show2');
    const model1 = new Model('model1');
    model1.shows = [show1, show2];
    const model2 = new Model('model2');
    model2.shows = [ show1];
    const model4 = new Model('model4');
    model4.shows = [show2];
    const make1 = new Make('make1');
    make1.models = [model1, model2, model4];
    const model3 = new Model('model3');
    model3.shows = [show1, show2];
    const make2 = new Make('make2');
    make2.models = [ model3];
    const result = [make1, make2];
    return result;
  }

});
