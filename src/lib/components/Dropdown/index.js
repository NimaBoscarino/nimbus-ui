import React, { useState} from 'react';
import {colors, borderRadius} from '../../styles'
import Button from '../Button/index'
import styled from 'styled-components';
import OptionsList from '../OptionsList/index';

const Dropdown = ({text, type, outline, onClick, options}) => {
  const [dropdown, setDropdown] = useState(false)
  
  const handleClick = () => {
    setDropdown(!dropdown)
  }

  return (
    <>
      <Button type={type} outline={outline} onClick={handleClick}>
          {text}
      </Button>
      {
        dropdown && <OptionsList dropdown options={options}/>
      }

    </>
  )
};

export default Dropdown;
