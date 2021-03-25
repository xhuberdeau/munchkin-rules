import { IPlayer } from './game-types.model';

export interface ILog {
  message: string;
  player?: IPlayer;
}
