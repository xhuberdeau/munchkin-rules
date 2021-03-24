import { BodyParts, ObjectSizes } from '../../../game-classes/game-types.model';
import { AbstractEquipmentCard } from './abstract-equipment.card';

export class BottesHemorroides extends AbstractEquipmentCard {
  constructor() {
    super({
      title: 'Bottes de convocation d\'Hémorroïdes',
      effectDescription: '+2 attaque',
      bodyPart: BodyParts.Shoes,
      objectSize: ObjectSizes.Small,
      powerModifier: 2,
    });
  }
}
