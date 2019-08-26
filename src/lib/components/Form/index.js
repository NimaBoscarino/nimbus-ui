import React, { useEffect, createContext, useReducer } from 'react';
import {colors, borderRadius} from '../../styles'
import TextInput from '../TextInput/index'
import Radio from '../Radio/index'
import Button from '../Button/index'
import styled from 'styled-components';

const WrappedForm = styled.form`
`
const FormContex = createContext();

const initialState = {};

function reducer(state, action) {
  return ({
    ...state,
    [action.type]: action.value
  })
}

const Body = ({ children, name, onSubmit, onValueChange, submit=true}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  if (onValueChange) {
    useEffect(() => {
      console.log(state)
    }, [state])  
  }

  return (
    <WrappedForm onSubmit={(e) => {
      e.preventDefault()
      onSubmit && onSubmit(state)
    }}>
      <FormContex.Provider value={{
        name,
        dispatch
      }}>
        {
          children
        }
      </FormContex.Provider>
      {
        submit &&
        <Button type="primary">
        Submit
        </Button>
      }
    </WrappedForm>
  )
}

const FormTextInput = (props) => {
  const { name } = props

  return (
    <FormContex.Consumer>
      {
        value => {
          return (
            <TextInput onChange={
              (newValue) => {
                value.dispatch({type: name, value: newValue})
              }
            }

            {...props}
            />
          )
        }
      }

    </FormContex.Consumer>
  )
}


const FormRadioList = (props) => {
  const { name } = props

  return (
    <FormContex.Consumer>
      {
        value => {
          return (
            <Radio.List name={name} onSelect={
              (newValue) => {
                value.dispatch({type: name, value: newValue})
              }
            }

            {...props}
            />
          )
        }
      }

    </FormContex.Consumer>
  )
}

export default {
  Body,
  TextInput: FormTextInput,
  Radio: FormRadioList 
};
