import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { AuthConsumer } from '../../auth/AuthContext';
import { FormUser } from '../../interface';
import LoginForm from './components/LoginForm';

interface State {}

class Login extends Component<RouteComponentProps, State> {
  handleSubmit = (formUser: FormUser, login: () => void) => {
    console.log('VALORES', formUser);
    login();
    this.props.history.push('/dashboard');
  };

  render() {
    return (
      <AuthConsumer>
        {({ login }) => (
          <>
            <LoginForm
              handleSubmit={(formUser: FormUser) =>
                this.handleSubmit(formUser, login)
              }
            />
            <input
              type="button"
              onClick={() => this.props.history.push('/dashboard')}
            />
          </>
        )}
      </AuthConsumer>
    );
  }
}

export default withRouter(Login);
