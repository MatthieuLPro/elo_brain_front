import React from 'react'
import FetchingPlayersTable from "../../lib/fetching/fetchingPlayersTable";

const UserInfo = (props) =>  {
    const {username,team_name} = props.user;
    const PlayersCollection = <FetchingPlayersTable />
    
    return (
            <div className="card text-center">
                {/* <h2>{username}</h2> */}
                {/* <h3>{team_name}</h3> */}
                {PlayersCollection}
                <div>
                    {/* <a href="#" className="btn btn-dark btn-sm my-1">Info</a> */}
                </div>
            </div>
        )
}

export default UserInfo;
