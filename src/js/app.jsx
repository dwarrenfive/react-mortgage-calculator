import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      balance: 0,
      rate: 0
    };
    this.calculate = this.calculate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  calculate(balance, rate, term) {
    let payments = (priciple * num) / den;
    let priciple;
    let rate;
    let num;
    let den;
  }

  handleChange(e) {
    this.setState({
      balance: e.target.balance,
      rate: e.target.rate
    });
  }

  render() {
    return (
      <div className="container">
        <h3>Mortgage Calculator</h3>
        <div>
          <h6>Loan Balance</h6>
          <input
            name="balance"
            id="balance"
            value={this.state.balance}
            type="number"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <h6>Interest Rate (%)</h6>
          <input
            name="rate"
            value={this.state.rate}
            type="number"
            step="0.01"
            onChange={this.handleChange}
          />
        </div>
        <h6>Loan Term (years)</h6>
        <select name="term" id="term">
          <option value="15">15</option>
          <option value="30">30</option>
        </select>
        <br />
        <button name="submit" onClick={this.calculate}>
          Calculate
        </button>
        <div name="output" id="output"></div>
      </div>
    );
  }
}

/* import React from 'react';
export default class App extends React.Component {
 // your Javascript goes here
 constructor(props) {
   super(props);
   this.state = {
     balance: 0,
     rate: 0,
     term: 15,
     submit: 0,
   }
   this.handleChange = this.handleChange.bind(this);
   this.calculate = this.calculate.bind(this);
 }
 calculate(s) {
   let balance = Number(this.state.balance);
   let rate = Number(this.state.rate) / 100 / 12;
   let term = Number(this.state.term) * 12;
   let num = rate * Math.pow(1 + rate, term);
   let den = Math.pow(1 + rate, term) - 1;
   let monthlyPayment = balance * num / den;
   this.setState({ [s.target.name]: monthlyPayment.toFixed(2) })
 }
 handleChange(s) {
   this.setState({ [s.target.name]: s.target.value });
 }
 render() {
   return (
     <div className='pic responsive-img yellow-text'>
       <div className='container'>
         <div className=''>
           <center><h3>Mortgage Calculator</h3></center>
         </div>
         <br></br>
<h2>
         <div className="card black-text">
           <div className="col-xs-12 col-md-4"></div>
           <input type="number" name="balance"
             value={this.state.balance} onChange={this.handleChange} />
       </div>Balance Due:
         <br></br>
         <div className="card black-text">
           <div className="col-xs-12 col-md-4"></div>
           <input type="number" name="rate" step="0.01"
             value={this.state.rate} onChange={this.handleChange} />
       </div>Interest Rate:
       </h2>
       </div>
       <br></br>
       <h4>
         <div className="card">
           <center><select name="term" className='browser-default brown-text' id="Term" value={this.state.term} onChange={this.handleChange}>
             <option value='15'>15</option>
             <option value='30'>30</option>
           </select>
           <label></label>Term in Years
           </center>
         </div>
       </h4>
       <br></br>
       <center><button name='submit' className="hoverable brown-text" onClick={this.calculate}>
         Calculate
         </button></center>
       <br></br>
       <br></br>
       <div className="white-text">
         <center><h1><div id='output' name='output'> ${this.state.submit} is your payment. </div></h1></center>
       </div>
     </div>
   );
 }
} */
