import { CardCategories, IMonsterCard, IMonsterLevelAlterator } from '../../../game-classes/game-types.model';
import { AbstractDxmCard } from '../abstract-dxm.card';

export abstract class AbstractMonsterLevelAlteratorCard extends AbstractDxmCard implements IMonsterLevelAlterator {
  category: CardCategories.MonsterLevelAlterator = CardCategories.MonsterLevelAlterator;
  levelModifier: number;
  constructor(cardConfig: Partial<AbstractMonsterLevelAlteratorCard>) {
    super(cardConfig);
    this.effectDescription = `([COMBAT] ${this.levelModifier > 0 ? '+' : ''} ${this.levelModifier} lvl au monstre)`;
  }

  applyEffect(monster: IMonsterCard): IMonsterCard {
    return monster.alterLevel(this.levelModifier);
  }
}

