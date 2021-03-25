import { AbstractPlayerBoosterCard } from './abstract-player-booster.card';

export class PotionGlacialeExplosiveCard extends AbstractPlayerBoosterCard {
  constructor() {
    super({
      title: 'Potion glaciale explosive',
      description: 'À jouer pendant n\'importe quel combat. +3 au joueur. Usage unique',
      effectDescription: '+3',
      powerModifier: 3
    });
  }
}
