import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePlayersComponent } from './components/game-steps/create-players/create-players.component';
import { CombatComponent } from './components/game-steps/turn/combat/combat.component';
import { TurnComponent } from './components/game-steps/turn/turn.component';
import { MapComponent } from './components/game-steps/turn/map/map.component';

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
        path: 'map',
        component: MapComponent
      },
      {
        path: 'combat',
        component: CombatComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
