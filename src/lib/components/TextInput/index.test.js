import React from 'react';
import ReactDOM from 'react-dom';
import TextInput from './index.js';
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

it('TextInput renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TextInput />, div);
});


it('TextInput can be filled with text', () => {
  const {getByLabelText} = render(
    <TextInput name="Name" />,
  )

  const input = getByLabelText('Name')
  // query* functions will return the element or null if it cannot be found
  // get* functions will return the element or throw an error if it cannot be found
  expect(input).toHaveValue("")

  fireEvent.change(input, { target: { value: 'Hello world!' } })

  expect(input).toHaveValue("Hello world!")
});

it('Clearable TextInput can be cleared', () => {
  const {getByLabelText, getByText } = render(
    <TextInput name="Name" clearable={true}/>,
  )

  const input = getByLabelText('Name')
  // query* functions will return the element or null if it cannot be found
  // get* functions will return the element or throw an error if it cannot be found
  expect(input).toHaveValue("")

  fireEvent.change(input, { target: { value: 'Hello world!' } })

  expect(input).toHaveValue("Hello world!")

  fireEvent.click(getByText(/Clear/i))

  expect(input).toHaveValue("")
});

