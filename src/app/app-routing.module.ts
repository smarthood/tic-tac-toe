import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LobbyComponent } from './core/components/lobby/lobby.component';
import { BoardComponent } from './core/components/board/board.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'lobby' },
  { path: 'lobby', component: LobbyComponent },
  { path: 'board', component: BoardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
