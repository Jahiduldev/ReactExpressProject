import React from 'react';
import {useParams} from 'react-router-dom'

const UserDetails = () => {
  const param = useParams();
  return (
    <div>
        
      <p>User Details: {JSON.stringify(param)}</p>
    </div>
  );
};

export default UserDetails;