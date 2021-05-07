import { Redirect, Route, RouteProps } from 'react-router';
import { AuthConsumer } from './AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }: RouteProps) => (
  <AuthConsumer>
    {({ isAuth }) => (
      <Route
        render={(props) =>
          isAuth ? (
            Component && <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
        {...rest}
      />
    )}
  </AuthConsumer>
);
export default ProtectedRoute;
