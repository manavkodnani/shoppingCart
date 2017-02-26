import React from 'react'
import Product from './Product.jsx'

export default class ProductList extends React.Component {
  onFilter (e) {
    this.props.filterList(e.target.value)
  }

  render () {
    const productComponents = this.props.products.map(product =>
      <Product
        key={product.name}
        name={product.name}
        price={product.price}
        updateView={this.props.updateView}
        deleteFromCart = {this.props.deleteFromCart}
        src={product.src}
        cart={this.props.cart}
      />
    )
    return (
      <div className="book-list">
        <div className="search-bar">
          <input type="text" placeholder="Search" id = 'search' onChange={this.onFilter.bind(this)} />
        </div>
        <div>
          {productComponents}
        </div>
      </div>
    )
  }
}