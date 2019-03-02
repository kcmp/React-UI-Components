import React from 'react';
import './Button.css';

const NumberButton = props => <button className={`btn baby-btn ${props.extraStyle}`}>{props.name}</button>


 NumberButton.defaultProps = {
    name: '0'
}

 export default NumberButton;
