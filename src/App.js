import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/pages/About";
import Work from "./components/pages/Work";
import Blog from "./components/pages/Blog";
import Fun from "./components/pages/Fun";
import Footer from "./components/pages/Footer";
import Create from "./components/pages/Create";
import ListDetails from "./components/pages/ListDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />
            <Route path="/blog" component={Blog} />
            <Route path="/fun/:id" component={ListDetails} />
            <Route path="/fun" component={Fun} />
            <Route path="/create" component={Create} />
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
