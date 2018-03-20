import React from 'react';

const UserProfile = ({match}) => {
  return (
    <div>
      <h2>UserProfile - {match.params.id}</h2>
    </div>
  )
}

export default UserProfile;