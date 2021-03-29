import React from 'react';
import  {
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from 'react-router-dom';

const Home = () => <h2>Home</h2>
const About = () => <h2>About</h2>
const Dashboard = () => <h2>Dashboard</h2>

function App() {
  return (
  <Router>
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='about'>About</Link>
        </li>
        <li>
          <Link to='dashboard'>Dashboard</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
      </Switch>
    </div>

  </Router>
  )
}

export default App;
