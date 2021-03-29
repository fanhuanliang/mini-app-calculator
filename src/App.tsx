import React from 'react';
import { Cards } from './Cards/CardFeature';
import  {
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from 'react-router-dom';

const Home = () => <h2>Home</h2>
const Dashboard = () => <h2>Dashboard</h2>

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="Cards">Cards</Link>
        </li>
        <li>
          <Link to="dashboard">Dashboard</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Cards">
          <Cards />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
