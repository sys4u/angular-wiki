import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule}   from '@angular/forms';
import { LoginComponent } from './login/login/login.component';
import { MainComponent } from './main/main/main.component';
import { MainHeaderComponent } from './main/main-header/main-header.component';
import { BoardListComponent } from './board/board-list/board-list.component';
import { BoardCreateComponent } from './board/board-create/board-create.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'main/:id', component: MainComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    MainHeaderComponent,
    BoardListComponent,
    BoardCreateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
