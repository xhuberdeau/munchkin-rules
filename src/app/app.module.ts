import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { InventoryComponent } from './inventory/inventory.component';
import { CreatePlayersComponent } from './gameSteps/create-players/create-players.component';
import { GameLogsComponent } from './game-logs/game-logs.component';
import { MapComponent } from './map/map.component';
import { TurnComponent } from './gameSteps/turn/turn.component';
import { EquipedCardsComponent } from './equiped-cards/equiped-cards.component';
import { DrawCardComponent } from './gameSteps/turn/draw-card/draw-card.component';
import { ChooseRoomComponent } from './gameSteps/turn/choose-room/choose-room.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    InventoryComponent,
    CreatePlayersComponent,
    GameLogsComponent,
    MapComponent,
    TurnComponent,
    EquipedCardsComponent,
    DrawCardComponent,
    ChooseRoomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
