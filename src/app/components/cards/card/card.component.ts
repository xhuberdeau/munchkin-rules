import { Component, Input, OnInit } from '@angular/core';
import { ICard, isEffectCard } from '../../../game-classes/game-types.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: ICard;
  cardDescription: any;
  constructor() { }

  ngOnInit(): void {
    if (isEffectCard(this.card)) {
      this.cardDescription = this.card.effectDescription;
    }
  }
}
