import IPlayer from '../../interfaces/player';

export interface IWithFetchingPlayersTable {
    players: IPlayer[]
}

export const defaultWithFetchingPlayersTable: IWithFetchingPlayersTable = { players: [] };
