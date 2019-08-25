import React, { useState, createContext } from 'react';
import {colors, borderRadius} from '../../styles'
import styled from 'styled-components';


const WrappedList = styled.div`
  margin: 1em;
`

const WrappedLabel = styled.label`
  margin-left: 0.5em;
`

const RadioContext = React.createContext();

export const Option = ({ children }) => {
  return (
    <div>
    <RadioContext.Consumer>
      {
        value => {
          return (
            <>
            <input 
              onChange={
                e => value.onSelect && value.onSelect(e.target.value)
              } 
              type="radio" name={value.name}
              id={children}
              value={children}
            />
            <WrappedLabel htmlFor={children}>
              {children}
            </WrappedLabel>
            </>
          )
        }
      }
    </RadioContext.Consumer>
    </div>
  )
}

const List = ({ children, name, onSelect }) => {
  return (
    <WrappedList>
    <RadioContext.Provider value={{
        name,
        onSelect
      }}>
      {
        children
      }
    </RadioContext.Provider>
    </WrappedList>
  )
}

export default {
  List,
  Option
};
