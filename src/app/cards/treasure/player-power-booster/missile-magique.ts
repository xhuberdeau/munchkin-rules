import { AbstractPlayerBoosterCard } from './abstract-player-booster.card';

export class MissileMagique extends AbstractPlayerBoosterCard {
  constructor() {
    super({
      title: 'Missile magique',
      description: 'À jouer pendant n\'importe quel combat. +5 au joueur. Usage unique',
      powerModifier: 5
    });
  }
}
