import { Component, OnInit } from '@angular/core';
import { Card } from '../../../game-types.model';
import { CardService } from '../../../services/card.service';
import { PlayersService } from '../../../services/players.service';
import { InventoryService } from '../../../services/inventory.service';
import { PlayerAwareComponent } from '../player-aware';

@Component({
  selector: 'app-draw-card',
  templateUrl: './draw-card.component.html',
  styleUrls: ['./draw-card.component.scss']
})
export class DrawCardComponent extends PlayerAwareComponent implements OnInit {
  card: Card;
  constructor(
    protected playersService: PlayersService,
              private cardService: CardService,
              private inventoryService: InventoryService
  ) {
    super(playersService);
  }

  ngOnInit(): void {
    this.card = this.cardService.drawCard();
  }

  saveCard() {
    this.inventoryService.addCard(this.card, this.player);
  }
}
