import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonInfoFormComponent } from './person-info-form/person-info-form.component';
import { FormsModule}         from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PersonInfoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
