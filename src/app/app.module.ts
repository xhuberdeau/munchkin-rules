import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/cards/card/card.component';
import { InventoryComponent } from './components/HUD/inventory/inventory.component';
import { CreatePlayersComponent } from './components/game-steps/create-players/create-players.component';
import { GameLogsComponent } from './components/HUD/game-logs/game-logs.component';
import { MapComponent } from './components/game-steps/turn/map/map.component';
import { TurnComponent } from './components/game-steps/turn/turn.component';
import { EquipedCardsComponent } from './components/HUD/equiped-cards/equiped-cards.component';
import { LoserWinnerNotifierComponent } from './components/notifiers/loser-winner-notifier/loser-winner-notifier.component';
import { NewCardsNotifierComponent } from './components/notifiers/new-cards-notifier/new-cards-notifier.component';
import { SmallCardComponent } from './components/cards/small-card/small-card.component';
import { HeroStatsComponent } from './components/HUD/hero-stats/hero-stats.component';
import { CombatComponent } from './components/game-steps/turn/combat/combat.component';
import { PlayerCardComponent } from './components/cards/player-card/player-card.component';
import { MonsterCardComponent } from './components/cards/monster-card/monster-card.component';

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
    NewCardsNotifierComponent,
    SmallCardComponent,
    HeroStatsComponent,
    CombatComponent,
    PlayerCardComponent,
    MonsterCardComponent,
    LoserWinnerNotifierComponent,
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
