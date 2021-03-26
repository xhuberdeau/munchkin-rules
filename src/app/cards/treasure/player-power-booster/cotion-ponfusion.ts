import { AbstractPlayerBoosterCard } from './abstract-player-booster.card';

export class CotionPonfusion extends AbstractPlayerBoosterCard {
  constructor() {
    super({
      title: 'Cotion de ponfusion',
      description: 'À jouer pendant n\'imquorte pel combat. +3 au zoueur. Usique unage',
      powerModifier: 3
    });
  }
}
