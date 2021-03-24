import { Component, OnInit } from '@angular/core';
import { ICard } from '../../../game-classes/game-types.model';
import { EquipCardService } from '../../../services/equip-card.service';
import { PlayersService } from '../../../services/players.service';
import { PlayerAwareComponent } from '../player-aware';

@Component({
  selector: 'app-equip-cards',
  templateUrl: './equip-cards.component.html',
  styleUrls: ['./equip-cards.component.scss']
})
export class EquipCardsComponent extends PlayerAwareComponent {
  equipableCards: ICard[] = [];
  constructor(
    protected playersService: PlayersService,
    private equipCardService: EquipCardService
  ) {
    super(playersService);
  }


  ready(): void {

  }

  equipCard(card: ICard): void {
     this.equipCardService.equip(card, this.player);
  }

}
