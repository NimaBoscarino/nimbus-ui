import React from 'react';

import { storiesOf } from '@storybook/react';

import {
    Button,
    Dropdown,
    Card,
    TextInput,
    OptionsList,
    Radio
} from '../src/lib/index'

storiesOf('Button', module)
.add('with text', () => <Button>Hello Button</Button>)
.add('with action', () => <Button onClick={() => alert('hello!')}>Hello Button</Button>)
.add('success', () => <Button type={'success'}>Hello Button</Button>)
.add('danger', () => <Button type={'danger'}>Hello Button</Button>)
.add('outline primary', () => <Button type={'primary'} outline={true}>Hello Button</Button>)
.add('outline success', () => <Button type={'success'} outline={true}>Hello Button</Button>)
.add('outline danger', () => <Button type={'danger'} outline={true}>Hello Button</Button>)

storiesOf('OptionsList', module)
.add('List of options', () => {
    return (
        <OptionsList
            options={[
                'One',
                'Two',
                'Three'
            ]}
        />
    )
})

storiesOf('Dropdown', module)
.add('Reveal some options', () => <Dropdown text={'Reveal options'} options={[
    'One', 'Two', 'Three'
]}/>)

storiesOf('Card', module)
.add('Plain Card', () => <Card>Hello World</Card>)
.add('Hover Card', () => {
    return <Card hover={true}>Hello World</Card>
})
.add('Hover Card list', () => {
    return (
        <div>
            <Card hover={true}>Hello World</Card>
            <Card hover={true}>Hello World</Card>
            <Card hover={true}>Hello World</Card>
            <Card hover={true}>Hello World</Card>
            <Card hover={true}>Hello World</Card>
            <Card hover={true}>Hello World</Card>
        </div>
    )
})
.add('Card with buttons', () => {
    return (
        <Card>
            <Button type={'success'}>Hello Button</Button>
            <Button type={'danger'}>Hello Button</Button>
        </Card>
    )
})

storiesOf('Text Input', module)
.add('Plain text input', () => <TextInput />)
.add('Clearable input', () => <TextInput clearable={true}/>)
.add('With character count', () => <TextInput characterCount={true}/>)
.add('With character count and clearable', () => <TextInput clearable={true} characterCount={true}/>)

storiesOf('Radio Buttons', module)
.add('RadioButtons', () => {
    return (
        <Radio.List name={"city"}>
            <Radio.Option>Vancouver</Radio.Option>
            <Radio.Option>Toronto</Radio.Option>
            <Radio.Option>Milano</Radio.Option>
        </Radio.List>
    )
})
.add('Multiple RadioButtons', () => {
    return (
        <>
        <Radio.List name={"Rapper"}>
            <Radio.Option>Kanye</Radio.Option>
            <Radio.Option>Drake</Radio.Option>
            <Radio.Option>Biggie</Radio.Option>
        </Radio.List>
        <Radio.List name={"city"}>
            <Radio.Option>Vancouver</Radio.Option>
            <Radio.Option>Toronto</Radio.Option>
            <Radio.Option>Milano</Radio.Option>
        </Radio.List>
        </>
    )
})
.add('Handle selected option', () => {
    return (
        <Radio.List
            name={"Rapper"}
            onSelect={val => console.log(`val: ${val}`)}
        >
            <Radio.Option>Kanye</Radio.Option>
            <Radio.Option>Drake</Radio.Option>
            <Radio.Option>Biggie</Radio.Option>
        </Radio.List>
    )
})

