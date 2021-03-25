import { AbstractPlayerBoosterCard } from './abstract-player-booster.card';

export class PotionPoisonEnflamme extends AbstractPlayerBoosterCard {
  constructor() {
    super({
      title: 'Potion de poison enflammé',
      description: 'À jouer pendant n\'importe quel combat. +3 au joueur. Usage unique',
      effectDescription: '+3',
      powerModifier: 3
    });
  }
}
