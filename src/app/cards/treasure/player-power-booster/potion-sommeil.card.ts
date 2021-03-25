import { AbstractPlayerBoosterCard } from './abstract-player-booster.card';

export class PotionSommeilCard extends AbstractPlayerBoosterCard {
  constructor() {
    super({
      title: 'Potion de sommeil',
      description: 'À jouer pendant n\'importe quel combat. +2 au joueur. Usage unique',
      effectDescription: '+2',
      powerModifier: 2
    });
  }
}
