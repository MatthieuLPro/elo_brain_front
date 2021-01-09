import React, { Component } from 'react';
import FetchingPlayersTable from "../../lib/fetching/fetchingPlayersTable";

 class Users extends Component {
 
     
    render() {
        return (
            <div style={userStyle}>
                {/* {this.props.users.map(user => (
                    <UserInfo key={user.id} user={user} />
                ))} */}
                <FetchingPlayersTable />
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gridGap: '1rem'
}

export default Users
