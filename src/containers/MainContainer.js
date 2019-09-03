import React, { Component } from "react"
import StockContainer from "./StockContainer"
import PortfolioContainer from "./PortfolioContainer"
import SearchBar from "../components/SearchBar"

class MainContainer extends Component {
  state = { stocks: [], portfolio: [] }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
      .then(resp => resp.json())
      .then(data => {
        // console.log(data)
        this.setState({ stocks: data })
        console.log(this.state)
      })
  }
  clickHandler = stockObj => {
    console.log("click")
    if (!this.state.portfolio.includes(stockObj)) {
      let newArray = [...this.state.portfolio, stockObj]
      this.setState({ portfolio: newArray })
    }
  }

  render() {
    return (
      <div>
        <SearchBar stocks={this.state.stocks} />

        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={this.state.stocks}
              clickHandler={this.clickHandler}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              portfolio={this.state.portfolio}
              clickHandler={this.clickHandler}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default MainContainer
