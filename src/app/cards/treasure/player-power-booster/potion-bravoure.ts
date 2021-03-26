import { AbstractPlayerBoosterCard } from './abstract-player-booster.card';

export class PotionBravoure extends AbstractPlayerBoosterCard {
  constructor() {
    super({
      title: 'Potion de bravoure hystérique',
      description: 'À jouer pendant n\'importe quel combat. +2 au joueur. Usage unique',
      powerModifier: 2
    });
  }
}
