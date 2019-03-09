import React from 'react';
import './App.css';
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

// const App = () => {
//   return (
//     <div className="container">
//       <div className="display">
//         <CalculatorDisplay />
//       </div>

//       <div className="rowOne">
//         <ActionButton name='clear'/>
//         <NumberButton name='&#247;' extraStyle="redBtn"/>
//       </div>
//       <div className="rowTwo">
//         <NumberButton name='7'/>
//         <NumberButton name='8'/>
//         <NumberButton name='9'/>
//         <NumberButton name='x' extraStyle="redBtn"/>
//       </div>
//       <div className="rowThree">
//         <NumberButton name='4'/>
//         <NumberButton name='5'/>
//         <NumberButton name='6'/>
//         <NumberButton name='-' extraStyle="redBtn"/>
//       </div>
//       <div className="rowFour">
//         <NumberButton name='1'/>
//         <NumberButton name='2'/>
//         <NumberButton name='3'/>
//         <NumberButton name='+' extraStyle="redBtn"/>  
//       </div>
//       <div className="rowFive">
//         <ActionButton name='0'/>
//         <NumberButton name='=' extraStyle="redBtn"/>
//       </div>
//     </div>
//   );
// };

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: [],
      temp: 0
    }
  }

  updateDisplay = event => {
    this.setState({ total: this.state.total.concat(event.target.value) })
    console.log(event.target.value);
    // console.log(this.props.value)
  }

  render(){
    return (
      <div className="container">
        <div className="display">
          <CalculatorDisplay  text={this.state.total}/>
        </div>
  
        <div className="rowOne">
          <ActionButton onClick='' name='clear'/>
          <NumberButton onClick={this.updateDisplay} name='&#247;' extraStyle="redBtn"/>
        </div>
        <div className="rowTwo">
          <NumberButton onClick={this.updateDisplay} name='7' value='7'/>
          <NumberButton onClick={this.updateDisplay} name='8' value='8'/>
          <NumberButton onClick={this.updateDisplay} name='9' value='9'/>
          <NumberButton name='x' extraStyle="redBtn"/>
        </div>
        <div className="rowThree">
          <NumberButton onClick={this.updateDisplay} name='4' value='4'/>
          <NumberButton onClick={this.updateDisplay} name='5' value='5'/>
          <NumberButton onClick={this.updateDisplay} name='6' value='6'/>
          <NumberButton name='-' extraStyle="redBtn"/>
        </div>
        <div className="rowFour">
          <NumberButton onClick={this.updateDisplay} name='1' value='1'/>
          <NumberButton onClick={this.updateDisplay} name='2' value='2'/>
          <NumberButton onClick={this.updateDisplay} name='3' value='3'/>
          <NumberButton name='+' extraStyle="redBtn"/>  
        </div>
        <div className="rowFive">
          <ActionButton onClick={this.updateDisplay} name='0' value='0'/>
          <NumberButton name='=' extraStyle="redBtn"/>
        </div>
      </div>
    );
  }
}

export default App;
