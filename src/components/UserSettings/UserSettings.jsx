import React from 'react';

const UserSettings = ({match}) => {
  return (
    <div>
      <h2>UserSettings - {match.params.user}</h2>
    </div>
  )
}

export default UserSettings;