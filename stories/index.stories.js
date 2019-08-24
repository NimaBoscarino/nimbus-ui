import React from 'react';

import { storiesOf } from '@storybook/react';

import { Button, Dropdown } from '../src/lib/index'

storiesOf('Button', module)
.add('with text', () => <Button>Hello Button</Button>)
.add('with action', () => <Button onClick={() => alert('hello!')}>Hello Button</Button>)
.add('success', () => <Button type={'success'}>Hello Button</Button>)
.add('danger', () => <Button type={'danger'}>Hello Button</Button>)
.add('outline primary', () => <Button type={'primary'} outline={true}>Hello Button</Button>)
.add('outline success', () => <Button type={'success'} outline={true}>Hello Button</Button>)
.add('outline danger', () => <Button type={'danger'} outline={true}>Hello Button</Button>)


storiesOf('Dropdown', module)
.add('Reveal some options', () => <Dropdown text={'Reveal options'} />)
