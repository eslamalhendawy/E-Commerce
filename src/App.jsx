import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useImmerReducer } from "use-immer";
import { ToastContainer } from "react-toastify";

import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";

import Header from "./Components/Header";
import Homepage from "./Components/HomePage";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import ResetPassword from "./Components/ResetPassword";
import ResetCode from "./Components/ResetCode";
import NewPassword from "./Components/NewPassword";
import Collection from "./Components/Collection";
import Lookbook from "./Components/Lookbook";
import OurStory from "./Components/OurStory";
import Contact from "./Components/Contact";
import Sale from "./Components/Sale";
import Product from "./Components/Product";
import Profile from "./Components/Profile";
import SearchResults from "./Components/SearchResults";
import CartPage from "./Components/CartPage";
import Checkout from "./Components/Checkout";

import "./App.css";

function App() {
  const initialState = {
    loggedIn: Boolean(localStorage.getItem("userToken")),
  };

  function myReducer(draft, action) {
    switch (action.type) {
      case "login":
        draft.loggedIn = true;
        break;
      case "logout":
        draft.loggedIn = false;
        break;
      case "addToCart":
        draft.cart = draft.cart.push(action.data);
    }
  }

  const [state, dispatch] = useImmerReducer(myReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" exact element={<Homepage />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/signup" exact element={<Signup />} />
            <Route path="/reset-password" exact element={<ResetPassword />} />
            <Route path="reset-code" exact element={<ResetCode />} />
            <Route path="new-password" exact element={<NewPassword />} />
            <Route path="/collection/:type" exact element={<Collection />} />
            <Route path="/lookbook" exact element={<Lookbook />} />
            <Route path="/our-story" exact element={<OurStory />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/sale" exact element={<Sale />} />
            <Route path="/product/:id" exact element={<Product />} />
            <Route path="/profile/:username" exact element={<Profile />} />
            <Route path="/search/:query" exact element={<SearchResults />} />
            <Route path="/cart" exact element={<CartPage />} />
            <Route path="/checkout" exact element={<Checkout />} />
          </Routes>
          <ToastContainer autoClose={2500} theme="dark" newestOnTop={true} />
        </Router>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
