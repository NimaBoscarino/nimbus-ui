import React from 'react';
import ReactDOM from 'react-dom';
import Card from './index.js';
import {render, fireEvent} from '@testing-library/react'

it('Dropdown renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card>Hello world</Card>, div);
});
