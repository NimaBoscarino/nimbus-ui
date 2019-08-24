import React, { useState } from 'react';
import {colors, borderRadius} from '../../styles'
import styled from 'styled-components';
import Button from '../Button/index'

const InputWrapper = styled.input`
  border: none;
  border: solid 2px ${colors.primary};
  border-radius: ${borderRadius};
  padding: 0.5em;
  font-size: 15px;
  
`
const TextInput = ({ onChange, clearable, name }) => {
  const [currentValue, setCurrentValue] = useState("")
  const handleChange = (e) => {
    setCurrentValue(e.target.value)
    if (onChange) onChange(e.target.value)
  }

  return (
    <>
    <label>{name}</label>
    <InputWrapper aria-label={name} onChange={handleChange} value={currentValue}/>
    {
      clearable && <Button onClick={() => {
        setCurrentValue("")
      }}>Clear</Button>
    }
    </>
  )
}

export default TextInput;
