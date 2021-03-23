import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../game-types.model';

@Component({
  selector: 'app-equiped-cards',
  templateUrl: './equiped-cards.component.html',
  styleUrls: ['./equiped-cards.component.scss']
})
export class EquipedCardsComponent implements OnInit {
  @Input() player: Player;
  constructor() { }

  ngOnInit(): void {
  }

}
