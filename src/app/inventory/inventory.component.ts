import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../game-types.model';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  @Input() player: Player;
  constructor() { }

  ngOnInit(): void {
  }

}
