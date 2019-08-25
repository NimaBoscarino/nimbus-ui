import React from 'react';
import ReactDOM from 'react-dom';
import Radio from './index.js';
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

it('RadioButtons renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Radio.List name={"test list"}>
      <Radio.Option>Hello</Radio.Option>
      <Radio.Option>World</Radio.Option>
      <Radio.Option>What up!</Radio.Option>
    </Radio.List>
  , div);
});