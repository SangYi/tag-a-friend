import React from 'react';

const UserLayout = (props) => {
  return (
    <div>
      <nav>Nav Bar</nav>
      {props.children}
      <footer>Footer</footer>
    </div>
  )  
}

export default UserLayout;