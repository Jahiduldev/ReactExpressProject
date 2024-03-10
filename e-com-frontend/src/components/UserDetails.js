import React from 'react';
import {useParams} from 'react-router-dom'

const UserDetails = () => {
  const param = useParams();

  return (
    <div>
      <h2>User Details</h2>
      <p>User ID: {JSON.stringify(param)}</p>
    </div>
  );
};

export default UserDetails;