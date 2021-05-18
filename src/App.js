import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./Css/ItemListContainer.css";
import { NavBar } from "./components/NavBar";
import Cart from "./components/cart/Cart";
import Home from "./components/Home";
import ItemDetailContainer from "./components/ItemDetailContainer";

export default function App() {
  const category = ["category1", "category2"];
  return (
    <>
      <NavBar categories={category} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/item/:title" exact component={ItemDetailContainer} />
      </Switch>
    </>
  );
}

