import { CardCategories, CardTypes, ICard } from '../game-classes/game-types.model';
import { v4 as uuidv4 } from 'uuid';

export abstract class AbstractCard implements ICard {
  description?: string;
  id: string;
  title: string;
  type: CardTypes;
  category: CardCategories;

  constructor(cardConfig: Partial<ICard>) {
    Object.assign(this, cardConfig);
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
