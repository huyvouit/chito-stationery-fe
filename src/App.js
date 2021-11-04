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
import { AboutScreen } from "./components/About_Nav/about_screen";
import { Terms } from "./components/About_Nav/about_terms";
import { Privacy } from "./components/About_Nav/about_privacy";
import { CartScreen } from "./components/Cart/cart_screen";
import { AfterCheckout } from "./components/Checkout/after_checkout";
import { ProfileScreen } from "./components/Profile/profile_screen";
import { AccInfo } from "./components/Profile/AccInfo";
import { AccAddress } from "./components/Profile/AccAddress";
import { MyOrders } from "./components/Profile/MyOrders";
import { DetailOrder } from "./components/Profile/DetailOrder";
import { EditAddress } from "./components/Profile/EditAddress";
//context
import AuthContextProvider from "./contexts/auth_context";
import FilterContextProvider from "./contexts/filter_context";
import { PopUpContext } from "./contexts/popup_context";
import { ToastContainer } from "react-toastify";
import { SearchBox } from "./components/Layout/search_box";
import Filter from "./components/Shop_Nav/Filter";
import ContactScreen from "./components/Contact/contact_screen";
import CartContextProvider from "./contexts/cart_context";
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
        <CartContextProvider>
          <div>
            {showPopUp || showSearch || showFilter ? (
              <div onClick={closePopUp} className="back-drop"></div>
            ) : null}

            <Header />
            <FilterContextProvider>
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
                {/* <Route exact path="/about" component={About} /> */}
                <Route exact path="/about" component={AboutScreen} />
                <Route exact path="/about/term-consition" component={Terms} />
                <Route exact path="/about/privacy-policy" component={Privacy} />
                <Route exact path="/cart" component={CartScreen} />
                {/* <Route exact path="/detail/:id" component={ErrorPage} /> */}
                <Route exact path="/contact" component={ContactScreen} />

                <Route exact path="/profile" component={ProfileScreen} />
                <Route exact path="/profile/acc-info" component={AccInfo} />
                <Route exact path="/profile/acc-address" component={AccAddress} />
                <Route exact path="/profile/acc-address/edit-address" component={EditAddress}/>
                <Route exact path="/profile/acc-orders" component={DetailOrder} />
                {/* <Route exact path="/profile/acc-orders/detail-order" component={DetailOrder} /> */}

                <Route exact path="/abc" component={AfterCheckout} />
                <Route exact path="*" component={ErrorPage} />
              </Switch>
              {showSearch && <SearchBox />}
              <AuthScreen />
              <Filter />
            </FilterContextProvider>
            <ToastContainer />
            <Footer />
          </div>
        </CartContextProvider>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
