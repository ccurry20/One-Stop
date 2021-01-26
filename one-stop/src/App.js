import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Search from "./components/pages/Search";
import Contact from "./components/pages/Contact";
import Book from "./components/pages/Book";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/contact" component={Contact} />
          <Route path="/book" component={Book} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
