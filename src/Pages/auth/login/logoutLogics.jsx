import React from 'react';
import {useNavigate} from 'react-router-dom';
import {removeUser} from '../../../hooks/useStorage'

const logoutLogics = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();

  const handleLogout = () => {
    removeUser();
    navigate('/login');
  };
  return { handleLogout: handleLogout };

}

export default logoutLogics
