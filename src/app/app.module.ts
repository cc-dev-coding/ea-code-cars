import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MakeComponent } from './components/make/make.component';
import { ModelComponent } from './components/model/model.component';
import { ShowComponent } from './components/show/show.component';
import { TransformService } from './services/transform.service';
import { CarshowService } from './services/carshow.service';

@NgModule({
  declarations: [
    AppComponent,
    MakeComponent,
    ModelComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    TransformService,
    CarshowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
