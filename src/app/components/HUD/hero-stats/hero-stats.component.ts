import { Component, Input, OnInit } from '@angular/core';
import { IPlayer } from '../../../game-classes/game-types.model';

@Component({
  selector: 'app-hero-stats',
  templateUrl: './hero-stats.component.html',
  styleUrls: ['./hero-stats.component.scss']
})
export class HeroStatsComponent implements OnInit {
  @Input() player: IPlayer;
  constructor() { }

  ngOnInit(): void {
  }

}
