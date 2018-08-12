import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardListComponent } from '../../board/board-list/board-list.component';
import { BoardCreateComponent } from '../../board/board-create/board-create.component';
import { MainComponent } from './main.component';
const mainRoutes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: '',
        component: BoardListComponent
      },
      {
        path: 'createBoard',
        component: BoardCreateComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }
