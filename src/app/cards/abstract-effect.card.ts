import { CardTypes, ICard, IEffectCard } from '../game-classes/game-types.model';
import { v4 as uuidv4 } from 'uuid';
import { AbstractCard } from './abstract-card.class';

export abstract class AbstractEffectCard extends AbstractCard implements IEffectCard {
  effectDescription: string;

  constructor(cardConfig: Partial<IEffectCard>) {
    super(cardConfig);
  }

  abstract applyEffect(args: any): any;
}
