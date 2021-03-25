import { Component, OnInit } from '@angular/core';
import { ILog, IPlayerLog, isPlayerLog } from '../game-classes/logs.model';
import { GameLoggerService } from '../services/game-logger.service';

@Component({
  selector: 'app-game-logs',
  templateUrl: './game-logs.component.html',
  styleUrls: ['./game-logs.component.scss']
})
export class GameLogsComponent implements OnInit {
  generalLogs: ILog[] = [];
  playerLogs: IPlayerLog[] = [];
  constructor(private logger: GameLoggerService) { }

  ngOnInit(): void {
    this.logger.logs.subscribe((log) => {
      if (isPlayerLog(log)) {
        this.playerLogs = [...this.playerLogs, log];
      } else {
        this.generalLogs = [...this.generalLogs, log];
      }
    });
  }
}
