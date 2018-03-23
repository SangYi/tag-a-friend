import React from 'react';
import {inject, observer} from 'mobx-react';
import ToolTip from 'components/ToolTip';

const UserDash = ({
  store: {
    logout
  },
  match,
  ...props
}) => {
  return (
    <div>
      <h2>UserDash - {match.params && match.params.user}</h2>
        <button 
          onClick={() => {
            logout()
            props.history.push("/");
          }}>Sign out
        </button>
        <ToolTip />
    </div>
  )
}

export default inject('store')(observer(UserDash));