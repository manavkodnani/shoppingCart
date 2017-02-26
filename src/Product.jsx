import React from 'react'

export default class Product extends React.Component {
  update() {
    if (document.getElementById(this.props.name).innerHTML === 'Remove') {
      this.props.deleteFromCart({ name: this.props.name, price: this.props.price, src: this.props.src })
      document.getElementById(this.props.name).innerHTML = 'Add To Cart'
    }
    else {
      this.props.updateView({ name: this.props.name, price: this.props.price, src: this.props.src })
      document.getElementById(this.props.name).innerHTML = 'Remove'
    }
  }
  render() {
    return (
      <div className="book-preview">
        <div className="book-preview-img">
          <img src={this.props.src} />
        </div>
        <div className="book-preview-details">
          <a>{this.props.name}</a>
          <p>Price: {this.props.price}</p>
          <button id={this.props.name} onClick={this.update.bind(this)}>Add To Cart</button>
        </div>
      </div>
    )
  }
}