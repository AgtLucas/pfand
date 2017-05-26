// @flow
import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
  display: block;
  font-size: 1.5rem;
  margin: 15px 0;
`

const Input = styled.input`
  display: block;
  font-size: 1.25rem;
  width: 100%;
  border: 1px solid #2D2D2D;
  padding: 5px;
`

type Props = {
  label: string,
  value: string,
  onChange: Function
}

export const InputWithLabel = ({ label, value, onChange }: Props) => (
  <Label>
    {label}
    <Input value={value} onChange={onChange} />
  </Label>
)
