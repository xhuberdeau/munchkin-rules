import { CardCategories, IClassCard, IPlayer } from '../../../game-classes/game-types.model';
import { AbstractDxmCard } from '../abstract-dxm.card';

export abstract class AbstractClassCard extends AbstractDxmCard implements IClassCard {
  category: CardCategories.Class = CardCategories.Class;
  isEquipable: true = true;
  constructor(cardConfig: Partial<IClassCard>) {
    super(cardConfig);
  }

  abstract applyEffect(player: IPlayer): void;
}

