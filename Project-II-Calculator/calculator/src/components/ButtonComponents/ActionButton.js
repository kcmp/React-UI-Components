import React from 'react';
import './Button.css';

const ActionButton = props => <button className="big-btn btn">{props.name}</button>

 ActionButton.defaultProps = {
    name: 'Hey!'
}

 export default ActionButton;
