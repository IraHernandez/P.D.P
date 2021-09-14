import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Aside from "./components/Aside";

function App() {
  return (
    <Router>
      <Header />
      <Aside />
      <Switch>
        <Route path="/" exact></Route>
        <Route path="/skill"></Route>
        <Route path="/CreateRole"></Route>
      </Switch>
    </Router>
  );
}

export default App;
