import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Booking from "./components/pages/Booking";
import Contact from "./components/pages/Contact";
import Tarif from "./components/pages/Tarif";
import Why from "./components/pages/Why";
import Login from "./components/pages/Login";
import { Provider } from "react-redux";
import user from "./reducers/user";
import booking from "./reducers/booking";
import Navbar from "./components/Navbar/Navbar";
/* import Page404 from "./components/pages/Page404"; */

const reducer = combineReducers({
  user: user.reducer,
  booking: booking.reducer,
});

const store = configureStore({ reducer });

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tarif" element={<Tarif />} />
          <Route path="/why" element={<Why />} />
  {/*         <Route path="/*" element={<Page404 />}/> */}

        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
