import React from 'react'
import { InputWithLabel as Input } from './components/Input'
import { H1, Button, Form, Wrapper } from './components/Misc'
import { round, trunc } from './utils'

const App = props => (
  <Wrapper width='30em'>
    <H1>"Pfand" calculator</H1>
    <Form onSubmit={props.onSubmit}>
      <Input label='Water price' value={props.waterPrice.toString()} onChange={props.onChangeWaterPrice} />
      <Input label='I have: ' value={props.money.toString()} onChange={props.onUpdateMoney} />
      <Button disabled={props.money === 0}>Calculate</Button>
    </Form>
  </Wrapper>
)

export default App
