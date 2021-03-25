import { IPlayer } from './game-types.model';

export enum LogType {
  Player = 'player',
  General = 'general',
}

export interface ILog {
  type: LogType;
  message: string;
}

export interface IPlayerLog extends ILog {
  type: LogType.Player;
  player: IPlayer;
}

export interface IGeneralLog extends ILog {
  type: LogType.General;
}


export const isPlayerLog = (log: ILog): log is IPlayerLog => log.type === LogType.Player;
