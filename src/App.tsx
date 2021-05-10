import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Dashboard from './pages/Dashboard/Dashboard';

import './App.css';
import Login from './pages/Login/Login';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <Router>
      <AppProvider>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </AppProvider>
    </Router>
  );
}

export default App;
