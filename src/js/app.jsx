import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: "",
      rate: "",
      term: 15
    };
    this.calculate = this.calculate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  calculate() {
    let balance = this.state.balance;
    let rate = this.state.rate / 100 / 12;
    let term = this.state.term * 12;
    let num = rate * Math.pow(1 + rate, term);
    let num2 = Math.pow(1 + rate, term) - 1;
    let monthly = (balance * num) / num2;
    document.getElementById("output").innerHTML = `${monthly.toFixed(
      2
    )} is your payment.`;
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <h3>Mortgage Calculator</h3>
        <form>
          <label>
            Loan Balance
            <input
              name="balance"
              id="balance"
              type="number"
              placeholder="i.e., 150000"
              value={this.state.balance}
              onChange={this.handleChange}
            />
          </label>
        </form>
        <form>
          <label>
            Interest Rate (%)
            <input
              name="rate"
              type="number"
              step="0.01"
              placeholder="i.e., 4.5"
              value={this.state.rate}
              onChange={this.handleChange}
            />
          </label>
        </form>
        <form>
          <label>
            Loan Term (years)
            <select
              name="term"
              id="term"
              value={this.state.term}
              onChange={this.handleChange}
            >
              <option value="15">15</option>
              <option value="30">30</option>
            </select>
          </label>
        </form>
        <br />
        <button name="submit" onClick={this.calculate}>
          Calculate
        </button>
        <div name="output" id="output"></div>
      </div>
    );
  }
}
