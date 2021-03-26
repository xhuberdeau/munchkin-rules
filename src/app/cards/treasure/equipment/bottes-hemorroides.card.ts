import { BodyParts, ObjectSizes } from '../../../game-classes/game-types.model';
import { AbstractEquipmentCard } from './abstract-equipment.card';

export class BottesHemorroidesCard extends AbstractEquipmentCard {
  constructor() {
    super({
      title: 'Bottes de convocation d\'Hémorroïdes',
      bodyPart: BodyParts.Shoes,
      objectSize: ObjectSizes.Small,
      powerModifier: 2,
    });
  }
}
