import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IEvent } from '../game-classes/events.model';

@Injectable({
  providedIn: 'root'
})
export class EventDispatcherService {
  private $events: EventEmitter<IEvent> = new EventEmitter<IEvent>();
  events: Observable<IEvent> = this.$events.asObservable();

  constructor() { }

  dispatchEvent(event: IEvent): void {
    this.$events.next(event);
  }
}
