import React, { Component } from 'react';
import './button.css';
class Button extends Component {
    constructor(props)
  {
    super(props);
    this.state={
      input_field_input:''
    };
    this.getInput=this.getInput.bind(this);
  }

  getInput(e)
  {
      e.preventDefault();
        this.setState(
            {
                input_field_input:e.target.value
            }
        );
  };
    render() { 
        return (  
            <div>
                <button type="button" className="button-for-numpad" onClick={this.props.getValue} id={this.props.number} value={this.props.number}>{this.props.number}</button>
            </div>
        );
    }
}
 
export default Button;