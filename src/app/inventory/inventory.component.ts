import { Component, Input, OnInit } from '@angular/core';
import { IPlayer } from '../game-classes/game-types.model';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  @Input() player: IPlayer | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
