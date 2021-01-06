import React, { Component } from 'react'

class UserInfo extends Component {

  render() {
        const {username,team_name} = this.props.user;

        return (
            <div className="card text-center">
                {/* <img src={avatar_url} alt="" className="round-img" style={{width:"60px"}} /> */}
                <h2>{username}</h2>
                <h3>{team_name}</h3>
                <div>
                    {/* <a href="#" className="btn btn-dark btn-sm my-1">Info</a> */}
                </div>
            </div>
        )
    }
}

export default UserInfo;
