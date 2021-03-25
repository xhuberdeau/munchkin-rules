import { CardCategories, IClassCard, IPlayer } from '../../../game-classes/game-types.model';
import { AbstractDxmCard } from '../abstract-dxm.card';

export abstract class AbstractClassCard extends AbstractDxmCard implements IClassCard {
  category: CardCategories.Class = CardCategories.Class;
  constructor(cardConfig: Partial<AbstractClassCard>) {
    super(cardConfig);
  }

  abstract applyEffect(player: IPlayer): IPlayer;
}

