import React, { Component } from 'react';
import './routed_interface.css';
import Button from './button';
import Header from './header';
class Routed_Interface extends Component {
    constructor() {
        super();
        this.state = {
          number: ""
        }
        this.getValue=this.getValue.bind(this);
      }
    render() { 
        return ( 
            <div>
            <div className="App-flex">
                <Header heading="Please verify your pin"/>
                <input type="text" className="input-field2" defaultValue={this.state.number}></input>
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
                <Button number= "clear" />
            </div>
            <button className="proceed-button">Verify</button>
            </div> 
         );
    }
    getValue(e){
        var value = e.target.value;
        var oldNum = this.state.number;
        var newNum = oldNum + "" + value;
        this.setState({ number: newNum});
    }
}
 
export default Routed_Interface;