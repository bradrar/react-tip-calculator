import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      bill: 0,
      value: 0.3,
      people: 0,
      total : 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleService = this.handleService.bind(this);
    this.handlePeople = this.handlePeople.bind(this);
    this.calculate = this.calculate.bind(this);
    
  }

  handleChange(event) {
    this.setState({bill: event.target.value});
  }

  handleService(event) {
    this.setState({value: event.target.value});
  }

  handlePeople(e){
    this.setState({
      people : e.target.value
    })
  }

calculate(e){
  e.preventDefault();

  this.setState({
    total: ((this.state.bill * this.state.value ) / this.state.people).toFixed(2)
  })
}

  render() {
    return (
      <div className="container">
        <div className="calculate-tip">
        <h2 className="tip"> Tip Calculator</h2>
          <form  onSubmit={this.calculate}> 
            <Bill bill={this.handleChange}/>
            <Service value={this.state.value}  service={this.handleService}/>
            <People people={this.handlePeople} />
            <button type="submit">
            CALCULATE!
          </button>
          </form>
          
          <p>The tip is ${this.state.total === "NaN" ? "0": this.state.total}</p> 
      </div>
      </div>

    );
  }
}


class Bill extends Component {

  render() {
    return (
        <div>
          <p>How much was your bill? </p>
          <span>$ </span><input placeholder="Bill Amount"  onChange={this.props.bill}/>
        </div>
    );
  }
}


class Service extends Component {

  render() {
    return (
      <div>
        <p> How was your service?  </p>
          <select value={this.props.value} onChange={this.props.service}>
            <option value="0.3">30% - Outstanding </option>
            <option value="0.2">20% - Good </option>
            <option value=".15">15% - It was OK</option>
            <option value=".1">10% - Bad </option>
            <option value=".05">5% Terrible </option>
          </select>
      </div>
    );
  }
}

class People extends Component {

  render(){
    return (
       <div>
        <p>How many people are sharing the bill?</p>
        <input type="text" placeholder="Number of People" onChange={this.props.people}/> <span> People </span>
       </div> 
    );
  }
}


export default App;
