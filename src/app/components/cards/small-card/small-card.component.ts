import { Component, Input, OnInit } from '@angular/core';
import { ICard } from '../../../game-classes/game-types.model';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss']
})
export class SmallCardComponent implements OnInit {
  @Input() card: ICard;
  constructor() { }

  ngOnInit(): void {
  }

}
