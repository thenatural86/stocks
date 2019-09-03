import React, { Component } from "react"
import Stock from "../components/Stock"

class PortfolioContainer extends Component {
  render() {
    console.log(this.props.portfolio)
    let stock = this.props.portfolio.map(stockObj => {
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
        <h2>My Portfolio</h2>
        {stock}
      </div>
    )
  }
}

export default PortfolioContainer
