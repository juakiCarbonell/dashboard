import React, { Component, ReactNode } from 'react';
import { User, Task } from '../interface';

import ARRAY_TASKS from './tasks/tasks';

export interface IAppContext {
  isAuth: boolean;
  login: (user: User) => void;
  tasks: Task[]
}




const AppContextDefault: IAppContext = {
  isAuth: false,
  login: () => {},
  tasks: []
};

interface Props {
  children: ReactNode;
}

interface State {
  isAuth: boolean;
  user: User;
  tasks: Task[];
}



const AppContext = React.createContext<IAppContext>(AppContextDefault);
class AppProvider extends Component<Props, State> {
  state = {
    isAuth: false,
    user: {
      name: '',
      email: '',
    },
    tasks: []
  };

  login = (user: User) => this.setState({ isAuth: true, user: user });

  render() {
    return (
      <AppContext.Provider
        value={{
          isAuth: this.state.isAuth,
          login: this.login,
          tasks: ARRAY_TASKS
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

const AppConsumer = AppContext.Consumer;

export { AppProvider, AppConsumer, AppContext };
