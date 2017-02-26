import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReactTestUtils from 'react-addons-test-utils'

it('contains a h1 tag', () => {
  const app = ReactTestUtils.renderIntoDocument(<App />) 
  console.log('hello',ReactTestUtils.findRenderedDOMComponentWithTag(
  app,
  'h1')
) 
});
