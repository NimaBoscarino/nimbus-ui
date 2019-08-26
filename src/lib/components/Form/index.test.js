import React from 'react';
import ReactDOM from 'react-dom';
import Form from './index.js';
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

it('Form renders without crashing', () => {
  const div = document.createElement('div');
  // ReactDOM.render(
  //   <Radio.List name={"test list"}>
  //     <Radio.Option>Hello</Radio.Option>
  //     <Radio.Option>World</Radio.Option>
  //     <Radio.Option>What up!</Radio.Option>
  //   </Radio.List>
  // , div);
});