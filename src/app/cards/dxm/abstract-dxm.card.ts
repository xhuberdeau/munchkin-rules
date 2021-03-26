import { CardTypes, IDXMCard } from '../../game-classes/game-types.model';
import { AbstractEffectCard } from '../abstract-effect.card';

export abstract class AbstractDxmCard extends AbstractEffectCard implements IDXMCard {
  type: CardTypes.DXM  = CardTypes.DXM;
  constructor(cardConfig: Partial<AbstractDxmCard>) {
    super(cardConfig);
  }
}
