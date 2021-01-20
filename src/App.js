import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUs from "./components/pages/AboutUs";
import Services from "./components/pages/Services";
import Blog from "./components/pages/Blog";
import Footer from "./components/pages/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/services" component={Services} />
            <Route path="/blog" component={Blog} />
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
