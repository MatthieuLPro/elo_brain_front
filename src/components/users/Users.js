import React from 'react';
import imageUser from '../../images/purple.jpeg';
import './users.style.css';

const Users = () => {
  return (
    <div className="main">
      {/* faire une map pour parcourir les users */}
      <div className="userDetails">
        <img src={imageUser} alt="" style={{ width: '60px' }} />
        <h4>Username</h4>
        <div>
          <a to="/">Select</a>
        </div>
      </div>

      <div className="userDetails">
        <img src={imageUser} alt="" style={{ width: '60px' }} />
        <h4>Username</h4>
        <h4>Team Name</h4>
        <div>
          <a href="/">Select</a>
        </div>
      </div>
    </div>
  );
};

export default Users;
