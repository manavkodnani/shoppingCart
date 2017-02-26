import React from 'react'
import CartItem from './CartItem.jsx'

export default class ProductView extends React.Component {
  render() {
    let total = 0, items
    if (this.props.CartProduct.length === 0) {
      return (
        <div className="book-view"></div>
      )
    }
    else {
      if (this.props.CartProduct.length === 1) {
        items = (
          <label>{this.props.CartProduct.length} item</label>
        )
      }
      else {
        items = (
          <label>{this.props.CartProduct.length} items</label>
        )
      }
      return (
        <div className="book-view">
          <p>Cart</p>
          {
            this.props.CartProduct.map(product => {
              let productComponents = (<CartItem
                key={product.name}
                name={product.name}
                src={product.src}
                price={product.price}
              />)
              total += product.price
              return productComponents
            })}
            {items}
          <br />
          Total Price: Rs.{total}
          <br />
          <button>Proceed to checkout</button>
        </div>
      )
    }
  }
}

ProductView.defaultProps = { product: { name: '', price: 0, src: '' } }
