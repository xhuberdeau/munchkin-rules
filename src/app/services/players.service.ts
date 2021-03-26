import { Injectable } from '@angular/core';
import { ReplaySubject, } from 'rxjs';
import { ICard, IPlayer, PlayerSex } from '../game-classes/game-types.model';
import { Player } from '../game-classes/player.class';
import { NewCardsNotifierService } from '../new-cards-notifier/new-cards-notifier.service';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private playersHavingPlayed: IPlayer[] = [];
  private playerStackedCards: {[key: string]: ICard[]} = {};
  currentPlayerSync: IPlayer;
  private currentPlayerSubject: ReplaySubject<IPlayer> = new ReplaySubject<IPlayer>(1);
  currentPlayer = this.currentPlayerSubject.asObservable();
  private players: IPlayer[] = [];

  constructor(private playerObtainedCardsService: NewCardsNotifierService) {}

  addPlayer(name: string, sex: PlayerSex): IPlayer {
    const newPlayer = new Player({name,
      level: 8,
      power: 8,
      combatPower: 8,
        sex,
        order: this.players.length + 1,
        inventory: [
    ]});
    this.players = [...this.players, newPlayer];
    this.playerStackedCards[newPlayer.id] = [];
    if (this.players.length === 1) {
      this.broadcastPlayer(newPlayer);
    }

    return newPlayer;
  }

  updatePlayer(player: IPlayer): IPlayer {
    const playerIndex = this.players.findIndex((p) => p.name === player.name);
    this.players[playerIndex] = player;
    if (this.currentPlayerSync.id === player.id) {
      this.broadcastPlayer(player);
    }

    return player;
  }

  getPlayers(): IPlayer[] {
    return this.players;
  }

  stackCards(player: IPlayer, cards: ICard[]): void {
    this.playerStackedCards[player.id] = [...this.playerStackedCards[player.id], ...cards];
  }

  unstackCurrentPlayerStackedCards(): ICard[] {
    const cards = this.playerStackedCards[this.currentPlayerSync.id];
    if (cards && cards.length > 0) {
      this.playerObtainedCardsService.notifyPlayerNewCards(cards);
      cards.forEach((card) => {
        this.updatePlayer(this.currentPlayerSync.addCardToInventory(card));
      });

      this.playerStackedCards[this.currentPlayerSync.id] = [];
    }

    return cards;
  }

  switchToNextPlayer(): void {
    const currentOrder = this.currentPlayerSync.order;
    if (currentOrder === this.players.length) {
      this.broadcastPlayer(this.players[0]);
    } else {
      this.broadcastPlayer(this.players[currentOrder]);
    }
  }

  private broadcastPlayer(player: IPlayer): void {
    this.currentPlayerSubject.next(player);
    this.currentPlayerSync = player;
  }

  playersAreReadyForCombat(): boolean {
    return this.playersHavingPlayed.length === this.players.length;
  }

  playerHasPlayed(player: IPlayer): void {
    this.playersHavingPlayed = [...this.playersHavingPlayed, player];
  }
}
