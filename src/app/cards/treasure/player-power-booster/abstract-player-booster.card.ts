import { CardCategories, IPlayer, IPlayerPowerAlterator } from '../../../game-classes/game-types.model';
import { AbstractTreasureEffectCard } from '../abstract-treasure-effect.card';

export abstract class AbstractPlayerBoosterCard extends AbstractTreasureEffectCard implements IPlayerPowerAlterator {
  category: CardCategories.PlayerPowerAlterator = CardCategories.PlayerPowerAlterator;
  powerModifier: number;
  isEquipable: false = false;

  constructor(cardConfig: Partial<AbstractPlayerBoosterCard>) {
    super(cardConfig);
  }

  applyEffect(player: IPlayer): IPlayer {
    return player.alterPower(this.powerModifier);
  }
}

