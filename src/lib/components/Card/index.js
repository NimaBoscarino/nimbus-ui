import React, { useState} from 'react';
import {colors, borderRadius, shadows} from '../../styles'
import styled from 'styled-components';

const WrappedCard = styled.div`
  border: solid 2px ${colors.white};
  border-radius: ${borderRadius};
  background: ${colors.primary};
  padding: 1em;
  margin: 1em;
  box-shadow: ${shadows.normal};
  transition: box-shadow 0.5s;

  ${({ hover }) => {
    if (hover) return (`
    &:hover {
      box-shadow: ${shadows.high}
    }
    `)
  }}
  
`

const Card = ({children, hover}) => {
  return (
    <WrappedCard hover={hover}>
      {children}
    </WrappedCard>
  )
};

export default Card;
