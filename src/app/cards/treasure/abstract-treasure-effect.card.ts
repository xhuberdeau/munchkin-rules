import { CardTypes, IEffectCard, IEquipmentCard, IPlayer, ITreasureCard } from '../../game-classes/game-types.model';
import { AbstractCard } from '../abstract-card.class';
import { AbstractTreasureCard } from './abstract-treasure.card';

export abstract class AbstractTreasureEffectCard extends AbstractTreasureCard implements IEffectCard {
  effectDescription: string;
  type: CardTypes.Treasure = CardTypes.Treasure;
  constructor(cardConfig: Partial<AbstractTreasureEffectCard>) {
    super(cardConfig);
  }

  abstract applyEffect(player: IPlayer): void;
}
