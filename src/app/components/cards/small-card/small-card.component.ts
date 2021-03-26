import { Component, Input, OnInit } from '@angular/core';
import { ICard, IEffectCard } from '../../../game-classes/game-types.model';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss']
})
export class SmallCardComponent implements OnInit {
  @Input() card: IEffectCard;
  constructor() { }

  ngOnInit(): void {
  }

}
