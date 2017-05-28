// @flow
import React from 'react'

type Props = {
  bottlesForMoney: number,
  cashRemaining: number,
  cashForTare: number,
  total: number
}

const ResultContainer = ({ bottlesForMoney, cashRemaining, cashForTare, total }: Props) => (
  <div>
    <p>Bottles: {bottlesForMoney}</p>
    <p>Cash remaining: {cashRemaining} €</p>
    <p>Cash for tare: {cashForTare} €</p>
    <p>Total: {total} €</p>
  </div>
)

export default ResultContainer
