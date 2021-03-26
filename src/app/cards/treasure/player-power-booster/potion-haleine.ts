import { AbstractPlayerBoosterCard } from './abstract-player-booster.card';

export class PotionHaleine extends AbstractPlayerBoosterCard {
  constructor() {
    super({
      title: 'Potion de mauvaise haleine',
      description: 'À jouer pendant n\'importe quel combat. +2 au joueur. Usage unique',
      powerModifier: 2
    });
  }
}
