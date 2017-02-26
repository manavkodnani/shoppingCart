import React from 'react'
import {Link, IndexLink} from 'react-router'

export default class Checkout extends React.Component {

  render() {
    return (
      <div>
        <h3>Delivery details</h3>
        <form>
          <textarea placeholder='Enter delivery address'></textarea><br />
          <input type='text' placeholder='Enter Coupon Code' /><br /><br />
          <Link to='/Payment'>Continue to Payment</Link>
        </form>
      </div>
    )
  }
}