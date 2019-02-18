import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelComponent } from './model.component';
import { ShowComponent } from '../show/show.component';

describe('ModelComponent', () => {
  let component: ModelComponent;
  let fixture: ComponentFixture<ModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelComponent, ShowComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelComponent);
    component = fixture.componentInstance;
    component.model = { name: 'myModel', shows: []};
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render model name in a <p>> tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('myModel');
  }));
});
