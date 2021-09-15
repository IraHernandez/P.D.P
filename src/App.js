import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Aside from "./components/Aside";
import "./index.css";

function App() {
  return (
    <Router>
      <Header />
      <Aside />
      <Switch>
        <Route path="/" exact>
        </Route>
        <Route path="/skills">
        </Route>
        <Route path="/create-role">
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
