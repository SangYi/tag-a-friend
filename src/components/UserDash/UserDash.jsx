import React from 'react';
import {inject, observer} from 'mobx-react';
import {Link} from "react-router-dom";

import ImageLinkForm from 'forms/ImageLinkForm';
import TagPhotoDisplay from 'components/TagPhotoDisplay';

const UserDash = ({
  store: { user },
  match,
  ...props
}) => {
  return (
    <div>
      <h2>UserDash</h2>
      <h3>Welcome back {user.name}! </h3>
      <ul>
        <li>
          <Link onClick={()=> console.log('clicked!!!')}to={`/${user.username}/photos`}>My Photos</Link>
        </li>
        {/* <li>
          <Link to="/protected">Protected Page</Link>
        </li> */}
      </ul>
      <ImageLinkForm />
      <TagPhotoDisplay />
      <br/>
    </div>
  )
}

export default inject('store')(observer(UserDash));