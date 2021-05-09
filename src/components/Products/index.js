import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { addToCart } from "../../stateManagement/actions";
import ProductCard from "./ProductCard";
import Header from "../Header";
import { products } from "../../utils/mock";

import "./products.css";

const mapStateToProps = (state) => {
  return { cart: state.cart, isLoggedIn: state.isLoggedIn };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
  };
};

const ConnectedProductsPage = ({ cart, isLoggedIn, addToCart }) => {
  const history = useHistory();

  const handleAddToCart = (product, isInCart) => {
    if (isLoggedIn && !isInCart) addToCart(product);
    else if (isLoggedIn && isInCart) history.push("/cart");
    else {
      history.push({ pathname: "/login", state: { loginFirst: true } });
    }
  };

  const checkIfInCart = (id) => {
    let isInCart = false;
    cart.forEach((product) => {
      if (product.id === id) {
        isInCart = true;
      }
    });
    return isInCart;
  };

  return (
    <>
      <Header />
      <h1 className="container">Buy Mini ECom Products</h1>
      <div className="container products-grid">
        {products.map((product, index) => {
          return (
            <ProductCard
              key={index}
              product={product}
              handleAddToCart={handleAddToCart}
              isInCart={checkIfInCart(product.id)}
            />
          );
        })}
      </div>
    </>
  );
};

const ProductsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedProductsPage);

export default ProductsPage;
