import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { InventoryComponent } from './inventory/inventory.component';
import { CreatePlayersComponent } from './game-steps/create-players/create-players.component';
import { GameLogsComponent } from './game-logs/game-logs.component';
import { MapComponent } from './map/map.component';
import { TurnComponent } from './game-steps/turn/turn.component';
import { EquipedCardsComponent } from './equiped-cards/equiped-cards.component';
import { DrawCardComponent } from './game-steps/turn/draw-card/draw-card.component';
import { ChooseRoomComponent } from './game-steps/turn/choose-room/choose-room.component';
import { SmallCardComponent } from './small-card/small-card.component';
import { EquipCardsComponent } from './game-steps/turn/equip-cards/equip-cards.component';
import { HeroStatsComponent } from './hero-stats/hero-stats.component';

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
    SmallCardComponent,
    EquipCardsComponent,
    HeroStatsComponent,
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
