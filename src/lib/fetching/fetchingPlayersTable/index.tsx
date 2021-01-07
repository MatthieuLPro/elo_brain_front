import React, {FunctionComponent, useState, useEffect} from 'react';
import PlayersIndexTable from '../../molecules/playersTable'
import {IWithFetchingPlayersTable, defaultWithFetchingPlayersTable} from "./interface";
import axios from 'axios';

const USER_SERVICE_URL = `https://jsonplaceholder.typicode.com/users`

const FetchingPlayersTable: FunctionComponent = () => {
    const [playersCollection, setPlayersCollection] = useState<IWithFetchingPlayersTable>(defaultWithFetchingPlayersTable);
    const [isFetching, setIsFetching] = useState<boolean>(true);

    useEffect(() => {
        axios.get(USER_SERVICE_URL)
            .then(res => {
                const persons = res.data;
                setPlayersCollection({players: persons});
                setIsFetching(false);
            })
            .catch(e => {
                console.log(e);
            })
    }, [])
    return (
        <PlayersIndexTable playersCollection={playersCollection.players} loading={isFetching} />
    );
}

export default FetchingPlayersTable;
