import React, { Component, ReactNode } from 'react';
import { User } from '../interface';

export interface IAuthContext {
  isAuth: boolean;
  login: (user: User) => void;
}

const AuthContextDefault: IAuthContext = {
  isAuth: false,
  login: () => {},
};

interface Props {
  children: ReactNode;
}

interface State {
  isAuth: boolean;
  user: User;
}

const AuthContext = React.createContext<IAuthContext>(AuthContextDefault);
class AuthProvider extends Component<Props, State> {
  state = {
    isAuth: false,
    user: {
      name: '',
      email: '',
    },
  };

  login = (user: User) => this.setState({ isAuth: true, user: user });

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth,
          login: this.login,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
