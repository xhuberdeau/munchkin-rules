import { CardTypes, IEquipmentCard, IMonsterCard, IPlayer, ITreasureCard } from '../../game-classes/game-types.model';
import { AbstractCard } from '../abstract-card.class';
import { BinoclardHurleurCard } from '../monster/binoclard-hurleur.card';
import { LepreuxchaunCard } from '../monster/lepreuxchaun.card';
import { MrNonosCard } from '../monster/mr-nonos.card';
import { MucusBaveuxCard } from '../monster/mucus-baveux.card';
import { OrquesCard } from '../monster/orques.card';
import { PitbullCard } from '../monster/pitbull.card';
import { ArmureGluanteCard } from './equipment/armure-gluante.card';
import { ArmureTrapueCard } from './equipment/armure-trapue.card';
import { BottesHemorroidesCard } from './equipment/bottes-hemorroides.card';
import { PaperSwordCard } from './equipment/paper-sword.card';
import { PiecesCard } from './player-level-alterator/pieces.card';
import { PotionMachismeCard } from './player-level-alterator/potion-machisme.card';
import { ReglesObscuresCard } from './player-level-alterator/regles-obscures.card';
import { CotionPonfusion } from './player-power-booster/cotion-ponfusion';
import { MissileMagique } from './player-power-booster/missile-magique';
import { PotionBravoure } from './player-power-booster/potion-bravoure';
import { PotionGlacialeExplosiveCard } from './player-power-booster/potion-glaciale-explosive.card';
import { PotionHaleine } from './player-power-booster/potion-haleine';
import { PotionPoisonEnflamme } from './player-power-booster/potion-poison-enflamme';
import { PotionSommeilCard } from './player-power-booster/potion-sommeil.card';

export abstract class AbstractTreasureCard extends AbstractCard implements ITreasureCard {
  type: CardTypes.Treasure;

  constructor(cardConfig: Partial<AbstractTreasureCard>) {
    super(cardConfig);
  }

  abstract applyEffect(player: IPlayer): void;
}
