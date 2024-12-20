import { ReactNode, useReducer } from 'react';
import AuthContext from './authContext';

interface LoginAction {
  type: 'LOGIN';
  username: string;
}

interface LogoutAction {
  type: 'LOGOUT';
}

export type AuthAction = LoginAction | LogoutAction;

const authReducer = (state: string, action: AuthAction): string => {
  if (action.type === 'LOGIN') return action.username;
  if (action.type === 'LOGOUT') return '';

  return state;
};

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [username, dispatch] = useReducer(authReducer, '');

  return (
    <AuthContext.Provider value={{ username, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
