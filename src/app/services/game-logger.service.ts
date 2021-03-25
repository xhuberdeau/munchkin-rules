import { EventEmitter, Injectable } from '@angular/core';
import { IGeneralLog, ILog, IPlayerLog } from '../game-classes/logs.model';

@Injectable({
  providedIn: 'root'
})
export class GameLoggerService {
  private logsEmitter: EventEmitter<ILog> = new EventEmitter<ILog>();
  logs = this.logsEmitter.asObservable();

  constructor() { }

  addPlayerLog(log: IPlayerLog): void {
    this.logsEmitter.emit(log);
  }

  addGeneralLog(log: IGeneralLog): void {
    this.logsEmitter.emit(log);
  }
}
