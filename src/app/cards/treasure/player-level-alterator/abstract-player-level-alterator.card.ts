import { CardCategories, IPlayer, IPlayerLevelAlterator } from '../../../game-classes/game-types.model';
import { AbstractTreasureEffectCard } from '../abstract-treasure-effect.card';

export abstract class AbstractPlayerLevelAlteratorCard extends AbstractTreasureEffectCard implements IPlayerLevelAlterator {
  category: CardCategories.PlayerLevelAlterator = CardCategories.PlayerLevelAlterator;
  levelModifier: number;
  isEquipable: false = false;

  constructor(cardConfig: Partial<AbstractPlayerLevelAlteratorCard>) {
    super(cardConfig);
  }

  applyEffect(player: IPlayer): IPlayer {
    return player.earnLevel(this.levelModifier);
  }
}

