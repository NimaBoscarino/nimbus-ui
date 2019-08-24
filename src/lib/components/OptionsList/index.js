import React, { useState } from 'react';
import {colors, borderRadius} from '../../styles'
import styled from 'styled-components';


const WrappedList = styled.div`
  display: flex;
  flex-direction: column;
`

const Option = styled.div`
  border-bottom: 1px solid ${colors.dark};
  padding: 0.5em;
  background: ${colors.primary};
  transition: background 0.5s;

  &:hover {
    background: ${colors.secondary}
  }

  &:last-child {
    border-bottom: none;
    ${({dropdown}) => { 
      if (dropdown) return `border-radius: 0 0 ${borderRadius} ${borderRadius};`
    }}
  }
`

const OptionsList = ({options, dropdown}) => {
  
  return (
    <WrappedList>
      {
        options.map(option => {
          return (
            <Option key={option} dropdown={dropdown}>{option}</Option>
          )
        })
      }
    </WrappedList>
  )
}

export default OptionsList;
