import React from 'react';
import {inject, observer} from 'mobx-react';

const UserLayout = ({
  store: {logout},
  ...props
}) => {
  // console.log('userlayout props', props)
  return (
    <div>
      <nav>
        <h2>Some Nav</h2>
        <button 
          onClick={() => {
            logout()
            props.children.props.history.push("/");
          }}>Sign out
        </button>
        <hr/>
      </nav>
      {props.children}
      <footer>
        <h2>Some Footer</h2>
      </footer>
    </div>
  )  
}

export default inject('store')(observer(UserLayout));