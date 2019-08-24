import React from 'react';
import {colors, borderRadius} from '../../styles'
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  padding: 0.5em 1em 0.5em 1em;
  background: ${({type, outline}) => {
    if (outline) return 'transparent'
    return colors[type] || colors.primary
  }};
  color: ${({outline, type}) => {
    if (outline) return colors[type] || colors.primary
    return colors.white
  }};
  border: ${({outline, type}) => {
    if (!outline) return 'solid 2px white'
    return `solid 2px ${colors[type] || colors.primary}` 
  }};
  font-size: 15px;
  border-radius: 5px;
  margin: 0.5em;
  cursor: pointer;
`;

const Button = ({children, type, outline, onClick}) => (
  <ButtonWrapper
    type={type}
    outline={outline}
    onClick={onClick}
  >
      {children}
  </ButtonWrapper>
);

export default Button;