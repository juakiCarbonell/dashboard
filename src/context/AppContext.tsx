import React, { Component, ReactNode } from 'react';
import { User } from '../interface';

export interface IAppContext {
  isAuth: boolean;
  login: (user: User) => void;
}

const AppContextDefault: IAppContext = {
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

const AppContext = React.createContext<IAppContext>(AppContextDefault);
class AppProvider extends Component<Props, State> {
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
      <AppContext.Provider
        value={{
          isAuth: this.state.isAuth,
          login: this.login,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

const AppConsumer = AppContext.Consumer;

export { AppProvider, AppConsumer };
