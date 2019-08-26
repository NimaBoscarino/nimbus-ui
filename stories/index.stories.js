import React from 'react';

import { storiesOf } from '@storybook/react';

import {
    Button,
    Dropdown,
    Card,
    TextInput,
    OptionsList,
    Radio,
    Form,
    Modal
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

storiesOf('Forms', module)
.add('Form with text input', () => {
    return (
        <Form.Body onSubmit={(formVals) => {
            console.log('formVals:', formVals)
        }}>
            <Form.TextInput name="Address"/>
        </Form.Body>
    )
})
.add('Form with clearable text input', () => {
    return (
        <Form.Body>
            <Form.TextInput name="Dog Breed" clearable={true}/>
        </Form.Body>
    )
})
.add('Form with multiple text inputs', () => {
    return (
        <Form.Body onSubmit={(formVals) => {
            console.log('formVals:', formVals)
        }}>
        <Form.TextInput name="Address"/>
            <Form.TextInput name="Dog Breed" clearable={true}/>
        </Form.Body>
    )
})
.add('Listen for values changing', () => {
    return (
        <Form.Body onValueChange={(formVals) => {
            console.log('formVals:', formVals)
        }}>
            <Form.TextInput name="Address"/>
            <Form.TextInput name="Dog Breed" clearable={true}/>
        </Form.Body>
    )
})
.add('Form without submit button', () => {
    return (
        <Form.Body
            onValueChange={(formVals) => {
                console.log('formVals:', formVals)
            }}
            submit={false}
        >
            <Form.TextInput name="Address"/>
            <Form.TextInput name="Dog Breed" clearable={true}/>
        </Form.Body>
    )
})
.add('Complex Form with Text Input and Radio Button lists', () => {
    return (
        <Form.Body onSubmit={(formVals) => {
            console.log('formVals:', formVals)
        }}>
            <Form.TextInput name="Address"/>
            <Form.TextInput name="Dog Breed" clearable={true}/>
            <Form.Radio name={"Rapper"}>
                <Radio.Option>Kanye</Radio.Option>
                <Radio.Option>Drake</Radio.Option>
                <Radio.Option>Biggie</Radio.Option>
            </Form.Radio>

            <Form.Radio name={"Dog"}>
                <Radio.Option>Samoyed</Radio.Option>
                <Radio.Option>Beagle</Radio.Option>
                <Radio.Option>Schnauzer</Radio.Option>
            </Form.Radio>

        </Form.Body>
    )
})

storiesOf('Modal', module)
.add('Trigger single mini-modal with button', () => {
    return (
    <Modal.Container>
        <div style={{
            height: '150px',
            margin: '5px'
        }}>
            <Modal.Trigger>
                <Button type="success">Show Modal</Button>
            </Modal.Trigger>
        </div>


        
        <Modal.Body>
            <p style={{ color: 'white' }}>Hello</p>
        </Modal.Body>
    </Modal.Container>
    )
})
.add('Many mini-modals for different components', () => {
    return (
        <>
        <Modal.Container>
            <div style={{
                height: '150px',
                margin: '5px'
            }}>
                <Modal.Trigger>
                    <Button type="success">Show Modal</Button>
                </Modal.Trigger>
            </div>
            <Modal.Body>
                <p style={{ color: 'white' }}>Hello</p>
            </Modal.Body>
        </Modal.Container>        
        <Modal.Container>
            <div style={{
                height: '150px',
                margin: '5px'
            }}>
                <Modal.Trigger>
                    <Button type="success">Show Modal</Button>
                </Modal.Trigger>
            </div>
            <Modal.Body>
                <p style={{ color: 'white' }}>Hello</p>
            </Modal.Body>
        </Modal.Container>
        <Modal.Container>
            <div style={{
                height: '150px',
                margin: '5px'
            }}>
                <Modal.Trigger>
                    <Button type="success">Show Modal</Button>
                </Modal.Trigger>
            </div>
            <Modal.Body>
                <p style={{ color: 'white' }}>Hello</p>
            </Modal.Body>
        </Modal.Container>
        </>
    )
})
.add('Different mini-modals within the same component', () => {
    return (
        <Modal.Container>
            <div style={{
                height: '150px',
                margin: '5px'
            }}>
                <Modal.Trigger modal={"1"}>
                    <Button type="success">Show Modal 1</Button>
                </Modal.Trigger>
                <Modal.Trigger modal={"2"}>
                    <Button type="success">Show Modal 2</Button>
                </Modal.Trigger>
            </div>

            <Modal.Body modal={"1"}>
                <p style={{ color: 'white' }}>Hello 1</p>
            </Modal.Body>
            <Modal.Body modal={"2"}>
                <p style={{ color: 'red' }}>Hello 2</p>
            </Modal.Body>
        </Modal.Container>
    )
})
.add('Form within Modal body', () => {
    return (
        <Modal.Container>
            <div style={{
                height: '500px',
                margin: '5px'
            }}>
                <Modal.Trigger>
                    <Button type="success">Show Modal 1</Button>
                </Modal.Trigger>
            </div>

            <Modal.Body>
                <div style={{
                    padding: '25px'
                }}>
                    <Form.Body onSubmit={(formVals) => {
                        console.log('formVals:', formVals)
                    }}>
                        <Form.TextInput name="Address"/>
                        <Form.TextInput name="Dog Breed" clearable={true}/>
                        <Form.Radio name={"Rapper"}>
                            <Radio.Option>Kanye</Radio.Option>
                            <Radio.Option>Drake</Radio.Option>
                            <Radio.Option>Biggie</Radio.Option>
                        </Form.Radio>

                        <Form.Radio name={"Dog"}>
                            <Radio.Option>Samoyed</Radio.Option>
                            <Radio.Option>Beagle</Radio.Option>
                            <Radio.Option>Schnauzer</Radio.Option>
                        </Form.Radio>

                    </Form.Body>
                </div>
            </Modal.Body>
        </Modal.Container>
    )
})