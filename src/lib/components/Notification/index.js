import React, { createContext, useState, useEffect } from 'react';
import {colors, borderRadius} from '../../styles'
import Button from '../Button/index'
import styled from 'styled-components';
import { border } from 'polished';
import { setState } from 'expect/build/jestMatchersObject';
import { useNotifications } from '../../hooks/index'

const NotificationContainerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const WrappedNotification = styled.div`
  width: 100%;
  background: ${colors.primary};
  padding: 2px 15px 2px 15px;
  margin: 2px;
  border-radius: ${borderRadius};
  color: ${colors.white};
  /* max-height: auto; */
  /* height: 50px; */
  /* transition: height 0.5s ease; */
  overflow: hidden;
  transition: 
    max-height 0.2s ease-out,
    background 2s ease-in,
    opacity .25s ease-in-out;

  height: auto;
  max-height: 50px;
  opacity: 1;

  &.spawn {
    background: ${colors.secondary};
    max-height:0;
  }

  &.fade {
    opacity: 0;
  }
`

const NotificationHolder = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  margin: 10px;
  width: 350px;
`

const NotificationContext = createContext();

const Container = ({ children }) => {
  const [notifications, setNotifications] = useState([])

  const addNotification = (notification) => {
    setNotifications([...notifications, {id: Math.random(), text: notification}])
    setTimeout(() => popNotification(), 4000)
  }

  const popNotification = () => {
    setNotifications((prev) => prev.slice(1))
  }

  // useEffect(() => {
  //   // console.log('Notification added!')
  // }, [notifications])

  return (
    <NotificationContext.Provider value={{
      addNotification
    }}>
        <NotificationContainerWrapper>
        { children }

        <NotificationHolder>
          {
            notifications.map((n, i) => <Notification key={n.id} text={n.text} />)
          }
        </NotificationHolder>
        </NotificationContainerWrapper>
    </NotificationContext.Provider>

  )
}

const Trigger = ({ children, message }) => {
  return (
    <NotificationContext.Consumer>
      {
        value => {
          return (
            <span
              onClick={() => { 
                value.addNotification(message)
              }}
            >
            { children }
            </span>
          ) 
      }
    }
    </NotificationContext.Consumer>
  )  
}

const Notification = ({ text }) => {
  const [spawn, setSpawn] = useState("spawn")
  const [fade, setFade] = useState("")

  useEffect(() => {
    setTimeout(() => {
      setSpawn("")
    }, 0)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setFade("fade")
    }, 3000)
  }, [])

  return (
    <WrappedNotification className={[spawn, fade].join(" ")}>
      <p>{ text }</p>
    </WrappedNotification>
  )
}

export default {
  Container,
  Trigger,
  NotificationContext,
  useNotifications
};