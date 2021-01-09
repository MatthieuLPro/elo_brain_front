import React from 'react';
import FetchingPlayersTable from "../../lib/fetching/fetchingPlayersTable";

 const Users = () => {
     return (
        <div style={userStyle}>
            <FetchingPlayersTable />
        </div>
    );  
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gridGap: '1rem'
}

export default Users;
