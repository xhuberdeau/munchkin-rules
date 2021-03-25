import { CardCategories, ICurseCard, IPlayer } from '../../../game-classes/game-types.model';
import { AbstractDxmCard } from '../abstract-dxm.card';

export abstract class AbstractCurseCard extends AbstractDxmCard implements ICurseCard {
  category: CardCategories.Curse = CardCategories.Curse;
  title = 'Malédiction !';
  constructor(cardConfig: Partial<AbstractCurseCard>) {
    super(cardConfig);
  }

  abstract applyEffect(player: IPlayer): IPlayer;
}

