import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../game-types.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements Card, OnInit {
  @Input() title;
  @Input() description;
  @Input() type;
  constructor() { }

  ngOnInit(): void {
  }
}
