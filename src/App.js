import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Details from './components/Details';
import Product from './components/Product';
import ProductList from './components/ProductList';
import Default from './components/Default';

class App extends Component {
  render(){
  return (
    <React.Fragament>
      <Navbar></Navbar>
      <ProductList></ProductList>
      <Product></Product>
      <Details></Details>
      <Cart></Cart>
      <Default></Default>
    </React.Fragament>
    );
  }
}

export default App;
