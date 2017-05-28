// @flow
import React, { Component } from 'react'
import { H1, Wrapper } from './components/Misc'
import FormContainer from './containers/FormContainer'
import ResultContainer from './containers/ResultContainer'
import { round, trunc } from './utils'

class App extends Component {
  state = {
    waterPrice: 0.70,
    tarePrice: 0.25,
    money: 0,
    bottlesForMoney: 0,
    cashRemaining: 0,
    cashForTare: 0,
    total: 0
  }

  onChangeWaterPrice = (e: any) => {
    this.setState({ waterPrice: e.currentTarget.value })
  }

  onChangeMoney = (e: any) => {
    this.setState({ money: e.currentTarget.value })
  }

  bottlesForMoney (money: number) {
    return trunc(money / this.state.waterPrice)
  }

  cashRemaining (numberOfBottles: number) {
    let cashRemaining = this.state.money - this.state.money
    return round(cashRemaining)
  }

  moneyForTare (numberOfBottles: number) {
    let moneyForTare = numberOfBottles * this.state.tarePrice
    return round(moneyForTare)
  }

  calculate () {
    let bottles = this.bottlesForMoney(this.state.money)
    let cashRemaining = this.cashRemaining(bottles)
    let cashForTare = this.moneyForTare(bottles)
    let cash = cashRemaining + cashForTare
    let total = round(cash)
    this.setState({
      bottlesForMoney: bottles,
      cashRemaining,
      cashForTare,
      total
    })
  }

  handleSubmit = (e: any) => {
    e.preventDefault()
    this.calculate()
  }

  render () {
    return (
      <Wrapper width='30em'>
        <H1>"Pfand" calculator</H1>
        <FormContainer
          onSubmit={this.handleSubmit}
          waterPrice={this.state.waterPrice}
          onChangeWaterPrice={this.onChangeWaterPrice}
          money={this.state.money}
          onChangeMoney={this.onChangeMoney}
        />
        <ResultContainer
          bottlesForMoney={this.state.bottlesForMoney}
          cashRemaining={this.state.cashRemaining}
          cashForTare={this.state.cashForTare}
          total={this.state.total}
        />
      </Wrapper>
    )
  }
}

export default App
