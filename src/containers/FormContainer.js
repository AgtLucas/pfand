// @flow
import React from 'react'
import { InputWithLabel as Input } from '../components/Input'
import { Form, Button } from '../components/Misc'

type Props = {
  onSubmit: Function,
  waterPrice: number,
  onChangeWaterPrice: Function,
  money: number,
  onChangeMoney: Function
}

const FormContainer = ({ onSubmit, waterPrice, onChangeWaterPrice, money, onChangeMoney }: Props) => (
  <Form onSubmit={onSubmit}>
    <Input label='Water price' value={waterPrice.toString()} onChange={onChangeWaterPrice} />
    <Input label='I have: ' value={money.toString()} onChange={onChangeMoney} />
    <Button disabled={money === 0}>Calculate</Button>
  </Form>
)

export default FormContainer
