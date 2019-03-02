import React from 'react';
import './Button.css';

const NumberButton = props => <button className={`btn baby-btn ${props.extraStyle}`}>{props.name}</button>


 NumberButton.defaultProps = {
    name: ''
}

// class NumberButton extends React.Component {  
//     constructor() {
//       super(); 
//       this.state = {
//         number: 0
//       }
//     }
  
//      appendNumber = () => {
//       this.setState({number: this.props.name});
//     }
  
//      render() {
//       return (
//         <div onClick={this.appendNumber} className={`btn baby-btn ${this.props.extraStyle}`}>{this.props.name}</div>
//       )
//     }
// }

 export default NumberButton;
