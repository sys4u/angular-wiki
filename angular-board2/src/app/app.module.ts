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
import { AppRoutingModule} from './app-routing.module';
import { MainRoutingModule } from './main/main/main-routing.module';


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
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MainRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
