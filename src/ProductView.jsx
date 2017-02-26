import React from 'react'
import CartItem from './CartItem.jsx'
import {Link, IndexLink} from 'react-router'

export default class ProductView extends React.Component {
  render() {
    let path = (this.props.path)
    let total = 0, items
    let checkout = (<Link to='/Checkout'>Proceed to checkout</Link>)
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
          {path === '/' ? checkout : <div></div>}          
        </div>
      )
    }
  }
}

ProductView.defaultProps = { product: { name: '', price: 0, src: '' } }
