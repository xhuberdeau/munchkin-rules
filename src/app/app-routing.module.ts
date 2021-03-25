import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePlayersComponent } from './game-steps/create-players/create-players.component';
import { ChooseRoomComponent } from './game-steps/turn/choose-room/choose-room.component';
import { NewCardsNotifierComponent } from './new-cards-notifier/new-cards-notifier.component';
import { EquipCardsComponent } from './game-steps/turn/equip-cards/equip-cards.component';
import { TurnComponent } from './game-steps/turn/turn.component';
import { MapComponent } from './map/map.component';

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
        path: 'drawCard',
        component: NewCardsNotifierComponent,
      },
      {
        path: 'equipCards',
        component: EquipCardsComponent,
      },
      { path: 'chooseRoom',
      component: ChooseRoomComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
