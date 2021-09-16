import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/header/Header";
import List from './components/List';
import Aside from "./components/aside/Aside";
import User from './components/User';
import "./index.css";

function App() {
  return (
    <Router>
      <Header />
      <Aside />
      <Switch>
        <Route path="/" exact>
          <List />
        </Route>
        <Route path="/skills/:name">
          <User />
        </Route>
        <Route path="/skills"></Route>
        <Route path="/create-role"></Route>
        <Route path="/my-skills"></Route>
      </Switch>
    </Router>
  );
}

export default App;
