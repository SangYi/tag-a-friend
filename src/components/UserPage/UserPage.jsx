import React from 'react';

const UserPage = ({match}) => {
  return (
    <div>
      <h2>UserPage - {match.params.user}</h2>
    </div>
  )
}

export default UserPage;