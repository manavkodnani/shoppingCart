import React from 'react'
import ProductList from './ProductList.jsx'
import ProductView from './ProductView.jsx'
import products from './products.jsx'
import './App.css'

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      Cart: [], filteredProducts: products
    }
  }

  updateView (product) {
    this.state.Cart.push(product)
    this.setState({Cart: this.state.Cart})
  }

  deleteFromCart (product) {
    this.state.Cart = this.state.Cart.filter((item) => {
      if(JSON.stringify(item) !== JSON.stringify(product)) {
        return item
      }
    })
    this.setState({Cart: this.state.Cart})
  }

  getFiltered (query) {
    const filtered = products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()))
    this.setState(
      {
        filteredProducts: filtered
      }
    )
  }

  render () {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Shop Now</h1>
        <div className="books-app">
          <ProductList products={this.state.filteredProducts} updateView={this.updateView.bind(this)} deleteFromCart={this.deleteFromCart.bind(this)} cart={this.state.Cart} filterList={this.getFiltered.bind(this)}/>
          <ProductView CartProduct={this.state.Cart}/>
        </div>
      </div>
    )
  }
}