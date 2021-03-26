import { BodyParts, ObjectSizes } from '../../../game-classes/game-types.model';
import { AbstractEquipmentCard } from './abstract-equipment.card';

export class PaperSwordCard extends AbstractEquipmentCard {
  constructor() {
    super({
      title: 'Épée en papier',
      description: 'Une épée écologique multi-usage : dessiner, faire des avions en papier, se battre contre des enfants, à vous de voir !',
      bodyPart: BodyParts.OneHand,
      objectSize: ObjectSizes.Small,
      powerModifier: 1
    });
  }
}
