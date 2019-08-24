import React, { useState} from 'react';
import {colors, borderRadius} from '../../styles'
import Button from '../Button/index'
import styled from 'styled-components';

const Dropdown = ({text, type, outline, onClick}) => {
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
        dropdown && <p>Dropdown content</p>
      }
    </>
  )
};

export default Dropdown;
