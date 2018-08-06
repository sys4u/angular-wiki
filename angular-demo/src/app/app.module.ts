import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule}         from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { BoardListComponent } from './board-list/board-list.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { BoardCreateComponent } from './board-create/board-create.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'main/:id', component: MainComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    MainHeaderComponent,
    BoardListComponent,
    BoardCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
