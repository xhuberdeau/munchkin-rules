import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MapService } from '../components/game-steps/turn/map/map.service';
import { LoserWinnerNotifierService } from '../components/notifiers/loser-winner-notifier/loser-winner-notifier.service';
import { EventTypes, IEvent } from '../game-classes/events.model';
import {
  ICombatCardTargettedToMonster,
  IEffectCard,
  isCombatCardTargettedToMonster,
  isCombatCardTargettedToPlayer,
  ITrapCard
} from '../game-classes/game-types.model';
import { CardService } from './card.service';
import { CombatService } from './combat.service';
import { EventDispatcherService } from './event-dispatcher.service';
import { GameLoggerService } from './game-logger.service';
import { PlayersService } from './players.service';

@Injectable({
  providedIn: 'root'
})
export class EventHubService {

  constructor(
    private eventDispatcher: EventDispatcherService,
    private gameLoggerService: GameLoggerService,
    private playersService: PlayersService,
    private cardService: CardService,
    private router: Router,
    private mapService: MapService,
    private combatService: CombatService,
    private loserWinnerNotifierService: LoserWinnerNotifierService
  ) {
    this.eventDispatcher.events.subscribe((event) => {
      this.treatEvent(event);
    });
  }

  private treatEvent(event: IEvent): void {
    switch (event.type) {
      case EventTypes.JoinGame:
        this.onGameJoin(event);
        break;
      case EventTypes.GameStart:
        this.onGameStart();
        break;
      case EventTypes.EquipCard:
        this.onCardEquip(event);
        break;
      case EventTypes.PlaceCardOnMapTile:
        this.onCardPlacedOnMapTile(event);
        break;
      case EventTypes.ChooseRoom:
        this.onRoomChosen(event);
        break;
      case EventTypes.EnterCombat:
        this.onEnterCombat();
        break;
      case EventTypes.ThrowCombatDice:
        this.onCombatDiceThrown(event);
        break;
      case EventTypes.WinCombat:
        this.onCombatWon();
        break;
      case EventTypes.LoseCombat:
        this.onCombatLost();
        break;
      case EventTypes.UseCombatCardOnMonster:
        this.onCombatCardUsedOnMonster(event);
        break;
      case EventTypes.UsePlayerLevelBooster:
        this.onPlayerLevelBooster(event);
        break;
      case EventTypes.UseCombatCardOnPlayer:
        this.onCombatCardUsedOnPlayer(event);
        break;
    }
  }

  private addStandOutLog(val: string): string {
    return `<span class="stand-out-log">${val}</span>`;
  }

  private makePlayerRetrieveStackCards(): void {
    const addedCards = this.playersService.unstackCurrentPlayerStackedCards();
    addedCards.forEach((card: IEffectCard) => {
      this.gameLoggerService.addLog({ player: this.playersService.currentPlayerSync, message: `a obtenu la carte ${this.addStandOutLog(card.title)} ${this.addStandOutLog(card.effectDescription)}`});
    });
  }
  private useCardOnPlayer(event: IEvent): void {
    const card = this.cardService.findCardById(event.card.id) as IEffectCard;
    this.playersService.updatePlayer(card.applyEffect(this.playersService.currentPlayerSync));
    this.playersService.updatePlayer(this.playersService.currentPlayerSync.removeCard(card));
    this.gameLoggerService.addLog({player: this.playersService.currentPlayerSync, message: `utilise ${this.addStandOutLog(card.title)} ${this.addStandOutLog(card.effectDescription)}`});
  }

  private onGameJoin(event: IEvent): void {
    const player = this.playersService.addPlayer(event.playerName, event.playerSex);
    this.playersService.stackCards(player, this.cardService.drawDxmCards(3));
    this.playersService.stackCards(player, this.cardService.drawTreasureCards(3));
    this.gameLoggerService.addLog({ player, message: 'a rejoint la partie.'});
  }

  private onGameStart(): void {
    this.gameLoggerService.addLog({ message: 'La partie démarre.'});
    this.gameLoggerService.addLog({ player: this.playersService.currentPlayerSync, message: 'commence son tour'});
    this.router.navigateByUrl('/turn/map');
    this.makePlayerRetrieveStackCards();
  }

  private onCardEquip(event: IEvent): void {
    const card = this.cardService.findCardById(event.card.id);
    this.playersService.updatePlayer(this.playersService.currentPlayerSync.equipCard(card));
    this.gameLoggerService.addLog({ player: this.playersService.currentPlayerSync, message: `a équipé la carte ${this.addStandOutLog(card.title)} ${this.addStandOutLog((card as IEffectCard).effectDescription)}`});
  }

  private onCardPlacedOnMapTile(event: IEvent): void {
    const card = this.cardService.findCardById(event.card.id);
    this.playersService.updatePlayer(this.playersService.currentPlayerSync.removeCard(card));
    this.mapService.placeTrapOnMapTile(this.playersService.currentPlayerSync, card as ITrapCard, event.tile);
    this.gameLoggerService.addLog({ player: this.playersService.currentPlayerSync, message: `a placé la carte ${this.addStandOutLog(card.title)} ${this.addStandOutLog((card as IEffectCard).effectDescription)} dans la ${this.addStandOutLog(event.tile.name)} ${this.addStandOutLog((card as IEffectCard).effectDescription)}`});
  }

  private onRoomChosen(event: IEvent): void {
    const tile = event.tile;
    this.mapService.placePlayerOnRoom(this.playersService.currentPlayerSync, tile);
    this.playersService.playerHasPlayed(this.playersService.currentPlayerSync);
    this.gameLoggerService.addLog({ player: this.playersService.currentPlayerSync, message: `choisit la ${this.addStandOutLog(tile.name)}`});
    this.playersService.switchToNextPlayer();
    if (this.playersService.playersAreReadyForCombat()) {
      this.router.navigateByUrl('/turn/combat');
      this.combatService.startCombatMode();
    } else {
      this.gameLoggerService.addLog({ player: this.playersService.currentPlayerSync, message: 'commence son tour'});
      this.makePlayerRetrieveStackCards();
    }
  }

  private onEnterCombat(): void {
    const monster = this.combatService.pickMonster();
    const room = this.mapService.getRoomByPlayer(this.playersService.currentPlayerSync);
    this.gameLoggerService.addLog({player: this.playersService.currentPlayerSync, message: `commence son combat contre ${this.addStandOutLog(monster.title)} dans la ${this.addStandOutLog(room.name)}`});
    const roomTraps = this.mapService.unstackRoomTraps(room);
    const monsterTraps = roomTraps.filter((isCombatCardTargettedToMonster));
    monsterTraps.forEach((trap) => {
      this.combatService.updateMonster(trap.applyEffect(this.combatService.currentMonsterSync));
      this.gameLoggerService.addLog({message: `La carte piège ${this.addStandOutLog(trap.title)} ${this.addStandOutLog(trap.effectDescription)} est délenchée sur le monstre ${this.addStandOutLog(this.combatService.currentMonsterSync.title)}`});
    });
    const playerTraps = roomTraps.filter((isCombatCardTargettedToPlayer));
    playerTraps.forEach((trap) => {
      this.playersService.updatePlayer(trap.applyEffect(this.playersService.currentPlayerSync));
      this.gameLoggerService.addLog({message: `La carte piège ${this.addStandOutLog(trap.title)} ${this.addStandOutLog(trap.effectDescription)} est délenchée sur ${this.addStandOutLog(this.playersService.currentPlayerSync.name)}`});
    });
  }

  private onCombatDiceThrown(event: IEvent): void {
    this.playersService.updatePlayer(this.playersService.currentPlayerSync.alterCombatPower(event.diceValue));
    this.gameLoggerService.addLog({player: this.playersService.currentPlayerSync, message: `augmente son attaque pour le combat de ${this.addStandOutLog(event.diceValue)}`});
    this.combatService.broadcastIsPlayerWinning(this.playersService.currentPlayerSync, this.combatService.currentMonsterSync);
  }

  private onCombatWon(): void {
    this.playersService.updatePlayer(this.playersService.currentPlayerSync.earnLevel());
    this.gameLoggerService.addLog({player: this.playersService.currentPlayerSync, message: `gagne son combat contre ${this.addStandOutLog(this.combatService.currentMonsterSync.title)}`});
    this.gameLoggerService.addLog({player: this.playersService.currentPlayerSync, message: 'gagne 1 niveau'});
    this.playersService.stackCards(this.playersService.currentPlayerSync, this.cardService.drawTreasureCards(this.combatService.currentMonsterSync.treasureCount));
    this.doNextStepsAfterCombat();
  }

  private onCombatLost(): void {
    this.playersService.updatePlayer(this.playersService.currentPlayerSync.loseLife());
    this.gameLoggerService.addLog({player: this.playersService.currentPlayerSync, message: `perd son combat contre ${this.addStandOutLog(this.combatService.currentMonsterSync.title)}`});
    this.gameLoggerService.addLog({player: this.playersService.currentPlayerSync, message: 'perd 1 ❤️'});
    this.doNextStepsAfterCombat();
  }

  private doNextStepsAfterCombat(): void {
    this.playersService.updatePlayer(this.playersService.currentPlayerSync.resetCombatPower());
    this.playersService.playerHasCombatted(this.playersService.currentPlayerSync);
    if (this.playersService.allPlayersHaveCombatted()) {
      this.combatService.stopCombatMode();
      this.mapService.resetOccupiedRooms();
      const playersWhoLost = this.playersService.getPlayersWhoLost();
      const playersWhoWon = this.playersService.getPlayersWhoWon();
      playersWhoLost.forEach((player) => {
        this.gameLoggerService.addLog({player, message: 'a perdu la partie'});
      });
      playersWhoWon.forEach((player) => {
        this.gameLoggerService.addLog({player, message: 'a gagné la partie'});
      });
      const isGameOver = this.playersService.isGameOver();
      this.loserWinnerNotifierService.notifyLosersAndWinners(playersWhoLost, playersWhoWon, isGameOver);

      if (isGameOver) {
        // end of the game
        return;
      }
      this.playersService.prepareNextTurn();
      this.router.navigateByUrl('/turn/map');
      this.playersService.unstackCurrentPlayerStackedCards();
    } else {
      this.playersService.switchToNextPlayer();
      this.router.navigateByUrl('/turn/combat');
      this.onEnterCombat();
    }
  }

  private onCombatCardUsedOnMonster(event: IEvent): void {
    const card = this.cardService.findCardById(event.card.id) as IEffectCard;
    this.combatService.updateMonster((card as ICombatCardTargettedToMonster).applyEffect(event.monster));
    this.playersService.updatePlayer(this.playersService.currentPlayerSync.removeCard(card));
    this.gameLoggerService.addLog({player: this.playersService.currentPlayerSync, message: `utilise ${this.addStandOutLog(card.title)} ${this.addStandOutLog(card.effectDescription)} sur ${this.addStandOutLog(event.monster.title)}`});
    this.combatService.broadcastIsPlayerWinning(this.playersService.currentPlayerSync, this.combatService.currentMonsterSync);
  }

  private onPlayerLevelBooster(event: IEvent): void {
    this.useCardOnPlayer(event);
  }

  private onCombatCardUsedOnPlayer(event: IEvent): void {
    this.useCardOnPlayer(event);
    this.combatService.broadcastIsPlayerWinning(this.playersService.currentPlayerSync, this.combatService.currentMonsterSync);
  }
}
