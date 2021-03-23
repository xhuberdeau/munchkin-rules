import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePlayersComponent } from './gameSteps/create-players/create-players.component';
import { DrawCardComponent } from './gameSteps/turn/draw-card/draw-card.component';
import { TurnComponent } from './gameSteps/turn/turn.component';

const routes: Routes = [
  { path: '', redirectTo: '/create-players', pathMatch: 'full' },
  { path: 'create-players', component: CreatePlayersComponent },
  { path: 'turn', component: TurnComponent,
    children: [
      {
        path: '',
        component: TurnComponent
      },
      {
        path: 'drawCard',
        component: DrawCardComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
