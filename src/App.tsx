import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import Dashboard from './pages/Dashboard/Dashboard';

import './App.css';
import Login from './pages/Login/Login';
import ProtectedRoute from './auth/ProtectedRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
