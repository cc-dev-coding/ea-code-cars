import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MakeComponent } from './components/make/make.component';
import { ModelComponent } from './components/model/model.component';
import { ShowComponent } from './components/show/show.component';
import { TransformService } from './services/transform.service';

@NgModule({
  declarations: [
    AppComponent,
    MakeComponent,
    ModelComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TransformService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
