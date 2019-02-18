import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeComponent } from './make.component';
import { ModelComponent } from '../model/model.component';
import { ShowComponent } from '../show/show.component';

import { Make } from '../../model/Make';

describe('MakeComponent', () => {
  let component: MakeComponent;
  let fixture: ComponentFixture<MakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeComponent , ModelComponent, ShowComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeComponent);
    component = fixture.componentInstance;
    component.make = {name: 'myMake', models :[]}
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render name in a p tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('myMake');
  }));
});
