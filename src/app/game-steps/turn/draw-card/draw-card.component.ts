import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICard } from '../../../game-classes/game-types.model';
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
  card: ICard;
  constructor(
    protected playersService: PlayersService,
    private cardService: CardService,
    private inventoryService: InventoryService,
    private router: Router,
  ) {
    super(playersService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.card = this.cardService.drawCard();
  }

  saveCard(): void {
    this.inventoryService.addCard(this.card, this.player);
    this.router.navigateByUrl('/turn/equipCards');
  }
}
