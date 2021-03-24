import { CardTypes, IMonsterCard } from '../../game-classes/game-types.model';
import { AbstractCard } from '../abstract-card.class';

export abstract class AbstractMonsterCard extends AbstractCard implements IMonsterCard {
  type: CardTypes.Monster = CardTypes.Monster;
  ignorePlayerUnderLevel?: number;
  level: number;
  treasureCount: number;
  isEquipable: false = false;

  constructor(cardConfig: Partial<AbstractMonsterCard>) {
    super(cardConfig);
  }

  alterLevel(levelModifer: number): IMonsterCard {
    const nextLevel = this.level + levelModifer;
    return {...this, level: nextLevel >= 1 ? nextLevel : 1};
  }
}
