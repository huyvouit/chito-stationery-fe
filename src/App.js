import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./style/Layout/back_drop.css";
import { HomeScreen } from "./components/Home/home_screen";
import { ShopScreen } from "./components/Shop_Nav/shop_screen";
import { ErrorPage } from "./components/Layout/error_page";
import { Footer } from "./components/Layout/footer";
import { Header } from "./components/Layout/header";
import { AuthScreen } from "./components/Authentication/auth_screen";
import Filter from "./components/Shop_Nav/Filter";
function App() {
  const [show, setShow] = useState(false);

  const closeModalHandler = () => setShow(false);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [show]);

  const [showFilter, setShowFilter] = useState(false);

  const closeFilter = () => setShowFilter(false);

  useEffect(() => {
    if (showFilter) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showFilter]);

  return (
    <div className="App">
      <Router>
        <div>
          {show ? (
            <div onClick={closeModalHandler} className="back-drop"></div>
          ) : null}

          {showFilter ? (
            <div onClick={closeFilter} className="back-drop"></div>
          ) : null}

          <Header onClickUser={() => setShow(true)} />
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/shop" render={(props) => (<ShopScreen {...props} onClickFilter={() => setShowFilter(true)} />)} />
            <Route exact path="*" component={ErrorPage} />
          </Switch>
          <AuthScreen show={show} close={closeModalHandler} />
          <Filter show={showFilter} close={closeFilter} />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
