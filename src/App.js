import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/header/Header";
import List from './components/list/List';
import Aside from "./components/aside/Aside";
import Form from './components/form/Form'
import "./index.css";
import ShowTable from './components/ShowTable';


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
          {/* <User /> */}
        </Route>
        <Route path="/skills"></Route>
        <Route path="/create-role"></Route>
        <Route path="/my-skills"></Route>
      </Switch>
    </Router>
  );
}

export default App;
