import { Component, OnInit } from '@angular/core';
import { IPlayer } from '../../../game-classes/game-types.model';
import { LoserWinnerNotifierService } from './loser-winner-notifier.service';

@Component({
  selector: 'app-loser-winner-notifier',
  templateUrl: './loser-winner-notifier.component.html',
  styleUrls: ['./loser-winner-notifier.scss']
})
export class LoserWinnerNotifierComponent implements OnInit {
  losers: IPlayer[];
  winners: IPlayer[];
  isGameOver: boolean;
  showNotification: boolean;

  constructor(
    private loserWinnerService: LoserWinnerNotifierService,
  ) {
  }

  ngOnInit(): void {
    this.loserWinnerService.loserWinnerEvent.subscribe((loserAndWinners) => {
      this.losers = loserAndWinners.losers;
      this.winners = loserAndWinners.winners;
      this.isGameOver = loserAndWinners.isGameOver;
      this.showNotification = this.losers.length > 0 || this.winners.length > 0;
    });
  }

  close(): void {
    this.showNotification = false;
  }
}
