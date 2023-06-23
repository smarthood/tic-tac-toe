import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './components/board/board.component';
import { LobbyComponent } from './components/lobby/lobby.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GameComponent } from './components/game/game.component';



@NgModule({
  declarations: [
    BoardComponent,
    LobbyComponent,
    GameComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ]
})
export class CoreModule { }
