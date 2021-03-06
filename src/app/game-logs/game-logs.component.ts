import { Component, OnInit } from '@angular/core';
import { GameLoggerService, Log } from '../services/game-logger.service';

@Component({
  selector: 'app-game-logs',
  templateUrl: './game-logs.component.html',
  styleUrls: ['./game-logs.component.scss']
})
export class GameLogsComponent implements OnInit {
  logs: Log[] = [];
  constructor(private logger: GameLoggerService) { }

  ngOnInit(): void {
    this.logger.logs.subscribe((log) => this.logs = [...this.logs, log]);
  }

}
