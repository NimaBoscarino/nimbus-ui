import React from 'react';
import ReactDOM from 'react-dom';
import OptionsList from './index.js';
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

it('OptionsList renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OptionsList options={[]}/>, div);
});

