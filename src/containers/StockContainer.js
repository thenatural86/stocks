import React, { Component } from "react"
import Stock from "../components/Stock"

class StockContainer extends Component {
  render() {
    let stock = this.props.stocks.map(stockObj => {
      return (
        <Stock
          key={stockObj.id}
          stock={stockObj}
          clickHandler={this.props.clickHandler}
        />
      )
    })
    return (
      <div>
        <h2>Stocks</h2>
        {stock}
      </div>
    )
  }
}

export default StockContainer
