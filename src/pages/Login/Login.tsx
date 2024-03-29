import { useHistory } from 'react-router';
import styled from 'styled-components';
import { AppConsumer } from '../../context/AppContext';
import { User } from '../../interface';
import UserForm from './components/UserForm';

const LoginWrapper = styled.div`
  margin: 1.5em auto;
  max-width: 35em;

  h1 {
    text-align: center;
  }
`;

const Login = () => {
  const history = useHistory();

  const handleSubmit = (user: User, login: (user: User) => void) => {
    login(user);
    history.push('/dashboard');
  };

  return (
    <AppConsumer>
      {({ login }) => (
        <LoginWrapper>
          <h1>TO DO LIST APP</h1>
          <UserForm handleSubmit={(user: User) => handleSubmit(user, login)} />
        </LoginWrapper>
      )}
    </AppConsumer>
  );
};

export default Login;
