import { CardCategories, IPlayer, IPlayerPowerAlterator } from '../../../game-classes/game-types.model';
import { AbstractTreasureEffectCard } from '../abstract-treasure-effect.card';

export abstract class AbstractPlayerBoosterCard extends AbstractTreasureEffectCard implements IPlayerPowerAlterator {
  category: CardCategories.PlayerPowerAlterator = CardCategories.PlayerPowerAlterator;
  powerModifier: number;

  constructor(cardConfig: Partial<AbstractPlayerBoosterCard>) {
    super(cardConfig);
    this.effectDescription = `([COMBAT] +${this.powerModifier} attaque au joueur)`;
  }

  applyEffect(player: IPlayer): IPlayer {
    return player.alterCombatPower(this.powerModifier);
  }
}

