import React, { Component } from "react";
import { storeProducts, detailProduct } from "../../data";

const { Provider, Consumer } = React.createContext();

class ProviderComponent extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cartProduct: [],
    openModal: false,
    calculate: {
      totalItem: 0,
      subtotal: 0,
      totalTax: 0,
      total: 0,
    },
  };

  componentDidMount() {
    this.setProducts();
  }

  //set all product in state
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((value) => {
      const product = { ...value };
      tempProducts = [...tempProducts, product];
    });
    this.setState({ products: tempProducts });
  };

  //added a product
  addAProduct = (id) => {
    const tempProduct = [...this.state.products];
    return tempProduct.find((value) => value.id === id);
  };

  // added details
  handleDetail = (id) => {
    const detailProduct = this.addAProduct(id);
    this.setState({ detailProduct });
  };

  //added cart
  addToCart = (id) => {
    const newProduct = this.addAProduct(id);
    newProduct.inCart = true;
    newProduct.count = 1;
    newProduct.total = newProduct.price;
    const cartProduct = [...this.state.cartProduct, newProduct];
    this.setState({ cartProduct, openModal: true }, () => {
      this.totalCal();
    });
  };

  //delete handle
  deleteProduct = (id) => {
    const tempProduct = [...this.state.cartProduct];
    const cartProduct = tempProduct.filter((val) => val.id !== id);
    const newProduct = this.addAProduct(id);
    newProduct.inCart = false;
    newProduct.count = 0;
    newProduct.total = 0;
    this.setState({ cartProduct }, () => {
      this.totalCal();
    });
  };

  //increment product
  increment = (id) => {
    const products = [...this.state.products];
    const index = products.indexOf(this.addAProduct(id));
    products[index].count++;
    products[index].total = products[index].price * products[index].count;
    this.setState([products], () => {
      this.totalCal();
    });
  };

  //decrement product
  decrement = (id) => {
    const products = [...this.state.products];
    const index = products.indexOf(this.addAProduct(id));
    if (products[index].count > 1) {
      products[index].count--;
      products[index].total = products[index].price * products[index].count;
      this.setState([products], () => {
        this.totalCal();
      });
    }
  };

  //total calculation
  totalCal = () => {
    let subtotal = 0;
    let totalItem = 0;
    this.state.cartProduct.map((value) => {
      subtotal += value.total;
      totalItem += value.count;
    });
    const tempTax = subtotal * 0.2;
    const totalTax = parseFloat(tempTax.toFixed(2));
    const total = subtotal + totalTax;
    this.setState({ calculate: { subtotal, totalItem, totalTax, total } });
  };

  //clear cart handle
  clearCart = () => {
    this.setState({ cartProduct: [] }, () => {
      this.setProducts();
    });
  };

  //modal close
  modalClose = () => {
    this.setState({ openModal: false });
  };
  render() {
    return (
      <Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          modalOnClose: this.modalClose,
          deleteProduct: this.deleteProduct,
          increment: this.increment,
          decrement: this.decrement,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { Consumer, ProviderComponent };
