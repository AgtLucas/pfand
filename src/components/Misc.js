import styled from 'styled-components'
import { lighten } from 'polished'

export const H1 = styled.h1`
  font-size: 3rem;
`

export const Button = styled.button`
  display: inline-block;
  background-color: #08C;
  color: #FFF;
  font-size: 1.25rem;
  padding: 5px 10px;
  border: 0;
  cursor: pointer;

  &:disabled {
    background-color: ${lighten(0.15, '#08C')};
    cursor: default;
  }
`

export const Form = styled.form`
  display: block;
  margin: 10px 0;
`

export const Wrapper = styled.div`
  width: ${props => props.width};
  max-width: 100%;
  margin: auto;
`
