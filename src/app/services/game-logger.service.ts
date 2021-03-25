import { EventEmitter, Injectable } from '@angular/core';
import { ILog } from '../game-classes/logs.model';

@Injectable({
  providedIn: 'root'
})
export class GameLoggerService {
  private logsEmitter: EventEmitter<ILog> = new EventEmitter<ILog>();
  logs = this.logsEmitter.asObservable();

  constructor() { }

  addLog(log: ILog): void {
    this.logsEmitter.emit(log);
  }
}
