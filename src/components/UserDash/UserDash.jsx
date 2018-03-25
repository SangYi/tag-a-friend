import React from 'react';
import {inject, observer} from 'mobx-react';
import {Link} from "react-router-dom";
// import ToolTip from 'components/ToolTip';
import ImageLinkForm from 'forms/ImageLinkForm';

const UserDash = ({
  match,
  ...props
}) => {
  return (
    <div>
      <h2>UserDash - {match.params && match.params.user}</h2>
      <ul>
        <li>
          <Link to="/test/photos">My Photos</Link>
        </li>
        {/* <li>
          <Link to="/protected">Protected Page</Link>
        </li> */}
      </ul>
      <ImageLinkForm />
      {/* <ToolTip /> */}
      <br/>
    </div>
  )
}

export default inject('store')(observer(UserDash));