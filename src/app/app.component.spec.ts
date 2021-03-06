import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { MakeComponent } from './components/make/make.component';
import { ModelComponent } from './components/model/model.component';
import { ShowComponent } from './components/show/show.component';
import { CarshowService } from './services/carshow.service';
import { TransformService } from './services/transform.service';
import { HttpClient, HttpHandler } from '@angular/common/http';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MakeComponent,
        ModelComponent,
        ShowComponent
      ],
      providers: [
        TransformService,
        CarshowService,
        HttpClient,
        HttpHandler
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Energy Australia Coding Test'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Energy Australia Coding Test');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Energy Australia Coding Test');
  }));

  it('should render title in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Cars participation in car shows');
  }));
});
