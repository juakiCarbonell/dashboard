import React, { Component, ReactNode } from 'react';

export interface IAuthContext {
  isAuth: boolean;
  login: () => void;
}

const AuthContextDefault: IAuthContext = {
  isAuth: false,
  login: () => {},
};

interface Props {
  children: ReactNode;
}

const AuthContext = React.createContext<IAuthContext>(AuthContextDefault);

class AuthProvider extends Component<Props> {
  state = {
    isAuth: false,
  };

  login = () => this.setState({ isAuth: true });

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
