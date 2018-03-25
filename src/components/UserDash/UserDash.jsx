import React from 'react';
import {inject, observer} from 'mobx-react';
import {Link} from "react-router-dom";

import ImageLinkForm from 'forms/ImageLinkForm';
import TagPhotoDisplay from 'components/TagPhotoDisplay';

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
      <TagPhotoDisplay />
      <br/>
    </div>
  )
}

export default inject('store')(observer(UserDash));