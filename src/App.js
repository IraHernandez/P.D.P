import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/Header";
import Form from './components/Form';
import List from './components/List'

function App() {

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
        <List />

        </Route>
        <Route path="/skill">

        </Route>
        <Route path="/CreateRole">
          <Form />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
