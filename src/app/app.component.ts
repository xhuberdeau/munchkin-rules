import { Component } from '@angular/core';
import { EventHubService } from './services/event-hub.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private eventHub: EventHubService) {}


  title = 'munchkinRules';
}
