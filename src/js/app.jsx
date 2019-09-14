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
    if (balance <= 0 && rate <= 0) {
      document.getElementById("output").innerHTML =
        "Please enter a valid inputs";
    } else if (rate <= 0) {
      document.getElementById("output").innerHTML = "Please enter a valid rate";
    } else if (balance <= 0) {
      document.getElementById("output").innerHTML =
        "Please enter a valid balance";
    } else {
      document.getElementById("output").innerHTML = `$${monthly.toFixed(
        2
      )} is your payment.`;
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="container col-4 text-center m-8">
        <div className="card rounded-lg shadow-lg">
          <div className="card-header alert-success">
            <h3>Mortgage Calculator</h3>
          </div>
          <div id="data">
            <form className="m-1">
              <label>
                <h6>Loan Balance</h6>
                <input
                  name="balance"
                  id="balance"
                  type="number"
                  className="form-control"
                  placeholder="i.e., 150000"
                  value={this.state.balance}
                  onChange={this.handleChange}
                />
              </label>
            </form>
            <form className="m-1">
              <label>
                <h6>Interest Rate (%)</h6>
                <input
                  name="rate"
                  type="number"
                  step="0.01"
                  className="form-control"
                  placeholder="i.e., 4.5"
                  value={this.state.rate}
                  onChange={this.handleChange}
                />
              </label>
            </form>
            <div className="m-1">
              <h6>Loan Term (years)</h6>
              <select
                name="term"
                id="term"
                value={this.state.term}
                onChange={this.handleChange}
              >
                <option value="15">15</option>
                <option value="30">30</option>
              </select>
            </div>
          </div>
          <div className="card-footer">
            <button
              className="btn btn-primary btn-block"
              name="submit"
              onClick={this.calculate}
            >
              Calculate
            </button>
            <div name="output" id="output"></div>
          </div>
        </div>
      </div>
    );
  }
}
