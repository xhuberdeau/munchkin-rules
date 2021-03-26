import { Component, Input, OnInit } from '@angular/core';
import { IMonsterCard } from '../../../game-classes/game-types.model';

@Component({
  selector: 'app-monster-card',
  templateUrl: './monster-card.component.html',
  styleUrls: ['./monster-card.component.scss']
})
export class MonsterCardComponent implements OnInit {
  @Input() monster: IMonsterCard;
  monsterUrl: string;
  constructor() { }

  ngOnInit(): void {
    this.monsterUrl = `https://www.robohash.org/${Math.random().toString(36).substring(7)}?set=set2`;
  }

}
