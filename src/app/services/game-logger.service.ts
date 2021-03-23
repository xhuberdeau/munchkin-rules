import { EventEmitter, Injectable } from '@angular/core';

type LogType = 'hero';
export type Log = {
  type: LogType;
  content: any;
};


@Injectable({
  providedIn: 'root'
})
export class GameLoggerService {
  private logsEmitter: EventEmitter<Log> = new EventEmitter<Log>();
  logs = this.logsEmitter.asObservable();

  constructor() { }

  addLog(type: LogType, content: any): void {
    this.logsEmitter.emit({type, content});
  }
}
