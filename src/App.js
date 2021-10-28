import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./style/Layout/back_drop.css";
import { HomeScreen } from "./components/Home/home_screen";
import { ShopScreen } from "./components/Shop_Nav/shop_screen";
import { ErrorPage } from "./components/Layout/error_page";
import { Footer } from "./components/Layout/footer";
import { Header } from "./components/Layout/header";
import { AuthScreen } from "./components/Authentication/auth_screen";
import { About } from "./components/About_Nav/about_screen";
//context
import AuthContextProvider from "./contexts/auth_context";
import { PopUpContext } from "./contexts/popup_context";
import { ToastContainer } from "react-toastify";
import { SearchBox } from "./components/Layout/search_box";
import Filter from "./components/Shop_Nav/Filter";
import ContactScreen from "./components/Contact/contact_screen";
function App() {
  const { showPopUp, showSearch, showFilter, closePopUp, setShowFilter } =
    useContext(PopUpContext);

  useEffect(() => {
    if (showPopUp || showSearch || showFilter) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showPopUp, showSearch, showFilter]);

  useEffect(() => {
    if (showFilter) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showFilter]);

  return (
    <Router>
      <AuthContextProvider>
        <div>
          {showPopUp || showSearch || showFilter ? (
            <div onClick={closePopUp} className="back-drop"></div>
          ) : null}

          <Header />

          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route
              exact
              path="/shop"
              render={(props) => (
                <ShopScreen
                  {...props}
                  onClickFilter={() => setShowFilter(true)}
                />
              )}
            />
            <Route exact path="/about" component={About} />
            {/* <Route exact path="/detail/:id" component={ErrorPage} /> */}

            <Route exact path="/contact" component={ContactScreen} />
            <Route exact path="*" component={ErrorPage} />
          </Switch>
          {showSearch && <SearchBox />}
          <AuthScreen />
          <Filter />
          <ToastContainer />
          <Footer />
        </div>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
