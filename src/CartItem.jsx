import React from 'react'

export default class Product extends React.Component {

  render() {
    return (
      <div className="book-preview">
        <div className="book-preview-img">
          {/*<img src={this.props.src} />*/}
        </div>
        <div className="book-preview-details">
          <li>{this.props.name} Rs.{this.props.price}</li>
        </div>
      </div>
    )
  }
}