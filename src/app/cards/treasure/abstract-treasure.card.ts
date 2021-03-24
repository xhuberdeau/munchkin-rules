import { CardTypes, IEquipmentCard, IPlayer, ITreasureCard } from '../../game-classes/game-types.model';
import { AbstractCard } from '../abstract-card.class';

export abstract class AbstractTreasureCard extends AbstractCard implements ITreasureCard {
  type: CardTypes.Treasure;

  constructor(cardConfig: Partial<AbstractTreasureCard>) {
    super(cardConfig);
  }

  abstract applyEffect(player: IPlayer): void;
}
