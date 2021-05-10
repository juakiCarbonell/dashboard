import { Redirect, Route, RouteProps } from 'react-router';
import { AppConsumer } from '../../context/AppContext';

const ProtectedRoute = ({ component: Component, ...rest }: RouteProps) => (
  <AppConsumer>
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
  </AppConsumer>
);
export default ProtectedRoute;
