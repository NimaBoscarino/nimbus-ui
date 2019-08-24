import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './index.js';
import {render, fireEvent} from '@testing-library/react'

it('Dropdown renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dropdown />, div);
});

it('Display dropdown content after first click', () => {
  const {queryByText, getByLabelText, getByText} = render(
    <Dropdown text={'Click to reveal'} options={[
      'One', 'Two', 'Three'
    ]}/>,
  )

  // query* functions will return the element or null if it cannot be found
  // get* functions will return the element or throw an error if it cannot be found
  expect(queryByText('One')).toBeNull()

  // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
  fireEvent.click(getByText(/Click to reveal/i))

  // .toBeInTheDocument() is an assertion that comes from jest-dom
  // otherwise you could use .toBeDefined()
  expect(getByText('One')).toBeTruthy()
})