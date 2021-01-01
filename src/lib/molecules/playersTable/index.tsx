import React, {FunctionComponent} from 'react';
import WithLoading from "../../hoc/withLoading";
import IPlayersTableProps from './interface';

const PlayersTable: FunctionComponent<IPlayersTableProps> = ({playersCollection}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                </tr>
            </thead>
            <tbody>
                {playersCollection.map(player => {
                    return (
                        <tr key={player.id}>
                            <td>{player.name}</td>
                            <td>{player.username}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default WithLoading(PlayersTable);
