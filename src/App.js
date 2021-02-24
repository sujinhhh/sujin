import React, { Component, useEffect } from "react";
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
import NotFound from "./NotFound";
import Header from "./components/shop/Header";
import ShopFront from "./components/shop/ShopFront";
import Checkout from "./components/shop/Checkout";
import CheckoutProduct from "./components/shop/CheckoutProduct";
import Login from "./components/shop/Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase/config";

const RouteWithNavbar = ({ exact, path, component: Component, ...rest }) => {
  return (
    <Route
      exact={exact}
      path={path}
      {...rest}
      render={(routeProps) => {
        return (
          <>
            <Navbar {...routeProps} />
            <Component {...routeProps} />
          </>
        );
      }}
    />
  );
};
const ShopHeader = ({ exact, path, component: Component, ...rest }) => {
  return (
    <Route
      exact={exact}
      path={path}
      {...rest}
      render={(routeProps) => {
        return (
          <>
            <Header {...routeProps} />
            <Component {...routeProps} />
          </>
        );
      }}
    />
  );
};

function App() {
  const [{ user }, dispatch] = useStateValue();
  console.log("useriss", user);

  //  useEffect  - piece of code which runs based on a given condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      // any clean up operations go in here
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <div className="content">
        <Switch>
          <RouteWithNavbar exact path="/" component={Home} />
          <RouteWithNavbar path="/about" component={About} />
          <RouteWithNavbar path="/work" component={Work} />
          <RouteWithNavbar path="/blog" component={Blog} />
          <RouteWithNavbar path="/fun/:id" component={ListDetails} />
          <RouteWithNavbar path="/fun" component={Fun} />
          <RouteWithNavbar path="/create" component={Create} />
          <Route path="/shop" component={ShopFront} />
          <ShopHeader path="/checkout" component={Checkout} />
          <Route path="/login" component={Login} />
          <RouteWithNavbar path="*" component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
