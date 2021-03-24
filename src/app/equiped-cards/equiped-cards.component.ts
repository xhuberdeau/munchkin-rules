import { Component, Input, OnInit } from '@angular/core';
import { IPlayer } from '../game-classes/game-types.model';

@Component({
  selector: 'app-equiped-cards',
  templateUrl: './equiped-cards.component.html',
  styleUrls: ['./equiped-cards.component.scss']
})
export class EquipedCardsComponent implements OnInit {
  @Input() player: IPlayer;
  constructor() { }

  ngOnInit(): void {
  }

}
