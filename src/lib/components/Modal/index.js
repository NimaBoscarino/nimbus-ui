import React, { createContext, useState } from 'react';
import {colors, borderRadius} from '../../styles'
import Button from '../Button/index'
import styled from 'styled-components';

const ModalWrapper = styled.div`
  background: ${colors.dark + '77'};
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  text-align: center;
`

const ModalContainerWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: ${colors.primary};
  position: relative;
`

const ModalContext = createContext();

const Body = ({children, modal}) => {

  return (
    <ModalContext.Consumer>
      {
        value => {
          if (value.modalOpen && ((modal && modal === value.modal) || !modal)) {
            return (
              <ModalWrapper>
                {children}
                <Button onClick={() => {
                  value.setModalOpen(false)
                }}>
                  Dismiss Modal
                </Button>
              </ModalWrapper>
            )
          } else {
            return null
          }
        }
      }
    </ModalContext.Consumer>
  )
};

const Container = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modal, setModal] = useState(null)

  return (
    <ModalContext.Provider value={{
      // name,
      setModalOpen,
      modalOpen,
      setModal,
      modal
    }}>
      <ModalContainerWrapper>
        { children }
      </ModalContainerWrapper>
    </ModalContext.Provider>
  )
}

const Trigger = ({ children, modal }) => {
  return (

    <ModalContext.Consumer>
      {
        value => {
          return (
            <span
              onClick={() => { 
                value.setModalOpen(true)
                if (modal) value.setModal(modal)
              }}
            >
            { children }
            </span>
          ) 
      }
    }
    </ModalContext.Consumer>
  )  
}

export default {
  Container,
  Trigger,
  Body
};