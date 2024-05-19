import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../../hooks/useStorage';
import { useNavigate } from 'react-router';
import { loginUser, resetLogin } from './loginSlice';

const LoginLogics = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedin = useSelector((state) => state.login);

  useEffect(() => {
    if (loggedin.status === 'fulfilled') {
      getUser(loggedin.user);
      dispatch(resetLogin());
      navigate('/');
    }
  }, [loggedin, dispatch, navigate]);

  const handleLogin = (reg_number) => {
    dispatch(loginUser({ reg_number }));
  };

  return [handleLogin];
};

export default LoginLogics;
