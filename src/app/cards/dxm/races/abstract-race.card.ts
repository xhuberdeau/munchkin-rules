import { CardCategories, IPlayer, IRaceCard } from '../../../game-classes/game-types.model';
import { AbstractDxmCard } from '../abstract-dxm.card';

export abstract class AbstractRaceCard extends AbstractDxmCard implements IRaceCard {
  category: CardCategories.Race = CardCategories.Race;
  isEquipable: true = true;
  constructor(cardConfig: Partial<IRaceCard>) {
    super(cardConfig);
  }

  abstract applyEffect(player: IPlayer): void;
}

