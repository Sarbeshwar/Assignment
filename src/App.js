import React, {Component} from 'react';
import './App.css';
import Button from './components/button';
import Header from './components/header';
import { Switch,withRouter,BrowserRouter as Router, Route, Link } from "react-router-dom";
import Routed_Interface from './components/routed_interface';

class App extends Component {

  constructor() {
    super();
    this.state = {
      number: ""
    }
    this.getValue=this.getValue.bind(this);
  }
  render() {
    var a=document.getElementsByClassName("input-field").value;
    console.log(a);
    return (
    <Router>
    <div className="App">
      <Header heading="FamPay Welcomes You"/>
      <h3 className="enter-pin">Please enter your pin</h3>
      <input type="text" className="input-field" defaultValue={this.state.number} maxLength="4"></input>
      <div className="App-flex">
    <Button number= {1} getValue={this.getValue}/>
    <Button number= {2} getValue={this.getValue} />
    <Button number= {3} getValue={this.getValue}/>
    <Button number= {4} getValue={this.getValue}/>
    <Button number= {5} getValue={this.getValue}/>
    <Button number= {6} getValue={this.getValue}/>
    <Button number= {7} getValue={this.getValue}/>
    <Button number= {8} getValue={this.getValue}/>
    <Button number= {9} getValue={this.getValue}/>
    <Button number= {0} getValue={this.getValue}/>
    </div>
    <div className="proceed-button"><Link to="verify">Unlock</Link></div>
    <Route exact path="/verify" strict component={Routed_Interface} />
  </div>
  </Router>
  );
  }

  getValue(e){
      var value = e.target.value;
      var oldNum = this.state.number;
      var newNum = oldNum + "" + value;
      this.setState({ number: newNum});
  }
}

export default App;
