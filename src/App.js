import React, { Component } from "react";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { dailyPrices } from "./data/prices-array";
import { calculateMaxProfit } from "./data/calculate-profit";
import Result from "./components/Result";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxProfit: {},
      calculated: false
    };
  }

  onClickCalculate = () => {
    const result = calculateMaxProfit(dailyPrices);
    this.setState({
      maxProfit: result,
      calculated: true
    });
  };
  render() {
    const { maxProfit, calculated } = this.state;
    return (
      <div>
        <Header />
        <div
          className="container"
          style={{
            textAlign: `center`,
            marginTop: `5rem`
          }}
        >
          <Button onClick={this.onClickCalculate} />
          {calculated && <Result result={maxProfit} />}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
