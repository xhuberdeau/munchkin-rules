import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICard } from '../../../game-classes/game-types.model';
import { CardService } from '../../../services/card.service';
import { NewCardsNotifierService } from './new-cards-notifier.service';

@Component({
  selector: 'app-new-card-notifier',
  templateUrl: './new-cards-notifier.html',
  styleUrls: ['./new-cards-notifier.component.scss']
})
export class NewCardsNotifierComponent implements OnInit {
  showNewCards = false;
  newCards: ICard[] = [];
  constructor(
    private cardService: CardService,
    private router: Router,
    private newCardNotifier: NewCardsNotifierService
  ) {
  }

  ngOnInit(): void {
    this.newCardNotifier.newCards.subscribe((newCards) => {
      this.newCards = newCards;
      this.showNewCards = true;
    });
  }

  close(): void {
    this.showNewCards = false;
  }
}
