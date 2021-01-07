import React, { Component } from 'react';
import UserInfo from './UserInfo'

 class Users extends Component {
     state = {
        //  Donnée a récupérer avec Axios
         users: [
             {
                 id: "1",
                 username: "Rudeboy",
                 team_name: "Akatsuki"
             },
            //  {
            //     id: "2",
            //     username: "Daigo",
            //     team_name: "Konoha"
            // },
            // {
            //     id: "3",
            //     username: "Knee",
            //     team_name: "Rox"
            // },
            // {
            //     id: "4",
            //     username: "Glutonny",
            //     team_name: "OrKs Grand Poitiers"
            // },
         ]
     }
     
    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(user => (
                    <UserInfo key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
