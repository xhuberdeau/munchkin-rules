import { IDXMCard, IMonsterCard, ITreasureCard } from '../game-classes/game-types.model';
import { PriestCard } from './dxm/classes/priest.card';
import { ThiefCard } from './dxm/classes/thief.card';
import { WarriorCard } from './dxm/classes/warrior.card';
import { WizardCard } from './dxm/classes/wizard.card';
import { LoseArmorCard } from './dxm/curses/lose-armor.card';
import { LoseBigEquipmentCard } from './dxm/curses/lose-big-equipment.card';
import { LoseClassesCard } from './dxm/curses/lose-classes.card';
import { LoseLevelCard } from './dxm/curses/lose-level.card';
import { LoseRacesCard } from './dxm/curses/lose-races.card';
import { LoseShoesCard } from './dxm/curses/lose-shoes.card';
import { LoseSmallEquipmentCard } from './dxm/curses/lose-small-equipment.card';
import { BebeCard } from './dxm/monster-level-alterator/bebe.card';
import { IntelligentCard } from './dxm/monster-level-alterator/intelligent.card';
import { VenerableCard } from './dxm/monster-level-alterator/venerable.card';
import { DwarfCard } from './dxm/races/dwarf.card';
import { ElfCard } from './dxm/races/elf.card';
import { HalfelinCard } from './dxm/races/halfelin.card';
import { BinoclardHurleurCard } from './monster/binoclard-hurleur.card';
import { LepreuxchaunCard } from './monster/lepreuxchaun.card';
import { MrNonosCard } from './monster/mr-nonos.card';
import { MucusBaveuxCard } from './monster/mucus-baveux.card';
import { OrquesCard } from './monster/orques.card';
import { PitbullCard } from './monster/pitbull.card';
import { ArmureGluanteCard } from './treasure/equipment/armure-gluante.card';
import { ArmureTrapueCard } from './treasure/equipment/armure-trapue.card';
import { BottesHemorroidesCard } from './treasure/equipment/bottes-hemorroides.card';
import { PaperSwordCard } from './treasure/equipment/paper-sword.card';
import { PiecesCard } from './treasure/player-level-alterator/pieces.card';
import { PotionMachismeCard } from './treasure/player-level-alterator/potion-machisme.card';
import { ReglesObscuresCard } from './treasure/player-level-alterator/regles-obscures.card';
import { CotionPonfusion } from './treasure/player-power-booster/cotion-ponfusion';
import { MissileMagique } from './treasure/player-power-booster/missile-magique';
import { PotionBravoure } from './treasure/player-power-booster/potion-bravoure';
import { PotionGlacialeExplosiveCard } from './treasure/player-power-booster/potion-glaciale-explosive.card';
import { PotionHaleine } from './treasure/player-power-booster/potion-haleine';
import { PotionPoisonEnflamme } from './treasure/player-power-booster/potion-poison-enflamme';
import { PotionSommeilCard } from './treasure/player-power-booster/potion-sommeil.card';

export const treasureCards: ITreasureCard[] = [
  new ArmureGluanteCard(),
  new ArmureTrapueCard(),
  new BottesHemorroidesCard(),
  new PaperSwordCard(),
  new PiecesCard(),
  new PotionMachismeCard(),
  new ReglesObscuresCard(),
  new CotionPonfusion(),
  new MissileMagique(),
  new PotionBravoure(),
  new PotionGlacialeExplosiveCard(),
  new PotionHaleine(),
  new PotionPoisonEnflamme(),
  new PotionSommeilCard(),
];

export const monsterCards: IMonsterCard[] = [
  new BinoclardHurleurCard(),
  new LepreuxchaunCard(),
  new MrNonosCard(),
  new MucusBaveuxCard(),
  new OrquesCard(),
  new PitbullCard(),
];

export const dxmCards: IDXMCard[] = [
  // classes
  new PriestCard(),
  new ThiefCard(),
  new WizardCard(),
  new WarriorCard(),
  // curses
  new LoseArmorCard(),
  new LoseArmorCard(),
  new LoseBigEquipmentCard(),
  new LoseBigEquipmentCard(),
  new LoseClassesCard(),
  new LoseClassesCard(),
  new LoseLevelCard(),
  new LoseLevelCard(),
  new LoseRacesCard(),
  new LoseRacesCard(),
  new LoseShoesCard(),
  new LoseShoesCard(),
  new LoseSmallEquipmentCard(),
  new LoseSmallEquipmentCard(),
  // monster level alterator
  new BebeCard(),
  new BebeCard(),
  new IntelligentCard(),
  new IntelligentCard(),
  new VenerableCard(),
  new VenerableCard(),
  // races
  new DwarfCard(),
  new ElfCard(),
  new HalfelinCard(),
];
