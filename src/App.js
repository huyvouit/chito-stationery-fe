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
import { SearchScreen } from "./components/Search/search_screen";
import { Checkout } from "./components/Checkout/checkout_screen";
import Filter from "./components/Shop_Nav/Filter";
import { SearchBox } from "./components/Layout/search_box";
import { AfterAuth } from "./components/Authentication/After_auth";
//context
import AuthContextProvider from "./contexts/auth_context";
import FilterContextProvider from "./contexts/filter_context";
import { PopUpContext } from "./contexts/popup_context";
import { ToastContainer } from "react-toastify";
import ContactScreen from "./components/Contact/contact_screen";
import CartContextProvider from "./contexts/cart_context";
import { DetailScreen } from "./components/Detail/detail_screen";
import PrivateRoute from "./Helper/private_route";
import ProductContextProvider from "./contexts/product_context";
import ScrollToTop from "./Helper/scroll_to_top";
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
    window.scrollTo(0, 0);
  }, []);
  return (
    <Router>
      <ScrollToTop />
      <AuthContextProvider>
        <CartContextProvider>
          <ProductContextProvider>
            <div>
              {showPopUp || showSearch || showFilter ? (
                <div onClick={closePopUp} className="back-drop"></div>
              ) : null}

              <FilterContextProvider>
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
                  {/* <Route exact path="/about" component={About} /> */}
                  <Route exact path="/about" component={AboutScreen} />
                  <Route exact path="/about/term-consition" component={Terms} />
                  <Route
                    exact
                    path="/about/privacy-policy"
                    component={Privacy}
                  />
                  <Route exact path="/cart" component={CartScreen} />
                  <Route exact path="/detail/:id" component={DetailScreen} />
                  <Route exact path="/contact" component={ContactScreen} />
                  <Route exact path="/search" component={SearchScreen} />
                  <Route exact path="/checkout" component={Checkout} />
                  <Route
                    exact
                    path="/after-checkout"
                    component={AfterCheckout}
                  />
                  <PrivateRoute
                    exact
                    path="/profile"
                    component={ProfileScreen}
                  />
                  <PrivateRoute
                    exact
                    path="/profile/acc-info"
                    component={AccInfo}
                  />
                  <PrivateRoute
                    exact
                    path="/profile/acc-address"
                    component={AccAddress}
                  />
                  <PrivateRoute
                    exact
                    path="/profile/acc-address/edit-address"
                    component={EditAddress}
                  />
                  <PrivateRoute
                    exact
                    path="/profile/acc-orders"
                    component={MyOrders}
                  />
                  <PrivateRoute
                    exact
                    path="/profile/acc-orders/:id"
                    component={DetailOrder}
                  />
                  <Route exact path="/404" component={ErrorPage} />
                  <Route exact path="*" component={ErrorPage} />
                </Switch>
                {showSearch && <SearchBox />}
                <AuthScreen />
                <Filter />
                <ToastContainer />
                <Footer />
              </FilterContextProvider>
            </div>
          </ProductContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
