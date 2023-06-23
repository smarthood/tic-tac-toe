import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './components/board/board.component';
import { LobbyComponent } from './components/lobby/lobby.component';



@NgModule({
  declarations: [
    BoardComponent,
    LobbyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
