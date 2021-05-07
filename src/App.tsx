import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Dashboard from './pages/Dashboard/Dashboard';
import Task from './pages/Task/Task';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard></Dashboard>
        </Route>
        <Route path="/task/:id">
          <Task></Task>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
