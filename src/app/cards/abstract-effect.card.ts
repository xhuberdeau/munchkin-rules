import { IEffectCard } from '../game-classes/game-types.model';
import { AbstractCard } from './abstract-card.class';

export abstract class AbstractEffectCard
  extends AbstractCard
  implements IEffectCard {
  effectDescription;

  constructor(cardConfig: Partial<IEffectCard>) {
    super(cardConfig);
  }

  abstract applyEffect(args: any): any;
}
