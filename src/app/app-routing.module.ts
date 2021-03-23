import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePlayersComponent } from './gameSteps/create-players/create-players.component';
import { ChooseRoomComponent } from './gameSteps/turn/choose-room/choose-room.component';
import { DrawCardComponent } from './gameSteps/turn/draw-card/draw-card.component';
import { TurnComponent } from './gameSteps/turn/turn.component';
import { CurrentPlayerResolver } from './resolvers/current-player.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/create-players', pathMatch: 'full' },
  { path: 'create-players', component: CreatePlayersComponent },
  { path: 'turn', component: TurnComponent, resolve: { currentPlayer: CurrentPlayerResolver},
    children: [
      {
        path: '',
        component: TurnComponent
      },
      {
        path: 'drawCard',
        component: DrawCardComponent,
      },
      { path: 'chooseRoom',
      component: ChooseRoomComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
