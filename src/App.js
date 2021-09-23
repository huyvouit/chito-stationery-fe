import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { HomeScreen } from "./components/Home/home_screen";
import { ShopScreen } from "./components/Shop_Nav/shop_screen";
import { ErrorPage } from "./components/Layout/error_page";
import { Footer } from "./components/Layout/footer";
import { Header } from "./components/Layout/header";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/shop" component={ShopScreen} />
          <Route exact path="/:sonething" component={ErrorPage} />
          <Route exact path="/:sonething/:sonething" component={ErrorPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
