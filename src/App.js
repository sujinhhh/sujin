import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
