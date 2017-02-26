import React from 'react'

export default class Checkout extends React.Component {

  render() {
    return (
      <div>
        <h3>Payment details</h3>
        <form>
          <select value = 'Choose a Bank'>
            <option value='HDFC'>HDFC</option>
            <option value='SBI'>SBI</option>
            <option value='PNB'>PNB</option>
          </select><br />
          <input type='number' placeholder='Enter Card Number' /><br />
          <input type='number' maxLength='3' minLength='3' placeholder='Enter CVV' /><br /><br />
          <input type='submit' value='Pay' />
        </form>
      </div>
    )
  }
}